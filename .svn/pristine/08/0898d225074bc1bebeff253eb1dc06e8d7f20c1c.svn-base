
const express = require('express');
const http = require('http');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const fs = require('fs');
var path = require('path');
const dbPristup = require('./database.js');
var mail = require('./mailer');
var google = require('googleapis');
//var OAuth2 = google.auth.OAuth2;
//var tokMeca = require('./tokMeca').tokMeca;

var tokenGenerator = require('jsonwebtoken');
var tajniKljuc = '?tajniKljuc-Summanus1481';

const ruter = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
ruter.use(fileUpload());

ruter.use(express.static(path.join(__dirname,'public')));

//var oatu2 = new OAuth2Client()

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
		////////console.log("nasao token");
		// uzima se token
		const bearer = bearerHeader.split(" ");
		const token = bearer[1];

		// token se ubacuje u req i poziva naredna funkcija
		req.token = token;
		next();
	}
	else
	{
		////////console.log("nema tokena");
		// ukoliko bearer header ne postoji, zabranjuje se pristup trazenoj putanji
		res.sendStatus(403); // 403 - Forbidden
	}
}

function uzmiToken2(req,res,next)
{
	////////console.log("req body:" + req.body);
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
	//////////console.log(putanjaDoFajla);

	////////console.log("Naziv fajla: "+nazivFajla);
	////////console.log(fajl);

	/*
	if (fajl.truncated)
	{
		//////console.log("truncated");
		callback(-2);
	}
	else
	{
		*/
		fajl.mv(putanjaDoFajla, function(err)
		{
			//////console.log("upload zavrsen");
			if (err)
			{
				//////console.log("sacuvaj fajl: " + err);
				callback(-1);
			}
			else
			{
				//////console.log("callback 1");
				callback(1);
			}
		});
		/*
	}
	*/
	
}

// nazivFajla: naziv fajla sa sve ekstenzijom
// putanja: "pravila","botovi","slike" 
function ObrisiFajl(nazivFajla,putanja,callback)
{
	var putanjaDoFajla = path.join(__dirname,"public","upload",putanja,nazivFajla);
	////////console.log("brisem fajl: "+putanjaDoFajla);

	fs.unlink(putanjaDoFajla,function(err)
	{
		if (err)
		{
			////////console.log("obrisi fajl: "+err);
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
	res.sendFile('index.html', {root: __dirname});
})

ruter.post('/registracija',urlencodedParser,function(req,res)
{
	var korisnik = req.body.korisnik;
	var admin = req.body.admin;
	
	// registracija korisnika/admina (provera da li vec postoji username i ubacivanje u bazu ako ne postoji)
	dbPristup.registracija(admin,korisnik, function(status,hash)
	{
		// vraca se status koji je vratila funkcija za registraciju iz modula za pristup bazi
		// status = 1 - registrovan (generise se i vraca token)
		// status = 0 - vec postoji username
		// status = -1 - greska
		var odgovor;

		if (status == 1 && admin == 0) 
		{ // "5d"
			////////console.log(req.headers.origin);
			//var poruka = "Kod za verifikaciju email adrese je: "+hash.slice(1,6);
			var poruka = "Kako biste aktivirali Vaš nalog, pratite sledeći link: \n "+
			req.headers.origin +"/verifikacija/" + hash;
			mail.sendMail(korisnik.email,"Olimijada - Verifikacija email adrese", poruka);
			res.json({status: status});

		/**
		 * tokenGenerator.sign({admin: admin, username: korisnik.username, password: korisnik.password },tajniKljuc, {expiresIn: "5d" },function(err,token)
			{
				odgovor = { token: token, status: status, username: korisnik.username };
				res.json(odgovor);
			});
		 */
			
		}
		else
		{
			odgovor = {status: status};
			res.json(odgovor);
		}
	});
	

});

ruter.post('/autorizacija', uzmiToken, function(req,res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err,rows)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			res.json(1);
		}
	})
})

// prenos utakmica
// AKO POCNE DA PRAVI PROBLEME, PREBACITI DA RADI SA ASINHRONOM VERIFIKACIJOM TOKENA!!!!!
/*
ruter.post('/prenos', function(req,res)
{
	var idMeca = req.body.id;
	var username = null;


	dbPristup.UzmiPodatkeOMecu(idMeca, function(mec)
	{
		if (mec != -1 && mec != 0)
		{
			// prijateljski mec i testiranje mogu da gledaju samo oni koji su ulogovani
			if (mec.tipMeca.toUpperCase() == "PRIJATELJSKI" || mec.tipMeca.toUpperCase() == "TESTIRANJE")
			{
				// ako ima authorization header, proveravam da li je token legitiman
				if (req.headers['authorization'] != undefined)
				{
					var token = req.headers['authorization'].split(' ')[1];
					var dekodiraniKorisnik;

					try {
						dekodiraniKorisnik = tokenGenerator.verify(token, tajniKljuc);
					}
					catch(err)
					{
						res.sendStatus(403);
						return;
					}
					
					if (dekodiraniKorisnik != undefined && dekodiraniKorisnik != null)
					{
						username = dekodiraniKorisnik.username;
					}

					/*tokenGenerator.verify(token,tajniKljuc,function(err, dekodiraniKorisnik)
					{
						if (err)
						{
							res.sendStatus(403);
						}
						else
						{
							username = dekodiraniKorisnik.username;


						}
					})	
					// ovde se zavrsava komentar
				}
				// ako nema authorization header 
				else
				{
					res.json(0);

					return;
					////////console.log("nakon returna 1");
				}

				////////console.log("nakon returna 2");

				if (mec.tipMeca.toUpperCase() == "TESTIRANJE")
				{
					if (mec.korisnik1 != username && mec.korisnik2 != username)
					{
						res.json(0);
						return;
					}
					else
					{
						if (mec.korisnik1 == username)
						{
							mec.korisnik2 = '';
						}
						else
						{
							mec.korisnik1 = '';
						}
					}
					
				}
				else if (mec.tipMeca.toUpperCase() == "PRIJATELJSKI")
				{
					if (mec.korisnik1 != username && mec.korisnik2 != username)
					{
						res.json(0);
						return;
					}
					
				}
			}
			// resBody je za krajnji res.json()
			var danasnjiDatum = Math.floor(Date.now()/1000);

			if (mec.tokMeca == null || mec.tokMeca == '')
			{
				////////console.log("MEC NULL");
				var resBody = {
					korisnik1:  { ime: mec.korisnik1, pobednik: -1 },
					korisnik2: { ime: mec.korisnik2, pobednik: -1} ,
					datumVremePocetka: mec.datumVremePocetka,
					tokMeca: {}
				}
	
	
				var options = {
					host: req.hostname,
					// promeni za server
					port: 8008,
					path: '/prenos',
					method: 'POST',
					headers: {
						'Content-Type':'application/json'
					}
				}
			
				// u sustini ne sluzi nicemu sad jer su podaci isti za svaki mec
				var reqBody = {
					id: idMeca
				}
				
				var tok = [];
				var httpreq = http.request(options, function(httpres)
				{
					
					httpres.on('data', function(chunk)
					{
						tok.push(chunk);
					})
					
					httpres.on('end',function()
					{
						var odgovor = JSON.parse(Buffer.concat(tok).toString());
						resBody.tokMeca = odgovor.tokMeca;
						resBody.korisnik1.pobednik = odgovor.rez1;
						resBody.korisnik2.pobednik = odgovor.rez2;
	
						// unosi rezultate meca tako sto se salje prvo vrednost "pobednik" za igrac1 i ista vrednost za igrac2
						dbPristup.UnesiRezultateMeca(idMeca,odgovor.rez1, odgovor.rez2, odgovor.tokMeca, odgovor.tokMeca.trajanje, function(status)
						{
							if (status == -1)
							{
								res.json(-1);
							}
							else
							{
								res.json(resBody);
							}
						})
						
						
					})
	
					httpres.on('error',function()
					{
						res.json(-1);
					})
				})
	
				httpreq.on('error',function()
				{
					res.json(-1);
				})
	
				httpreq.write(JSON.stringify(reqBody));
				httpreq.end();
			}
			else
			{
				
				var resBody = 
				{
					korisnik1: { ime: mec.korisnik1, pobednik: -1} ,
					korisnik2: {ime: mec.korisnik2, pobednik: -1},
					datumVremePocetka: mec.datumVremePocetka,
					tokMeca: JSON.parse(mec.tokMeca)

				}

				////////console.log("res body");
				////////console.log(resBody);

				resBody.korisnik1.pobednik = mec.rezultat1;
				resBody.korisnik2.pobednik = mec.rezultat2;


				res.json(resBody);
			}
			
		}
		else
		{
			res.json(mec);
		}
	})

	
})

*/

