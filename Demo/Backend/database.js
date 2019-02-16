var exports = module.exports = {};
var sqlite3 = require("sqlite3");
var path = require("path");
var dbPutanja = path.resolve(__dirname, './Olimijada.db');
var dateFormat = require('dateformat');
var crypto = require('crypto');
var mail = require('./mailer');

function otvoriKonekciju()
{
	return new sqlite3.Database(dbPutanja);
}

function zatvoriKonekciju(db)
{
	db.close();
}

// Funkcija za registraciju novog korisnika/admina
exports.registracija = function(admin,korisnik, callback)
{
	var db = otvoriKonekciju();
	var tabela;

	if(admin == 1)
	{
		tabela = "Admin";
	}
	else
	{
		tabela = "Korisnik";
	}
	
	var usernameHash;
	var sql = "SELECT * FROM " + tabela + " WHERE username=? or email=?";
	// Provera da li postoji korisnik/admin sa tim username-om
	db.all(sql,korisnik.username, korisnik.email,function(err,rows)
	{
		if (err) 
		{
			// ako je nastala greska status je -1
			////console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				// ako vec postoji neko sa tim username-om, status je 0
				if (rows[0].usernameHash != null)
				{
					callback(-3); 
					// callback za aktivaciju naloga
				}
				else
				{
					////console.log("ima nesto");
					////console.log(rows[0]);
					
					if (rows[0].username == korisnik.username)
					{
						callback(0);
					}
					else
					{
						callback(-4);
					}
					//callback(0);
				}
				
			}
			else
			{
				var datum = Math.floor(new Date()/1000);
				var sql1;
				if (admin == 1)
				{
					sql1 = "INSERT INTO Admin(username,password,email,datumRegistracije) VALUES(?,?,?,?)";
                }
                else
				{
					usernameHash = crypto.createHmac('sha256',korisnik.username)
										.update('Summanus is the best!')
										.digest('hex');
					// slice za username ako ide preko koda
					sql1 = "INSERT INTO Korisnik(username,password,email,datumRegistracije,banovan,urlSlike,usernameHash) VALUES(?,?,?,?,0,'podrazumevani_avatar.jpg','"+usernameHash+"')";
				}

				//secret predstavlja neenkriptovanu lozinku korisnika
				//hash predstavlja enkriptovanu lozinku
				const secret = korisnik.password;
				const hash = crypto.createHmac('sha256', secret)
	            		       		.update('Summanus is the best!')
									   .digest('hex');
									   
				
				
				// ako nema greske i username nije zauzet, ubacuje se korisnik u bazu
				db.run(sql1,korisnik.username,hash,korisnik.email,datum, function(err)
				{
					//zatvoriKonekciju(db);

					if (err)
					{
						// ako je nastala grska, status je -1
						////console.log(err);
						callback(-1);
					}
					else
					{
						// ako je sve proslo OK, status je 1 (registrovan)
						if (admin == 0)
						{
							callback(1,usernameHash);
						}
						else
						{
							callback(1,this.lastID);
						}
						
					}
				});
				
			}
		}
			
	});
}

// funkcija za proveru username-a i password-a u bazi pri logovanju korisnika/admina
exports.prijava = function(admin,korisnik, callback)
{
	var db = otvoriKonekciju();
	var tabela;

	if (admin == 1) 
	{
		tabela = "Admin";
	}
	else
	{
		tabela = "Korisnik";
	}

	var sql = "SELECT * FROM "+ tabela+" WHERE username=? AND password=?";

	if (admin == 1)
	{
		sql += " AND obrisan=0";
	}

	console.log(sql);

	//secret predstavlja neenkriptovanu lozinku korisnika
	//hash predstavlja enkriptovanu lozinku
	const secret = korisnik.password;
	const hash = crypto.createHmac('sha256', secret)
	                   .update('Summanus is the best!')
    	               .digest('hex');
	////console.log(hash); 

	////console.log(sql, korisnik.username, hash);

	db.all(sql,korisnik.username, hash, function(err,rows)
	{
		
		if (err)
		{
			//zatvoriKonekciju(db);
			// ako he nastala greska, status je -1
			////console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				// ako postoji u bazi osoba sa tim username-om i password-om
				// status je 1
				if (rows[0].banovan >= Date.now() / 1000)
				{
					callback(-2);
					////console.log("banovan");
					//zatvoriKonekciju(db);
				}
				else if (rows[0].usernameHash != null)
				{
					callback(-3);
				}
				else
				{

					
					////console.log("logovan");

					if (rows[0].obrisan == 1)
					{
						var sql1 = "UPDATE "+tabela+" SET obrisan=0 WHERE id=?";
						db.run(sql1, rows[0].id, function()
						{
							//zatvoriKonekciju(db);
							if (err)
							{
								////console.log(err);
								callback(-1);
							}
							else
							{
								callback(1);
							}
						});
					}
					else
					{
						callback(1);
						//zatvoriKonekciju(db);
					}
					
				}
			
			}
			else
			{
				// ako nema osobe u bazi sa tim username-om i password-om
				// status je 0
				callback(0);
				////console.log("nema te decko")
				//zatvoriKonekciju(db);
			}
		}
	});
}

exports.izmenapodataka = function(korisnik, callback)
{
    var db = otvoriKonekciju();
    var tabela;

    if(korisnik.admin == 1)
    {
        tabela = "Admin";
    }
    else
    {
        tabela = "Korisnik";
    }

    var sql = "SELECT id FROM " + tabela + " WHERE username=?";

    // Provera da li postoji korisnik/admin sa tim username-om
    db.all(sql, korisnik.username, function(err,rows)
    {
        if (err)
        {
            // ako je nastala greska status je -1
            ////console.log(err);
            callback(-1);
        }
        else
        {

            //secret predstavlja neenkriptovanu lozinku korisnika
            //hash predstavlja enkriptovanu lozinku
            const secret = korisnik.password;
            const hash = crypto.createHmac('sha256', secret)
                .update('Summanus is the best!')
                .digest('hex');

            var sql1 = "";

			//prazna lozinka
            if(hash == 'a40e9231fed014097fb514f215905e22b3b11a0bd2738047a4f6db7621b19218')
            {
                sql1 = "UPDATE " + tabela + " SET email=?, ime=?, prezime=? WHERE username=?;";

                // ako nema greske i username nije zauzet, azuriraju se podaci korisnika
                db.run(sql1, korisnik.email, korisnik.ime, korisnik.prezime, korisnik.username, function(err)
                {
                    //zatvoriKonekciju(db);

                    if (err)
                    {
                        // ako je nastala grska, status je -1
                        ////console.log(err);
                        callback(-1);
                    }
                    else
                    {
                        // ako je sve proslo OK, status je 1 (podaci su azurirani)
                        callback(1);
                    }
                });
            }
            else
            {
                sql1 = "UPDATE " + tabela + " SET password=?, email=?, ime=?, prezime=? WHERE username=?;";
                ////console.log(sql1);

                // ako nema greske i username nije zauzet, azuriraju se podaci korisnika
                db.run(sql1, hash, korisnik.email, korisnik.ime, korisnik.prezime, korisnik.username, function(err)
                {
                    //zatvoriKonekciju(db);

                    if (err)
                    {
                        // ako je nastala grska, status je -1
                        ////console.log(err);
                        callback(-1);
                    }
                    else
                    {
                        // ako je sve proslo OK, status je 1 (podaci su azurirani)
                        callback(1);
                    }
                });
            }

            ////console.log(sql1);

        }
    });

}


//sviPodaci = 1 => svi podaci (id, username, email, ime, prezime, urlSlike, brojPobeda, brojPoraza, banovan)
// sviPodaci = 0 => id, username, ime, prezime, urlSlike, brojPobeda, brojPoraza
exports.uzmiPodatkeOKorisniku = function(username,sviPodaci,callback)
{
	var db = otvoriKonekciju();
	var sql;

	if (sviPodaci == 1)
	{
		sql = "SELECT id,username,email,ime,prezime,urlSlike,banovan,brojPobeda,brojPoraza FROM Korisnik WHERE username=?";
	}
	else
	{
		sql = "SELECT id,username,ime,prezime,urlSlike,brojPobeda,brojPoraza FROM Korisnik WHERE username=?";
	}
	

	db.all(sql,username,function(err,rows)
	{
		//zatvoriKonekciju(db);
		
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			var korisnik = rows[0];

			callback(korisnik);
		}
		
	});
}


// podeli na dve metode - za dostupne igre i one koje vise nisu dostupne?
// tj. dodaj metodu za nedostupne?
exports.UzmiSveIgre = function(callback)
{
	var db = otvoriKonekciju();
	// kad dodamo alias za rowid, menja se u njega
	var sql = "SELECT * FROM Igra WHERE obrisana=0";
	db.all(sql,function(err,rows)
	{
		//zatvoriKonekciju(db);
		
		if (err)
		{
			////console.log(err);
			callback([]);
		}
		else
		{
			////console.log(rows);
			callback(rows);
		}
	});
}

exports.ObrisiIgruZaId = function(idIgre,callback)
{
	////console.log("jel se poziva?")
	var db = otvoriKonekciju();

	var sql = "UPDATE Igra SET obrisana=1 WHERE id=?";
	db.run(sql,idIgre,function(err)
	{
		////zatvoriKonekciju(db);
		
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.ProveriPostojanjeBotaZaKorisnika = function(idKorisnika,naziv,callback)
{
	////console.log("provera postojanja");
	var sql = "SELECT * FROM Bot WHERE nazivFajla=? AND idKorisnika=? AND obrisan=0";
	var db = otvoriKonekciju();

	db.all(sql,naziv,idKorisnika,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			// nastala je greska
			////console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				// postoji vec 
				callback(0);
				
			}
			else
			{
				// ne postoji bot sa istim nazivom
				callback(1);
			}
		}
	})
}

exports.DajFormuKorisnika = function(usernameKorisnika, callback)
{
	var sql = "";

	sql += "SELECT DISTINCT t.idKorisnika AS idKorisnika1, k.username AS usernameKorisnika1, t2.idKorisnika AS idKorisnika2, ";
		sql += "k2.username AS usernameKorisnika2, m.datumVremePocetka, m.rezultat1, m.rezultat2, ";
		sql += "CASE ";
			sql += "WHEN (k.username = ? AND m.rezultat1 > m.rezultat2) THEN 'p' ";
			sql += "WHEN (k2.username = ? AND m.rezultat2 > m.rezultat1) THEN 'p' ";
			sql += "ELSE 'i' ";
		sql += "END AS 'ucinak' ";
	sql += "FROM Mec m JOIN Timovi t ON m.idTima1 = t.id ";
		sql += "JOIN Timovi t2 ON m.idTIma2 = t2.id ";
		sql += "JOIN Korisnik k ON t.idKorisnika = k.id ";
		sql += "JOIN Korisnik k2 ON t2.idKorisnika = k2.id ";
		sql += "JOIN Turnir tu ON m.idTurnira = tu.id ";
	sql += "WHERE usernameKorisnika1 = ? OR usernameKorisnika2 = ? ";
	sql += "ORDER BY m.datumVremePocetka DESC ";
	sql += "LIMIT 5 ";

	var db = otvoriKonekciju();

	db.all(sql, usernameKorisnika, usernameKorisnika, usernameKorisnika, usernameKorisnika, function(err, rows)
	{
		if(err)
		{
			callback(-1);
		}
		else
		{
			if(rows[4] == null) rows[4] = -1;
			if(rows[3] == null) rows[3] = -1;
			if(rows[2] == null) rows[2] = -1;
			if(rows[1] == null) rows[1] = -1;
			if(rows[0] == null) rows[0] = -1;

			console.log(rows[0], rows[1], rows[2], rows[3], rows[4]);

			callback(rows);
		}
	});

}

// dodaje bota za korisnika
exports.DodajBotaZaKorisnika = function(idKorisnika,bot, callback)
{
	var sql = "INSERT INTO Bot(idKorisnika,nazivFajla,idIgre,datumKreiranja,datumIzmene) VALUES(?,?,?,?,?)";

	var sqlTim = "INSERT INTO Timovi(nazivTima, idKorisnika, idIgre, obrisan, idBota) VALUES (?, ?, ?, ?, ?)";


	var db = otvoriKonekciju();
	var datumKreiranja = Math.floor(new Date()/1000);
	var datumIzmene = Math.floor(new Date()/1000);

	
	
	db.run(sql, idKorisnika,bot.naziv,bot.idIgre,datumKreiranja,datumIzmene, function(err)
	{
		if (err)
		{
            //zatvoriKonekciju(db);
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(this.lastID);
			var poslednjiId = this.lastID;
			var sql2 = "SELECT b.id,b.nazivFajla,b.idKorisnika,i.naziv,b.datumKreiranja,b.datumIzmene FROM Bot b JOIN Igra i ON i.id=b.idIgre WHERE b.rowid=?";
			db.all(sql2,poslednjiId,function(err,rows)
			{
				////zatvoriKonekciju(db);
				if (err)
				{
					////console.log(err);
					callback(-1);
				}
				else
				{
					// kad se doda neki bot, on se postavi kao drugi igrac za sva testiranja za tu igru
					// radi
					//////console.log("POslednji id: "+poslednjiId);
					//var sql3 = "UPDATE Mec SET idBota2=? FROM Mec m JOIN Bot b ON m.idBota1=b.id WHERE idBota2 IS NULL AND b.idIgre=?";
					
					// idBota, idIgre pa idBota
					var sqlIgre = "SELECT id FROM Timovi WHERE idIgre=? AND id<>?";
					var sql3 = "UPDATE Mec SET idTima2=? WHERE "+
					"idTima2 IS NULL AND idTima1 IN (" + sqlIgre +")";

					db.run(sqlTim, bot.naziv, idKorisnika, bot.idIgre, 0, poslednjiId, function(err)							
					{
						if(err)
						{
							////console.log(err);
							////console.log('BOT NIJE DODAT U TIM');
						}
						else
						{

							db.run(sql3,this.lastID,bot.idIgre, poslednjiId,function(err)
							{
								//zatvoriKonekciju(db);
								if (err)
								{
									////console.log(err);
									//////console.log("update pri kreiranju");
									callback(-1);
								}
								else
								{

													
								}
							});

							callback(rows[0]);
						}

					});						
					
				}
			});
		}
	});
	
}

