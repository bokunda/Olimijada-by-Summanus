
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("Olimijada.db");

db.serialize(function()
{
	// 1. TipTurnira
	db.run("CREATE TABLE if not exists TipTurnira(id INTEGER PRIMARY KEY, naziv TEXT NOT NULL)", function(err)
	{
		if(err)
		{
			console.error(err);
		}
		else
		{
			console.log("Tabela TipTurnira uspesno kreirana!");	
		}
	});

	// 2. Igra
	db.run("CREATE TABLE if not exists Igra(id INTEGER PRIMARY KEY, naziv TEXT NOT NULL, nazivSlike TEXT NULL, pravila TEXT NOT NULL, obrisana INTEGER DEFAULT 0,timska INTEGER DEFAULT 0, timskaUloge TEXT, pozadina TEXT, pozadinaTimovi TEXT)", function(err)
	{
		if(err)
		{
			console.error(err);	
		}
		else
		{
			console.log("Tabela Igra uspesno kreirana!");
		}
	});

	// 3. Korisnik
	db.run("CREATE TABLE if not exists Korisnik(id INTEGER PRIMARY KEY, username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL, ime TEXT NULL, prezime TEXT NULL, urlSlike TEXT NULL, datumRegistracije INTEGER NOT NULL, banovan INTEGER DEFAULT 0, brojPobeda INTEGER DEFAULT 0, brojPoraza INTEGER DEFAULT 0, obrisan INTEGER DEFAULT 0, usernameHash TEXT)", function(err)
	{
		if(err)
		{
			console.error(err);
		}	
		else
		{
			console.log("Tabela Korisnik uspesno kreirana!");
		}
	});

	// 4. Bot
	db.run("CREATE TABLE if not exists Bot(id INTEGER PRIMARY KEY, idKorisnika INTEGER NOT NULL, nazivFajla TEXT NOT NULL, idIgre INTEGER NOT NULL, datumKreiranja INTEGER NOT NULL, datumIzmene INTEGER NOT NULL, banovan INTEGER DEFAULT 0, obrisan INTEGER DEFAULT 0, FOREIGN KEY(idKorisnika) REFERENCES Korisnik(id), FOREIGN KEY(idIgre) REFERENCES Igra(id))", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela Bot uspesno kreirana!");
			}	
		}
	);

	// 5. Admin
	db.run("CREATE TABLE if not exists Admin(id INTEGER PRIMARY KEY, username TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL, ime TEXT NULL, prezime TEXT NULL, datumRegistracije INTEGER NOT NULL, obrisan INTEGER DEFAULT 0)", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela Admin uspesno kreirana!");
			}		
		}
	);

	// 6. TipTitule
	db.run("CREATE TABLE if not exists TipTitule(id INTEGER PRIMARY KEY, naziv TEXT NOT NULL, rangOd INTEGER NOT NULL, rangDo INTEGER NULL)", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela TipTitule uspesno kreirana!");
			}
		}
	);

	// 7. KorisniciTitule
	db.run("CREATE TABLE if not exists KorisniciTitule(id INTEGER PRIMARY KEY, idKorisnika INTEGER NOT NULL, idTitule INTEGER NOT NULL, datumOd INTEGER NOT NULL, datumDo INTEGER NULL, FOREIGN KEY(idKorisnika) REFERENCES Korisnik(id), FOREIGN KEY(idTitule) REFERENCES TipTitule(id))", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela KorisniciTitule uspesno kreirana!");
			}		
		}
	);

	// 8. Igrac
	db.run("CREATE TABLE if not exists Igrac(id INTEGER PRIMARY KEY, idBota INTEGER NOT NULL, FOREIGN KEY(idBota) REFERENCES Bot(id))", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela Igrac uspesno kreirana!");
			}
		}
	);

	// 9. Turnir
	db.run("CREATE TABLE if not exists Turnir(id INTEGER PRIMARY KEY, idTipaTurnira INTEGER NOT NULL, naziv TEXT NOT NULL, idIgre INTEGER NOT NULL, pocetakPrijava INTEGER NOT NULL, krajPrijava INTEGER NOT NULL, datumVremePocetka INTEGER NOT NULL, datumVremeZavrsetka INTEGER NOT NULL,trenutnoKolo INTEGER, brDozvoljenihIgraca INTEGER, meceviNapravljeni INTEGER DEFAULT 0, obrisan DEFAULT 0,nazivSlike TEXT, FOREIGN KEY(idTipaTurnira) REFERENCES TipTurnira(id), FOREIGN KEY(idIgre) REFERENCES Igra(id))", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela Turnir uspesno kreirana!");
			}
		}
	);

	// 10. Timovi
	db.run("CREATE TABLE if not exists Timovi(id INTEGER PRIMARY KEY, nazivTima TEXT NOT NULL, idKorisnika INTEGER NOT NULL, idIgre INTEGER NOT NULL, opisTima TEXT NULL, brojIgraca INTEGER NULL, obrisan INTEGER DEFAULT 0, nazivSlikeTima TEXT NULL, idBota INTEGER NULL, FOREIGN KEY (idKorisnika) REFERENCES Korisnik(id), FOREIGN KEY (idIgre) REFERENCES Igra(id))", function(err)
	{
		if(err)
		{
			console.error(err);
		}
		else
		{
			console.log("Tabela Timovi uspesno kreirana!");
		}
	});
	
	// 11. TipMeca
	db.run("CREATE TABLE if not exists TipMeca(id INTEGER PRIMARY KEY, naziv TEXT NOT NULL)", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela TipMeca uspesno kreirana!");
			}
		}
	);
	
	// 12. PrijaveZaTurnir
	db.run("CREATE TABLE if not exists PrijaveZaTurnir(id INTEGER PRIMARY KEY, idTurnira INTEGER NOT NULL, idTima INTEGER NOT NULL, usernameKorisnika TEXT NOT NULL, datumVremePrijave INTEGER NOT NULL, FOREIGN KEY(idTurnira) REFERENCES Turnir(id), FOREIGN KEY(idTima) REFERENCES Timovi(id))", function(err)
		{	
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela PrijaveZaTurnir uspesno kreirana!");
			}	
		}
	);

	// 13. Mec
	db.run("CREATE TABLE if not exists Mec(id INTEGER PRIMARY KEY, idTurnira INTEGER, idTima1 INTEGER, idTIma2 INTEGER, datumVremePocetka INTEGER, trajanje INTEGER NULL, rezultat1 INTEGER NULL, rezultat2 INTEGER NULL, tokMeca TEXT NULL, kolo INTEGER NULL, idTipaMeca INTEGER NOT NULL, FOREIGN KEY(idTurnira) REFERENCES Turnir(id), FOREIGN KEY(idTima1) REFERENCES Timovi(id), FOREIGN KEY(idTima2) REFERENCES Timovi(id), FOREIGN KEY (idTipaMeca) REFERENCES TipMeca(id))", function(err)
		{
			if(err)
			{
				console.error(err);
			}	
			else
			{
				console.log("Tabela Mec uspesno kreirana!");
			}
		}
	);

	// 14. FAQ
	db.run("CREATE TABLE if not exists FAQ(id INTEGER PRIMARY KEY, pitanje TEXT NOT NULL, odgovor TEXT NOT NULL)", function(err)
		{
			if (err)
			{
				console.error(err);
			}
			else
			{
				console.log("Tabela FAQ uspesno kreirana!");
			}
		}
	);

	

	// UNOS PODATAKA

	// tabela TipTurnira
	var stmt = db.prepare("INSERT INTO TipTurnira(naziv) VALUES(?)");
	stmt.run("Liga");
	stmt.run("Kup");
	stmt.finalize();
	
	stmt = db.prepare("INSERT INTO TipMeca(naziv) VALUES(?)");
	stmt.run("Turnirski");
	stmt.run("Prijateljski");
	stmt.run("Testiranje");
	stmt.finalize();

	// tabela Igra
	/*stmt = db.prepare("INSERT INTO Igra(naziv, pravila) VALUES(?, ?)");
	stmt.run("Tenis","Tenis.txt");
	stmt.run("Četiri u nizu", "ČetiriUNizu.txt");
	stmt.run("XOX", "XOX.txt");
	stmt.finalize();*/

	// tabela Korisnik
	/*stmt = db.prepare("INSERT INTO Korisnik(username, password, email, datumRegistracije,banovan,urlSlike) VALUES(?,?,?,?,?,?)");
	stmt.run("bojan", "67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00", "bpiskulic1996@gmail.com",1523628150,0,"podrazumevani_avatar.jpg");
	stmt.run("jelena", "67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00","jecacolic96@gmail.com", 1523628150,0,"podrazumevani_avatar.jpg");
	stmt.run("nikola", "67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00", "pajo36soma@gmail.com", 1523628150,0,"podrazumevani_avatar.jpg");
	stmt.run("david","67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00","davidkbstrong@gmail.com",1523628150,0,"podrazumevani_avatar.jpg");
	stmt.run("mrle","67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00","mrle@gmail.com",1525900000,0,"podrazumevani_avatar.jpg");
	stmt.run("trle","67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00","mrle@gmail.com",1525900000,0,"podrazumevani_avatar.jpg");
	stmt.finalize();*/

	// tabela Bot
	//stmt = db.prepare("INSERT INTO Bot(idKorisnika, nazivFajla, idIgre) VALUES(?, ?, ?)");
	//stmt.run(1, "mojSahIgrac", 2);
	//stmt.finalize();

	// tabela Admin
	stmt = db.prepare("INSERT INTO Admin(username, password, email, datumRegistracije) VALUES(?, ?, ?,?)");
	stmt.run("admin","8fd88522eda18ccd38aa7fdcff4960fcaf8b318c1a289b9231ce7e6fbd9e9654","olimijada.summanus@gmail.com",1523628150);
	/*stmt.run("jelena", "67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00", "jecacolic96@gmail.com",1523628150);
	stmt.run("nikola","67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00", "pajo36soma@gmail.com",1523628150);
	stmt.run("bojan","67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00","bpiskulic1996@gmail.com",1523628150);
	stmt.run("david","67eaf4c07cb21a6c6eab3e2b5d24265ffe3f3813f678bac557b3beda98c6ac00","davidkbstrong@gmail.com",1523628150);
	stmt.finalize();*/
	//"CREATE TABLE if not exists Bot(id INTEGER PRIMARY KEY, idKorisnika INTEGER NOT NULL, nazivFajla TEXT NOT NULL, idIgre INTEGER NOT NULL, datumKreiranja INTEGER NOT NULL, datumIzmene INTEGER NOT NULL, banovan INTEGER DEFAULT 0, FOREIGN KEY(idKorisnika) REFERENCES Korisnik(id), FOREIGN KEY(idIgre) REFERENCES Igra(id))"
	/*stmt = db.prepare("INSERT INTO Bot(id,idKorisnika,nazivFajla,idIgre,datumKreiranja,datumIzmene) VALUES(?,?,?,?,?,?)");
	stmt.run(1,2,"smrda.zip",1,1234,1234);
	stmt.run(2,3,"majmun.zip",1,1234,1234);*/

	// tabela Igrac
	//stmt = db.prepare("INSERT INTO Igrac(idBota) VALUES(?)");
	//stmt.run(1);
	//stmt.finalize();

	// tabela Turnir
	/*stmt = db.prepare("INSERT INTO Turnir(idTipaTurnira, naziv, idIgre, pocetakPrijava, krajPrijava, datumVremePocetka, datumVremeZavrsetka) VALUES(?,?,?,?,?,?,?)");
	stmt.run(1, "Kraljevo Open", 1, 1536012000, 1541286000, 1541347200, 1543939200);
	stmt.finalize();*/

	/*stmt = db.prepare("INSERT INTO Timovi(nazivTima, idKorisnika, idIgre, opisTima, brojIgraca) VALUES(?,?,?,?,?)");
	stmt.run("Jelenin tim 1",2,2,"opis",1);
	stmt.run("Nikolin tim 1",3,2,"opis",1);
	stmt.finalize();*/

	// tabela PrijaveZaTurnir
	//stmt  = db.prepare("INSERT INTO PrijaveZaTurnir(idTurnira, idIgraca, datumVremePrijave) VALUES (?, ?, ?)");
	//stmt.run(1, 1, "15.02.2018 00:00:00.000");
	//stmt.finalize();

	//tabela Mec
	/*stmt = db.prepare("INSERT INTO MEC(id,idTurnira,idTima1,idTima2,datumVremePocetka,trajanje,idTipaMeca) VALUES(?,?,?,?,?,?,?)");
	stmt.run(1,1,1,2,1525000095,1000,1);
	stmt.finalize();*/
	
	// tabela FAQ
	stmt = db.prepare("INSERT INTO FAQ(id, pitanje, odgovor) VALUES(?,?,?)");
	stmt.run(1, "Kako da promenim informacije o mom nalogu?", "U gornjem desnom uglu sajta, klikom na vaš avatar otvoriće vam se  desni side bar. Klikom na uredi profil, otvoriće vam se stranica gde možete izmeniti vaš nalog.");
	stmt.run(2, "Kako da upload-ujem bota?", "Možete pronaći u levom side baru, opciju Igre. Izaberite igru koju želite da igrate, i u opisu igre na kraju stranice naćićete sličicu za upload bota. Ili u desnom side baru klikom na Botovi.");
	stmt.run(3, "Ako želim da se prijavim na neki turnir, kako to mogu da uradim?", "U levom side baru, pronađite Turniri. Klikom na Turniri, prikazuju vam se svi turniri. Izaberite neki od aktuelnih turnira i kliknite dugme Prijavi se.");
	stmt.run(4, "Gde mogu da pratim tok neke od igara?", "U levom side baru izaberite opciju Olimijada TV. Tu možete naći arhivu svih mečeva ili mečeve koji su u toku.");
	stmt.finalize();
}
);