// Prijava korisnika i admina
ruter.post('/prijava',function(req,res)
{
	////////console.log('proba');
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
			// kreira se token "5d"
			tokenGenerator.sign({admin: admin, username: korisnik.username},tajniKljuc,{expiresIn: "5d"},function(err,token)
			{
				// vraca se token i status = 1 - OK
				res.json({status: status, token: token, username: korisnik.username});
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
					{ // "5d"
						tokenGenerator.sign(korisnik,tajniKljuc,{expiresIn: "5d"}, function(err,token)
						{
							odgovor = { token: token, status: status, username: korisnik.username };
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
	////////console.log(req.params);

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
		////////console.log(dekodiraniKorisnik);
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
		/*
        putanjaSlikeIgre = 'http://147.91.204.116:11000/upload/slike/igre/';
		for(i = 0; i < igre.length; i++)
		{
			nazivSlikeIgre = igre[i].nazivSlike;

			igre[i].nazivSlike = putanjaSlikeIgre + nazivSlikeIgre;
		}
		*/

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
			////////console.log("idIgre: " + idIgre);

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

ruter.post('/izmeniIgru', uzmiToken, function(req,res) // david
{
	////////console.log("Izmeni igru :");
	////////console.log(req.body.nazivSlike);
	////////console.log(req.body.pozadina);
	////////console.log(req.body.pozadinaTimovi);
	

	tokenGenerator.verify(req.token, tajniKljuc, function(err,dekodiraniKorisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var username = dekodiraniKorisnik.username;
			var id = req.body.id;
			var naziv = req.body.naziv;
			var pravila = req.body.pravila;
			var nazivSlike = req.body.nazivSlike;
			var pozadina = req.body.pozadina;
			var pozadinaTimovi = req.body.pozadinaTimovi;

			if (nazivSlike == 'null')
			{
				nazivSlike = null;
			}

			if (pozadina == 'null')
			{
				pozadina = null;
			}

			if (pozadinaTimovi == 'null')
			{
				pozadinaTimovi = null;
			}
			
			dbPristup.IzmeniIgru(id,naziv,pravila,nazivSlike,pozadina,pozadinaTimovi, function(status)
			{

				if (status == -1)
				{
					res.json(status);
				}
				else
				{
					if (req.files != null)
					{
						// cuva sliku igre
						if (req.files.slikaIgre != undefined && req.files.slikaIgre != null)
						{
							SacuvajFajl(req.files.slikaIgre, nazivSlike, "slike/igre",function(statusSlikaIgre)
							{
								if (statusSlikaIgre == 1)
								{
									// cuva sliku pozadine

									if (req.files.slikaPozadine != undefined && req.files.slikaPozadine != null)
									{
										SacuvajFajl(req.files.slikaPozadine, pozadina,"slike/igre/pozadine", function(statusSlikaPozadine)
										{
											if (statusSlikaPozadine == 1)
											{
												// cuva sliku pozadine za timove

												if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
												{
													SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
													{
														if (statusSlikaPozadineTimovi == -2)
														{
															/*res.SendStatus(413)*/ res.json(-1);
														}
														else
														{
															res.json(statusSlikaPozadineTimovi);
														}
														
													})
												}
												// ako nece sliku pozadine timova da menja
												else
												{
													res.json(statusSlikaPozadine);
												}
												
											}
											else
											{
												if (statusSlikaPozadine == -2)
												{
													/*res.SendStatus(413)*/ res.json(-1);
												}
												else
												{
													res.json(statusSlikaPozadine);
												}
												
											}
										})
									}
									// ako nece pozadinu, ali hoce pozadinu za timove
									else if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
									{
										SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
										{

											if (statusSlikaPozadineTimovi == -2)
											{
												/*res.SendStatus(413)*/ res.json(-1);
											}
											else
											{
												res.json(statusSlikaPozadineTimovi);
											}
											
										})
									}
									else
									{
										res.json(statusSlikaIgre);
									}
									
								}
								else
								{
									if (statusSlikaIgre == -2)
									{
										/*res.SendStatus(413)*/ res.json(-1);
									}
									else
									{
										res.json(statusSlikaIgre);
									}
									
								}
							})
						

						}
						else if (req.files.slikaPozadine != undefined && req.files.slikaPozadine != null)
						{
							SacuvajFajl(req.files.slikaPozadine, pozadina,"slike/igre/pozadine", function(statusSlikaPozadine)
							{
								if (statusSlikaPozadine == 1)
								{
									// cuva sliku pozadine za timove

									if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
									{
										SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
										{
											if (statusSlikaPozadineTimovi == -2)
											{
												/*res.SendStatus(413)*/ res.json(-1);
											}
											else
											{
												res.json(statusSlikaPozadineTimovi);
											}
											
										})
									}
									// ako nece sliku pozadine timova da menja
									else
									{
										res.json(statusSlikaPozadine);
									}
									
								}
								else
								{
									if (statusSlikaPozadine == -2)
									{
										/*res.SendStatus(413)*/ res.json(-1);
									}
									else
									{
										res.json(statusSlikaPozadine);
									}
									
								}
							})
						}
						else if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
						{
							SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
							{
								if (statusSlikaPozadineTimovi == -2)
								{
									/*res.SendStatus(413)*/ res.json(-1);
								}
								else
								{
									res.json(statusSlikaPozadineTimovi);
								}
								
							})
						}
						
					}
					else
					{
						res.json(status);
					}
				}
				
				
			});
		
		}
	})

	
		/*

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			////////console.log(req.files);

			// ukoliko menjamo i fajl
			if (req.files != null && req.files.length > 0)
			{
				////////console.log("Menjam i sliku za igru");

				ObrisiFajl(req.body.nazivSlike, "slike/igre/", function(statusBrisanje)
				{
					if (statusBrisanje == 1)
					{
						// pravimo naziv fajla za bazu
						var nazivFajla = "igra_" + req.body.naziv;
						var ekstenzija = req.files.file.name.substring(req.files.file.name.lastIndexOf('.'), req.files.file.name.length);
						////////console.log(ekstenzija);
						nazivFajla = nazivFajla + ekstenzija;

						// cuvam fajl
						var novoIme = nazivFajla;
						SacuvajFajl(req.files.file, novoIme, "slike/igre", function(statusCuvanje)
						{
							// ako je nastala greska pri cuvanju
							if (statusCuvanje == -1)
							{
								////////console.log("nisam sacuvao novi fajl za igru");
								res.json(statusCuvanje);
							}
							else
							{
								dbPristup.IzmeniIgru(req.body.id, req.body.naziv, novoIme, req.body.pravila, req.body.pozadina, function(statusIzmeniIgru)
								{
									if (statusIzmeniIgru == -1)
									{
										////////console.log("Nije uspela izmena igre sa ID-jem:");
										////////console.log(req.body.id);

										res.json(statusIzmeniIgru);
									}
									else
									{
										res.json(statusIzmeniIgru);
									}
								});
							}
						});
					}
					else
					{
						res.json(statusBrisanje);
					}
				});
			}
			else // menjamo samo naziv i/ili pravila
			{
				////////console.log("Menjam samo naziv i/ili pravila!");

				var nazivFajla = "igra_" + req.body.naziv;
				var ekstenzija = req.body.nazivSlike.substring(req.body.nazivSlike.lastIndexOf('.'), req.body.nazivSlike.length);
				nazivFajla = nazivFajla + ekstenzija;

				dbPristup.IzmeniIgru(req.body.id, req.body.naziv, nazivFajla, req.body.pravila, req.body.pozadina, function(statusIzmeniIgru)
				{
					if (statusIzmeniIgru == -1)
					{
						////////console.log("Nije uspela izmena igre sa ID-jem:");
						////////console.log(req.body.id);

						res.json(statusIzmeniIgru);
					}
					else
					{
						res.json(statusIzmeniIgru);
					}
				});
			}
		}
	});
	*/
});

ruter.post('/obrisiAdmina',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			var idAdmina = req.body.idAdmina;
			////////console.log("idAdmina: " + idAdmina);

			dbPristup.ObrisiAdminaZaId(idAdmina,function(status)
			{		
					res.json(status);
			});
		}
	});
});