exports.UzmiSveTipoveTurnira = function(callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT id,naziv FROM TipTurnira";
	db.all(sql,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			//////console.log(rows);
			callback(rows);
		}
	});
}

exports.UzmiSveTurnire = function(callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT t.id,t.naziv AS nazivTurnira, t.pocetakPrijava, t.krajPrijava, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv AS nazivIgre, i.id AS idIgre,tt.naziv as nazivTipaTurnira "+
	"FROM Turnir t JOIN Igra i ON t.idIgre=i.id JOIN TipTurnira tt on tt.id=t.idTipaTurnira "+
	"WHERE t.obrisan=0 ORDER BY t.datumVremePocetka DESC";

	db.all(sql, function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			//////console.log("database.js");
			//////console.log(rows);
			////console.log(rows);
			callback(rows);
		}
	});
}

exports.UzmiPoslednjaDvaTurnira = function(callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT t.id,t.naziv AS nazivTurnira, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv AS nazivIgre, i.id AS idIgre, tt.id AS idTipaTurnira, tt.naziv AS nazivTipaTurnira FROM Turnir t JOIN Igra i ON t.idIgre=i.id JOIN TipTurnira tt ON t.idTipaTurnira = tt.id WHERE t.obrisan=0 ORDER BY t.datumVremePocetka DESC LIMIT 2";

	db.all(sql, function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{			
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	});
}

exports.UnesiTurnir = function(turnir, callback){

	var sql1 = "SELECT naziv FROM TipTurnira WHERE id=?";
	var db = otvoriKonekciju();
	////console.log(turnir);
	db.all(sql1,turnir.idTipaTurnira,function(errTip,rowsTip)
	{
		if (errTip)
		{
			//console.log(errTip);
			callback({status: -1});
		}
		else
		{
			var sql;

			if (rowsTip[0].naziv.toUpperCase() == "LIGA")
			{
				sql = "INSERT INTO Turnir(idTipaTurnira,naziv,idIgre,pocetakPrijava, krajPrijava, datumVremePocetka,datumVremeZavrsetka,trenutnoKolo, brDozvoljenihIgraca ,meceviNapravljeni) VALUES(?,?,?,?,?,?,?,NULL,NULL,0)";
			}
			else
			{
				// hardkodovano da kolo bude nulto, a broj dozvoljenih igraca bude 8
				// treba da se promeni
				sql = "INSERT INTO Turnir(idTipaTurnira,naziv,idIgre,pocetakPrijava, krajPrijava, datumVremePocetka,datumVremeZavrsetka,trenutnoKolo,brDozvoljenihIgraca,meceviNapravljeni) VALUES(?,?,?,?,?,?,?,0,8,0)";
			}
			

			db.run(sql,turnir.idTipaTurnira,turnir.naziv,turnir.idIgre,turnir.pocetakPrijava, turnir.krajPrijava,turnir.datumVremePocetka,turnir.datumVremeZavrsetka,function(err)
			{
				//zatvoriKonekciju(db);

				if(err)
				{
					//console.log(err);
					callback({status: -1});
				}
				else
				{
					callback({status: 1, id: this.lastID});
				}
			})
		}
		
	});
	
}

exports.DaLiPostojiTurnir = function(naziv,callback)
{

	var trenutno = Date.now() * 1000;

	var sql = "SELECT * FROM Turnir WHERE naziv=? AND datumVremePocetka<? AND datumVremeZavrsetka>?";
	var db = otvoriKonekciju();

	db.all(sql,naziv,trenutno,trenutno,function(err,rows)
	{
		if(err)
		{
			callback(-1);
		}
		else
		{
			if(rows.length == 0)
			{
				callback(0);
			}
			else
			{
				callback(1);
			}
		}
	})

}

exports.UnesiIgru = function(nazivIgre,pravila,nazivSlike, timska,timskaUloge,pozadina, pozadinaTimovi, callback)
{
	var sql = "INSERT INTO Igra(naziv, nazivSlike, pravila, timska, timskaUloge, pozadina,pozadinaTimovi) VALUES(?, ?, ?, ?, ?,?,?)";
	var db = otvoriKonekciju();

	db.run(sql, nazivIgre, nazivSlike, pravila, timska, timskaUloge,pozadina,pozadinaTimovi,  function(err)
	{
		////console.log(sql);
		//zatvoriKonekciju(db);

		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(this.lastID);
		}
	});
}


exports.DodajTim = function(nazivTima, idKorisnika, nazivSlikeTima, idIgre, opisTima, brojIgraca, callback)
{

	var sqll = "SELECT nazivTima FROM Timovi WHERE nazivTima=?";
	var db = otvoriKonekciju();

	db.all(sqll,nazivTima,function(err,rows)
	{
		if(err)
		{
			callback(-1);
		}
		else
		{
			if(rows.length == 0)
			{
				var sql = "INSERT INTO Timovi(nazivTima, idKorisnika, idIgre, opisTima, brojIgraca, obrisan, nazivSlikeTima) VALUES (?, ?, ?, ?, ?, 0, ?)";
	
				db.run(sql, nazivTima, idKorisnika, idIgre, opisTima, brojIgraca, nazivSlikeTima, function(err)
				{
								
			
					//zatvoriKonekciju(db);
			
					if(err)
					{
						////console.log(err);
						callback(-1);
					}
					else
					{
						callback(1,this.lastID);
					}
					
					
				});
			}
			else
			{
				callback(0);
			}
		}
	})

	
}

exports.UzmiSveTimoveKorisnikaZaIgru = function(idKorisnika, idIgre, timska, callback)
{
	if (timska == 0)
	{
		var sql = "SELECT * FROM Timovi WHERE idIgre=? AND idKorisnika=? AND obrisan=0";
	}
	else
	{
		var sql = "SELECT * FROM Timovi WHERE idIgre=? AND idKorisnika=? AND obrisan=0 AND idBota IS NULL";
	}

	var db = otvoriKonekciju();

	db.all(sql,idIgre,idKorisnika, function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	})
}

exports.UzmiPodatkeOTimu = function(id, callback)
{
	var db = otvoriKonekciju();
	// SELECT t.*, i.nazivSlike, i.naziv FROM Timovi t JOIN Igra i ON t.idIgre = i.id WHERE t.idKorisnika = ? AND t.brojIgraca > 1";
	var sql = "SELECT t.*,i.naziv as naziv,i.nazivSlike FROM Timovi t JOIN Igra i on t.idIgre=i.id WHERE t.id=?";

	db.all(sql,id, function(err,rows)
	{
		if (err)
		{
			////console.log("greska:");
			////console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0]);
			}
			else
			{
				callback(0);
			}
		}
	})
}

exports.ProveriNazivIgre = function (nazivIgre, callback)
{
	// selektujemo sve igre iz baze
	// sa prosledjenim nazivom igre
	var sql = "SELECT id, naziv, pravila FROM Igra WHERE naziv=?"; 
	var db = otvoriKonekciju();

	db.all(sql, nazivIgre, function(err, rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			////console.log(err);
			callback(-1); // nešto nije u redu sa pristupom bazi
		}
		else
		{
			callback(rows); // postoji igra sa unetim nazivom i vraćamo sve takve igre
		}
	});
}

exports.UzmiSveMeceveZaPrikazZaSelTurnir = function (idTurnira, callback)
{
	//var sql = "select distinct m.id, m.trajanje, k.username 'korisnik1', (select username from Korisnik k2 join Timovi b2 on b2.idKorisnika=k2.id where m.idTima2=b2.id) 'korisnik2', m.datumVremePocetka, m.rezultat1, m.rezultat2 from Mec m join Timovi b on b.id=m.idTima1 join Korisnik k on k.id=b.idKorisnika where m.idTurnira=?";
	var db = otvoriKonekciju();
	var sql = "SELECT m.id,m.datumVremePocetka, k1.username as korisnik1, k2.username as korisnik2, m.rezultat1, m.rezultat2 \
	FROM Mec m JOIN Timovi t1 ON t1.id=m.idTima1 JOIN Korisnik k1 on t1.idKorisnika=k1.id \
	JOIN Timovi t2 ON t2.id=m.idTima2 JOIN Korisnik k2 on t2.idKorisnika=k2.id \
	WHERE m.idTurnira=? AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL"

	////console.log("Prikazi sve meceve sa turnir sa ID-jem: " + idTurnira);
	db.all(sql, idTurnira, function(err, rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			console.log(err);
			callback(-1);
		}
		else
		{
			if(rows.length > 0)
			{
				callback(rows);
			}
			else
			{
				callback(-1);
			}
		}
	});
}

exports.ObrisiIgru = function (naziv, callback)
{
	var sql = "UPDATE Igra SET obrisana=1 WHERE naziv=?";
	var db = otvoriKonekciju();

	db.run(sql, naziv, function(err)
	{
		if (err)
		{
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.IzmeniIgru = function (id, naziv, pravila, nazivSlike, pozadina, pozadinaTimovi, callback) // jelena
{
	var sql = "UPDATE Igra SET naziv=?,pravila=?,nazivSlike=?, pozadina=?, pozadinaTimovi=? WHERE id=? ";
	
	/*
	if (nazivSlike != undefined && nazivSlike != null)
	{
		sql += ", nazivSlike=? ";
	}

	if (pozadina != undefined && pozadina != null)
	{
		sql += ", pozadina=? ";
	}

	if (pozadinaTimovi != undefined && pozadinaTimovi != null)
	{
		sql += ", pozadinaTimovi=? "
	}

	sql += "WHERE id=?";
	*/
	var db = otvoriKonekciju();

	db.run(sql, naziv, pravila, nazivSlike, pozadina, pozadinaTimovi, id, function(err)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			////console.log("Greska pri izmeni igre sa ID: " + id + " je: " + err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

// ako nema aktuelnih meceva za tog bota, bot se brise
// u suprotnom se vraca 0
exports.ObrisiBotaZaKorisnika = function(idKorisnika, idBota,callback)
{
	var danasnjiDatum = Math.floor(Date.now()/1000);

	/*
	var sql = "SELECT * FROM Mec m1 JOIN Bot b1 ON m1.idBota1=b1.id WHERE b1.idKorisnika=? AND m1.datumVremePocetka + m1.trajanje > ? AND b1.nazivFajla=?" +
	"UNION "+
	"SELECT * FROM Mec m2 JOIN Bot b2 on m2.idBota2=b2.id WHERE b2.idKorisnika=? AND m2.datumVremePocetka + m2.trajanje > ? AND b2.nazivFajla=?";
	*/

	var sql = "SELECT * FROM PrijaveZaTurnir p JOIN Bot b on b.id=p.idTima JOIN Turnir t on t.id=p.idTurnira "+
	"WHERE b.id=? AND b.idKorisnika=? AND t.datumVremePocetka<=? AND t.datumVremeZavrsetka>?";

	var db = otvoriKonekciju();
	
	db.all(sql,idBota, idKorisnika,danasnjiDatum, danasnjiDatum,function(err,rows)
	{
		if (err)
		{
			////console.log("svi mecevi za bota: ",err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				////console.log("ima meceva");
				callback(0);
			}
			else
			{
				var sql1 = "UPDATE Bot SET obrisan=1 WHERE id=?";
				
				db.run(sql1,idBota, function(err)
				{
					if (err)
					{
						////console.log(err);
						callback(-1);
					}
					else
					{
						//db.run("DELETE FROM Prijave ")

						var sql2 = "UPDATE Timovi SET obrisan=1 WHERE idBota=?";

						db.run(sql2, idBota, function(err)
						{
							if(err)
							{
								////console.log(err);
								callback(-1);
							}
							else
							{
								callback(1);
							}
						});						
					}
				});
			}
		}
	})
	

}

exports.AzurirajSlikuKorisnika = function(username, naziv, callback)
{
	var db = otvoriKonekciju();

	var sql = "UPDATE Korisnik SET urlSlike=? WHERE username=?";
	db.run(sql,naziv,username,function(err)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.UzmiNazivSlikeKorisnika = function(username, callback)
{
    var db = otvoriKonekciju();

	var sql = "SELECT urlSlike FROM Korisnik WHERE username=?";
	db.all(sql,username,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows[0]);
		}
	});
}

// svi aktivni botovi
// dodaj za neaktivne?
exports.UzmiSveBotoveKorisnika = function(idKorisnika, callback)
{
	var db = otvoriKonekciju();
	var sql = "SELECT b.id,b.idIgre,b.nazivFajla,b.idKorisnika,i.naziv, b.datumKreiranja, b.datumIzmene FROM Bot b JOIN Igra i ON i.id=b.idIgre WHERE b.idKorisnika=? AND b.obrisan=0 ORDER BY b.datumIzmene DESC";

	db.all(sql,idKorisnika,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);
			callback(rows);
		}
	});
}

// svi aktivni botovi za igru
exports.UzmiSveBotoveKorisnikaZaIgru = function(idKorisnika,idIgre,callback)
{
	////console.log("uslo u database");
	var db = otvoriKonekciju();
	// ORDER BY b.datumIzmene DESC
	////console.log(idKorisnika);
	////console.log(idIgre);
	var sql = "SELECT b.id,b.nazivFajla,b.idKorisnika,i.naziv, b.datumKreiranja, b.datumIzmene FROM Bot b JOIN Igra i ON i.id=b.idIgre WHERE b.idKorisnika=? AND b.idIgre=? AND b.obrisan = 0";

	db.all(sql,idKorisnika,idIgre,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			//console.log(rows);
			callback(rows);
		}
	});
}


