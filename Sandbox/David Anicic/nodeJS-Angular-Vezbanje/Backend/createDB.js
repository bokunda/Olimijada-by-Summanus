
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("knjige.db");

db.serialize(function()
{
	// KREIRANJE TABELA

	// Autor
	db.run("CREATE TABLE if not exists Autor(ime TEXT NOT NULL, prezime TEXT NOT NULL, drzava TEXT NOT NULL)", function(err)
	{
		if(err)
		{
			console.error(err);
		}
		else
		{
			console.log("Tabela Autor uspesno kreirana!");	
		}
	});

	// Knjiga
	db.run("CREATE TABLE if not exists Knjiga(naslov TEXT NOT NULL, autorID INT NOT NULL, zanr TEXT NOT NULL, FOREIGN KEY (autorID) REFERENCES Autor(rowid))", function(err)
	{
		if(err)
		{
			console.error(err);
		}
		else
		{
			console.log("Tabela Knjiga uspesno kreirana!");	
		}
	});

	// AutorKnjiga
	db.run("CREATE TABLE if not exists AutorKnjiga(autorID INTEGER NOT NULL, knjigaID INT NOT NULL, FOREIGN KEY (autorID) REFERENCES Autor(rowid), FOREIGN KEY (knjigaID) REFERENCES Knjiga(rowid))", function(err)
	{
		if(err)
		{
			console.error(err);
		}
		else
		{
			console.log("Tabela AutorKnjiga uspesno kreirana!");	
		}
	});

	// UNOS PODATAKA

	var stmt = db.prepare("INSERT INTO Autor(ime, prezime, drzava) VALUES(?,?,?)");
	stmt.run("Jovan", "Ducic", "Srbija");
	stmt.run("Ivo", "Andric", "Srbija");
	stmt.finalize();

	var stmt = db.prepare("INSERT INTO Knjiga(naslov, autorID, zanr) VALUES(?,?,?)");
	stmt.run("Blago cara Radovana", 1, "misli za sva vremena");
	stmt.run("Na Drini cuprija", 2, "Istorijska fikcija");
	stmt.finalize();
}
);
