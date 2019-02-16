const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const fs = require('fs');
var path = require('path');
const dbPristup = require('./database.js');
var mail = require('./mailer');

var tokenGenerator = require('jsonwebtoken');
var tajniKljuc = '?tajniKljuc-Summanus1481';

const ruter = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
ruter.use(fileUpload());

ruter.use(express.static(path.join(__dirname,'public')));


// Middleware funckija za dobijanje tokena iz header-a za autorizaciju
function uzmiToken(req,res,next)
{
	// koristimo bearer hader za prosledjivanje tokena
	// Bearer header je u formatu:
	// Bearer token (Bearer - rec, token - token koji je poslat)
	const bearerHeader = req.headers["authorization"];
	// ako postoji bearer header
	if (typeof bearerHeader !== "undefined")
	{
		console.log("nasao token");
		// uzima se token
		const bearer = bearerHeader.split(" ");
		const token = bearer[1];

		// token se ubacuje u req i poziva naredna funkcija
		req.token = token;
		next();
	}
	else
	{
		console.log("nema tokena");
		// ukoliko bearer header ne postoji, zabranjuje se pristup trazenoj putanji
		res.sendStatus(403); // 403 - Forbidden
	}
}

function uzmiToken2(req,res,next)
{
	console.log("req body:" + req.body);
	if (req.body.token != undefined)
	{
		req.token = req.body.token;
		next();
	}
	else
	{
		res.sendStatus(403);
	}
}

// funkcija za upload fajla na server
// parametri:
// fajl: File (fajl koji se upload-uje),
// nazivFajla: string (nas naziv napravljen po principu npr. username_nazivBota)
// putanja: string (za botove = "botovi", za slike = "slike", za pravila = "pravila")
function SacuvajFajl(fajl, nazivFajla, putanja, callback)
{
	var putanjaDoFajla = path.normalize(__dirname+"/public/upload/"+putanja+"/"+nazivFajla);
	//console.log(putanjaDoFajla);
		res.sendStatus(403);
	
}