exports.UzmiPodatkeOBotu = function(idBota, callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT id,nazivFajla,idKorisnika,idIgre,datumKreiranja,datumIzmene FROM Bot WHERE id=?";

	db.all(sql,idBota,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0]);
			}
			else
			{
				callback();
			}
		}
	});
}

exports.IzmeniBota = function(idBota,novoIme,callback)
{
	var db = otvoriKonekciju();

	var sql = "UPDATE Bot SET datumIzmene=?, nazivFajla=? WHERE id=?";

	//var datum = new Date().getTime();
	////console.log(datum: datum);
	////console.log("novo ime: (database.js)" + novoIme);
	
	var datum = Math.floor(new Date()/1000);

	db.run(sql,datum,novoIme,idBota,function(err)
	{
	
		if (err)
		{
			//zatvoriKonekciju(db);
			//console.log(err);
			callback(-1);
		}
		else
		{
			db.all("SELECT b.id,b.nazivFajla,b.datumKreiranja,b.datumIzmene,i.naziv as naziv FROM Bot b JOIN Igra i ON b.idIgre=i.id WHERE b.id=?",idBota,function(err,rows)
			{
				//zatvoriKonekciju(db);
				if (err)
				{
					//console.log(err);
					callback(-1);
				}
				else
				{
					callback(rows[0]);
				}
			})
			
		}
	});
}

exports.UzmiSveMailAdrese = function(callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT email FROM Korisnik WHERE obrisan=0";

	db.all(sql, function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	});
}

exports.OtkaziTurnir = function(id, callback)
{
	var sql = "UPDATE Turnir SET obrisan=1 WHERE id=?";
	var db = otvoriKonekciju();

	db.run(sql,id,function(err)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.UzmiNazivIgreITurniraZaTurnir = function(idTurnira, callback)
{
	var sql = "SELECT i.naziv as nazivIgre, t.naziv as nazivTurnira FROM Igra i JOIN Turnir t on i.id=t.idIgre WHERE t.id=?";
	var db = otvoriKonekciju();

	db.all(sql,idTurnira, function(err,rows)
	{
		if (err)
		{
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0]);
			}
			else
			{
				callback(0);
			}
		}
	})
}

exports.UzmiSveMeceveSaTurnira = function(idTurnira, callback)
{
	var sql = "SELECT m.id,m.idTurnira, k1.username as korisnik1, k2.username as korisnik2, datumVremePocetka, trajanje, rezultat1, rezultat2,tokMeca "+
	"FROM Mec m JOIN Timovi t1 ON t1.id=m.idTima1 JOIN Korisnik k1 on k1.id=t1.idKorisnika "+
	"JOIN Timovi t2 ON t2.id=m.idTima2 JOIN Korisnik k2 ON k2.id=t2.idKorisnika "+
	"WHERE idTurnira=? ";
	db = otvoriKonekciju();

	db.all(sql,idTurnira,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	});
}


exports.UzmiSveMeceveKorisnika = function(idKorisnika,callback)
{
	var sqlKorisnik = "SELECT username FROM Korisnik k JOIN Bot b on k.id=b.idKorisnika ";

	var sql = "SELECT DISTINCT m.id,t.naziv as turnir, k1.username as korisnik1, k2.username as korisnik2, k1.urlSlike as avatar1, k2.urlSlike as avatar2, m.datumVremePocetka,m.trajanje, m.rezultat1, m.rezultat2 "+
	"FROM Mec m JOIN Turnir t ON m.idTurnira=t.id "+
	"JOIN Timovi b1 on m.idTima1=b1.id JOIN Timovi b2 on m.idTima2=b2.id JOIN Korisnik k1 on k1.id=b1.idKorisnika " +
	"JOIN Korisnik k2 on k2.id=b2.idKorisnika "+
	"WHERE k1.id=? OR k2.id=? ORDER BY (m.datumVremePocetka + m.trajanje) DESC";
	


	db = otvoriKonekciju();

	db.all(sql,idKorisnika,idKorisnika,function(err,rows)
	{		
		//zatvoriKonekciju(db);
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			//console.log('##############################');
			//console.log('##############################');
			//console.log('##############################');
			////console.log(rows[0].turnir);

			console.log(rows.length + ' RADI');

			callback(rows);
		}
	});
}

exports.DajIgruTurnira = function(idTurnira,callback)
{
	var sql = "SELECT i.id,i.naziv,i.nazivSlike,i.timska FROM Igra i JOIN Turnir t on t.idIgre = i.id WHERE t.id = ?";
	var db = otvoriKonekciju();

	db.all(sql, idTurnira, function(err,rows)
	{
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0]);
			}
			else
			{
				callback(0);
			}
		}
	})
}

exports.DajTurnirZaId = function(id,callback)
{
	var sql = "SELECT * FROM Turnir WHERE id=?";
	db = otvoriKonekciju();

	db.all(sql,id,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if(err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows[0]);
		}
	});
}

// OVO OVDE SE NE ZOVE NIGDE, AKO TREBA DA SE POZOVE, PITAJ JECU DA NAMESTI DA RADI SA TIMOVIMA
// za turnir koji je liga sabira poene korisnika
// DA BI RADILO ZA TIMOVE MORA DA SE PROMENI
// ne koristi se trenutno nigde
exports.ZbirPoena = function(idTurnira, idKorisnika, callback)
{
	var sql = "SELECT Sum(m.rezultat1)+(SELECT Sum(m2.rezultat2) FROM Mec m2 WHERE m2.idTurnira=m.idTurnira and m2.idIgraca2=i.id) as rezultat "+
	"FROM Mec m JOIN Igrac i ON m.idIgraca1=i.id JOIN Bot b on i.idBota=b.id "+
	"WHERE b.idKorisnika=? AND m.idTurnira=?";

	var db=otvoriKonekciju();

	db.all(sql,idKorisnika,idTurnira,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows[0]);
		}
	});

}

function DajPobednikeLiga(callback)
{
	var datum = Math.floor(new Date()/1000);
	//console.log(datum);

	// uzima idTurnira, idKorisnika i zbir njegovih poena kada je on igrac1 (liga)
	var zaUniju1 = "SELECT m.idTurnira,b.idKorisnika as idPobednika,Sum(m.rezultat1) as rezultat, t.datumVremeZavrsetka as vremeKraja FROM Mec m JOIN Timovi b ON b.id=m.idTima1 JOIN Turnir t ON t.id=m.idTurnira JOIN TipTurnira tip ON t.idTipaTurnira=tip.id "+
	"WHERE t.datumVremeZavrsetka<? AND (tip.naziv='liga' OR tip.naziv='Liga') GROUP BY m.idTurnira,m.idTima1 ";

	// uzima idTurnira, idKorisnika i zbir njegovih poena kada je on igrac2 (liga)
	var zaUniju2 = "SELECT m.idTurnira,b.idKorisnika as idPobednika,Sum(m.rezultat2) as rezultat FROM Mec m JOIN Timovi b ON b.id=m.idTima2 JOIN Turnir t ON t.id=m.idTurnira JOIN TipTurnira tip ON t.idTipaTurnira=tip.id "+
	"WHERE t.datumVremeZavrsetka<? AND (tip.naziv='liga' OR tip.naziv='Liga') GROUP BY m.idTurnira,m.idTima2 ";

	// vraca ukupan zbir poena za svakog igraca na svakom turniru (liga) koristeci gornje upite (radi uniju oba)
	var sql1 = "SELECT * "+
	"FROM ("+ zaUniju1 + "UNION "+zaUniju2+")";

	// za svaki turnir vraca korisnika koji je pobedio (sta ako im je rezultat jednak?)
	var sql = "SELECT levo.* FROM ("+sql1+") levo LEFT OUTER JOIN ("+sql1+") desno ON levo.idTurnira=desno.idTurnira AND levo.rezultat<desno.rezultat "+
	"WHERE desno.idPobednika IS NULL";

	//console.log(sql);

	var datum = Math.floor(new Date()/1000);
	//console.log(datum);
	var db = otvoriKonekciju();

	/*
SELECT levo.* 
FROM (SELECT idTurnira,id,Sum(suma) as suma 
		FROM (Select * from (SELECT m.idTurnira,b.idKorisnika as id,Sum(m.rezultat1) as suma 
				FROM Mec m JOIN Igrac i ON i.id=m.idIgraca1 JOIN Bot b ON b.id=i.idBota 
				JOIN Turnir t ON t.id=m.idTurnira JOIN TipTurnira tip ON t.idTipaTurnira=tip.id 
				WHERE /*t.datumVremeZavrsetka<cast(strftime('%s','now') as integer) AND (tip.naziv='liga' OR tip.naziv='Liga') 
				GROUP BY m.idTurnira,m.idIgraca1 
				UNION 
			SELECT m.idTurnira,b.idKorisnika as id,Sum(m.rezultat2) as suma 
				FROM Mec m JOIN Igrac i ON i.id=m.idIgraca2 JOIN Bot b ON b.id=i.idBota 
				JOIN Turnir t ON t.id=m.idTurnira JOIN TipTurnira tip ON t.idTipaTurnira=tip.id 
				WHERE /*t.datumVremeZavrsetka<cast(strftime('%s','now') as integer) AND (tip.naziv='liga' OR tip.naziv='Liga') 
				GROUP BY m.idTurnira,m.idIgraca2) unija
				group by unija.idTurnira,unija.id)) levo 
	LEFT OUTER JOIN 
	(SELECT idTurnira,id,Sum(suma) as suma 
	FROM (Select * from (SELECT m.idTurnira,b.idKorisnika as id,Sum(m.rezultat1) as suma 
				FROM Mec m JOIN Igrac i ON i.id=m.idIgraca1 JOIN Bot b ON b.id=i.idBota 
				JOIN Turnir t ON t.id=m.idTurnira JOIN TipTurnira tip ON t.idTipaTurnira=tip.id 
				WHERE /*t.datumVremeZavrsetka<cast(strftime('%s','now') as integer) AND (tip.naziv='liga' OR tip.naziv='Liga') 
				GROUP BY m.idTurnira,m.idIgraca1 
				UNION 
			SELECT m.idTurnira,b.idKorisnika as id,Sum(m.rezultat2) as suma 
				FROM Mec m JOIN Igrac i ON i.id=m.idIgraca2 JOIN Bot b ON b.id=i.idBota 
				JOIN Turnir t ON t.id=m.idTurnira JOIN TipTurnira tip ON t.idTipaTurnira=tip.id 
				WHERE /*t.datumVremeZavrsetka<cast(strftime('%s','now') as integer) AND (tip.naziv='liga' OR tip.naziv='Liga') 
				GROUP BY m.idTurnira,m.idIgraca2) unija
				group by unija.idTurnira,unija.id )) desno 
	ON levo.idTurnira=desno.idTurnira AND levo.suma<desno.suma 
	WHERE desno.id IS NULL;
	*/

	db.all(sql,datum,datum,datum,datum,function(err,rows)
	{
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	})
	
}

// za turnir koji je tipa kup nalazi za poslednje kolo (finale - 1) ko je pobednik
// vraca id korisnika
function DajPobednikeKupova(callback)
{
	var datum = Math.floor(new Date()/1000);

	var sql1 = "SELECT m.idTurnira,b.idKorisnika as idPobednika,m.rezultat1 as rezultat, t.datumVremeZavrsetka as vremeKraja "+
	"FROM Mec m JOIN Timovi b ON b.id=m.idTima1 "+ 
	"JOIN Turnir t on t.id=m.idTurnira "+
	"JOIN TipTurnira tip on t.idTipaTurnira=tip.id "+
	"WHERE kolo=1 AND t.datumVremeZavrsetka<? AND (tip.naziv='kup' OR tip.naziv='Kup')";
	/*
	var sql2 = "SELECT m.idTurnira,b2.idKorisnika as idKorisnika,m.rezultat2 as rezultat "+
	"FROM Mec m JOIN Igrac i2 ON i2.id=m.idIgraca2 JOIN Bot b2 ON b2.id=i2.idBota "+
	"JOIN Turnir t on t.id=m.idTurnira "+
	"WHERE kolo=1 AND t.datumVremePocetka<?";
	*/

	var sql2 = "SELECT m.idTurnira,b.idKorisnika as idPobednika,m.rezultat2 as rezultat "+
	"FROM Mec m JOIN Timovi b ON b.id=m.idTima2 "+ 
	"JOIN Turnir t on t.id=m.idTurnira "+
	"JOIN TipTurnira tip on t.idTipaTurnira=tip.id "+
	"WHERE kolo=1 AND t.datumVremeZavrsetka<? AND (tip.naziv='kup' OR tip.naziv='Kup')";

	var unija = "SELECT * FROM ("+sql1+" UNION "+sql2+")";

	// sta ako je jednako?
	var sql = "SELECT levo.* "+
	"FROM ("+unija+") as levo LEFT OUTER JOIN "+
	"("+unija+") as desno ON levo.idTurnira=desno.idTurnira AND levo.rezultat<desno.rezultat "+
	"WHERE desno.idPobednika IS NULL";
	
	//console.log(sql);

	var db = otvoriKonekciju();
 
	db.all(sql,datum,datum,datum,datum,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	});
}

