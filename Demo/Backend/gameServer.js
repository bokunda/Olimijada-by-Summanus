var express = require('express');
var cors = require('cors');
const dbPristup = require('./database.js');
const sqlite3 = require('sqlite3');
const path = require('path');
var dbPutanja = path.resolve(__dirname, './Simulacije.db');

var tokovi = [];

function UcitajModule()
{
	var tok = require('./tokCetiriUNizu').tok;
	tokovi.push(tok);

	tok = require('./tokXOX').tok;
	tokovi.push(tok);

	tok = require('./tokKosarke').tok;
	tokovi.push(tok);

	tok = require('./tokFudbala').tok;
	tokovi.push(tok);

}

setTimeout(UcitajModule, 0);

var app = express();
//app.use(cors({origin: ["http://localhost:4200","http://localhost:4201","http://localhost:8080","http://localhost:8081", "http://24.135.189.175:8080","http://24.135.189.175:8081"], credentials: true}));
app.use(cors());

const bodyParser = require('body-parser');
var brojac = 2;
app.use(bodyParser.json());


//var tokMeca = require('./tokMeca').tokMeca;

function otvoriKonekciju()
{
	return new sqlite3.Database(dbPutanja);
}

/*
setInterval(function()
{
	//u svakom minutu proveri da li ce neki mec da pocne za minut ili manje i upisi u njega tokMeca
	dbPristup.SviMeceviKojiCeDaPocnu(function(mecevi)
	{
		if (mecevi != -1)
		{
			////console.log(mecevi);
			for (var i=0;i<mecevi.length;i++)
			{
				dbPristup.UnesiTokZaMec(mecevi[i].id,tokMeca);
			}
		}
	})

},60000);
*/

/*
app.post("/prenos/",function(req,res)
{
	////console.log("prenos");
	//////console.log(req);
	var sirinaIgre = req.body.sirinaIgre;
	var visinaIgre = req.body.visinaIgre;
	var sirinaSlike = req.body.sirinaSlike;
	var visinaSlike = req.body.visinaSlike;

	if (brojac == 1)
	{
		brojac = 2;
	}
	else
	{
		brojac = 1;
	}

	var randX = Math.floor(Math.random()*(sirinaIgre-sirinaSlike));
	var randY = Math.floor(Math.random()*(visinaIgre-visinaSlike));

	var zvuk = 0;
	if ((randX+randY)%5 == 0)
	{
		zvuk = 1;
		////console.log("zvuk");
	}

	res.json({x:randX, y:randY, igrac: brojac, zvuk: zvuk});
})
*/

/*
app.post('/prenos',function(req,res)
{
	var rez1 = Math.floor(Math.random() * Math.floor(2));
	var rez2 = rez1 ? 0 : 1;

	res.json({tokMeca: tokMeca, rez1: rez1, rez2: rez2});
})
*/