// funkcija za upload fajla na server
// parametri:
// fajl: File (fajl koji se upload-uje),
// nazivFajla: string (nas naziv napravljen po principu npr. username_nazivBota)
// putanja: string (za botove = "botovi", za slike = "slike", za pravila = "pravila")
function SacuvajFajl(fajl, nazivFajla, putanja, callback)
{
	var putanjaDoFajla = path.normalize(__dirname+"/public/upload/"+putanja+"/"+nazivFajla);
	//console.log(putanjaDoFajla);

	//console.log("Naziv fajla: "+nazivFajla);

	fajl.mv(putanjaDoFajla, function(err)
	{
		if (err)
		{
			console.log("sacuvaj fajl: " + err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

// nazivFajla: naziv fajla sa sve ekstenzijom
// putanja: "pravila","botovi","slike" 
function ObrisiFajl(nazivFajla,putanja,callback)
{
	var putanjaDoFajla = path.join(__dirname,"public","upload",putanja,nazivFajla);
	console.log("brisem fajl: "+putanjaDoFajla);

	fs.unlink(putanjaDoFajla,function(err)
	{
		if (err)
		{
			console.log("obrisi fajl: "+err);
			callback(-1);
		}
		else
		{
			callback(1);
		}
	});
}

ruter.get('/',function(req,res,next)
{
	res.render('index.html');
})

ruter.post('/registracija',urlencodedParser,function(req,res)
{
	var korisnik = req.body.korisnik;
	var admin = req.body.admin;
	
	// registracija korisnika/admina (provera da li vec postoji username i ubacivanje u bazu ako ne postoji)
	dbPristup.registracija(admin,korisnik, function(status)
	{
		// vraca se status koji je vratila funkcija za registraciju iz modula za pristup bazi
		// status = 1 - registrovan (generise se i vraca token)
		// status = 0 - vec postoji username
		// status = -1 - greska
		var odgovor;

		if (status == 1) 
		{
			tokenGenerator.sign(korisnik,tajniKljuc,function(err,token)
			{
				odgovor = { token: token, status: status, korisnik: korisnik };
				res.json(odgovor);
			});
		}
		else
		{
			odgovor = {status: status};
			res.json(odgovor);
		}
	});
	

});

// Prijava korisnika i admina
ruter.post('/prijava',urlencodedParser,function(req,res)
{
	console.log('proba');
	var korisnik = req.body.korisnik;
	var admin = req.body.admin;

	// provera username-a i poassword-a korisnika/admina u bazi
	dbPristup.prijava(admin,korisnik,function(status)
	{
		// status = 1 - OK
		// status = 0 - nema ga u bazi
		// status = -1 - greska
		// status = -2 - banovan
		// ako nema greske i u bazi je korisnik/admin
		if (status == 1)
		{
			// kreira se token
			tokenGenerator.sign(korisnik,tajniKljuc,function(err,token)
			{
				// vraca se token i status = 1 - OK
				res.json({status: status, token: token, korisnik: korisnik});
			});
		}
		else
		{
			// ako je nastala greska korisnika/admina nema u bazi, vraca se status = 0 
			res.json({status: status});
		}
	});

	
});

ruter.post('/uzmi-podatke',urlencodedParser,uzmiToken,function(req,res)
{

	var korisnik = req.body;
	var token = req.token;

	tokenGenerator.verify(token,tajniKljuc,function(err,dekodiraniKorisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			if (dekodiraniKorisnik.username == korisnik.username)
			{
				dbPristup.izmenapodataka(korisnik, function(status)
				{
					// vraca se status koji je vratila funkcija za azuriranje iz modula za pristup bazi
					// status = 1 - azuriran (generise se i vraca token)
					// status = -1 - greska
					var odgovor;

					if (status == 1) 
					{
						tokenGenerator.sign(korisnik,tajniKljuc,function(err,token)
						{
							odgovor = { token: token, status: status };
							res.json(odgovor);
						});
					}
					else
					{
						odgovor = {status: status};
						res.json(odgovor);
					}
				});
			}
			else
			{
				res.sendStatus(403);
			}
			
		}
		
	})
	
	// azuriranje podataka korisnika/admina (provera da li vec postoji username i ubacivanje u bazu ako ne postoji)
	
	

});


ruter.get('/korisnik/:username', function(req,res)
{
	dbPristup.uzmiPodatkeOKorisniku(req.params.username,function(status)
	{
		res.json(status);	
	});
	
});

ruter.post('/korisnik',uzmiToken,function(req,res)
{
	var token = req.token;
	
	tokenGenerator.verify(token, tajniKljuc,function(err,dekodiraniKorisnik)	
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var username = dekodiraniKorisnik.username;
			dbPristup.uzmiPodatkeOKorisniku(username, function(status)
			{
				res.json(status);
			})
		}
	
	})
})

ruter.get('/sveIgre',function(req,res)
{
	dbPristup.UzmiSveIgre(function(igre)
	{
		//console.log(igre);
        putanjaSlikeIgre = 'http://147.91.204.116:11000/upload/slike/igre/';
		for(i = 0; i < igre.length; i++)
		{
			nazivSlikeIgre = igre[i].nazivSlike;

			igre[i].nazivSlike = putanjaSlikeIgre + nazivSlikeIgre;
		}
		res.json(igre);
	});
});

ruter.post('/obrisiIgru', uzmiToken, function(req,res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var idIgre = req.body.idIgre;
			console.log("idIgre: " + idIgre);

			dbPristup.ObrisiIgruZaId(idIgre,function(status)
			{
				if (status == -1)
				{
					res.json(status);
				}
				else
				{					
					res.json(status);
				}
			});
		}
	});
});

ruter.get('/sviTipoviTurnira',function(req,res)
{
	dbPristup.UzmiSveTipoveTurnira(function(tipoviTurnira)
	{
		//console.log(tipoviTurnira);
		res.json(tipoviTurnira);
	});
});

ruter.get('/sviTurniri', function(req,res)
{
	dbPristup.UzmiSveTurnire(function(turniri)
	{
		//console.log('aaaaaaaaaaaaaaaaa');
		//console.log(turniri);
		res.json(turniri);
	});

	
});

ruter.post('/daLiJeGlavniAdmin',uzmiToken2,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		console.log(decoded);

		if (err)
		{
			res.sendStatus(403);
		}
		else
		{	
			if(decoded.username == "admin")
			{
				res.json(1);
			}
			else
			{
				res.json(-1);
			}
		}
							
	});
});