exports.DajPobednikeProslihTurnira = function(callback)
{
	DajPobednikeKupova(function(kupovi)
	{
		if (kupovi == -1)
		{
			callback(-1);
		}
		else
		{
			DajPobednikeLiga(function(lige)
			{
				if (lige == -1)
				{
					callback(-1);
				}
				else
				{
					var niz = kupovi.concat(lige);
					callback(niz);
				}
			})
		}
	})
}

exports.AzurirajTurnir = function(turnir,callback)
{
	//sql1 = "UPDATE " + tabela + " SET email=?, ime=?, prezime=? WHERE username=?;";
	var sql = "UPDATE Turnir SET idTipaTurnira=?, naziv=?, idIgre=?, pocetakPrijava=?, krajPrijava=?, datumVremePocetka=?, datumVremeZavrsetka=? WHERE id=?";

	db = otvoriKonekciju();

	db.run(sql,turnir.idTipaTurnira,turnir.naziv,turnir.idIgre,turnir.pocetakPrijava,turnir.krajPrijava,turnir.datumVremePocetka,turnir.datumVremeZavrsetka,turnir.id,function(err)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.DajSveKorisnike = function(callback)
{
	var sql = "SELECT username, ime,prezime,brojPobeda,brojPoraza,urlSlike FROM Korisnik WHERE obrisan=0 AND usernameHash IS NULL AND banovan=0 ORDER BY brojPobeda DESC";

//console.log('##############teletabis1991');
	db = otvoriKonekciju();

	db.all(sql,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			//console.log('????????????????teletabis');
			callback(rows);
		}
	});
}

exports.DajSveMatches2 = function(username,callback)
{
	var sqll = "SELECT id FROM Korisnik WHERE username=?";

	var sql = "SELECT m.id,t.naziv as turnir, k1.username as korisnik1, k2.username as korisnik2, k1.urlSlike as avatar1, k2.urlSlike as avatar2, m.datumVremePocetka,m.trajanje, m.rezultat1, m.rezultat2 "+
	"FROM Mec m JOIN Turnir t ON m.idTurnira=t.id "+
	"JOIN Timovi b1 on m.idTima1=b1.id JOIN Timovi b2 on m.idTima2=b2.id JOIN Korisnik k1 on k1.id=b1.idKorisnika " +
	"JOIN Korisnik k2 on k2.id=b2.idKorisnika "+
	"WHERE k1.username=? OR k2.username=? ORDER BY (m.datumVremePocetka + m.trajanje) DESC";
	

	db = otvoriKonekciju();

	db.all(sqll,username,function(err,rows)
	{
		if(err)
		{
			callback(-1);
		}
		else
		{
			//console.log("id:" + rows[0].id);
			db.all(sql,username,rows[0].id,function(err,rows)
			{
				//zatvoriKonekciju(db);
				if (err)
				{
					//console.log(err);
					callback(-1);
				}
				else
				{
					callback(rows);
				}
			});
		}
	})
}

exports.DajSveKorisnikeAdmin = function(callback)
{
	var sql = "SELECT id,username, ime,prezime,email,datumRegistracije,brojPobeda,brojPoraza,urlSlike,banovan FROM Korisnik WHERE obrisan=0 ORDER BY brojPobeda DESC";

//console.log('##############teletabis1991');
	db = otvoriKonekciju();

	db.all(sql,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			//console.log(err);
			//callback(-1);
			callback(-1);
		}
		else
		{
			//console.log('????????????????teletabis');
			callback(rows);
		}
	});

}


exports.DajSveTimoveKorisnika = function(idKorisnika, callback)
{
	//console.log('da');

	//var sql = "SELECT t.* FROM Timovi t WHERE t.idKorisnika = ? AND t.brojIgraca > 1";
	var sql = "SELECT t.*, i.nazivSlike, i.naziv, i.pozadinaTimovi FROM Timovi t JOIN Igra i ON t.idIgre = i.id WHERE t.idKorisnika = ? AND t.brojIgraca > 1 AND t.obrisan = 0";

	db = otvoriKonekciju();

	db.all(sql, idKorisnika, function(err, rows)
	{

		db = zatvoriKonekciju(db);

		if(err)
		{
			//console.log(err);
		}
		else
		{
			
			for(var i = 0; i < rows.length; i++)
			{			
				rows[i].opisTima = JSON.parse(rows[i].opisTima);
				if(i == rows.length-1)
				{
					//console.log(rows);
					callback(rows);
				}
			}			
		}
	});
}

exports.BanujKorisnika = function(korisnik,callback)
{
	sql = "UPDATE Korisnik SET banovan=? WHERE id=?";

	db = otvoriKonekciju();

	//console.log(korisnik.banovan);
	//console.log(korisnik.id);

	db.all(sql,korisnik.banovan,korisnik.id,function(err)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.DajSvePrijaveZaTurnir = function(id,callback)
{

	//console.log("jel poziva? database");
	//console.log("pajovic proverava");
	//console.log(id);

	
	sql = "SELECT * from PrijaveZaTurnir WHERE idTurnira=?";

	db = otvoriKonekciju();

	////console.log(korisnik.banovan);
	////console.log(korisnik.id);

	db.all(sql,id,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			//console.log(rows);
			if(rows.length > 0)
			{
				callback(rows);
			}
			else
			{
				callback(-1);
			}
			
		}
	});
}

// Jelena
// dodati da se uzzima i avatar ?
exports.DajRezultateTurnira = function(idTurnira, callback)
{

	/*select unija.id, unija.idTima, unija.nazivTima, unija.username, sum(unija.pobeda) brojPobeda, sum(unija.poraza) brojPoraza
	from 
	(
	select t.id,m.idTima1 as idTima, tim.nazivTima as nazivTima, k.username, sum(m.rezultat1) as pobeda,count(*)-sum(m.rezultat1) as poraza
	from Mec m join Turnir t on t.id=m.idTurnira
	join Timovi tim on tim.id=m.idTima1
	join Korisnik k on k.id=tim.idKorisnika
	where t.id=1 and m.rezultat1 is not null
	group by t.id,m.idTima1, tim.nazivTima, k.username
	union
	select t.id,m.idTima2 as idTima, tim.nazivTima as nazivTima, k.username, sum(m.rezultat2) as pobeda,count(*)-sum(m.rezultat2) as poraza
	from Mec m join Turnir t on t.id=m.idTurnira
	join Timovi tim on tim.id=m.idTima2
	join Korisnik k on k.id=tim.idKorisnika
	where t.id=1 and m.rezultat2 is not null
	group by t.id, m.idTima2, tim.nazivTima, k.username) unija
	group by unija.id,unija.idTima,unija.nazivTima, unija.username
	order by pobeda desc 
	*/

	// prvi deo unije
	var sql1 = "select t.id,m.idTima1 as idTima, tim.nazivTima as nazivTima, k.username,k.urlSlike as avatar, sum(m.rezultat1) as pobeda,count(*)-sum(m.rezultat1) as poraza "+
	"from Mec m join Turnir t on t.id=m.idTurnira "+
	"join Timovi tim on tim.id=m.idTima1 "+
	"join Korisnik k on k.id=tim.idKorisnika "+
	"where t.id=? and m.rezultat1 is not null "+
	"group by t.id, m.idTima1, k.username, k.urlSlike";


	// drugi deo unije
	var sql2 = "select t.id,m.idTima2 as idTima, tim.nazivTima as nazivTima,  k.username,k.urlSlike as avatar, sum(m.rezultat2) as pobeda,count(*)-sum(m.rezultat2) as poraza "+
	"from Mec m join Turnir t on t.id=m.idTurnira "+
	"join Timovi tim on tim.id=m.idTima2 "+
	"join Korisnik k on k.id=tim.idKorisnika "+
	"where t.id=? and m.rezultat2 is not null "+
	"group by t.id, m.idTima2, k.username, k.urlSlike";

	var sqlUnija = "select unija.id,unija.idTima,unija.nazivTima,unija.username, unija.avatar, sum(unija.pobeda) brojPobeda, sum(unija.poraza) brojPoraza "+
	"from ("+sql1+" union " + sql2 +") unija "+
	"group by unija.id,unija.nazivTima,unija.idTima,unija.username, unija.avatar "+
	"order by pobeda desc";



	// namestiti da vrati sve potrebne podatke (naziv korisnika1 i korisnika2)
	var db = otvoriKonekciju();

	db.all(sqlUnija, idTurnira,idTurnira, function(err,rows)
	{
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			//console.log(rows);
			callback(rows);
		}
	})

}

exports.ObrisiTim = function(idTima, callback)
{
	var sql = "UPDATE Timovi SET obrisan=1 WHERE id=?";

	var db = otvoriKonekciju();

	db.run(sql,idTima, function(err)
	{
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	})
}

exports.UzmiPodatkeOTimuBota = function(idBota, callback)
{
	//var sql = "SELECT t.id,b.idIgre FROM Timovi t JOIN Bot b ON b.id = t.idBota WHERE t.idBota=?";
	var sql = "SELECT * FROM Timovi WHERE idBota=?";

	var db = otvoriKonekciju();

	db.all(sql, idBota, function(err,rows)
	{
		if (err)
		{
			console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length>0)
			{
				//console.log('nasao tim, rows[0].id = ',rows[0].id);
				callback(rows[0]);
			}
			else
			{
				callback(0);
			}
		}
	})
}

exports.DajRandomTim = function(idIgre, callback)
{
	var sql = "SELECT id FROM Timovi WHERE idIgre=? AND obrisan=0 ORDER BY RANDOM() LIMIT 1";

	db.all(sql,idIgre, function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0].id);
			}
			else
			{
				callback(0);
			}
			
		}
	})
}

exports.PrijaviKorisnikaNaTurnir = function(prijava,username,callback)
{
	//console.log("jel poziva? database");
	//console.log("dbgfhjskdvfhjckmbjn");
	//sql1 = "INSERT INTO Admin(username,password,email,datumRegistracije) VALUES(?,?,?,?)";



	sql = "INSERT INTO PrijaveZaTurnir(idTurnira, idTima, usernameKorisnika, datumVremePrijave) VALUES(?,?,?,?)";

	db = otvoriKonekciju();

	////console.log(korisnik.banovan);
	////console.log(korisnik.id);

	db.all(sql,prijava.idTurnira,prijava.idTima,username,prijava.datumVremePrijave,function(err)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			//onsole.log(rows);
			callback(1);
		}
	});
}

// za prosledjen naziv tipa meca daje podatke o njemu
// tipovi:
// Turnirski, Prijateljski, Testiranje
exports.UzmiTipMeca = function(tipMeca, callback)
{
	db = otvoriKonekciju();
	var sql = "SELECT id, naziv FROM TipMeca WHERE naziv=?";

	////console.log(korisnik.banovan);
	////console.log(korisnik.id);

	db.all(sql,tipMeca,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows[0]);
		}
	});

}

exports.UzmiPodatkeOIgriNaOsnovuTima = function(idTima, callback)
{
	db = otvoriKonekciju();
	var sql = "SELECT i.* FROM Igra i JOIN Timovi t on t.idIgre = i.id WHERE t.id=?";

	db.all(sql,idTima, function(err,rows)
	{
		if (err)
		{
			//console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0]);
			}
			else
			{
				callback(0);
			}
			
		}
	})
}

exports.DajSveTurnireSaKorisnikom = function(username,callback)
{
	db = otvoriKonekciju();
	//var sql = "SELECT t.id,t.naziv AS nazivTurnira, t.pocetakPrijava, t.krajPrijava, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv AS nazivIgre, i.id AS idIgre, p.datumVremePrijave FROM Turnir t JOIN Igra i ON t.idIgre=i.id LEFT JOIN PrijaveZaTurnir p on t.id=p.idTurnira WHERE t.obrisan=0 AND (p.usernameKorisnika=? OR p.usernameKorisnika is null) ORDER BY t.datumVremePocetka DESC";
	/*var sql = "SELECT t.id,t.naziv AS nazivTurnira, t.pocetakPrijava, t.krajPrijava, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv AS nazivIgre, i.id AS idIgre, p.datumVremePrijave,p.usernameKorisnika "+ 
	"FROM Turnir t JOIN Igra i ON t.idIgre=i.id LEFT JOIN PrijaveZaTurnir p on t.id=p.idTurnira "+
	"WHERE t.obrisan=0 AND (p.usernameKorisnika=? OR p.usernameKorisnika is null) "+
	"UNION "+
	"SELECT t.id,t.naziv AS nazivTurnira, t.pocetakPrijava, t.krajPrijava, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv as nazivIgre, i.id as idIgre, NULL as datumVremePrijave, NULL as usernameKorisnika "+
	"FROM Turnir t JOIN Igra i ON t.idIgre=i.id " + 
	"WHERE t.obrisan=0 " +
	"ORDER BY t.datumVremePocetka DESC";
	*/


	var sql = "SELECT t.id,t.naziv AS nazivTurnira, t.pocetakPrijava, t.krajPrijava, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv AS nazivIgre, i.id AS idIgre, "+
		"(select p.datumVremePrijave as datumVremePrijave from PrijaveZaTurnir p where p.idTurnira = t.id AND p.usernameKorisnika=?) datumVremePrijave " +
		"FROM Turnir t JOIN Igra i ON t.idIgre=i.id	"+
		"WHERE t.obrisan=0 "+
		"ORDER BY t.datumVremePocetka ASC";



	db.all(sql,username, function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			/* AKO NE RADI ONAJ POLSEDNJI AKTIVIRANI UPIT, ONDA OVO DA SE UKOMBINUJE SA POSLEDNJIM ZAKOMENTARISANIM
			var niz = [];
			var k = 0;

			var i = 0;

			while (i < rows.length)
			{
				niz[k] = rows[i];
				
				i++;
				if (rows[i].id == )
			}

			for (var i=0;i<rows.length;i++)
			{
				if (i > 0 && rows[i].id != rows[i+1].id)
				{
					k++;

					niz[k] = rows[i];
				}
				else if (i > 0 && i < rows.length)
				{
					if (rows[i].id == rows[i+1].id && rows[i+1].datumVremePrijave != null)
					{
						niz[k].
					}
				}
			}
			callback(rows);
			*/

			callback(rows);
		}
	})
}