app.post('/prenos',function(req,res)
{
	//////console.log(req);
	var nazivIgre = req.body.nazivIgre.toUpperCase();

	var db = otvoriKonekciju();

	var sql = "SELECT * FROM Simulacije WHERE upper(nazivIgre) like '%"+nazivIgre+"%'";

	db.all(sql, function(err,rows)
	{
		if (err)
		{
			////console.log("GRESKA 1");
			//console.log(err);
			res.json(-1);
		}
		else	
		{
			// ako simulacija za tu igru postoji u bazi
			// posalji mi nju
			if (rows.length > 0)
			{
				//console.log("SIMULACIJA POSTOJI U BAZI");
				var rez1 = Math.floor(Math.random() * Math.floor(2));
				var rez2 = rez1 ? 0 : 1;
				res.json({gotovTok: 1, tok: tokovi[rows[0].tokSimulacije], rez1: rez1, rez2: rez2, brojVrsta: rows[0].brojVrsta, brojKolona: rows[0].brojKolona, velicinaKuglice: rows[0].velicinaKuglice, interval: rows[0].interval, staticka: rows[0].staticka, brojIgraca: rows[0].brojIgraca, sirina: rows[0].sirina, visina: rows[0].visina,slikaIgraca1: rows[0].slikaIgraca1,slikaIgraca2: rows[0].slikaIgraca2});
			}
			else
			{
				if (req.body.timska == 0)
				{
					//console.log("IGRA NIJE TIMSKA");
					// ako nije timska igra 
					// a nema gotove simulacije
					// daj mi random simulaciju od ne-timskih igara
					db.all("SELECT *  FROM Simulacije WHERE timska=0 ORDER BY random() limit 1", function(err,rows)
					{
						if (err)
						{
							console.log("GRESKA 2");
							console.log(err);
							res.json(-1);
						}
						else
						{
							var rez1 = Math.floor(Math.random() * Math.floor(2));
							var rez2 = rez1 ? 0 : 1;
							res.json({gotovTok: 1, tok: tokovi[rows[0].tokSimulacije], rez1: rez1, rez2: rez2, brojVrsta: rows[0].brojVrsta, brojKolona: rows[0].brojKolona, velicinaKuglice: rows[0].velicinaKuglice, staticka: 1,interval: 200, brojIgraca: rows[0].brojIgraca , sirina: 800, visina: 450,slikaIgraca1: rows[0].slikaIgraca1,slikaIgraca2: rows[0].slikaIgraca2});
						}
					})
				}
				else
				{

					//console.log("IGRA JE TIMSKA");
					
					var brojIgraca = req.body.brojIgraca;
					
					db.all("SELECT * FROM Simulacije WHERE timska=1 ORDER BY random() LIMIT 1",function(err,rows)
					{
						if (err)
						{
							////console.log("GRESKA 2");
							//console.log(err);
							res.json(-1);
						}
						else
						{
							var rez1 = Math.floor(Math.random() * Math.floor(2));
							var rez2 = rez1 ? 0 : 1;

							if (rows.length > 0)
							{
								////console.log("timska tok");
								res.json({gotovTok: 1, tok: tokovi[rows[0].tokSimulacije], rez1: rez1, rez2: rez2, brojVrsta: rows[0].brojVrsta, brojKolona: rows[0].brojKolona, velicinaKuglice: rows[0].velicinaKuglice, staticka: 0, interval: 200, brojIgraca: rows[0].brojIgraca, sirina: 800, visina: 450,slikaIgraca1: rows[0].slikaIgraca1,slikaIgraca2: rows[0].slikaIgraca2});
							}
							else
							{
								//console.log("timska nema");
								// samo za testiranje
								var t = require('./tokKosarke.js').tok;
								////console.log(t);
								
								res.json({gotovTok: 1, tok: JSON.stringify(t), rez1: rez1, rez2: rez2, brojVrsta: 0, brojKolona: 0,velicinaKuglice: 50, staticka: 0, interval: 200, brojIgraca: 5, sirina: 800,visina: 450,slikaIgraca1:'kc.png',slikaIgraca2:'kp.png',brojIgraca: 0})
							}
						}
					})

					/*
					var sirina = 800;
					var visina = 600;
					var dimenzijeKruzica = 20;

					var i;

					var prvi = [];
					var drugi = [];
					for (i=0;i<brojIgraca;i++)
					{
						prvi[i] = {};
						drugi[i] = {};

						prvi[i].igrac = i+1;
						prvi[i].x = Math.random() *  (sirina - dimenzijeKruzica);
						prvi[i].y = Math.random() * (visina - dimenzijeKruzica)

						drugi[i].igrac = i+1;
						drugi[i].x = Math.random() *  (sirina - dimenzijeKruzica);
						drugi[i].y = Math.random() * (visina - dimenzijeKruzica)

						if (i == brojIgraca - 1)
						{
							res.json({prvi: prvi, drugi: drugi});
						}
					}
					*/
				}
			}
		}
	})
})



//8008
app.listen(11003, function()
{
	console.log("Game server je pokrenut");
})