ruter.post('/zaboraviliSteLozinku',function(req,res)
{
			var username = req.body.username;

			dbPristup.DajMailZaUsername(username,function(email)
			{
				if(email == -1)
				{	
					//////////console.log("errrr");
					//////////console.log(err);
					res.json(-1);
				}
				else 
				{	
					////////console.log("poludobro");
					//if(email != -1)
					//{
						////////console.log("dobro");
						////////console.log(email);

						var rnd = "qwertyuiopasdfghjklzxcvbnm1234567890ASDQWEZXCRTYFGHVBNUIOJKLNM";
						var length = 8;
						var temp = "Summanus";

						for (var i = 0; i < length; i++) 
						{
							temp += rnd.charAt((Math.random() * 100) % rnd.length);
						}

						var poruka = "Vaša nova lozinka je " + temp;
						var subject = "Olimijada - resetovanje lozinke";
						////////console.log(email[0].email);
						////////console.log(subject);
						////////console.log(poruka);
						mail.sendMail(email[0].email,subject,poruka);

						dbPristup.ResetujLozinku(temp,username,function(status)
						{
							res.json(status);
						});
					/*}
					else
					{
						res.json(-1);
					}*/
				}
			});			
		
});

ruter.get('/sviTipoviTurnira',function(req,res)
{
	dbPristup.UzmiSveTipoveTurnira(function(tipoviTurnira)
	{
		//////////console.log(tipoviTurnira);
		res.json(tipoviTurnira);
	});
});

ruter.get('/sviTurniri', function(req,res)
{
	dbPristup.UzmiSveTurnire(function(turniri)
	{
		//////////console.log('aaaaaaaaaaaaaaaaa');
		//////////console.log(turniri);
		res.json(turniri);
	});

	
});

ruter.post('/daLiJeGlavniAdmin',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		////////console.log("decoded: " + decoded);

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

ruter.post('/dajSveAdmine',uzmiToken,function(req,res)
{
	////////console.log("jel poziva za sve admine index");
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
	//////console.log("POST AAAAAA ---------------------------------- ALOOOOOOOOO ----------------------");
	//////console.log(req.files);
	tokenGenerator.verify(req.token,tajniKljuc, function(err,korisnik)
	{
		////////console.log(korisnik);
		//////////console.log(req.body);
		//////////console.log("files: " + req.files.file);
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
					//////console.log("status 1: "+ status1);
					res.json({status: status1});
				}
				// ako status nije -1, vracen je ceo objekat korisnik
				else
				{
					//////////console.log(dbPristup.ProveriPostojanjeBotaZaKorisnika);
					//////////console.log("korisnik: "+status1);
					//////////console.log(req.body.bot);
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
							//////////console.log("status 2: "+ status2);
							res.json({status: status2});
						}
						else
						{
							////////console.log("postojanje prosao");
							var bot =
							{
								naziv : nazivFajla,
								idIgre : req.body.idIgre
							}
                            

							dbPristup.DodajBotaZaKorisnika(status1.id,bot, function(status3)
							{
								// ako je sve proslo u redu sa ubacivanjem podataka u bazu, bot moze da se uploaduje
								//////////console.log("status 3: "+JSON.stringify(status3));
								if (status3 != -1)
								{
									////////console.log("dodavanje u bazu prosao");

									// upload-uj bota (napravi posebnu funkciju, pa je pozovi)
									SacuvajFajl(req.files.file,bot.naziv,"botovi", function(status)
									{
										// nastala je greska sa uploadom, izbaci iz baze ovo sto si dodao
										if (status == -1)
										{
											dbPristup.ObrisiBotaZaKorisnika(status1.id,bot.naziv,function(status4)
											{
												////////console.log(status4 + ' dobro?');
												if (status4 == -1)
												{
													//////////console.log("status4: " + status4);
													callback({status: status4});
												}
												else
												{
													////////console.log("brisanje iz baze prosao");
													res.json({status: status4, bot: status3});
												}
											});
										}
										else if (status == -2)
										{
											res.json({status: status});
										}
										else
										{
											////////console.log("cuvanje fajla prosao");
											//////////console.log(JSON.stringify(status3));
											//////console.log('status 3');
											//////console.log(status3);
											res.json({status: 1, bot: status3});
										}
										
									});

									
								}
								// ako je nastala neka greska sa bazom, ne uploaduje se bot
								else
								{
                                    //////////console.log(status3);
									res.json({status: status3});
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
								else if (status1 == -2)
								{
									/*res.SendStatus(413)*/ res.json(-1);
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
	//////////console.log("USAO");
	//////////console.log(req);

	SacuvajFajl(req.files.file, "" + req.files.file.name, "slike", function(status) {

		if(status == -1)
		{
			////////console.log("Nije uploadovano!");
			res.json();
		}
		else if (status == -2)
		{
			/*res.SendStatus(413)*/ res.json(-1);
		}
		else
		{
			////////console.log("Jeste uploadovano!");
			res.json();
		}
	});
});

ruter.post('/dodajTim', uzmiToken, function(req, res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.DodajTim(req.body.nazivTima, req.body.idKorisnika, req.body.nazivSlikeTima, req.body.idIgre, req.body.opisTima, req.body.brojIgraca, function(status,id)
			{		

				if(status == 1)
				{
					dbPristup.UzmiPodatkeOTimu(id,function(tim)
					{
						if (tim != -1 && tim != 0)
						{
							////////console.log('Uspesno, uploadujem sliku!');
							res.json({status: 1, tim: tim});
						}
						else
						{
							res.json({status: tim});
						}
					})
					
				}
				else
				{
					////////console.log('Neuspesno, nesto se desilo!');
					res.json({status: -1});
				}
			});

			
		}
	});
});

// req.body: naziv,nazivSlike,pravila,pozadina,pozadinaTimovi,timska
// files.slikaIgre,files.slikaPozadine,files.slikaPozadineTImova
ruter.post('/dodajIgru', uzmiToken, function(req, res)
{
	////////console.log(req.body);
	//////console.log('poziva se dodaj igru');
	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			////////console.log("dodaj igru");
			
			var naziv = req.body.naziv;
			var pravila = req.body.pravila;
			var nazivSlike = req.body.nazivSlike;
			var pozadina = req.body.pozadina;
			var pozadinaTimovi = req.body.pozadinaTimovi;
			var timska = parseInt(req.body.timska);
			var timskaUloge = req.body.timskaUloge;

			if (nazivSlike == 'null')
			{
				nazivSlike = 'podrazumevana_slika.jpg';
			}

			if (pozadina == 'null')
			{
				pozadina = null;
			}

			if (pozadinaTimovi == 'null')
			{
				pozadinaTimovi = null;
			}

			if (timskaUloge == 'null')
			{
				timskaUloge = null;
			}

			////////console.log(nazivSlike, pozadina, pozadinaTimovi);

			dbPristup.ProveriNazivIgre(naziv, function(igre)
			{
				if (igre == -1)
				{
					//////console.log('igre');
					res.json({status: -1});
				}
				else
				{
					if (igre.length > 0)
					{
						//////console.log('igre length');
						res.json({status: 0});
					}
					else
					{
						dbPristup.UnesiIgru(naziv,pravila,nazivSlike,timska, timskaUloge, pozadina,pozadinaTimovi, function(status)
						{
							////////console.log("Uneo igru?");

							if (status == -1)
							{
								//////console.log("status");
								res.json(status);
							}
							else
							{
								if (req.files != null)
								{

									////////console.log("ima fajlova");
									// cuva sliku igre
									if (req.files.slikaIgre != undefined && req.files.slikaIgre != null)
									{
										SacuvajFajl(req.files.slikaIgre, nazivSlike, "slike/igre",function(statusSlikaIgre)
										{
											////////console.log("sacuvana slika igre? " ,statusSlikaIgre);
											if (statusSlikaIgre == 1)
											{
												// cuva sliku pozadine

												if (req.files.slikaPozadine != undefined && req.files.slikaPozadine != null)
												{
													SacuvajFajl(req.files.slikaPozadine, pozadina,"slike/igre/pozadine", function(statusSlikaPozadine)
													{
														////////console.log("sacuvana pozadina igre? " ,statusSlikaPozadine);
														if (statusSlikaPozadine == 1)
														{
															// cuva sliku pozadine za timove

															if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
															{
																SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
																{
																	////////console.log("sacuvana slika timova? ",statusSlikaPozadineTimovi);
																	if (statusSlikaPozadineTimovi == -1)
																	{
																		res.json({status: -1})
																	}
																	else if (statusSlikaPozadineTimovi == -2)
																	{
																		/*res.SendStatus(413)*/ res.json(-1);
																	}
																	else
																	{
																		res.json({status: 1, id: status})
																	}
																	
																})
															}
															// ako nece sliku pozadine timova da menja
															else
															{
																////////console.log("sacuvana pozadina igre? " ,statusSlikaPozadine);
																res.json({status: 1, id: status})
															}
															
														}
														else
														{
															if (statusSlikaPozadine == -2)
															{
																/*res.SendStatus(413)*/ res.json(-1);
															}
															else
															{
																res.json({status: -1})
															}
															
														}
													})
												}
												// ako nece pozadinu, ali hoce pozadinu za timove
												else if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
												{
													SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
													{
														////////console.log("Sacuvao fajl bre");
														if (statusSlikaPozadineTimovi == -1)
														{
															res.json({status: -1});
														}
														else if (statusSlikaPozadineTimovi == -2)
														{
															/*res.SendStatus(413)*/ res.json(-1);
														}
														else
														{
															res.json({status: 1, id: status});
														}
														
														
													})
												}
												else
												{
													res.json({status: 1, id: status});
												}
												
											}
											else
											{
												if (statusSlikaIgre == -2)
												{
													/*res.SendStatus(413)*/ res.json(-1);
												}
												else
												{
													res.json({status: -1});
												}
											
											}
										})
									

									}
									else if (req.files.slikaPozadine != undefined && req.files.slikaPozadine != null)
									{
										SacuvajFajl(req.files.slikaPozadine, pozadina,"slike/igre/pozadine", function(statusSlikaPozadine)
										{
											////////console.log("sacuvana pozadina igre? " ,statusSlikaPozadine);
											if (statusSlikaPozadine == 1)
											{
												// cuva sliku pozadine za timove
												////////console.log(req.files);
												if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
												{
													////////console.log("wtf");
													SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
													{
														if (statusSlikaPozadineTimovi == -1)
														{
															res.json({status: -1})
														}
														else if (statusSlikaPozadineTimovi == -2)
														{
															/*res.SendStatus(413)*/ res.json(-1);
														}
														else
														{
															res.json({status: 1, id: status})
														}
													})
												}
												// ako nece sliku pozadine timova da menja
												else
												{
													////////console.log("Nema sliku breeee");
													res.json({status: 1, id: status});
												}
												
											}
											else
											{
												if (statusSlikaPozadine == -2)
												{
													/*res.SendStatus(413)*/ res.json(-1);
												}
												else
												{
													res.json({status: -1});
												}
												
											}
										})
									}
									else if (req.files.slikaPozadineTimova != undefined && req.files.slikaPozadineTimova != null)
									{
										SacuvajFajl(req.files.slikaPozadineTimova, pozadinaTimovi, "slike/igre/pozadineTimovi", function(statusSlikaPozadineTimovi)
										{
											////////console.log("sacuvana timovi igre? " ,statusSlikaPozadineTimovi);
											if (statusSlikaPozadineTimovi == -1)
											{
												res.json({status: -1});
											}
											else if (statusSlikaPozadineTimovi == -2)
											{
												/*res.SendStatus(413)*/ res.json(-1);
											}
											else
											{
												res.json({status: 1, id: status});
											}
										})
									}
									
								}
								else
								{
									res.json({status: 1, id: status});
								}
							}
							
							
						});
					}
				}
			})

			

			/*
			var nazivFajla = "igra_" + req.body.naziv; // pravimo naziv fajla za bazu
			var ekstenzija = req.body.fileName.substring(req.body.fileName.lastIndexOf('.'), req.body.fileName.length);
			nazivFajla = nazivFajla + ekstenzija;	

			// saljemo naziv igre i naziv fajla sa pravilima
			dbPristup.UnesiIgru(req.body.naziv, nazivFajla, req.body.tekstEditor, req.body.timska, req.body.timskaUloge, function(status)
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
			*/
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

			dbPristup.UnesiTurnir(req.body, function(odgovor)
			{
				if(odgovor.status == 1)
				{
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
					
					dbPristup.DajIgruTurnira(odgovor.id, function(igra)
					{
						if (igra != -1)
						{
							//////console.log('daj igru turnira 1');
							res.json({status: 1, nazivIgre: igra.naziv, idTurnira: odgovor.id});
						}
						else if (igra == 0)
						{
							//////console.log('daj igru turnira 0');
							res.json({status: -1})
						}
						else
						{
							//////console.log('daj igru turnira -1');
							res.json({status: -1})
						}
						
					})
					
					//res.json(odgovor.status);
				}
				else
				{
					////console.log('unesi turnir -1');
					res.json({status: odgovor.status});
					
				}
			});

			
		}
	});
});