ruter.post('/dajSveAdmine',uzmiToken2,function(req,res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.DajSveAdmine(function(admini)
			{
				if (admini == -1)
				{
					res.json(admini);
				}
				else
				{					
					res.json(admini);
				}
			});
		}
	});
});



// req je formata:
// req.token, req.body: bot: idIgre,naziv; username (a mozda ne mora username)?
ruter.post('/dodajBota',uzmiToken, function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,korisnik)
	{
		console.log(korisnik);
		//console.log(req.body);
		//console.log("files: " + req.files.file);
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			// nadji id korisnika na osnovu username-a
			//dbPristup.uzmiPodatkeOKorisniku(req.body.username,function(status1)
			dbPristup.uzmiPodatkeOKorisniku(korisnik.username,function(status1)
			{

				// ako je status -1, nema korisnika sa tim username-om
				if (status1 == -1)
				{
					// console.log("status 1: "+ status1);
					res.json(status1);
				}
				// ako status nije -1, vracen je ceo objekat korisnik
				else
				{
					//console.log(dbPristup.ProveriPostojanjeBotaZaKorisnika);
					//console.log("korisnik: "+status1);
					//console.log(req.body.bot);
					// proveri da li vec postoji bot sa tim nazivom za ovog korisnik
					var nazivFajla = status1.username+"_"+req.body.naziv;
					var ekstenzija = req.files.file.name.substring(req.files.file.name.lastIndexOf('.'),req.files.file.name.length);
					nazivFajla = nazivFajla + ekstenzija;

					dbPristup.ProveriPostojanjeBotaZaKorisnika(status1.id,nazivFajla,function(status2)
					{
						// ako je status razlicit od 1
						// nastala je greska, ili vec postoji bot sa tim nazivom za tog korisnika 
						if (status2 != 1)
						{
							//console.log("status 2: "+ status2);
							res.json(status2);
						}
						else
						{
							console.log("postojanje prosao");
							var bot =
							{
								naziv : nazivFajla,
								idIgre : req.body.idIgre
							}
                            

							dbPristup.DodajBotaZaKorisnika(status1.id,bot, function(status3)
							{
								// ako je sve proslo u redu sa ubacivanjem podataka u bazu, bot moze da se uploaduje
								//console.log("status 3: "+JSON.stringify(status3));
								if (status3 != -1)
								{
									console.log("dodavanje u bazu prosao");

									// upload-uj bota (napravi posebnu funkciju, pa je pozovi)
									SacuvajFajl(req.files.file,bot.naziv,"botovi", function(status)
									{
										// nastala je greska sa uploadom, izbaci iz baze ovo sto si dodao
										if (status == -1)
										{
											dbPristup.ObrisiBotaZaKorisnika(status1.id,bot.naziv,function(status4)
											{
												if (status4 == -1)
												{
													//console.log("status4: " + status4);
													callback(status4);
												}
												else
												{
													console.log("brisanje iz baze prosao");
													res.json(status4);
												}
											});
										}
										else
										{
											console.log("cuvanje fajla prosao");
											//console.log(JSON.stringify(status3));
											res.json(status3);
										}
										
									});

									
								}
								// ako je nastala neka greska sa bazom, ne uploaduje se bot
								else
								{
                                    //console.log(status3);
									res.json(status3);
								}
								
							});
						}
						
					});
					
				}

				
			});

			
		}
	});
});

ruter.post('/uploadAvatara',uzmiToken, function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,korisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var username = korisnik.username;
			var file = req.files.slika;
            var ekstenzija = file.name.substring(file.name.lastIndexOf('.'),file.name.length);

            dbPristup.UzmiNazivSlikeKorisnika(username,function(staraSlika)
			{
				if (staraSlika == -1)
				{
					res.json(staraSlika);
				}
				else
				{
                    dbPristup.AzurirajSlikuKorisnika(username,username+ekstenzija,function(status)
                    {
                        if (status == -1)
                        {
                            res.json(status);
                        }
                        else
                        {
                            SacuvajFajl(file,username+ekstenzija,"slike",function(status1)
                            {
                                if (status1 == -1)
                                {
                                    dbPristup.AzurirajSlikuKorisnika(username, staraSlika, function(status2)
                                    {
                                        res.json(status1);
                                    });
                                }
                                else
                                {
                                    res.json(ekstenzija);
                                }
                            });
                        }
                    });
				}

			});


		}
	});
});

