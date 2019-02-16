
var express = require('express');
//var sqlite3 = require('sqlite3');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var cors = require('cors');
var tokenGenerator = require('jsonwebtoken');
var tajniKljuc = 'tajniKljuc';

var app = express();
var dbPristup = require('./database.js');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors({origin: ["http://localhost:4200"], credentials: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/uzmi-podatke', function(req,res)
{
	dbPristup.uzmiPodatkeOKnjigama(function(status)
	{
		if (status == -1)
		{
			console.log("nema knjiga");
		}
		else
		{
			console.log(status);
			res.send(status);
			// ovde mi je stajalo JSON.stringlify(status) i zato nije radilo...
		}
		
	});
	
});

app.get('/uzmi-podatke-o-autorima', function(req, res)
{
	dbPristup.uzmiPodatkeOAutorima(function(status)
	{
		if (status == -1)
		{
			console.log("nema autora");
		}
		else
		{
			console.log(status);
			res.send(status);
		}
	})
})

// dodavanje novoh autora
app.get('/posalji-pod-za-novog-autora',urlencodedParser,function(req,res)
{
	var autor = req.body;
	
	dbPristup.izmenaPodataka(autor, function(status)
	{
		// vraca se status koji je vratila funkcija za dodavanje iz modula za pristup bazi
		// status = 1 - dodat
		// status = -1 - greska
		var odgovor;

		if (status == 1) 
		{
			odgovor = { status: status };
			res.json(odgovor);
		}
		else
		{
			odgovor = {status: status};
			res.json(odgovor);
		}
	});
});

app.listen(8080,function() 
{
    console.log("Server pokrenut na portu 8080");
});