//od svih botova za datu igru vraca random bota (moze da padne i on)
exports.DajRandomBota = function(idIgre,callback)
{
	var sql = "SELECT id FROM Timovi WHERE idIgre=? AND obrisan=0 ORDER BY RANDOM() LIMIT 1";

	db.all(sql,idIgre, function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows[0].id);
		}
	})
}

exports.UnesiMecZaTestiranje = function(idBota, idRandomBota, tipMeca, callback)
{

	var sql = "INSERT INTO Mec(idTima1,idTima2,datumVremePocetka,idTipaMeca) VALUES(?,?,?,?)";
	var db = otvoriKonekciju();

	var datum = Math.floor(Date.now()/1000);

	db.run(sql,idBota,idRandomBota,datum,tipMeca,function(err)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			if (idRandomBota == null)
			{
				////console.log('bokunda');
				// ako trenutno nema s kim da ga upari
				callback(0);
			}
			else
			{
				////console.log('jelena');
				callback(1, this.lastID);
			}
			
		}
	})
}

exports.DajNazivTipaTurnira = function(idTurnira, callback)
{
	var sql = "SELECT tt.naziv FROM TipTurnira tt JOIN Turnir t ON tt.id=t.idTipaTurnira WHERE t.id=?";

	var db = otvoriKonekciju();

	db.all(sql,idTurnira,function(err,rows)
	{
		//zatvoriKonekciju(db);
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows[0].naziv);
		}
	})
}

exports.OtkaziPrijavu = function(usernameKorisnika,idTurnira,callback)
{
	////console.log("asfasfdafasfsafasfasfasfa");
	var sql = "DELETE FROM PrijaveZaTurnir WHERE usernameKorisnika=? AND idTurnira=?";

	//console.log("username: " + usernameKorisnika);

	var db = otvoriKonekciju();

	db.run(sql,usernameKorisnika,idTurnira,function(err)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			//console.log("-----------------------------------------------");
			callback(1);
			
		}
	})
}
// prvo se svi pomesaju jedni s drugima i tako ubace u tabelu Mec
// a zatim se za svaki Mec sa tog turnira uzima id 
// i update-uje se datum za taj id
// DODAJ DA SE SAMO PRIJAVE U ROKU UVAZE
exports.NapraviMeceveZaLigu = function(idTurnira, callback)
{
	// Turnirski mec je 1
	db = otvoriKonekciju();


	// dobijanje datuma pocetka i zavrsetka turnira, da bi se odredilo na koliko da idu mecevi
	var sqlDatumi = "SELECT datumVremePocetka, datumVremeZavrsetka FROM Turnir WHERE id=?";

	db.all(sqlDatumi,idTurnira,function(errDatumi,rowsDatumi)
	{
		////console.log("Uzeo datume");
		if (errDatumi)
		{
			////console.log(errDatumi);
			callback(-1);
		}
		else
		{
			if (rowsDatumi.length > 0)
			{
				var datumPocetka = rowsDatumi[0].datumVremePocetka;
				var datumZavrsetka = rowsDatumi[0].datumVremeZavrsetka;
				var razlika = datumZavrsetka-datumPocetka;

				// dobijanje broja svih prijava na taj turnir
				var sqlBrojPrijava = "SELECT COUNT(*) as brPrijava FROM PrijaveZaTurnir WHERE idTurnira=?";
				db.all(sqlBrojPrijava,idTurnira,function(errCount,rowsCount)
				{
					////console.log("Uzeo broj prijava");
					if (errCount)
					{
						////console.log(errCount);
						callback(-1);
					}
					else
					{

						var brPrijava = rowsCount[0].brPrijava;
						if (brPrijava > 1)
						{
							var termin = razlika/(((brPrijava-1)*brPrijava)/2);

							// spajanje botova i ubacivanje u bazu
							var sqlJoin = "SELECT p1.idTurnira as idTurnira,p1.idTima as idTima1, p2.idTima as idTima2,1 "+
							"FROM PrijaveZaTurnir p1 JOIN PrijaveZaTurnir p2 ON p1.idTima<p2.idTima AND p1.idTurnira=p2.idTurnira "+
							"WHERE p1.idTurnira=?";


							var sql = "INSERT INTO Mec(idTurnira,idTima1,idTima2,idTipaMeca) "+sqlJoin;
							////console.log(sql);

							db.run(sql,idTurnira,function(errInsert)
							{
								////console.log("Insertovao");
								if (errInsert)
								{
									////console.log(errInsert);
									callback(-1);
								}
								else
								{
									// uzimanje svih id-eva meceva za taj turnir
									var sqlZaSvaki = "SELECT id FROM Mec WHERE idTurnira=?";

									// na svakih termin minuta ide novi mec
									var minuti = datumPocetka;
									// i ce da se povecava svaki put kad se update-uje mec
									var i = 0;
									
									db.each(sqlZaSvaki,idTurnira,function(errMecevi,rowMecevi)
									{
										//////console.log(i);
										if (errMecevi)
										{
											////console.log(errMecevi);
											callback(-1);
										}
										else
										{
											var sqlUpdate = "UPDATE Mec SET datumVremePocetka=?,trajanje=? WHERE id=?";
											
											db.run(sqlUpdate,minuti,trajanje,rowMecevi.id, function(errUpdate)
											{
												////console.log(i);
												////console.log(rowMecevi);
												if (errUpdate)
												{
													////console.log(errUpdate);
													callback(-1);
												}
												else
												{
													minuti+=termin;
													
												}
											})
										}
										// completion callback
									},function(errCompletion,numRows)
									{
										if (errCompletion)
										{
											////console.log(errCompletion);
											callback(-1);
										}
										else
										{
											callback(1);
										}
									})
								}
							})

						}
						else
						{
							////console.log("Nema dovoljno prijava za turnir");
							callback(0);
						}

					}
				})
			}
			
		}
	})
}

exports.NapraviMeceveZaLigu2 = function(idTurnira,callback)
{
	////console.log("Pravim meceve za ligu sa id-jem "+idTurnira);
	var sqlDatumi = "SELECT datumVremePocetka, datumVremeZavrsetka FROM Turnir WHERE id=?";
	db = otvoriKonekciju();

	db.all(sqlDatumi,idTurnira,function(errDatumi,rowsDatumi)
	{
		////console.log("Uzeo datume");
		if (errDatumi)
		{
			////console.log(errDatumi);
			callback(-1);
		}
		else
		{
			if (rowsDatumi.length > 0)
			{
				var datumPocetka = rowsDatumi[0].datumVremePocetka;
				var datumZavrsetka = rowsDatumi[0].datumVremeZavrsetka;
				var razlika = datumZavrsetka-datumPocetka;


				var sqlPrijave = "SELECT * FROM PrijaveZaTurnir WHERE idTurnira=?";

				db.all(sqlPrijave,idTurnira,function(errPrijave,rowsPrijave)
				{
					if (errPrijave)
					{
						////console.log(errPrijave);
						callback(-1);

					}
					else
					{
						var i,j;
						var sqlInsert = "INSERT INTO Mec(idTurnira,idTima1,idTima2,datumVremePocetka,trajanje,idTipaMeca) VALUES(?,?,?,?,?,1)";
						var n = rowsPrijave.length;
						// podeli razliku sa brojem meceva ((n-1)*n/2)
						var trajanje = razlika/(((n-1)*n)/2);
						trajanje = Math.floor(trajanje);
						if (trajanje > 120)
						{
							trajanje = 120;
						}

						
						db.serialize(function()
						{
							var stmt = db.prepare(sqlInsert,function(errPrepare)
							{
								if (errPrepare)
								{
									////console.log(errPrepare);
									callback(-1);
									return null;
								}
								else
								{
									var termin = datumPocetka;

									for (i=0;i<rowsPrijave.length-1;i++)
									{
										for (j=i+1;j<rowsPrijave.length;j++)
										{
											////console.log("i ",i," j ",j);
											this.run(idTurnira,rowsPrijave[i].idTima,rowsPrijave[j].idTima,termin,trajanje,function(errStmtRun)
											{
												if (errStmtRun)
												{
													////console.log(errStmtRun);
													callback(-1);
													this.finalize();
													return;
												}
											});

											termin += trajanje;
		
											if ((i == rowsPrijave.length-2) && (j == rowsPrijave.length-1))
											{
												this.finalize();
												callback(1);
											}
										}
									}
								}
							});

							db.run("UPDATE Turnir SET meceviNapravljeni=1 WHERE id=?",idTurnira,function(err)
							{
								// mozda trenutno kolo moze da se izbaci iz turnira i da se samo gleda da li je vreme pocetka turnira vece od trenutnog?
								if (err)
								{
									////console.log("Update lige: ");
									////console.log(err);
								}
									
								callback(1);
								//stmt.finalize();
								// ZATVARANJE KONEKCIJE - KAKO (SQLITE_MISUSE DATABASE IS CLOSED)?
								////zatvoriKonekciju(db);
							})

							/*
							if (stmt != null)
							{
								var termin = datumPocetka;

								for (i=0;i<rowsPrijave.length-1;i++)
								{
									for (j=i+1;j<rowsPrijave.length;j++)
									{
										////console.log("i ",i," j ",j);
										stmt.run(idTurnira,rowsPrijave[i].idBota,rowsPrijave[j].idBota,termin,trajanje,function(errStmtRun)
										{
											if (errStmtRun)
											{
												////console.log(errStmtRun);
												callback(-1);
												stmt.finalize();
												return;
											}
										});
										termin += trajanje;
	
										if ((i == rowsPrijave.length-2) && (j == rowsPrijave.length-1))
										{
											stmt.finalize();
											callback(1);
										}
									}
								}
							}
							*/
							
						});
						
						
					}
					
				});
			}
		}
	});

}

function OdrediBrojUcesnika(potrebanBroj, brojPrijavljenih, callback)
{
	// na pocetku je broj jednak potrebnom broju
	var broj = potrebanBroj;
	////console.log("ODredi broj ucesnika : ",potrebanBroj, "  ",brojPrijavljenih);

	if (brojPrijavljenih >= potrebanBroj) {
		////console.log("Ima dovoljno/previse ljudi");
		callback(potrebanBroj);
	}
	else if (brojPrijavljenih == 0)
	{
		callback(0);
	}
	else
	{
		while (broj>0)
		{
			////console.log("broj ",broj);
			if (brojPrijavljenih < broj)
			{
				broj /= 2;
				////console.log(broj);
			}

			// ako je brojPrijavljenih veci ili jednak trenutnom broju
			// onda je taj trenutni broj broj igraca
			if (brojPrijavljenih >= broj)
			{
				////console.log("mogu da breakujem za broj ",broj);
				callback(broj);
				break;
				
			}
		}
	}
		
	
}


function DajPobednikeMecevaTrenutnogKola(turnir, callback)
{
	// za trenutno kolo, za svaki mec se gleda ko je pobedio
	// i vraca se spisak pobednickih botova (sa trajanjem)

	var sql = "SELECT * FROM Mec WHERE idTurnira=? AND kolo=?";
	db = otvoriKonekciju();

	db.all(sql, turnir.id, turnir.trenutnoKolo, function(err,rows)
	{
		if (err)
		{
			//zatvoriKonekciju(db);
			////console.log("Pobednici u kolu: ",err);
			callback(-1);
		}
		else
		{
			var timovi = [];
			for (i=0;i<rows.length;i++)
			{
				////console.log(rows[i]);
				if (rows[i].rezultat1 >= rows[i].rezultat2)
				{
					timovi.push({idTima: rows[i].idTimaa1 });
				}
				else
				{
					timovi.push({idTima: rows[i].idTima2 });
				}

				if (i == rows.length - 1)
				{
					////console.log("stigao do kraja");
					callback(timovi, rows[i].datumVremePocetka+rows[i].trajanje, rows[i].trajanje);
					//zatvoriKonekciju(db);
				}

			}
		}
	})
}

/*
function NapraviMedjumeceveZaKup(turnir, callback)
{
	// kad se dobije spisak pobednickih botova, odreddjuje se ko ce s kim d aigra i u bacuje u bazu
	
}
*/