ruter.post('/:username/timovi', uzmiToken, function(req,res)
{
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
			////////console.log(username);
			////////console.log(korisnik.username);
			
			////////console.log("isti su");
			dbPristup.uzmiPodatkeOKorisniku(username,function(status)
			{
				if (status == -1)
				{
					res.json(status);
				}
				else
				{
					dbPristup.UzmiSveTimoveKorisnikaZaIgru(status.id,req.body.idIgre,function(status2)
					{
						//////console.log('#################### STATUS 2');
						//////console.log(status2);
						res.json(status2);
					})
				}
			})

			
		}
	});
})

// uzmi botove korisnika
ruter.get('/:username/botovi',uzmiToken, function(req,res)
{
    ////////console.log("username/botovi");
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
			////////console.log(username);
			////////console.log(korisnik.username);
			
			////////console.log("isti su");
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
						////////console.log("uzmi sve botove korisnika: "+JSON.stringify(status2));
						res.json(status2);
					})
				}
			})

			
		}
	});
})


ruter.post('/:username/botovi', uzmiToken, function(req,res)
{
    ////////console.log("username/botovi");
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
				
				//////console.log("jjfdsnkmfnsjfmkdsfdsfjdsk");
				//////console.log(idIgre);

				dbPristup.uzmiPodatkeOKorisniku(username,function(status)
				{
					if (status == -1)
					{
						//////console.log("ne radi");
						
						res.json(status);
					}
					else
					{
						//////console.log("radi");
						//////console.log(status.id);
						dbPristup.UzmiSveBotoveKorisnikaZaIgru(status.id,idIgre,function(status2)
						{
							////////console.log("uzmi sve botove korisnika: "+JSON.stringify(status2));
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
			//////console.log("token nije validan");
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
							//////console.log("Nisam uspeo iz baze da obrisem bota");
							res.json(status);

						}
						else 
						{
							////////console.log("bot obrisan iz baze, brisem ga fizicki");
							////////console.log(path.join(__dirname,"public","upload","botovi",req.body.username+"_"+req.body.nazivBota));
							ObrisiFajl(req.body.nazivBota,"botovi",function(statusBrisanje)
							{
								//////console.log(req.body.nazivBota);
								if (statusBrisanje == -1)
								{
									//////console.log("nisam uspeo fizicki da obrisem bota");
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
									//////console.log("nisam uspeo fizicki da obrisem bota");
									//////console.log(err);
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
			//////console.log("Token nije validan");
			res.sendStatus(403);
		}
		else
		{
			// statusUzmiPodatke - -1 ako je nastala greska, podatke o botu ako je sve ok
			dbPristup.UzmiPodatkeOBotu(req.body.idBota,function(statusUzmiPodatke)
			{
				if (statusUzmiPodatke == -1)
				{
					//////console.log("nisam uspeo da uzmem podatke");
					res.json(statusUzmiPodatke);
				}
				else
				{
					var nazivStarogFajla = statusUzmiPodatke.nazivFajla;
					var nazivNovogFajla = req.files.file.name;


					// novo ime fajla se pravi tako sto se uzima ime starog fajla bez ekstenzije, a dodaje mu se ekstenzija novog fajla
					var novoIme = nazivStarogFajla.substring(0,nazivStarogFajla.lastIndexOf('.'))+nazivNovogFajla.substring(nazivNovogFajla.lastIndexOf("."),nazivNovogFajla.length);
					//////console.log("novo ime: "+novoIme);
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
									//////console.log("nisam sacuvao fajl");
									res.json(statusCuvanje);
								}
								else if (statusCuvanje == -2)
								{
									/*res.SendStatus(413)*/ res.json(-1);
								}
								else
								{
									// statusIzmeni - -1 ako je greska, 1 ako je sve ok
									dbPristup.IzmeniBota(req.body.idBota,novoIme,function(statusIzmeni)
									{
										if (statusIzmeni == -1)
										{
											//////console.log("nisam uspeo da izmenim bota");
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
	//////console.log("otkaziTurnir: "+req.body.id);
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
	//////console.log("dajTurnirSaIdom: "+req.body.id);
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
	//////console.log("desava se");
	//////console.log("turnir:" + req.body);
	var turnir = req.body;
	//////console.log(turnir.naziv);

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
				//////console.log(status);
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
				//////console.log("Svi mecevi: "+statusSviMecevi);
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
						//////console.log("Nisam uspeo da dobijem podatke o korisniku");
						res.json([]);
					}
					else
					{
						dbPristup.UzmiSveMeceveKorisnika(statusKorisnik.id,function(statusSviMecevi)
						{
							if (statusSviMecevi == -1)
							{
								//////console.log("Nisam uspeo da dobijem meceve");
								res.json([]);
							}
							else
							{
								//////console.log("Svi mecevi: "+JSON.stringify(statusSviMecevi));
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
			//////console.log("nije pokupio rezultate, greska");

		}
		res.json(rezultati);
	})
});

ruter.post('/izmeniFaq', uzmiToken, function(req, res)
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
					//////console.log("Greska pri brisanju novog pitanja/odgovora za FAQ!");
					//////console.log(odgovor);

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
					//////console.log("Greska pri brisanju novog pitanja/odgovora za FAQ!");
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
			//////console.log(req.body.pitanje);
			dbPristup.dodajPitanjeOdgovorZaFaq(req.body.pitanje, req.body.odgovor, function(odgovor)
			{
				if (odgovor == -1)
				{
					//////console.log("Greska pri dodavanju novog pitanja/odgovora za FAQ!");
					//////console.log(odgovor);

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

ruter.post('/dajSveKorisnike', function(req,res)
{
	//////console.log('bokunda' + JSON.stringify(req.headers));
	
	dbPristup.DajSveKorisnike(function(korisnici)		
	{
		//////console.log(korisnici);
		res.json(korisnici);
	});
		
});

ruter.post('/dajSveTimoveKorisnika', uzmiToken, function(req,res)
{

	tokenGenerator.verify(req.token, tajniKljuc, function(err)
	{
		var idKorisnika = req.body.idKorisnika;

		dbPristup.DajSveTimoveKorisnika(idKorisnika, function(timoviKorisnika)
		{
			//////console.log(timoviKorisnika);
			res.json(timoviKorisnika)
		});
	});
	
});

ruter.post('/banujKorisnika', uzmiToken, function(req,res)
{
	var korisnik = req.body;
	//////console.log(korisnik);

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

			//////console.log(korisnik.email);
			//////console.log(subject);
			//////console.log(korisnik.banPoruka);

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

			//////console.log(korisnik.email);
			//////console.log(subject);
			//////console.log(korisnik.banPoruka);

			mail.sendMail(korisnik.email,subject,korisnik.banPoruka);
		}
	});
});

ruter.post('/dajSvePrijaveZaTurnir', uzmiToken, function(req,res)
{
	//////console.log("idturnira: " + req.body.id);
	var id = req.body.id;

	//////console.log("jel poziva? index");

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
				//////console.log("sta se desava ovde?");
				res.json(prijave);
			});
		}
	});
});

ruter.post('/prijaviKorisnikaNaTurnir', uzmiToken, function(req,res)
{
	////////console.log("idturnira: " + req.body.id);
	//var id = req.body.id;

	//////console.log("jel poziva? index");

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
                        //////console.log(tipMeca);
                        if (tipMeca == -1)
                        {
                            //////console.log("nastala greska");
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
                                    //////console.log("tip meca id: ",tipMeca.id)
                                    dbPristup.UnesiMecZaTestiranje(idBota,idRandomBota,tipMeca.id,function(statusUnet,idUnet)
                                    {
                                       
                                        res.json({status: statusUnet, id: idUnet });
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

	dbPristup(id,function(mec)
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
	//////console.log("braaaaaaaaaaaaaaaaaaaaa");
	//////console.log(req.body.usernameKorisnika);
	
	tokenGenerator.verify(req.token, tajniKljuc, function(err,decoded)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{
			//////console.log("username: " + decoded.username);
			
				dbPristup.OtkaziPrijavu(decoded.username,function(callback)
				{
					res.json(callback);
				});
		}
	});
});

ruter.post('/dajSveTurnireSaKorisnikom',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token, tajniKljuc, function(err,decoded)
	{
		if(err)
		{
			res.sendStatus(403);
		}
		else
		{
			
			//////console.log("username: " + decoded.username);
			
				dbPristup.DajSveTurnireSaKorisnikom(decoded.username,function(callback)
				{
					res.json(callback);
				});
		}
	});
})

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

ruter.post('/igra',function(req,res)
{
	////////console.log("Trazim igru ",req.body.idIgre);
	dbPristup.UzmiPodatkeOIgri(req.body.idIgre,function(igra)
	{
		res.json(igra);
	})
})

ruter.post('/dajPrijaveZaTurnir', uzmiToken, function(req,res)
{
	////////console.log("jel se poziva idnex");
	var idTurnira = req.body.idTurnira;
	////////console.log("idTurnira: " + idTurnira);

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
	////////console.log("jel poziva brisanje naloga index");
	var username = req.body.username;
	////////console.log(username);

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

ruter.post('/aktivirajNalog',function(req,res)
{
	var hash = req.body.hash;
	var username = req.body.username;
	dbPristup.AktivirajKorisnika(username, hash, function(korisnik)
	{
		if (korisnik != -1 && korisnik != 0)
		{
			////////console.log("aktivirao sam korisniak: ");
			////////console.log(korisnik);
			tokenGenerator.sign({admin: 0, username: korisnik.username}, tajniKljuc, {expiresIn: "5d"}, function(err,token)
			{
				if (err)
				{
					////////console.log(err);
					res.json(-1);
				}
				else
				{
					res.json({ status: 1, token: token, username: korisnik.username });
				}
			})
		}
		else if (korisnik == 0)
		{
			// ako hash ne postoji u bazi ni za koga
			res.json(korisnik);
		}
		else
		{
			res.json(korisnik);
		}
	})
})

////////////		STATISTIKA RUTE		     //////////////

ruter.post('/ukupanBrojKorisnika',function(req,res)
{
	////////console.log("pozvi index");

	dbPristup.UkupanBrojKorisnika(function(broj)
	{
		////////console.log("callback u indexu");
		res.json(broj);
	});
});

ruter.post('/ukupanBrojBotova',function(req,res)
{
	////////console.log("pozvi index");

	dbPristup.UkupanBrojBotova(function(broj)
	{
		////////console.log("callback u indexu");
		res.json(broj);
	});
});

ruter.post('/ukupanBrojBotovaZaKorisnika',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		////////console.log("decoded: " + decoded);

		if (err)
		{
			res.sendStatus(403);
		}
		else
		{	
			var username = decoded.username;
			////////console.log("username: " + username);

			dbPristup.UkupanBrojBotovaZaKorisnika(username,function(broj)
			{
				res.json(broj);
			});
		}
							
	});
});

ruter.post('/ukupanBrojKorisnikaPoMesecima',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		////////console.log("decoded: " + decoded);
		////////console.log("admin: " + decoded.admin)

		if (err || decoded.admin == 0)
		{
			res.sendStatus(403);
		}
		else
		{	
			dbPristup.UkupanBrojKorisnikaPoMesecima(function(niz)
			{
				res.json(niz);
			});
		}
							
	});
});

ruter.post('/ukupanBrojBotovaPoMesecima',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		////////console.log("decoded: " + decoded);
		////////console.log("admin: " + decoded.admin)

		if (err || decoded.admin == 0)
		{
			res.sendStatus(403);
		}
		else
		{	
			dbPristup.UkupanBrojBotovaPoMesecima(function(niz)
			{
				res.json(niz);
			});
		}
							
	});
});

ruter.post('/ukupanBrojPobedaZaKorisnkaPoMesecima',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		

		if (err || decoded.admin == 1)
		{
			res.sendStatus(403);
		}
		else
		{	
			////////console.log("decoded: " + decoded);
			var username = decoded.username;
			////////console.log("admin: " + decoded.username);

			dbPristup.UkupanBrojPobedaZaKorisnkaPoMesecima(username,function(niz)
			{
				res.json(niz);
			});
		}
							
	});
});

ruter.post('/ukupanBrojIgara', function(req,res)
{
	////////console.log("pozvi index");

	dbPristup.UkupanBrojIgara(function(broj)
	{
		////////console.log("callback u indexu");
		res.json(broj);
	});
})

ruter.post('/nazivSlikeKorisnika', uzmiToken, function(req,res)
{
	////////console.log("naziv slike korisnika");
	tokenGenerator.verify(req.token, tajniKljuc,function(err,dekodiraniKorisnik)
	{
		if (err)
		{
			res.sendStatus(403);
		}
		else
		{
			dbPristup.uzmiPodatkeOKorisniku(dekodiraniKorisnik.username, function(korisnik)
			{
				if (korisnik == -1)
				{
					res.json(-1);
				}
				else
				{
					////////console.log(korisnik.urlSlike);
					res.json(korisnik.urlSlike);
				}
			})
		}
	})
})

ruter.get('/turniriZaTV', function(req,res)
{
	dbPristup.UzmiTurnireZaTV(function(turniri)
	{
		if (turniri == -1)
		{
			res.json([]);
		}
		else
		{
			res.json(turniri);
		}
	})
})


ruter.get('/zavrseniMecevi', function(req,res)
{
	dbPristup.UzmiZavrseneTurnire(function(turniri)
	{
		if (turniri == -1)
		{
			res.json([]);
		}
		else
		{
			res.json(turniri);
		}
	})
})

ruter.post('/ukupanBrojPorazaZaKorisnkaPoMesecima',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		if (err || decoded.admin == 1)
		{
			res.sendStatus(403);
		}
		else
		{	
			var username = decoded.username;
			dbPristup.UkupanBrojPorazaZaKorisnkaPoMesecima(username,function(niz)
			{
				res.json(niz);
			});
		}
							
	});
});

