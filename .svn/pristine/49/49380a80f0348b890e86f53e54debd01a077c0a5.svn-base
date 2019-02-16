//Moduli

var express = require('express');
var sqlite3 = require('sqlite3');
var bodyParser = require('body-parser');

//Objekti

var app = express();
var db = new sqlite3.Database('studenti.db');
var urlencodedParser = bodyParser.urlencoded({extended: false});


app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/sviStudenti', function(req,res){  //salje spisak svih studenata iz baze
    db.all("select rowid, ime, prezime, mesto from Student",function(err,rows){
        if(err)
            console.log(err);
        else
            res.send(JSON.stringify(rows));
    });
});

app.post('/obrisi', urlencodedParser, function(req,res){    //brise studenta za odredjeni id
    db.run("delete from Student where rowid="+req.body.IdBrisanja);
    res.send();
});

app.post('/polozeni', urlencodedParser, function(req,res){
    db.all("SELECT pp.naziv FROM Polozio p JOIN Predmet pp on p.predmetId=pp.rowid where p.studentId="+req.body.idStudenta,function(err,rows){
        if(err)
            console.log(err);
        else{
            console.log(req.body.idStudenta);
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    });
    
});

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example listening at http://%s:%s",host,port);
});