ruter.post('/probaAutorizacije', uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			res.json({ token: req.token, status: 1});
		}
	});
});

ruter.post('/upload/slike',urlencodedParser,function(req,res)
{
	//console.log("USAO");
	//console.log(req);

	SacuvajFajl(req.files.file, "" + req.files.file.name, "slike", function(status) {

		if(status == -1)
		{
			console.log("Nije uploadovano!");
		}
		else
		{
			console.log("Jeste uploadovano!");
		}
	});
});

// preuzima poslatu IGRU i ucitani FAJL
ruter.post('/dodajIgru', uzmiToken, function(req, res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var nazivFajla = "igra_" + req.body.naziv; // pravimo naziv fajla za bazu
			var ekstenzija = req.body.fileName.substring(req.body.fileName.lastIndexOf('.'), req.body.fileName.length);
			nazivFajla = nazivFajla + ekstenzija;	

			// saljemo naziv igre i naziv fajla sa pravilima
			dbPristup.UnesiIgru(req.body.naziv, nazivFajla, req.body.tekstEditor, function(status)
			{		
				// ako je sve proslo u redu sa ubacivanjem nove igre u bazu, fajl moze da se upload-uje
				if (status == 1)
				{
					// upload-u fajla sa pravilima
					SacuvajFajl(req.files.file, nazivFajla, "slike/igre", function(status)
					{
						// nastala je greska sa uploadom, izbaci iz baze ovo sto si dodao
						if (status == -1)
						{
							dbPristup.ObrisiIgru(igra.naziv, function(status1)
							{
								if (status1 == -1)
								{
									callback(status1);
								}
								else
								{
									res.json(status1);
								}
							});
						}
						else
						{
							res.json(status);
						}
					});
				}
				// ako je nastala neka greska sa bazom, ne uploaduje se fajl
				else
				{
					res.json(status);
				}
			});
		}
	});
});

ruter.post('/proveriNazivIgre', uzmiToken, function(req, res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var nazivIgre = req.body.nazivIgre;

			dbPristup.ProveriNazivIgre(nazivIgre, function(status)
			{
				// provera sta je vraceno

				if (status == -1)
				{
					res.json(status);
				}
				else
				{					
					// vracamo sve selektovane redove iz baze
					res.json(status);
				}
			});
		}
	});
});

ruter.post('/dodajTurnir',uzmiToken, function(req,res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.UnesiTurnir(req.body, function(status)
			{
				if(status == 1)
				{
					res.json(status);
				}
				else
				{
					
					res.json(status);
					
				}
			});

			dbPristup.UzmiSveMailAdrese(function(adrese)
			{
				var subject = "Olimijada - novi turnir";
				//var pocetak = new Date(req.body.datumVremePocetka * 1000);
				//var poruka = req.body.naziv + " pocinje " + pocetak;
						
				for(var i = 0; i < adrese.length; i++)
				{
					mail.sendMail(adrese[i].email,subject,req.body.porukaZaMail);
				}

			});
		}
	});
});

// uzmi botove korisnika
ruter.get('/:username/botovi',uzmiToken, function(req,res)
{
    //console.log("username/botovi");
	tokenGenerator.verify(req.token, tajniKljuc,function(err,korisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			//var username = req.params.username;
			var username = korisnik.username;
			//console.log(username);
			//console.log(korisnik.username);
			
			//console.log("isti su");
			dbPristup.uzmiPodatkeOKorisniku(username,function(status)
			{
				if (status == -1)
				{
					res.json(status);
				}
				else
				{
					dbPristup.UzmiSveBotoveKorisnika(status.id,function(status2)
					{
						//console.log("uzmi sve botove korisnika: "+JSON.stringify(status2));
						res.json(status2);
					})
				}
			})

			
		}
	});
})


// uzmi botove korisnika za odredjeni turnir
ruter.post('/:username/botovi', uzmiToken, function(req,res)
{
    //console.log("username/botovi");
	tokenGenerator.verify(req.token, tajniKljuc,function(err,korisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var username = korisnik.username;

				var idIgre = req.body.idIgre;
				console.log("jjfdsnkmfnsjfmkdsfdsfjdsk");
				console.log(idIgre);

				dbPristup.uzmiPodatkeOKorisniku(username,function(status)
				{
					if (status == -1)
					{
						console.log("ne radi");
						
						res.json(status);
					}
					else
					{
						console.log("radi");
						console.log(status.id);
						dbPristup.UzmiSveBotoveKorisnikaZaIgru(status.id,idIgre,function(status2)
						{
							//console.log("uzmi sve botove korisnika: "+JSON.stringify(status2));
							res.json(status2);
						})


					}
				})
			
		}
	});
})

