var express1 = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require("sqlite3");
var express2 = require('express');

var app1 = express1();
var app2 = express2();
//var router = express.Router();
// muzika1 za testiranje
var db = new sqlite3.Database("muzika.db");
var urlEncodedParser = bodyParser.urlencoded({ extended: true });

app1.use(express1.static('public1'));
//app.use('',router);
app1.use(bodyParser.json());
app2.use(express2.static('public2'));
app2.use(bodyParser.json());

/*
router.get("/svePesme",function(req,res) 
{
    db.all("SELECT p.rowid,p.naziv,(a.ime || ' ' || a.prezime) as 'autor' FROM Pesme p JOIN Autori a ON p.autorID=a.rowid", function(err, rows) {
        if (err)
            console.log(err);
        else {
			console.log(rows);
            res.send(JSON.stringify(rows));
        }

    });
});

router.get("svePesme/:id",function(req,res) 
{
	var idPesme = req.params.id;
	console.log(idPesme);

	db.each("SELECT p.rowid,p.naziv,(a.ime || ' ' || a.prezime) as 'autor' FROM Pesme p JOIN Autori a ON p.autorID=a.rowid WHERE p.rowid="+idPesme, function(err,row) {
		if (err) {
			console.log(err);
		}
		else {
			console.log(row);
			res.send(JSON.stringify(row));
		}
	});	
});


router.get("/svePlejliste",function(req,res) 
{
	db.all("SELECT pl.rowid,pl.naziv as 'naziv' ,a.naziv as 'pesma' FROM Plejliste pl LEFT JOIN (SELECT p.naziv,sp.plejlistaID FROM Stavke_plejliste sp JOIN Pesme p ON sp.pesmaID = p.rowid) as 'a' ON pl.rowid=a.plejlistaID", function(err, rows)
	{
		if (err)
			console.log(err);
		else {
			formatiraj(rows, function(plejliste) 
			{
				console.log(plejliste);
				res.send(JSON.stringify(plejliste));
			});
		}
	});

});

*/
function formatiraj(rows,callback) 
{
	var i =0;
	var plejliste = [];
	var k = -1;
	
	while (i<rows.length) 
	{
		if (i == 0 || rows[i].rowid!=rows[i-1].rowid) 
		{
			k++;
			var lista = 
			{
				"rowid" : rows[i].rowid,
				"naziv" : rows[i].naziv,
				"pesme" : []
			}
			
			lista.pesme.push(rows[i].pesma);
			plejliste[k] = lista;
			
		}
		else 
		{
			plejliste[k].pesme.push(rows[i].pesma);
		}
		
		if (i == rows.length - 1)
			callback(plejliste);
		
		i++;
	}
}

/*
router.get("/svePlejliste/:id",function(req,res) 
{
    var id = req.params.id;
    
    db.each("SELECT naziv FROM Plejliste WHERE rowid="+id, function(err, row) {
        if (err)
            console.log(err);
        else {
            var rezultat = {
                "naziv":row.naziv,
                "pesme":[]
            };

            db.all("SELECT p.naziv,a.ime,a.prezime FROM Stavke_plejliste sp JOIN Pesme p on p.rowid=sp.pesmaID JOIN Autori a on a.rowid=p.autorID WHERE sp.plejlistaID="+id, function(err, rows) {
                if (err)
                    console.log(err);
                else {
                   rezultat.pesme = rows;
				   console.log(rezultat);

                   res.send(JSON.stringify(rezultat));
                }
        
            });
        }

    });
});


app.post('/obrisiPesmu',urlEncodedParser,function(req,res)
{
	//console.log(req.body);
	var idPesme = req.body.idPesme;
	
	db.run("DELETE FROM Stavke_plejliste WHERE pesmaId="+idPesme, function(err) 
	{
		if (err)
		{
			console.log(err);
		}
		else 
		{
			db.run("DELETE FROM Pesme WHERE rowid="+idPesme, function(err) 
			{
				if (err) 
				{
					console.log(err);
				}
				else 
				{
					res.send(JSON.stringify({"odgovor":"Pesma uspesno obrisana"}));
				}
			});
		}
		
	});
	
});

app.post('/obrisiPlejlistu',urlEncodedParser,function(req,res)
{
	//console.log(req.body);
	var idPlejliste = req.body.idPlejliste;
	
	db.run("DELETE FROM Stavke_plejliste WHERE plejlistaId="+idPlejliste, function(err) 
	{
		if (err)
		{
			console.log(err);
		}
		else 
		{
			db.run("DELETE FROM Plejliste WHERE rowid="+idPlejliste, function(err) 
			{
				if (err) 
				{
					console.log(err);
				}
				else 
				{
					res.send(JSON.stringify({"odgovor":"Plejlista uspesno obrisana"}));
				}
			});
		}
		
	});
	
});

app.post("/izmeniPlejlistu",urlEncodedParser,function(req,res) 
{
	
	var idPlejliste = req.body.idPlejliste;
	var naziv = req.body.naziv;
	
	db.run("UPDATE Plejliste SET naziv='"+naziv+"' WHERE rowid="+idPlejliste, function(err) 
	{
		if (err)
			console.log(err);
		else {
			res.send(JSON.stringify({}));
		}
		
	});
});

app.post("/izmeniPesmu",urlEncodedParser,function(req,res) 
{
	//console.log(req.body);
	var idPesme = req.body.idPesme;
	var naziv = req.body.naziv;
	db.run("UPDATE Pesme SET naziv='"+naziv+"' WHERE rowid="+idPesme, function(err) 
	{
		if (err)
			console.log(err);
		else {
			res.send(JSON.stringify({}));
		}
		
	});
});

app.get('*', function(req,res) 
{
	res.sendFile(__dirname+'/public/'+'index.html');
});

app.listen(3000,function() 
{
    console.log("Listening on port 3000");
});

*/

app2.get("/svePlejliste",function(req,res) 
{
	db.all("SELECT pl.rowid,pl.naziv as 'naziv' ,a.naziv as 'pesma' FROM Plejliste pl LEFT JOIN (SELECT p.naziv,sp.plejlistaID FROM Stavke_plejliste sp JOIN Pesme p ON sp.pesmaID = p.rowid) as 'a' ON pl.rowid=a.plejlistaID", function(err, rows)
	{
		if (err)
			console.log(err);
		else {
			formatiraj(rows, function(plejliste) 
			{
				console.log(plejliste);
				res.send(JSON.stringify(plejliste));
			});
		}
	});

});

app1.get("*",function(req,res)
{
	res.sendFile(__dirname+"/index.html");
});


app1.listen(8080,function()
{
	console.log("app1 slusa na 8080");
});
app2.listen(8081,function()
{
	console.log("app2 slusa na 8081");
});