//Student - rowid, ime, prezime, mesto
//Predmet - rowid, naziv, profesor
//Polozio - rowid, studentId, predmetId, ocena

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('studenti.db');

db.serialize(function(){

    db.run("create table if not exists Student(ime TEXT NOT NULL, prezime TEXT NOT NULL, mesto TEXT NOT NULL)", function(err){
        if(err)
            console.log(err);
        else
            console.log("Tabela Student uspesno kreirana");
    });

    db.run("create table if not exists Predmet(naziv TEXT NOT NULL, profesor TEXT NOT NULL)", function(err){
        if(err)
            console.log(err);
        else
            console.log("Tabela Predmet uspsno kreirana");
    });

    db.run("create table if not exists Polozio(studentId INTEGER NOT NULL, predmetId INTEGER NOT NULL, foreign key(studentId) references Student(rowid), foreign key(predmetId) references Predmet(rowid))", function(err){
        if(err)
            console.log(err);
        else
            console.log("Tabela Polozio uspesno kreirana");
    });

    var stmt = db.prepare("insert into Student(ime, prezime, mesto) values(?,?,?)");
    stmt.run("Nikola","Pajovic","Kraljevo");
    stmt.run("Jelena","Colic","Kragujevac");
    stmt.run("David","Anicic","Kragujevac");
    stmt.run("Bojan","Piskulic","Svilajnac");
    stmt.finalize();

    stmt = db.prepare("insert into Predmet(naziv, profesor) values(?,?)");
    stmt.run("Algoritamske strategije","Boban Stojanovic");
    stmt.run("Vizuelno programiranje","Vladimir Cvjetkovic");
    stmt.run("Web programiranje","AKM");
    stmt.finalize();

    stmt = db.prepare("insert into Polozio(studentId, predmetId) values(?,?)");
    stmt.run(1,1);
    stmt.run(1,2);
    stmt.run(2,2);
    stmt.run(2,3);
    stmt.finalize();

});

db.close();