// req: body: idBota - treba da bude
// trenutno: req: body: nazivBota, username
// prepraviti funkciju za brisanje bota da prihvata tacan ID bota i da na osnovu toga brise
// azurirati dodavanje bota shodno tome
// azurirati ovo brisanje shodno tome
ruter.post("/obrisiBota",uzmiToken, function(req,res)
{
	var token = req.token;
	tokenGenerator.verify(token, tajniKljuc,function(err,dekodiraniKorisnik)
	{
		if (err)
		{
			console.log("token nije validan");
			res.sendStatus(403);
		}
		else
		{
			dbPristup.uzmiPodatkeOKorisniku(dekodiraniKorisnik.username,function(korisnik)
			{
				// ako je vratilo gresku
				if (korisnik == -1)
				{
					res.json(korisnik);
				}
				else
				{
					dbPristup.ObrisiBotaZaKorisnika(korisnik.id,req.body.idBota,function(status)
					{
						if (status != 1)
						{
							console.log("Nisam uspeo iz baze da obrisem bota");
							res.json(status);

						}
						else 
						{
							//console.log("bot obrisan iz baze, brisem ga fizicki");
							//console.log(path.join(__dirname,"public","upload","botovi",req.body.username+"_"+req.body.nazivBota));
							ObrisiFajl(req.body.nazivBota,"botovi",function(statusBrisanje)
							{
								if (statusBrisanje == -1)
								{
									console.log("nisam uspeo fizicki da obrisem bota");
									res.json(-1);
								}
								else
								{
									res.json(1);
								}
							})
							
							
							/*
							fs.unlink(path.join(__dirname,"public","upload","botovi",req.body.nazivBota),function(err)
							{
								if (err)
								{
									console.log("nisam uspeo fizicki da obrisem bota");
									console.log(err);
									res.json(-1);
								}
								else
								{
									res.json(1);
								}
							});
							*/
						}
					});
				}
			})
			
		}
	});
});

// req: body: idBota
//		files: file
// prvo se uzmu podaci o botu iz baze
// cuva se fajl pod istim imenom
// menja se u bazi datum izmene
// AKO ISKORISTIM SVOJ TOKEN (VAZECI)
// I NRKAKO USPEM U POST DA UBACIM DRUGI ID?, IZMENICE TOG BOTA, BEZ OBZIRA STO TO NIJE MOJ BOT
ruter.post('/izmeniBota',uzmiToken,function(req,res)
{
	var token = req.token;
	tokenGenerator.verify(token,tajniKljuc,function(err)
	{
		if (err)
		{
			console.log("Token nije validan");
			res.sendStatus(403);
		}
		else
		{
			// statusUzmiPodatke - -1 ako je nastala greska, podatke o botu ako je sve ok
			dbPristup.UzmiPodatkeOBotu(req.body.idBota,function(statusUzmiPodatke)
			{
				if (statusUzmiPodatke == -1)
				{
					console.log("nisam uspeo da uzmem podatke");
					res.json(statusUzmiPodatke);
				}
				else
				{
					var nazivStarogFajla = statusUzmiPodatke.nazivFajla;
					var nazivNovogFajla = req.files.file.name;


					// novo ime fajla se pravi tako sto se uzima ime starog fajla bez ekstenzije, a dodaje mu se ekstenzija novog fajla
					var novoIme = nazivStarogFajla.substring(0,nazivStarogFajla.lastIndexOf('.'))+nazivNovogFajla.substring(nazivNovogFajla.lastIndexOf("."),nazivNovogFajla.length);
					console.log("novo ime: "+novoIme);
					// brisem stari fajl
					ObrisiFajl(nazivStarogFajla,"botovi", function(statusBrisanje)
					{
						if (statusBrisanje == 1)
						{
							// cuvam fajl
							SacuvajFajl(req.files.file,novoIme,"botovi",function(statusCuvanje)
							{
								// ako je nastala greska pri cuvanju
								if (statusCuvanje == -1)
								{
									console.log("nisam sacuvao fajl");
									res.json(statusCuvanje);
								}
								else
								{
									// statusIzmeni - -1 ako je greska, 1 ako je sve ok
									dbPristup.IzmeniBota(req.body.idBota,novoIme,function(statusIzmeni)
									{
										if (statusIzmeni == -1)
										{
											console.log("nisam uspeo da izmenim bota");
											res.json(statusIzmeni);
										}
										else
										{
											res.json(statusIzmeni);
										}
										
										
									});
								}
							})
						}
						else
						{
							res.json(statusBrisanje);
						}
					})
					
					

				}
			});
			
		}
	})
});