// datum - datum pocetka turnira ako tek pocinje
// datum zavrsetka poslednjeg meca u prethodnom kolu
function NapraviMeceveZaKup(turnir, timovi, datum, trajanje, kolo, callback)
{
	db = otvoriKonekciju();

	// ako ima prijava
	if (timovi.length > 0)
	{
		var sqlInsert = "INSERT INTO Mec(idTurnira,idTima1,idTima2,datumVremePocetka,trajanje,kolo,idTipaMeca) VALUES(?,?,?,?,?,?,1)";
		db.serialize(function()
		{
			//var stmt = null;
			var stmt = db.prepare(sqlInsert,function(errPrepare)
			{						
				////console.log("Pripremljen stmt");	
				if (errPrepare)
				{
					////console.log("Greska prepare");
					////console.log(errPrepare);
					this.finalize();
					//zatvoriKonekciju(db);
					callback(-1);
					return null;
				}
				else
				{
					////console.log("Stmt nije null");
					var n = Math.floor(timovi.length/2);
					var i = 0;
					while (i < n)
					{
						// turnirski mec - 1 (promeni da uzima tacan id turnirskog meca, bez hardkodovanja)
						////console.log("run za i=",i);
						////console.log(turnir.id);
						////console.log(timovi[i].idTima);
						////console.log(timovi[timovi.length-i-1].idTima);
						////console.log(datum);
						////console.log(trajanje);
						////console.log(kolo);

						this.run(turnir.id,timovi[i].idTima,timovi[timovi.length-i-1].idTima,datum,trajanje,kolo, function(errStmtRun)
						{
							////console.log("Nakon runa");
							if (errStmtRun)
							{
								////console.log("errstmtrun:");
								////console.log(errStmtRun);
								callback(-1);
								this.finalize();
								//zatvoriKonekciju(db);
								return;
							}
							else
							{
								
								//i++;
							}
							
							//i++;
						});

						
						datum += trajanje;

						i++;
					}
				}
			});
			////console.log("update turnira");
			db.run("UPDATE Turnir SET trenutnoKolo=?, meceviNapravljeni=1 WHERE id=?",kolo,turnir.id,function(err)
			{
				// mozda trenutno kolo moze da se izbaci iz turnira i da se samo gleda da li je vreme pocetka turnira vece od trenutnog?
				if (err)
				{
					////console.log("Update trenutnog kola: ");
					////console.log(err);
				}
					
				callback(1);
				//stmt.finalize();
				// ZATVARANJE KONEKCIJE - KAKO (SQLITE_MISUSE DATABASE IS CLOSED)?
				////zatvoriKonekciju(db);
			})
		})
		
	}
	else
	{	// nema prijava
		////console.log("nema prijava za idturnira ",turnir.id);
		db.run("UPDATE Turnir SET trenutnoKolo=0, meceviNapravljeni=1 WHERE id=?",turnir.id,function(err)
			{
				// mozda trenutno kolo moze da se izbaci iz turnira i da se samo gleda da li je vreme pocetka turnira vece od trenutnog?
				if (err)
				{
					////console.log("Update trenutnog kola: ");
					////console.log(err);
				}
					
				callback(0);
				//stmt.finalize();
				// ZATVARANJE KONEKCIJE - KAKO (SQLITE_MISUSE DATABASE IS CLOSED)?
				////zatvoriKonekciju(db);
			})
		//callback(0);
	}
	
}

exports.dodajPitanjeOdgovorZaFaq = function(pitanje, odgovor, callback)
{
	var sql = "INSERT INTO FAQ(pitanje, odgovor) VALUES (?, ?)";
	////console.log("TU SAM");
	db = otvoriKonekciju();
	db.run(sql, pitanje, odgovor, function(err)
	{
		// //zatvoriKonekciju(db); - ne radi kada zatvorim konekciju ka bazi

		if (err)
		{
			callback(-1);
		}
		else
		{
			callback(1, this.lastID);
		}
	});
}

exports.IzmeniFaq = function(id, pitanje, odgovor, callback)
{
	var sql = "UPDATE FAQ SET pitanje=?, odgovor=? WHERE id=?";

	db = otvoriKonekciju();
	db.run(sql, pitanje, odgovor, id, function(err)
	{
		if (err)
		{
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.ObrisiFaq = function(id, callback)
{
	var sql = "DELETE FROM FAQ WHERE id = ?";

	db = otvoriKonekciju();
	db.run(sql, id, function(err)
	{
		if (err)
		{
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

function UzmiSvePrijaveZaTurnir(idTurnira, callback)
{
	var sql = "SELECT * FROM PrijaveZaTurnir WHERE idTurnira=?";

	db = otvoriKonekciju();
	db.all(sql,idTurnira, function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	})
}

exports.NapraviKup = function(idTurnira, callback)
{
	// nadji taj turnir i njegovo trenutno kolo
	// ako je kolo 0, to znaci da se botovi uzimaju iz prijava
	// ako je kolo <> 0, uzimaju se pobednici prethodnog kola i miksuju na isti nacin
	// miksuju se prvi i  poslednji,drugi i pretposlednji ..
	
	var db = otvoriKonekciju();

	exports.DajTurnirZaId(idTurnira,function(statusTurnir)
	{
		if (statusTurnir == -1)
		{
			callback(-1);
		}
		else
		{
			var db = otvoriKonekciju();

			// ako turnir jos nije zapocet
			if (statusTurnir.trenutnoKolo == 0)
			{
				
				UzmiSvePrijaveZaTurnir(idTurnira,function(statusPrijava)
				{
					if (statusPrijava == -1)
					{
						callback(-1);
					}
					/*
					else if (statusPrijava.length == 0)
					{
						callback(0)
					}
					*/
					else
					{
						OdrediBrojUcesnika(statusTurnir.brDozvoljenihIgraca, statusPrijava.length, function(brojUcesnika)
						{
							////console.log("odredio broj ucesnika");
							var brojMeceva = 0;
							var kolo = 0;
							var trajanje = 0;

							if (brojUcesnika > 1)
							{
								brojMeceva = brojUcesnika - 1;
								kolo = Math.log(brojUcesnika)/Math.log(2);
								// ako cu da proveravam na svaki minut, onda moram sa smanjim ukupno trajanje turnira za onoliko kola koliko imam*60
								trajanje = Math.floor((statusTurnir.datumVremeZavrsetka - (statusTurnir.datumVremePocetka + kolo*60))/brojMeceva);
								
								// ako trajanje meca treba da bude duze od 2min da bi isli jedan za drugim do  samog kraja
								// nema potrebe da traje duze od 2min (120s)
								if (trajanje > 120)
								{
									trajanje = 120;
								}

								
							// mozda bi trebalo da se promeni da bude od trnutnog datuma
								NapraviMeceveZaKup(statusTurnir,statusPrijava, statusTurnir.datumVremePocetka+60, trajanje, kolo, function(statusMecevi)
								{
									callback(statusMecevi);
									
								})
								
							}
							

						})
						
						
					}
				})
			}
			else
			{
				DajPobednikeMecevaTrenutnogKola(statusTurnir, function(statusPobednici,datum,trajanje)
				{
					////console.log("nasao pobednike");
					if (statusPobednici == -1)
					{
						callback(-1);
					}
					else
					{
						var kolo = statusTurnir.trenutnoKolo - 1;
						NapraviMeceveZaKup(statusTurnir,statusPobednici,datum+60, trajanje, kolo, function(statusMecevi)
						{
							// promein da i ovde bude samo callback
							callback(statusMecevi);
						})
					}
				})
			}

			

			
		}
	})

}


exports.SviMeceviKojiCeDaPocnu = function(callback)
{
	db = otvoriKonekciju();

	var datum = Math.floor(Date.now()/1000)+6000;

	var sql = "SELECT * FROM Mec m WHERE datumVremePocetka<=? AND tokMeca IS NULL";

	db.all(sql,datum, function(err,rows)
	{
		////zatvoriKonekciju(db);
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	})
}


exports.UnesiTokZaMec = function(idMeca,tokMeca)
{
	var sql = "UPDATE Mec SET tokMeca=?,trajanje=? WHERE id=?";

	////console.log(idMeca);
	////console.log(tokMeca);

	db = otvoriKonekciju();

	db.run(sql,JSON.stringify(tokMeca),tokMeca.trajanje,idMeca,function(err)
	{
		////zatvoriKonekciju(db);
		////console.log(this);

		if (err)
		{
			////console.log(err);
		}
	})
}

// funkcija za ispitivanje da li je datum prosao (za prijave)
exports.NapraviSveMeceve = function()
{
	var datum = Math.floor(Date.now()/1000);

	// daj sve turnire gde mecevi nisu napravljeni
	// a kraj prijava je prosao
	////console.log("Trazim turnire za pravljenje meceva "+datum);

	db = otvoriKonekciju();

	db.serialize(function()
	{
		var sql = "SELECT t.*,tt.naziv as nazivTipa "+
					"FROM Turnir t JOIN TipTurnira tt ON t.idTipaTurnira=tt.id "+
					"WHERE (meceviNapravljeni=0 or meceviNapravljeni IS NULL) and t.krajPrijava<=?";
		
		////console.log (sql);

		db.all(sql,datum, function(err,rows)
		{
			////console.log("Nasao sam sve meceve");
			if (err)
			{
				////console.log("greska ",err);
				//zatvoriKonekciju(db);
			}
			else
			{
				// pozovi kreiranje meceva za svaki pojedinacni turnir
				////console.log(rows.length);
				for (i=0;i<rows.length;i++)
				{
					if (rows[i].nazivTipa.toUpperCase() == 'LIGA')
					{
						////console.log("liga liga");
						exports.NapraviMeceveZaLigu2(rows[i].id,function(statusLiga)
						{
							////console.log("status meceva za ligu: "+rows[i].id +" je " + statusLiga);
						})
					}
					else
					{
						////console.log("kup");
						exports.NapraviKup(rows[i].id,function(statusKup)
						{
							////console.log("status meceva za kup: "+rows[i].id+" je " + statusKup);
						})
					}
				}

				// F-JA KOJA OTVARA I ZATVARA KONEKCIJU KA BAZI U OKVIRU DRUGE TAKVE F-JE?
				// STA JE RESENJE?
			}
		});

		// kreiranje narednog kola za neki kup
		var sql2 = "SELECT t.id,t.trenutnoKolo,MAX(m.datumVremePocetka+m.trajanje) as datumZavrsetka "+
					"FROM Turnir t JOIN TipTurnira tt ON t.idTipaTurnira=tt.id "+
					"JOIN Mec m ON m.idTurnira=t.id "+
					"WHERE t.trenutnoKolo>1 AND tt.naziv='Kup' "+
					"GROUP BY t.id,t.trenutnoKolo "+
					"HAVING(CAST(MAX(m.datumVremePocetka+m.trajanje)/1000 AS INTEGER)<=?)";
		
		
		db.all(sql2,datum, function(err,rows)
		{
			if (err)
			{
				////console.log("greska      " ,err);
				//zatvoriKonekciju(db);
			}
			else
			{
				////console.log(rows);
				// pozovi kreiranje meceva za svaki pojedinacni turnir
				for (i=0;i<rows.length;i++)
				{
					
					exports.NapraviKup(rows[i].id,function(statusKup)
					{
						////console.log("status meceva za kup: "+rows[i].id+" je " + statusKup);
					})
				}

				// F-JA KOJA OTVARA I ZATVARA KONEKCIJU KA BAZI U OKVIRU DRUGE TAKVE F-JE?
				// STA JE RESENJE?
			}
		});
	})
	
}

exports.UzmiPodatkeOIgri = function(id,callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT * FROM Igra WHERE id=?";

	db.all(sql,id,function(err,rows)
	{
		if (err)
		{
			////console.log("UZmi podatke o igri ",err);
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0]);
			}
			else
			{
				callback(0);
			}
		}
	})
}

// vraca imena igraca koji ucestvuju, kad krece mec,
exports.UzmiPodatkeOMecu = function(idMeca,callback)
{
	////console.log(idMeca);
	var sql = "SELECT m.*,tm.naziv tipMeca,k1.username as korisnik1, k2.username as korisnik2,t1.id as idTima1, t2.id as idTima2 "+
	"FROM Mec m  JOIN TipMeca tm ON tm.id=m.idTipaMeca "+
	"JOIN Timovi t1 ON m.idTima1=t1.id JOIN Korisnik k1 ON t1.idKorisnika=k1.id "+
	"JOIN Timovi t2 ON m.idTima2=t2.id JOIN Korisnik k2 ON k2.id=t2.idKorisnika "+
	"WHERE m.id=?";

	var db = otvoriKonekciju();

	db.all(sql,idMeca,function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////////console.log(rows);
			if (rows.length> 0)
			{
				//////console.log(rows[0]);
				callback(rows[0]);
			}
			else
			{
				callback(0);
			}
		}
	})
}

//funkcija za zavrsene meceve ubacuje random rezultate

exports.UbaciRezultate = function()
{
	var trenutnoVreme = Math.floor(Date.now() / 1000);

	db = otvoriKonekciju();

	db.serialize(function()
	{
		////console.log("TRAZE SE ZAVRSENI MECEVI BEZ REZULTATA!!!");
		var sql1 = "SELECT * FROM MEC WHERE rezultat1 IS NULL AND (datumVremePocetka + trajanje < " + trenutnoVreme +")";
		//uzimanje zavrsenih meceva bez rezultata
		db.all(sql1,function(err,rows)
		{
			////zatvoriKonekciju(db); nisam siguran za ovde i kako;; JELENA PROVERI;;AND rezultat2 IS NULL 
			////console.log("naslo meceve");


			if(err)
			{
				////console.log(err);
			}
			else
			{
				////console.log(rows);

				for(var i = 0; i < rows.length; i++)
				{
					////console.log("uslo u petlju");
					////console.log(rows[i].datumVremePocetka+rows[i].trajanje);
					var idMeca = rows[i].id;	//tekuci mec za koji vrsimo operacije
					var idKorisnika1, idKorisnika2;

					var rez1 = Math.floor(Math.random() * Math.floor(2));
					var rez2;
					var pobednik;		//pobednik jebenog meca 1-idBota1;;2-idBota2

					if(rez1 == 1)
					{
						rez2 = 0;
						pobednik = 1;
					}
					else
					{
						rez2 = 1;
						pobednik = 2;
					}

					//-------------------------------------------------------------------
					var sql2 = "UPDATE MEC SET rezultat1=?, rezultat2=? WHERE id=?";
					//ubacuju random generisani rezultati u bazu
					db.run(sql2,rez1,rez2,idMeca,function(err)
					{
						

						if(err)
						{
							////console.log(err);
							////zatvoriKonekciju(db);
						}
						else
						{
							////console.log("unet rezultat");//DOVDE JE PROSLO
						}
					});
					//-------------------------------------------------------------------
					//upit za dobijanje prvog korisnika odredjenog meca
					var sql3 = "SELECT b.idKorisnika FROM MEC m JOIN Timovi b on m.idTima1 = b.id where m.id=?";

					db.all(sql3,idMeca,function(err,rows)
					{
						
						if(err)
						{
							////zatvoriKonekciju(db);

							////console.log(err);
						}
						else
						{
							////console.log("uslo za prvog korisnika")
							////console.log(rows);
							if (rows.length > 0) 
							{
								idKorisnika1 = rows[0].idKorisnika;

								//upit za dobijanje broja pobeda i poraza prvog korisnika
								var sql5 = "SELECT brojPobeda, brojPoraza FROM Korisnik WHERE id=?";
								db.all(sql5,idKorisnika1,function(err,rows)
								{
									////console.log("uzelo pobede i poraze prvo korsnika");

									if(err)
									{
										////zatvoriKonekciju(db);
										////console.log("greska greska");
										////console.log(err);
									}
									else
									{
										////console.log(rows);
										var trenutniBrojPobeda = rows[0].brojPobeda;
										var trenutniBrojPoraza = rows[0].brojPoraza;

										if(pobednik == 1)
										{
											trenutniBrojPobeda++;
										}
										else
										{
											trenutniBrojPoraza++;
										}

										var sql7 = "UPDATE Korisnik SET brojPobeda=?,brojPoraza=? WHERE id=?";
										db.run(sql7,trenutniBrojPobeda,trenutniBrojPoraza,idKorisnika1,function(err)
										{
											////zatvoriKonekciju(db);

											if(err)
											{
												////console.log(err)
											}
											else
											{
												////console.log("apdejtovano");
											}
										});

									}
								});
							}
							else
							{
								return;
							}
								
							
						}
					});
					//-------------------------------------------------------------------
					//upit za dobijanje drugog korisnika odredjenog meca
					var sql4 = "SELECT b.idKorisnika FROM MEC m JOIN Timovi b on m.idTima2 = b.id where m.id=?"

					db.all(sql4,idMeca,function(err,rows)
					{
						

						if(err)
						{
							////console.log(err);
						//	//zatvoriKonekciju(db);
						}
						else
						{
							////console.log("uslo za drugog korisnika");
							////console.log(rows);

							if (rows.length > 0)
							{
								idKorisnika2 = rows[0].idKorisnika;

								//upit za dobijanje broja pobeda i poraza prvog korisnika
								var sql6 = "SELECT brojPobeda, brojPoraza FROM Korisnik WHERE id=?";
								db.all(sql6,idKorisnika2,function(err,rows)
								{
									////zatvoriKonekciju(db);

									if(err)
									{
										////console.log(err);
									}
									else
									{
										////console.log(rows);

										var trenutniBrojPobeda = rows[0].brojPobeda;
										var trenutniBrojPoraza = rows[0].brojPoraza;

										if(pobednik == 2)
										{
											trenutniBrojPobeda++;
										}
										else
										{
											trenutniBrojPoraza++;
										}

										var sql8 = "UPDATE Korisnik SET brojPobeda=?,brojPoraza=? WHERE id=?";
										db.run(sql8,trenutniBrojPobeda,trenutniBrojPoraza,idKorisnika2,function(err)
										{
										//	//zatvoriKonekciju(db);

											if(err)
											{
												////console.log(err)
											}
											else
											{
												////console.log("apdejtovano");
											}
										});
									}
								});
							}
							else
							{
								return;
							}
							
						}
					});
					//-------------------------------------------------------------------
					
				}
			}
		})
	});
	
}

exports.dajSvaPitanjaIOdgovore = function (callback)
{
	var sql = "SELECT * FROM FAQ";
	db = otvoriKonekciju();

	db.all(sql, function(err, rows)
	{
		//zatvoriKonekciju(db);

		if (err)
		{
			// nastala je greska pri pristupu bazi
			////console.log(err);
			callback(-1);
		}
		else
		{
			// vracamo sve selektovane redove
			callback(rows);
		}
	});
}

exports.DajPrijaveZaTurnir = function(idTurnira,callback)
{
	////console.log("jjel se poziva databese");
	////console.log(idTurnira);
	var sql = "SELECT p.usernameKorisnika, b.nazivTima, p.datumVremePrijave FROM PrijaveZaTurnir p JOIN Timovi b on p.idTima = b.id WHERE p.idTurnira = ?";

	db = otvoriKonekciju();

	db.all(sql,idTurnira,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);  
		}
		else
		{
			if(rows.length == 0)
			{
				////console.log(rows);
				callback(-1);
			}
			else
			{
				////console.log(rows);
				callback(rows);
			}
		}
	})
}