/*
// vraca podatke o trenutnom stanju igraca
// salje joj se naziv igre i broj igraca
ruter.post('/prenos/timska', function(req,res)
{
	var nazivIgre = req.body.nazivIgre;
	var brojIgraca = req.body.brojIgraca;

	var options = {
		host: req.hostname,
		// promeni za server
		port: 8008,
		path: '/prenos',
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		}
	}

	var reqBody = {
		nazivIgre: nazivIgre,
		timska: 1,
		brojIgraca: brojIgraca
	}

	var tok = [];
	var httpreq = http.request(options, function(httpres)
	{
		
		httpres.on('data', function(chunk)
		{
			tok.push(chunk);
		})
		
		httpres.on('end',function()
		{
			var odgovor = JSON.parse(Buffer.concat(tok).toString());
			resBody.tokMeca = odgovor;

			res.json(resBody);
		})

		httpres.on('error',function()
		{
			res.json(-1);
		})
	})

	httpreq.on('error',function()
	{
		res.json(-1);
	})

	httpreq.write(JSON.stringify(reqBody));
	httpreq.end();

})

*/

function proveriTokenZaPrenos(mec,req,callback)
{
	var username = null;

	if (mec.tipMeca.toUpperCase() == "PRIJATELJSKI" || mec.tipMeca.toUpperCase() == "TESTIRANJE")
			{
				// ako ima authorization header, proveravam da li je token legitiman
				if (req.headers['authorization'] != undefined)
				{
					var token = req.headers['authorization'].split(' ')[1];
					var dekodiraniKorisnik;

					try {
						dekodiraniKorisnik = tokenGenerator.verify(token, tajniKljuc);
					}
					catch(err)
					{
						callback({ autorizovan: 0});
						return;
					}
					
					if (dekodiraniKorisnik != undefined && dekodiraniKorisnik != null)
					{
						username = dekodiraniKorisnik.username;
						////////console.log(username);
					}

					/*tokenGenerator.verify(token,tajniKljuc,function(err, dekodiraniKorisnik)
					{
						if (err)
						{
							res.sendStatus(403);
						}
						else
						{
							username = dekodiraniKorisnik.username;


						}
					})	
					*/ 
				}
				// ako nema authorization header 
				else
				{
					callback({autorizovan: 0});

					return;
					////////console.log("nakon returna 1");
				}

				////////console.log("nakon returna 2");

				if (mec.tipMeca.toUpperCase() == "TESTIRANJE")
				{
					if (mec.korisnik1 != username && mec.korisnik2 != username)
					{
						callback({autorizovan: 0});
						return;
					}
					else
					{
						if (mec.korisnik1 == username)
						{
							mec.korisnik2 = '';
							callback({autorizovan: 1, mec: mec});
							return;
						}
						else
						{
							mec.korisnik1 = '';
							// autorizovan je
							// on je drugi korisnik (kad je testiranje u pitanju)
							callback({autorizovan: 1, mec: mec});
							return;
						}
					}
					
				}
				else if (mec.tipMeca.toUpperCase() == "PRIJATELJSKI")
				{
					if (mec.korisnik1 != username && mec.korisnik2 != username)
					{
						callback({autorizovan: 0});
						return;
					}
					
				}
			}
	else
	{
		callback({autorizovan: 1, mec: mec});
	}
}

