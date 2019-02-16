var express = require('express');
var sqlite3 = require("sqlite3");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
var db = new sqlite3.Database('muzika.db');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/',function(req,res) 
{
    res.sendFile(__dirname+'/'+'index.html');
});

app.get("/svePesme",function(req,res) 
{
    
    db.all("SELECT p.rowid,p.naziv,a.ime,a.prezime FROM Pesme p JOIN Autori a ON p.autorID=a.rowid", function(err, rows) {
        if (err)
            console.log(err);
        else {
            res.send(JSON.stringify(rows));
        }

    });
});

app.get("/svePlejliste",function(req,res) 
{
    db.all("SELECT rowid,naziv FROM Plejliste", function(err, rows) {
        if (err)
            console.log(err);
        else {
            res.send(JSON.stringify(rows));
        }

    });
});


app.get("/plejliste/:id",function(req,res) 
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

            //console.log("SELECT p.naziv,a.ime,a.prezime FROM Stavke_plejliste sp JOIN Pesme p on p.rowid=sp.pesmaID JOIN Autori a on a.rowid=p.autorID WHERE sp.plejlistaID="+id);

            db.all("SELECT p.naziv,a.ime,a.prezime FROM Stavke_plejliste sp JOIN Pesme p on p.rowid=sp.pesmaID JOIN Autori a on a.rowid=p.autorID WHERE sp.plejlistaID="+id, function(err, rows) {
                if (err)
                    console.log(err);
                else {
                   rezultat.pesme = rows;
                   //console.log(rezultat);

                   res.send(JSON.stringify(rezultat));
                }
        
            });
        }

    });
});

app.post("/dodajUListu", urlencodedParser,function(req,res){
    var pesmaID = req.body.pesma;
    var listaID = req.body.lista;

    db.all("SELECT * FROM Stavke_plejliste WHERE plejlistaID=? AND pesmaID=?",listaID,pesmaID, function(err,rows) {
        if (rows.length == 0)
        {
            db.run("INSERT INTO Stavke_plejliste(plejlistaID,pesmaID) VALUES(?,?)",listaID,pesmaID, function(err){
                
                res.send(listaID);
            });
        }
    });
        
            
});
 

app.post("/obrisiIzListe", urlencodedParser,function(req,res){
    var pesmaID = req.body.pesma;
    var listaID = req.body.lista;

    db.run("DELETE FROM Stavke_plejliste WHERE plejlistaID=? AND pesmaID=?",listaID,pesmaID, function(err){
        res.send(listaID);
    });
});

var server = app.listen(3000,function() {
    console.log("App listening at port 3000");
});

// dodati dodavanje pesama plejlisti (i brisanje)
// srediti prikaz