exports.DaLiIgraTimska = function(id,callback)
{
	console.log("databse");
	var sql = "SELECT i.timska FROM Turnir t JOIN Igra i on t.idIgre=i.id WHERE t.id=?";

	db = otvoriKonekciju();

	db.all(sql,id,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);  
		}
		else
		{
			console.log(rows[0].timska);
			callback(rows[0].timska);
		}
	})
}

exports.DajSveAdmine = function(callback)
{
	////console.log("jjel se poziva databese za dajSveAdmine");
	var sql = "SELECT id,username FROM Admin WHERE obrisan=0 AND username!='admin'";
	var obrisan = 1;

	db = otvoriKonekciju();

	db.all(sql,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);
			callback(rows);
		}
	})
}

exports.ObrisiAdminaZaId = function(idAdmina,callback)
{
	////console.log("jjel se poziva databese za obrisiadminazaid");
	var sql = "UPDATE Admin SET obrisan=? WHERE id=?";
	var obrisan = 1;

	db = otvoriKonekciju();

	db.all(sql,obrisan,idAdmina,function(err)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			//////console.log(rows);
			callback(1);
		}
	})
}

exports.ObrisiNalog = function(username,callback)
{
	////console.log("jel poziva brisanje naloga database");
	////console.log(username);
	var obrisan = 1;

	var sql = "UPDATE Korisnik SET obrisan=? WHERE username=?";

	db = otvoriKonekciju();

	db.all(sql,obrisan,username,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	})
}

exports.DajMailZaUsername = function(username,callback)
{
	////console.log("daj mail database");
	////console.log(username);

	var sql = "SELECT email FROM Korisnik WHERE username=?";

	db = otvoriKonekciju();

	db.all(sql,username,function(err,rows)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			if(rows.length > 0)
			{
				callback(rows);
			}
			else
			{
				callback(-1);
			}
		}
	});
}

exports.ResetujLozinku = function(nova,username,callback)
{
	////console.log("reset lozinka database");
	////console.log(nova);

	const hash = crypto.createHmac('sha256', nova)
	                   .update('Summanus is the best!')
    	               .digest('hex');

	var sql = "UPDATE Korisnik SET password=? WHERE username=?";

	db = otvoriKonekciju();

	db.all(sql,hash,username,function(err)
	{
		//zatvoriKonekciju(db);

		if(err)
		{
			////console.log(-1);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

exports.AktivirajKorisnika = function(username,hash, callback)
{
	//var sql = "SELECT * FROM Korisnik WHERE usernameHash=? AND username=?"; ovo samo ako je preko verifikacionog koda
	var sql = "SELECT * FROM Korisnik WHERE usernameHash=?";

	var db = otvoriKonekciju();
	////console.log("username ",username);
	////console.log("hash ", hash);

	db.all(sql,hash/*, username*/,function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);
			if (rows.length > 0)
			{
				var sqlUpdate = "UPDATE Korisnik SET usernameHash=NULL WHERE id="+rows[0].id;
				////console.log(sqlUpdate);

				db.run(sqlUpdate,function(err)
				{
					if (err)
					{
						////console.log(err);
						callback(-1);
					}
					else
					{
						callback(rows[0]);
					}
				});

			}
			else
			{
				callback(0);
			}
		}
	})

}

exports.UkupanBrojKorisnika = function(callback)
{
	////console.log("poziv database");

	var sql = "SELECT COUNT(*) as 'brojKorisnika' FROM Korisnik WHERE banovan=? AND obrisan=?";

	db = otvoriKonekciju();

	var banovan = 0;
	var obrisan = 0;

	db.all(sql,banovan,obrisan,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows[0].brojKorisnika);
			callback(rows[0].brojKorisnika);
		}
	});
}

exports.UkupanBrojBotova = function(callback)
{
	var sql = "SELECT COUNT(*) as 'brojBotova' FROM Bot WHERE banovan=? AND obrisan=?";

	db = otvoriKonekciju();

	var banovan = 0;
	var obrisan = 0;

	db.all(sql,banovan,obrisan,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows[0].brojBotova);
			callback(rows[0].brojBotova);
		}
	});
}

exports.UkupanBrojBotovaZaKorisnika = function(username,callback)
{
	var sql = "SELECT COUNT(*) as 'brojBotovaZaKorisnika' FROM Bot b JOIN Korisnik k on b.idKorisnika=k.id WHERE k.username=? AND b.obrisan!=?";

	db = otvoriKonekciju();

	var obrisan = 1;

	db.all(sql,username,obrisan,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows[0].brojBotovaZaKorisnika);
			callback(rows[0].brojBotovaZaKorisnika);
		}
	});
}

exports.UkupanBrojKorisnikaPoMesecima = function(callback)
{
	var sql = "SELECT username, datumRegistracije FROM Korisnik WHERE banovan!=? AND obrisan!=?";

	db = otvoriKonekciju();

	var obrisan = 1;
	var banovan = 1;

	db.all(sql,banovan,obrisan,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);

			meseci = 
			{
				"1":0,
				"2":0,
				"3":0,
				"4":0,
				"5":0,
				"6":0,
				"7":0,
				"8":0,
				"9":0,
				"10":0,
				"11":0,
				"12":0
			}

			for(var i = 0; i < rows.length; i++)
			{
				var pomocniDatum = new Date(rows[i].datumRegistracije * 1000);
				////console.log(pomocniDatum.toDateString());
				var pomocniMesec = pomocniDatum.getMonth();
				////console.log(++pomocniMesec);
				meseci[pomocniMesec]++;
			}

			////console.log(meseci);
			callback(meseci);
		}
	});
}

exports.UzmiPodatkeOAdminu = function(username, callback)
{
	var db = otvoriKonekciju();
	var sql = "SELECT id, username, email FROM Admin WHERE username=?";

	db.all(sql, username, function(err,rows)
	{
		if (err)
		{
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				callback(rows[0]);
			}
			else
			{
				callback(-1);
			}
		}
	})
}

exports.UzmiTurnireZaTV = function(callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT t.id as idTurnira, t.naziv as nazivTurnira, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv as nazivIgre, m.id, m.datumVremePocetka as datumPocetkaMeca, b1.nazivTima as tim1, b2.nazivTima as tim2, k1.username as korisnik1, k2.username as korisnik2, m.rezultat1, m.rezultat2 "+
	"FROM Turnir t JOIN Igra i ON i.id=t.idIgre "+
	"JOIN Mec m ON t.id=m.idTurnira "+
	"JOIN Timovi b1 ON m.idTima1=b1.id JOIN Korisnik k1 ON k1.id=b1.idKorisnika " +
	"JOIN Timovi b2 ON m.idTima2=b2.id JOIN Korisnik k2 ON k2.id=b2.idKorisnika ";

	/*
	var sql = "SELECT t.id as idTurnira, t.naziv as nazivTurnira, t.datumVremePocetka, t.datumVremeZavrsetka, i.naziv as nazivIgre, m.id, m.datumVremePocetka as datumPocetkaMeca, b1.nazivFajla as bot1, b2.nazivFajla as bot2, k1.username as korisnik1, k2.username as korisnik2, m.rezultat1, m.rezultat2 "+
	"FROM Turnir t JOIN Igra i ON i.id=t.idIgre "+
	"JOIN Mec m ON t.id=m.idTurnira "+
	"JOIN Bot b1 ON m.idBota1=b1.id JOIN Korisnik k1 ON k1.id=b1.idKorisnika " +
	"JOIN Bot b2 ON m.idBota2=b2.id JOIN Korisnik k2 ON k2.id=b2.idKorisnika ";
	*/

	db.all(sql, function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			var turniri = [];

			var i = 0;
			var j = 0;
			var k = 0;
			while (i < rows.length)
			{
				turniri[i] = {};
				turniri[i].idTurnira = rows[i].idTurnira;
				turniri[i].nazivTurnira = rows[i].nazivTurnira;
				turniri[i].datumVremePocetka = rows[i].datumVremePocetka;
				turniri[i].datumVremeZavrsetka = rows[i].datumVremeZavrsetka;
				turniri[i].nazivIgre = rows[i].nazivIgre;
				turniri[i].mecevi = [];

				j = i;
				k = 0;
				while (j < rows.length && rows[j].idTurnira == turniri[i].idTurnira)
				{
					turniri[i].mecevi[k] = {};
					turniri[i].mecevi[k].korisnik1 = {};
					turniri[i].mecevi[k].korisnik2 = {};

					turniri[i].mecevi[k].id = rows[j].idMeca;

					turniri[i].mecevi[k].korisnik1.username = rows[j].korisnik1;
					turniri[i].mecevi[k].korisnik1.bot = rows[j].tim1.substring(0,rows[j].tim1.lastIndexOf('.'));

					turniri[i].mecevi[k].korisnik2.username = rows[j].korisnik2;
					turniri[i].mecevi[k].korisnik2.bot = rows[j].tim2.substring(0,rows[j].tim2.lastIndexOf('.'));

					turniri[i].mecevi[k].rezultat1 = rows[j].rezultat1;
					turniri[i].mecevi[k].rezultat2 = rows[j].rezultat2;

					j++;
					k++;
				}

				i++;
				if (i == rows.length)
				{
					//////console.log(turniri);
					callback(turniri);
				}
			}
		}
	})	

}