/*
// saljem igru i mec
/// ako postoji gotov prenos, vraca mi naznaku da e gotov tok i sam tok
// ako ne postoji, vraca mi naznaku da ne postoji gotov tok i prve pozicije za sve igrace
function ProveriDaLiPostojiSimulacija(igra, mec, callback)
{
	if (igra.timska == 0)
					{
						////////console.log(" nije timska");
						var resBody = {
							gotovTok: 1,
							korisnik1:  { ime: mec.korisnik1, pobednik: -1 },
							korisnik2: { ime: mec.korisnik2, pobednik: -1} ,
							datumVremePocetka: mec.datumVremePocetka,
							tokMeca: {}
						}
			
			
						var options = {
							host: req.hostname,
							// promeni za server
							port: 8008,
							path: '/prenos',
							method: 'POST',
							headers: {
								'Content-Type':'application/json'
							}
						}

						var reqBody = {
							nazivIgre: igra.naziv,
							timska: 0
						}

						var tok = [];
						var httpreq = http.request(options, function(httpres)
						{
							
							httpres.on('data', function(chunk)
							{
								tok.push(chunk);
							})
							
							httpres.on('end',function()
							{
								var odgovor = JSON.parse(Buffer.concat(tok).toString());
								resBody.tokMeca = JSON.parse(odgovor.tok);
								resBody.korisnik1.pobednik = odgovor.rez1;
								resBody.korisnik2.pobednik = odgovor.rez2;

								////////console.log("odgovor");
								////////console.log(odgovor.tok);
			
								// unosi rezultate meca tako sto se salje prvo vrednost "pobednik" za igrac1 i ista vrednost za igrac2
								dbPristup.UnesiRezultateMeca(idMeca,odgovor.rez1, odgovor.rez2, JSON.parse(odgovor.tok), JSON.parse(odgovor.tok).trajanje, function(status)
								{
									if (status == -1)
									{
										callback(-1);
									}
									else
									{
										// NIJE TIMSKA
										// VRACA 
										callback(resBody);
									}
								})
								
								
							})
			
							httpres.on('error',function()
							{
								callback(-1);
							})
						})

						httpreq.on('error',function()
						{
							callback(-1);
						})
			
						httpreq.write(JSON.stringify(reqBody));
						httpreq.end();
					}
					//ako je timska igra
					else
					{
						////////console.log("timska");

						var options = {
							host: req.hostname,
							// promeni za server
							port: 8008,
							path: '/prenos',
							method: 'POST',
							headers: {
								'Content-Type':'application/json'
							}
						}

						var resBody = {
							gotovTok: 0,
							tokMeca: {},
						}

						var reqBody = {
							nazivIgre: igra.naziv,
							timska: 1,
							brojIgraca: igra.timskaUloge.brojIgraca
						}

						var tok = [];
						var httpreq = http.request(options, function(httpres)
						{
							
							httpres.on('data', function(chunk)
							{
								tok.push(chunk);
							})
							
							httpres.on('end',function()
							{
								var odgovor = JSON.parse(Buffer.concat(tok).toString());
								resBody.tokMeca = odgovor;
		
								callback(resBody);
							})
			
							httpres.on('error',function()
							{
								callback(-1);
							})
						})

						httpreq.on('error',function()
						{
							callback(-1);
						})
			
						httpreq.write(JSON.stringify(reqBody));
						httpreq.end();
					}
}
*/