ruter.post('/otkaziTurnir', uzmiToken, function(req,res)
{
	console.log("otkaziTurnir: "+req.body.id);
	var id = req.body.id;

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.OtkaziTurnir(id,function(status)
			{
				if(status == 1)
				{
					res.json(status);
				}
				else
				{
					res.json(status);
				}
			});
		}
	});
});

ruter.post('/dajTurnirZaId', uzmiToken, function(req,res)
{
	console.log("dajTurnirSaIdom: "+req.body.id);
	var id = req.body.id;

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.DajTurnirZaId(id,function(turnir)
			{
				res.json(turnir);
			});
		}
	});
});

ruter.post('/azurirajTurnir',uzmiToken,function(req,res)
{
	console.log("desava se");
	console.log("turnir:" + req.body);
	var turnir = req.body;
	console.log(turnir.naziv);

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.AzurirajTurnir(turnir,function(status)
			{
				console.log(status);
			});
		}
	});
});

// ruta za dobijanje svih meceva na turniru ciji je id = id
ruter.get("/turniri/:id/mecevi",uzmiToken,function(req,res)
{
	var idTurnira = req.params.id;
	var token = req.token;

	tokenGenerator.verify(token,tajniKljuc,function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.UzmiSveMeceveSaTurnira(idTurnira,function(statusSviMecevi)
			{
				console.log("Svi mecevi: "+statusSviMecevi);
				res.json(statusSviMecevi);
			})
		}
	})
})

// ruta za dobijanje svih meceva za turnir u formatu modela MecZaPrikaz na Front end-u kod Admina
ruter.post("/meceviZaSelektovaniTurnir", uzmiToken, function(req, res)
{
	var token = req.token;
	tokenGenerator.verify(token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.UzmiSveMeceveZaPrikazZaSelTurnir(req.body.idTurnira, function(statusSviMecevi)
			{
				res.json(statusSviMecevi);
			});
		}
	});
});

// ruta za dobijanje svih meceva korisnika ciji je username = username
ruter.get("/:username/mecevi",uzmiToken, function(req,res)
{
	var username = req.params.username;
	var token = req.token;
	
	tokenGenerator.verify(token,tajniKljuc,function(err,dekodiraniKorisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var username = dekodiraniKorisnik.username;
				dbPristup.uzmiPodatkeOKorisniku(username,function(statusKorisnik)
				{
					if (statusKorisnik == -1)
					{
						console.log("Nisam uspeo da dobijem podatke o korisniku");
						res.json([]);
					}
					else
					{
						dbPristup.UzmiSveMeceveKorisnika(statusKorisnik.id,function(statusSviMecevi)
						{
							if (statusSviMecevi == -1)
							{
								console.log("Nisam uspeo da dobijem meceve");
								res.json([]);
							}
							else
							{
								console.log("Svi mecevi: "+JSON.stringify(statusSviMecevi));
								res.json(statusSviMecevi);
							}
							
						})
					}
				})
		
			
			
		}
	})
})

// vraca response formata:
// turnir: turnir, pobednik: korisnik
ruter.get('/turniri/rezultati',uzmiToken, function(req,res)
{
	var token = req.token;

	// verifikuj token

	dbPristup.DajPobednikeProslihTurnira(function(rezultati)
	{
		if (rezultati == -1)
		{
			console.log("nije pokupio rezultate, greska");

		}
		res.json(rezultati);
	})
});

ruter.post('/izmeniFaq', uzmiToken, function(req, res)  // david
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.IzmeniFaq(req.body.id, req.body.pitanje, req.body.odgovor, function(odgovor)
			{
				if (odgovor == -1)
				{
					console.log("Greska pri brisanju novog pitanja/odgovora za FAQ!");
					console.log(odgovor);

					res.json(odgovor);
				}
				else
				{
					res.json(odgovor);
				}
			});
		}
	});
});