exports.UzmiZavrseneTurnire = function(callback)
{
	var danasnjiDatum = Math.floor(Date.now()/1000);

	var sql = "SELECT m.id, k1.username as korisnik1, k2.username as korisnik2, m.rezultat1, m.rezultat2, m.datumVremePocetka, t.naziv "+
	"FROM Mec m JOIN Turnir t ON m.idTurnira=t.id "+
	"JOIN Timovi b1 ON m.idTima1=b1.id JOIN Korisnik k1 ON k1.id=b1.idKorisnika "+
	"JOIN Timovi b2 ON m.idTima2=b2.id JOIN Korisnik k2 ON k2.id=b2.idKorisnika "+
	"WHERE m.datumVremePocetka+m.trajanje < "+danasnjiDatum+" "+
	"ORDER BY m.datumVremePocetka";


	db = otvoriKonekciju();

	db.all(sql,function(err,rows)
	{
		if (err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows);
		}
	})
}

exports.UnesiRezultateMeca = function(idMeca, rez1, rez2, tokMeca, trajanje, callback)
{
	////console.log("unesi rezultate");
	////console.log(tokMeca);
	var sqlUpdate = "UPDATE Mec SET rezultat1=?, rezultat2=?, tokMeca=?, trajanje=? WHERE id=?";

	var db = otvoriKonekciju();

	var sql = "SELECT * FROM Mec WHERE id=?";

	db.all(sql, idMeca,function(err,rows)
	{
		if (err)
		{
			callback(-1);
		}
		else
		{
			if (rows.length > 0)
			{
				if (rows[0].rezultat1 == null || rows[0].rezultat2 == null)
				{
					db.run(sqlUpdate,rez1,rez2,JSON.stringify(tokMeca),trajanje, idMeca, function(err)
					{
						////console.log('ce udjes');
						if (err)
						{
							////console.log(err);
							callback(-1);
						}
						else
						{
							callback(1);
						}
					})
				}
				else
				{
					callback(1);
				}
			}
			else
			{
				callback(-1);
			}
		}
	})

	
}

exports.UkupanBrojBotovaPoMesecima = function(callback)
{
	var sql = "SELECT nazivFajla, datumKreiranja FROM Bot WHERE obrisan!=?";

	db = otvoriKonekciju();

	var obrisan = 1;

	db.all(sql,obrisan,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);

			meseci = 
			{
				"1":0,
				"2":0,
				"3":0,
				"4":0,
				"5":0,
				"6":0,
				"7":0,
				"8":0,
				"9":0,
				"10":0,
				"11":0,
				"12":0
			}

			for(var i = 0; i < rows.length; i++)
			{
				var pomocniDatum = new Date(rows[i].datumKreiranja * 1000);
				////console.log(pomocniDatum.toDateString());
				var pomocniMesec = pomocniDatum.getMonth();
				////console.log(++pomocniMesec);
				meseci[pomocniMesec]++;
			}

			////console.log(meseci);
			callback(meseci);
		}
	});
}

exports.UkupanBrojPobedaZaKorisnika = function(username, callback)
{
	var sql = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima1=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat1>m.rezultat2 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski'";	//sve pobede kad je bio "domacin"
	var sql1 = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima2=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat2>m.rezultat1 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski' ";	//sve pobede kad je bio "gost"

	var ukupno = 0;

	db = otvoriKonekciju();

	db.all(sql, username, function(err, rows)
	{
		if(err)
		{
			callback(-1);
		}
		else
		{
			ukupno = rows.length;
			
			db.all(sql1, username, function(err, rows2)
			{
				if(err)
				{
					callback(-1);
				}
				else
				{
					ukupno += rows2.length;
					// console.log(ukupno, 'pobeda');
					callback(ukupno);
				}
			});

			
		}
	});
}

exports.UkupanBrojPobedaZaKorisnkaPoMesecima = function(username,callback)
{
	var sql = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima1=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat1>m.rezultat2 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski'";	//sve pobede kad je bio "domacin"
	var sql1 = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima2=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat2>m.rezultat1 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski' ";	//sve pobede kad je bio "gost"

	db = otvoriKonekciju();

	var meseci = 
			{
				"1":0,
				"2":0,
				"3":0,
				"4":0,
				"5":0,
				"6":0,
				"7":0,
				"8":0,
				"9":0,
				"10":0,
				"11":0,
				"12":0
			}

	db.all(sql,username,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);

			for(var i = 0; i < rows.length; i++)
			{
				var pomocniDatum = new Date(rows[i].datumVremePocetka * 1000);
				////console.log(pomocniDatum.toDateString());
				var pomocniMesec = pomocniDatum.getMonth();
				////console.log(++pomocniMesec);
				meseci[pomocniMesec]++;
			}

			////console.log(meseci);

			db.all(sql1,username,function(err,rows)
			{
				////zatvoriKonekciju(db);

				if(err)
				{
					////console.log(err);
					callback(-1);
				}
				else
				{
					////console.log(rows);

					for(var i = 0; i < rows.length; i++)
					{
						var pomocniDatum = new Date(rows[i].datumVremePocetka * 1000);
						////console.log(pomocniDatum.toDateString());
						var pomocniMesec = pomocniDatum.getMonth();
						////console.log(++pomocniMesec);
						meseci[pomocniMesec]++;
					}

					////console.log(meseci);
					callback(meseci);
				}
			});
			
		}
	});

	
}

exports.UkupanBrojMecevaPoMesecima = function(callback)
{
	var sql = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima1=b.id JOIN Korisnik k on b.idKorisnika=k.id WHERE m.rezultat1>m.rezultat2";	

	db = otvoriKonekciju();

	var meseci = 
			{
				"1":0,
				"2":0,
				"3":0,
				"4":0,
				"5":0,
				"6":0,
				"7":0,
				"8":0,
				"9":0,
				"10":0,
				"11":0,
				"12":0
			}

	db.all(sql,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);

			for(var i = 0; i < rows.length; i++)
			{
				var pomocniDatum = new Date(rows[i].datumVremePocetka * 1000);
				////console.log(pomocniDatum.toDateString());
				var pomocniMesec = pomocniDatum.getMonth();
				////console.log(++pomocniMesec);
				meseci[pomocniMesec]++;
			}						

			////console.log(meseci);
			callback(meseci);
		}
	});	
}

exports.UkupanBrojPorazaZaKorisnika = function(username, callback)
{
	var sql = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima1=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat1<m.rezultat2 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski'";	//svi porazi kad je bio "domacin"
	var sql1 = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima2=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat2<m.rezultat1 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski'";	//svi porazi kad je bio "gost"

	var ukupno = 0;

	db = otvoriKonekciju();

	db.all(sql, username, function(err, rows)
	{
		if(err)
		{
			callback(-1);
		}
		else
		{
			ukupno = rows.length;
			
			db.all(sql1, username, function(err, rows2)
			{
				if(err)
				{
					callback(-1);
				}
				else
				{
					ukupno += rows2.length;
					//console.log(ukupno, 'poraza');
					callback(ukupno);
				}
			});

			
		}
	});
}

exports.UkupanBrojPorazaZaKorisnkaPoMesecima = function(username,callback)
{
	var sql = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima1=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat1<m.rezultat2 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski'";	//svi porazi kad je bio "domacin"
	var sql1 = "SELECT m.datumVremePocetka FROM Mec m JOIN Timovi b on m.idTima2=b.id JOIN Korisnik k on b.idKorisnika=k.id JOIN TipMeca tm ON tm.id = m.idTipaMeca WHERE k.username=? AND m.rezultat2<m.rezultat1 AND m.idTurnira IS NOT NULL AND m.rezultat1 IS NOT NULL AND m.rezultat2 IS NOT NULL AND tm.naziv != 'Prijateljski'";	//svi porazi kad je bio "gost"

	db = otvoriKonekciju();

	var meseci = 
			{
				"1":0,
				"2":0,
				"3":0,
				"4":0,
				"5":0,
				"6":0,
				"7":0,
				"8":0,
				"9":0,
				"10":0,
				"11":0,
				"12":0
			}

	db.all(sql,username,function(err,rows)
	{
		////zatvoriKonekciju(db);

		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			////console.log(rows);

			for(var i = 0; i < rows.length; i++)
			{
				var pomocniDatum = new Date(rows[i].datumVremePocetka * 1000);
				////console.log(pomocniDatum.toDateString());
				var pomocniMesec = pomocniDatum.getMonth();
				////console.log(++pomocniMesec);
				meseci[pomocniMesec]++;
			}

			////console.log(meseci);

			db.all(sql1,username,function(err,rows)
			{
				////zatvoriKonekciju(db);

				if(err)
				{
					////console.log(err);
					callback(-1);
				}
				else
				{
					////console.log(rows);

					for(var i = 0; i < rows.length; i++)
					{
						var pomocniDatum = new Date(rows[i].datumVremePocetka * 1000);
						////console.log(pomocniDatum.toDateString());
						var pomocniMesec = pomocniDatum.getMonth();
						////console.log(++pomocniMesec);
						meseci[pomocniMesec]++;
					}

					////console.log(meseci);
					callback(meseci);
				}
			});
			
		}
	});

	
}

exports.BrojOsvojenihTurniraZaKorisnika = function(username,callback)
{
	var sql1 = "SELECT id FROM Korisnik WHERE username=?";

	db = otvoriKonekciju();

	db.all(sql1,username,function(err,rows)
	{
		if(err)
		{
			////console.log(err);
			callback(-1);
		}
		else
		{
			var idKorisnika = rows[0].id;

			var turniri = DajPobednikeLiga();
			var turniri2 = DajPobednikeKupova();
			var meseci = 
			{
				"1":0,
				"2":0,
				"3":0,
				"4":0,
				"5":0,
				"6":0,
				"7":0,
				"8":0,
				"9":0,
				"10":0,
				"11":0,
				"12":0
			}

			for(var i = 0; i < turniri.length; i++)
			{
				if(turniri[i].idPobednika == idKorisnika)
				{
					var pomocniDatum = new Date(turniri[i].vremeKraja * 1000);
					////console.log(pomocniDatum.toDateString());
					var pomocniMesec = pomocniDatum.getMonth();
					////console.log(++pomocniMesec);
					meseci[pomocniMesec]++;
				}
			}

			for(var i = 0; i < turniri2.length; i++)
			{
				if(turniri2[i].idPobednika == idKorisnika)
				{
					var pomocniDatum = new Date(turniri2[i].vremeKraja * 1000);
					////console.log(pomocniDatum.toDateString());
					var pomocniMesec = pomocniDatum.getMonth();
					////console.log(++pomocniMesec);
					meseci[pomocniMesec]++;
				}
			}

			callback(meseci);
		}
	});
}

exports.UkupanBrojIgara = function(callback)
{
	var sql = "SELECT Count(*) as broj FROM Igra WHERE obrisana=0";

	db = otvoriKonekciju();

	db.all(sql,function(err,rows)
	{
		if (err)
		{
			////console.log("Ukupan broj igara err");
			////console.log(err);
			callback(-1);
		}
		else
		{
			callback(rows[0].broj);
		}
	})
}

exports.UzmiSveAktuelneIZakazaneMeceve = function(limit, callback)
{
	var db = otvoriKonekciju();
	var danasnjiDatum = Math.floor(Date.now()/1000);

	var sql = "SELECT m.id, k1.username as korisnik1, k2.username as korisnik2, m.rezultat1, m.rezultat2, m.datumVremePocetka, t.naziv "+
	"FROM Mec m JOIN Turnir t ON m.idTurnira=t.id "+
	"JOIN Timovi b1 ON m.idTima1=b1.id JOIN Korisnik k1 ON k1.id=b1.idKorisnika "+
	"JOIN Timovi b2 ON m.idTima2=b2.id JOIN Korisnik k2 ON k2.id=b2.idKorisnika "+
	"WHERE (m.datumVremePocetka+m.trajanje >= "+danasnjiDatum+" AND m.datumVremePocetka < "+danasnjiDatum+") OR m.datumVremePocetka > "+danasnjiDatum+" "+
	"ORDER BY m.datumVremePocetka ";
	
	if (limit != null)
	{
		sql += "LIMIT "+limit;
	}
	
	db.all(sql,function(err,rows)
	{
		if (err)
		{
			////console.log("Uzmi sve aktuelne turnire err");
			//console.log(err);
			callback([]);
		}
		else
		{
			callback(rows);
		}
	})
}

exports.UzmiTimZaBota = function (idBota, callback)
{
	var db = otvoriKonekciju();
	var sql = "SELECT id,nazivTima,idIgre FROM Timovi WHERE idBota = ?";

	db.all(sql, idBota, function(err, rows)
	{
		if (err)
		{
			console.log(err);
			callback(-1);
		}
		else
		{
			if (rows.length == 0)
			{
				callback(0);
			}
			else
			{
				callback(rows[0]);
			}
		}
	})
}

exports.DaLiJeBanovan = function(username,callback)
{
	var db = otvoriKonekciju();
	var sql = "SELECT banovan FROM Korisnik WHERE username=?";

	db.all(sql, username, function(err, rows)
	{
		if (err)
		{
			console.log(err);
			callback(-1);
		}
		else
		{
			if (rows[0].banovan == 0)
			{
				callback(-1);
			}
			else
			{
				callback(1);
			}
		}
	})
}

/*
exports.UzmiSveTurnireSaRezultatima = function(callback)
{
	UzmiSveTurnire(function(statusTurniri)
	{
		if (statusTurniri == -1)
		{
			////console.log("Greska pri uzimanju svih turnira");
			callback(-1);
		}
		else
		{
			for (var i=0;i<)
		}
	});
}
*/