ruter.post('/prenos',function(req,res)
{
	var idMeca = req.body.id;
	var danasnjiDatum = Math.floor(Date.now()/1000);

	//////console.log("prenos");

	dbPristup.UzmiPodatkeOMecu(idMeca,function(mec)
	{
		////////console.log("UZmi podatke o mecu prosao");
		////////console.log(mec);
		if (mec == -1 || mec == 0)
		{
			//////console.log('mec -1 ili 0');
			res.json(mec);
		}
		else
		{	
			//////console.log("treba da proverim token");

			proveriTokenZaPrenos(mec,req,function(statusAutorizacije)
			{	
				//////console.log("poveri token za prenos prosao");

				if (statusAutorizacije.autorizovan == 0)
				{
					//////console.log('neautorizovan');
					res.json({autorizovan: 0});
				}
				else if (mec.datumVremePocetka > danasnjiDatum)
				{
					//////console.log(' nije poceo');
					res.json({poceo: 0})
				}
				else
				{
					// odakle mi igra??
					//////console.log("uzimam podatke o igri")
					dbPristup.UzmiPodatkeOIgriNaOsnovuTima(mec.idTima1,function(igra)
					{
						//////console.log("Prosao uzimanje podataka");
						
						if (igra == -1)
						{
							//////console.log( 'igra -1');
							res.json(-1);
						}
						else
						{
							var resBody = {
								autorizovan: 1,
								poceo: 1,
								korisnik1:  { ime: statusAutorizacije.mec.korisnik1, pobednik: -1 },
								korisnik2: { ime: statusAutorizacije.mec.korisnik2, pobednik: -1} ,
								datumVremePocetka: mec.datumVremePocetka,
								tokMeca: {}
							}
						
						
							var options = {
								host: req.hostname,
										// promeni za server
								port: 8008,
								path: '/prenos',
								method: 'POST',
								headers: {
									'Content-Type':'application/json'
								}
							}
							
							//	REQUEST KA GAME SERVERU
							var reqBody = {
								nazivIgre: igra.naziv
							}

							if (igra.timska == 1)
							{
								reqBody.timska = 1;
								reqBody.brojIgraca = JSON.parse(igra.timskaUloge).brojIgraca;
							}
							else
							{
								reqBody.timska = 0;
							}
	
							var tok = [];
							var httpreq = http.request(options, function(httpres)
							{
										
								httpres.on('data', function(chunk)
								{
									//////console.log('dobijam podatke od game servera');
									tok.push(chunk);
								})
									
								httpres.on('end',function()
								{
									//////console.log('ende');
									var odgovor = JSON.parse(Buffer.concat(tok).toString());
									//////console.log(odgovor);
									if (odgovor.tok != null)
									{
										//resBody.tokMeca = JSON.parse(odgovor.tok);
										//odgovor.tok = JSON.parse(odgovor.tok);

										resBody.tokMeca = odgovor.tok;
									}
									else
									{
										odgovor.tok = {};
										odgovor.tok.trajanje = 30000;
									}
									
									if (mec.rezultat1 == null || mec.rezultat2 == null)
									{
										resBody.korisnik1.pobednik = odgovor.rez1;
										resBody.korisnik2.pobednik = odgovor.rez2;
									}
									else
									{
										resBody.korisnik1.pobednik = mec.rezultat1;
										resBody.korisnik2.pobednik = mec.rezultat2;
									}


									resBody.brojVrsta = odgovor.brojVrsta;
									resBody.brojKolona = odgovor.brojKolona;
									resBody.velicinaKuglice = odgovor.velicinaKuglice;
									resBody.staticka = odgovor.staticka;
									resBody.interval = odgovor.interval;
									resBody.slikaKuglice1 = odgovor.slikaIgraca1;
									resBody.slikaKuglice2 = odgovor.slikaIgraca2;

									resBody.visina = odgovor.visina;
									resBody.sirina = odgovor.sirina;
								
									if (igra.timskaUloge)
									{
										resBody.brojIgraca = odgovor.brojIgraca;
									}
									else
									{
										resBody.brojIgraca = odgovor.brojIgraca;
									}


									if (resBody.korisnik2.pobednik == 1)
									{
										var temp = resBody.slikaKuglice1;
										resBody.slikaKuglice1 = resBody.slikaKuglice2;
										resBody.slikaKuglice2 = temp;
									}

									// promeni za server
									if (igra.pozadina != null)
									{
										//resBody.pozadina = "http://localhost:8081/upload/slike/igre/pozadine/"+igra.pozadina;
										resBody.pozadina = igra.pozadina;
									}
									else
									{
										resBody.pozadina = null;
									}

									//////console.log('mec rez1 = ',mec.rezultat1);
									//////console.log('mec rez2 = ',mec.rezultat2);
									//////console.log('odgovor rez1 = ', resBody.korisnik1.pobednik);
									//////console.log('odgovor rez2 = ',resBody.korisnik2.pobednik);

									

									////////console.log(resBody);
									
									//////////console.log("odgovor");
									///////////console.log(odgovor.tok);
				
											// unosi rezultate meca tako sto se salje prvo vrednost "pobednik" za igrac1 i ista vrednost za igrac2
									if (mec.rezultat1 == null || mec.rezultat2 == null)
									{
										bPristup.UnesiRezultateMeca(idMeca,odgovor.rez1, odgovor.rez2, odgovor.tok, odgovor.tok.trajanje, function(status)
										{
											//////console.log('unosim rezultate meca');
											if (status == -1)
											{
												//////console.log('unesi rezultate meca -1');
												res.json(-1);
											}
											else
											{
												////////console.log("res Body");
												////////console.log(resBody);
												////////console.log("\n\n");
												//////console.log('sve okej');
												res.json(resBody);
											}
										})
									}
									else
									{
										res.json(resBody);
									}
									
									
											
								})
						
								httpres.on('error',function()
								{
									//////console.log('https error');
									res.json(-1);
								})
							})
	
							httpreq.on('error',function()
							{
								//////console.log('httpreq error');
								res.json(-1);
							})
						
							httpreq.write(JSON.stringify(reqBody));
							httpreq.end();
						
						}
					})
					
						
					
				}
			})

		}
	})

	
})

ruter.post('/aktuelniIZakazaniMecevi',function(req,res)
{
	dbPristup.UzmiSveAktuelneIZakazaneMeceve(10,function(mecevi)
	{
		res.json(mecevi);
	})
})