ruter.post('/obrisiFaq', uzmiToken, function(req, res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.ObrisiFaq(req.body.id, function(odgovor)
			{
				if (odgovor == -1)
				{
					console.log("Greska pri brisanju novog pitanja/odgovora za FAQ!");
					res.json(odgovor);
				}
				else
				{
					res.json(odgovor);
				}
			});
		}
	});
});

ruter.post('/dodajFaq', uzmiToken, function(req, res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			console.log(req.body.pitanje);
			dbPristup.dodajPitanjeOdgovorZaFaq(req.body.pitanje, req.body.odgovor, function(odgovor)
			{
				if (odgovor == -1)
				{
					console.log("Greska pri dodavanju novog pitanja/odgovora za FAQ!");
					console.log(odgovor);

					res.json(odgovor);
				}
				else
				{
					res.json(odgovor);
				}
			});
		}
	});
});

// promeni da daje rezultate svih turnira koji su s zavrsili
/*
ruter.get('/:idTurnira/rezultati',uzmiToken, function(req,res)
{
	var token = req.token;
	var idTurnira = req.params.idTurnira;

	dbPristup.DajTurnirZaId(idTurnira, function(turnir)
	{
		if (turnir == -1)
		{
			res.json(-1);
		}
		else
		{
			// ako je liga
			if (turnir.idTipa == 1)
			{
				dajRezultateLige(idTurnira,function(statusLiga)
				{
					
				});
			}
			else
			{
				dajRezultateKupa(idTurnira, function(statusKup)
				{
					
				});
			}
		}
	});
});
*/

ruter.post('/dajSveKorisnike', uzmiToken2, function(req,res)
{
	console.log('bokunda' + JSON.stringify(req.headers));
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.DajSveKorisnike(function(korisnici)
			{
				console.log(korisnici);
				res.json(korisnici);
			});
		}
	});
});

ruter.post('/banujKorisnika', uzmiToken, function(req,res)
{
	var korisnik = req.body;
	console.log(korisnik);

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.BanujKorisnika(korisnik,function(status)
			{
				res.json(status);
			});

			var subject = "Olimijada - zabrana igranja";

			console.log(korisnik.email);
			console.log(subject);
			console.log(korisnik.banPoruka);

			mail.sendMail(korisnik.email,subject,korisnik.banPoruka);
		}
	});
});

ruter.post('/ukloniBan', uzmiToken, function(req,res)
{
	var korisnik = req.body;

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.BanujKorisnika(korisnik,function(status)
			{
				res.json(status);
			});

			var subject = "Olimijada - uklonjena zabrana";

			console.log(korisnik.email);
			console.log(subject);
			console.log(korisnik.banPoruka);

			mail.sendMail(korisnik.email,subject,korisnik.banPoruka);
		}
	});
});

ruter.post('/dajSvePrijaveZaTurnir', uzmiToken, function(req,res)
{
	console.log("idturnira: " + req.body.id);
	var id = req.body.id;

	console.log("jel poziva? index");

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.DajSvePrijaveZaTurnir(id,function(prijave)
			{
				console.log("sta se desava ovde?");
				res.json(prijave);
			});
		}
	});
});

ruter.post('/prijaviKorisnikaNaTurnir', uzmiToken, function(req,res)
{
	//console.log("idturnira: " + req.body.id);
	//var id = req.body.id;

	console.log("jel poziva? index");

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{

			dbPristup.PrijaviKorisnikaNaTurnir(req.body,function(callback)
			{
				res.json(callback);
			});
		}
	});
});

ruter.post('/testirajBota', uzmiToken, function(req,res)
{
	var token = req.token;
	var idBota = req.body.idBota;

	tokenGenerator.verify(token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.UzmiPodatkeOBotu(idBota,function(bot)
			{
				if (bot == -1)
				{
					res.json(bot);
				}
				else
				{
					dbPristup.UzmiTipMeca("Testiranje",function(tipMeca)
					{
						console.log(tipMeca);
						if (tipMeca == -1)
						{
							console.log("nastala greska");
							res.json(tipMeca);
						}
						else
						{
							dbPristup.DajRandomBota(bot.idIgre,function(idRandomBota)
							{
								if (idRandomBota == -1)
								{
									res.json(idRandomBota);
								}
								else
								{
									console.log("tip meca id: ",tipMeca.id)
									dbPristup.UnesiMecZaTestiranje(idBota,idRandomBota,tipMeca.id,function(statusUnet)
									{
										res.json(statusUnet);
									})
								}
							});
						}
					})
				}
			})
			
		}
	})
});

