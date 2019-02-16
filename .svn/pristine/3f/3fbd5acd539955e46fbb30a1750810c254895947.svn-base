
var exports = module.exports = {};
var sqlite3 = require("sqlite3");
var path = require("path");
var dbPutanja = path.resolve(__dirname, './knjige.db');
var dateFormat = require('dateformat');
var crypto = require('crypto');

function otvoriKonekciju() 
{
	return new sqlite3.Database(dbPutanja);
}

function zatvoriKonekciju(db)
{
	db.close();
}

exports.uzmiPodatkeOKnjigama = function(callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT * FROM Knjiga";

	db.all(sql,function(err,rows)
	{
		zatvoriKonekciju(db);
		
		if (err)
		{
			console.log(err);
			callback(-1);
		}
		else
		{
			var knjigeIzBaze = rows;

			callback(knjigeIzBaze);
		}
		
	});
}

exports.uzmiPodatkeOAutorima = function(callback)
{
	var db = otvoriKonekciju();

	var sql = "SELECT * FROM Autor";
	db.all(sql, function(err, rows)
	{
		zatvoriKonekciju(db);

		if (err)
		{
			console.log(err);
			callback(-1);
		}
		else
		{
			var autoriIzBaze = rows;

			callback(autoriIzBaze);
		}
	});
}

// dodavanje podataka o autoru
exports.izmenaPodataka = function(autor,callback)
{
	db = otvoriKonekciju();

	var sql = "INSERT INTO Autor(ime, prezime, drzava) VALUES(?,?,?)";
	db.run(sql, autor.ime, autor.prezime, autor.drzava, function(err)
	{
		zatvoriKonekciju(db);
		
		// greska - status je -1
		if (err)
		{
			console.log(err);
			callback(-1);
		}
		else
		{
			// autor dodat status je 1
			callback(1);
		}
	});
}	