/*
ruter.post('/prenos/nijeTimska',function(req,res)
{
	var nazivIgre = req.body.nazivIgre;
	

	////////console.log(" nije timska");
	var resBody = {
		korisnik1:  { ime: mec.korisnik1, pobednik: -1 },
		korisnik2: { ime: mec.korisnik2, pobednik: -1} ,
		datumVremePocetka: mec.datumVremePocetka,
		tokMeca: {}
	}
			
			
	var options = {
		host: req.hostname,
		// promeni za server
		port: 8008,
		path: '/prenos',
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		}
	}

	var reqBody = {
		nazivIgre: igra.naziv,
		timska: 0
	}

	var tok = [];
	var httpreq = http.request(options, function(httpres)
	{
					
		httpres.on('data', function(chunk)			
		{
			tok.push(chunk);
		})
							
		httpres.on('end',function()
		{
			var odgovor = JSON.parse(Buffer.concat(tok).toString());
			resBody.tokMeca = JSON.parse(odgovor.tok);
			resBody.korisnik1.pobednik = odgovor.rez1;
			resBody.korisnik2.pobednik = odgovor.rez2;
			////////console.log("odgovor");
			////////console.log(odgovor.tok);		
			// unosi rezultate meca tako sto se salje prvo vrednost "pobednik" za igrac1 i ista vrednost za igrac2
			dbPristup.UnesiRezultateMeca(idMeca,odgovor.rez1, odgovor.rez2, JSON.parse(odgovor.tok), JSON.parse(odgovor.tok).trajanje, function(status)
			{
				if (status == -1)
				{
					res.json(-1);
				}
				else
				{
					// NIJE TIMSKA
					// VRACA 
					res.json(resBody);
				}
			})
					
				
		})
			
		httpres.on('error',function()
		{
			res.json(-1);	
		})
	})

	httpreq.on('error',function()
	{
		res.json(-1);
	})
			
	httpreq.write(JSON.stringify(reqBody));
	httpreq.end();
})
*/

// RUTA KOJA SVE ODJEDNOM RADI I PROVERAVA
// NISAM SIGURNA DA RADI
//
//
//
// KAD BOKUNDA SREDI
// PROVERI KOJI MEC UZIMAS AKO SE NE PAKUJE SVE U JEDNU TABELU
// ILI UZMI NA ODGOVARAJUCI NACIN ID IGRE
/*
ruter.post('/prenos', function(req,res)
{
	var idMeca = req.body.id;
	var username = null;


	dbPristup.UzmiPodatkeOMecu(idMeca, function(mec)
	{
		if (mec != -1 && mec != 0)
		{
			// prijateljski mec i testiranje mogu da gledaju samo oni koji su ulogovani
			if (mec.tipMeca.toUpperCase() == "PRIJATELJSKI" || mec.tipMeca.toUpperCase() == "TESTIRANJE")
			{
				// ako ima authorization header, proveravam da li je token legitiman
				if (req.headers['authorization'] != undefined)
				{
					var token = req.headers['authorization'].split(' ')[1];
					var dekodiraniKorisnik;

					try {
						dekodiraniKorisnik = tokenGenerator.verify(token, tajniKljuc);
					}
					catch(err)
					{
						res.sendStatus(403);
						return;
					}
					
					if (dekodiraniKorisnik != undefined && dekodiraniKorisnik != null)
					{
						username = dekodiraniKorisnik.username;
					}

					/*tokenGenerator.verify(token,tajniKljuc,function(err, dekodiraniKorisnik)
					{
						if (err)
						{
							res.sendStatus(403);
						}
						else
						{
							username = dekodiraniKorisnik.username;


						}
					})	
					// kraj komm
				}
				// ako nema authorization header 
				else
				{
					res.json(0);

					return;
					////////console.log("nakon returna 1");
				}

				////////console.log("nakon returna 2");

				if (mec.tipMeca.toUpperCase() == "TESTIRANJE")
				{
					if (mec.korisnik1 != username && mec.korisnik2 != username)
					{
						res.json(0);
						return;
					}
					else
					{
						if (mec.korisnik1 == username)
						{
							mec.korisnik2 = '';
						}
						else
						{
							mec.korisnik1 = '';
						}
					}
					
				}
				else if (mec.tipMeca.toUpperCase() == "PRIJATELJSKI")
				{
					if (mec.korisnik1 != username && mec.korisnik2 != username)
					{
						res.json(0);
						return;
					}
					
				}
			}
			// resBody je za krajnji res.json()
			var danasnjiDatum = Math.floor(Date.now()/1000);

			////////console.log(mec.idIgre);
			dbPristup.UzmiPodatkeOIgriNaOsnovuBota(mec.idBota1, function(igra)
			{
				if (igra == -1 || igra == 0)
				{
					res.json(igra);
				}
				else
				{
					if (igra.timska == 0)
					{
						////////console.log(" nije timska");
						var resBody = {
							korisnik1:  { ime: mec.korisnik1, pobednik: -1 },
							korisnik2: { ime: mec.korisnik2, pobednik: -1} ,
							datumVremePocetka: mec.datumVremePocetka,
							tokMeca: {}
						}
			
			
						var options = {
							host: req.hostname,
							// promeni za server
							port: 8008,
							path: '/prenos',
							method: 'POST',
							headers: {
								'Content-Type':'application/json'
							}
						}

						var reqBody = {
							nazivIgre: igra.naziv,
							timska: 0
						}

						var tok = [];
						var httpreq = http.request(options, function(httpres)
						{
							
							httpres.on('data', function(chunk)
							{
								tok.push(chunk);
							})
							
							httpres.on('end',function()
							{
								var odgovor = JSON.parse(Buffer.concat(tok).toString());
								resBody.tokMeca = JSON.parse(odgovor.tok);
								resBody.korisnik1.pobednik = odgovor.rez1;
								resBody.korisnik2.pobednik = odgovor.rez2;

								////////console.log("odgovor");
								////////console.log(odgovor.tok);
			
								// unosi rezultate meca tako sto se salje prvo vrednost "pobednik" za igrac1 i ista vrednost za igrac2
								dbPristup.UnesiRezultateMeca(idMeca,odgovor.rez1, odgovor.rez2, JSON.parse(odgovor.tok), JSON.parse(odgovor.tok).trajanje, function(status)
								{
									if (status == -1)
									{
										res.json(-1);
									}
									else
									{
										// NIJE TIMSKA
										// VRACA 
										res.json(resBody);
									}
								})
								
								
							})
			
							httpres.on('error',function()
							{
								res.json(-1);
							})
						})

						httpreq.on('error',function()
						{
							res.json(-1);
						})
			
						httpreq.write(JSON.stringify(reqBody));
						httpreq.end();
					}
					//ako je timska igra
					else
					{
						////////console.log("timska");

						var options = {
							host: req.hostname,
							// promeni za server
							port: 8008,
							path: '/prenos',
							method: 'POST',
							headers: {
								'Content-Type':'application/json'
							}
						}

						var reqBody = {
							nazivIgre: igra.naziv,
							timska: 1,
							brojIgraca: igra.timskaUloge.brojIgraca
						}

						var tok = [];
						var httpreq = http.request(options, function(httpres)
						{
							
							httpres.on('data', function(chunk)
							{
								tok.push(chunk);
							})
							
							httpres.on('end',function()
							{
								var odgovor = JSON.parse(Buffer.concat(tok).toString());
								resBody.tokMeca = odgovor;
		
								res.json(resBody);
							})
			
							httpres.on('error',function()
							{
								res.json(-1);
							})
						})

						httpreq.on('error',function()
						{
							res.json(-1);
						})
			
						httpreq.write(JSON.stringify(reqBody));
						httpreq.end();
					}
			
					
				}
			})
		
			
		}
		else
		{
			////////console.log('mec je 0');
			res.json(mec);
		}
	})

	
})

*/

ruter.post('/brojOsvojenihTurniraZaKorisnika',uzmiToken,function(req,res)
{
	tokenGenerator.verify(req.token,tajniKljuc, function(err,decoded)
	{
		////////console.log("decoded: " + decoded);
		var username = decoded.username;
		////////console.log("admin: " + decoded.username)

		if (err || decoded.admin == 1)
		{
			res.sendStatus(403);
		}
		else
		{	
			dbPristup.BrojOsvojenihTurniraZaKorisnika(username,function(niz)
			{
				res.json(niz);
			});
		}
							
	});
});

// NAPRAVI RUTU IZNAD OVE METODE
ruter.get('*',function(req,res)
{
	////////console.log("ne postoji ",req.params);
	res.sendFile("index.html", { root: __dirname });

});

// OVE RUTE NECE RADITI
ruter.post('/posaljiMail', function(req,res)
{
	var pom = req.body;
	////////console.log(pom);

	mail.sendMail(pom.mail,pom.subject,pom.poruka);
});





module.exports = ruter;