ruter.get('/mecevi/:id', function(req,res)
{
	var id = req.params.id;

	dbPristup.UzmiPodatkeOMecu(id,function(mec)
	{
		res.json(mec);
	})
})

// šaljemo sva pitanja i odgovore za FAQ korisničkoj aplikaciji
ruter.get('/svaPitanjaIOdgovoriKorisnik', function(req, res)
{
	dbPristup.dajSvaPitanjaIOdgovore(function(odg)
	{
		if (odg == -1)
		{
			res.json(odg);
		}
		else
		{
			res.json(odg);
		}
	});
});

ruter.post('/otkaziPrijavuZaTurnir',uzmiToken,function(req,res)
{
	console.log("braaaaaaaaaaaaaaaaaaaaa");
	console.log(req.body.usernameKorisnika);
	tokenGenerator.verify(req.token, tajniKljuc, function(err,dekodiraniKorisnik)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{
			
				dbPristup.OtkaziPrijavu(dekodiraniKorisnik.usernameKorisnika,function(callback)
				{
					res.json(callback);
				});
			
			
		}
	});
});

/*
// dodaj token
ruter.post('/kreirajMeceve',function(req,res)
{
	var idTurnira = req.body.idTurnira;

	dbPristup.DajNazivTipaTurnira(idTurnira, function(naziv)
	{
		if (naziv == -1)
		{
			res.json(naziv);
		}
		else
		{
			
			if (naziv.toUpperCase() == "LIGA")
			{
				dbPristup.NapraviMeceveZaLigu2(idTurnira, function(statusMeceviZaLigu)
				{
					res.json(statusMeceviZaLigu);
				})
			}
			else
			{
				// testiranje pravljenja pocetnih meceva za kup
				dbPristup.NapraviKup(idTurnira,function(statusMeceviZaKup)
				{
					res.json(statusMeceviZaKup);
				})
			}
			
		}
	})

	
})
*/

ruter.get('/svaPitanjaIOdgovori', uzmiToken, function(req, res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.dajSvaPitanjaIOdgovore(function(odg)
			{
				if (odg == -1)
				{
					res.json(odg);
				}
				else
				{
					res.json(odg);
				}
			});
		}
	});
});

ruter.post('/dajPrijaveZaTurnir', uzmiToken, function(req,res)
{
	console.log("jel se poziva idnex");
	var idTurnira = req.body.idTurnira;
	console.log("idTurnira: " + idTurnira);

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.DajPrijaveZaTurnir(idTurnira,function(odg)
			{
				if (odg == -1)
				{
					res.json(odg);
				}
				else
				{
					res.json(odg);
				}
			});
		}
	});
});

ruter.post('/obrisiNalog', uzmiToken, function(req,res)
{
	console.log("jel poziva brisanje naloga index");
	var username = req.body.username;
	console.log(username);

	tokenGenerator.verify(req.token, tajniKljuc, function(err,dekodiraniKorisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
		
			var username = dekodiraniKorisnik.username;
				dbPristup.ObrisiNalog(username,function(odg)
				{
					if (odg == -1)
					{
						res.json(odg);
					}
					else
					{
						res.json(odg);
					}
				});
			
			
		}
	});
});

// NAPRAVI RUTU IZNAD OVE METODE
/*
ruter.get('*',function(req,res)
{
	console.log(req.headers.host);
	const port = req.headers.host.split(':')[1];

	if (port == "11000")
	{
		res.sendFile("index.html", { root: './publicKorisnik' });
	}
	else
	{
		res.sendFile("index.html", { root: './publicAdmin'});
	}
});
*/

// OVE RUTE NECE RADITI
ruter.post('/posaljiMail', function(req,res)
{
	var pom = req.body;
	console.log(pom);

	mail.sendMail(pom.mail,pom.subject,pom.poruka);
});





module.exports = ruter;