var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('muzika.db');

db.serialize(function() 
{
    // Autori
    db.run("CREATE TABLE if not exists Autori(ime TEXT NOT NULL, prezime TEXT NOT NULL)", function(err) {
        if (err)
            console.error(err);
        else
            console.log("Tabela Autori uspesno kreirana");
    });

    // Pesme
    db.run("CREATE TABLE if not exists Pesme(naziv TEXT NOT NULL, autorID INTEGER NOT NULL, FOREIGN KEY(autorID) REFERENCES Autori(rowid))", function(err) {
        if (err)
            console.error(err);
        else {
            console.log("Tabela Pesme uspesno kreirana");
        }
    });

    // Plejliste
    db.run("CREATE TABLE if not exists Plejliste(naziv TEXT NOT NULL)", function(err) {
        if (err)
            console.log(err);
        else
            console.log("Tabela Plejliste uspesno kreirana");
    });

    // Stavke plejliste
    db.run("CREATE TABLE if not exists Stavke_plejliste(plejlistaID INTEGER NOT NULL, pesmaID INTEGER NOT NULL, FOREIGN KEY(plejlistaID) REFERENCES Plejliste(rowid), FOREIGN KEY(pesmaID) REFERENCES Pesme(rowid))", function(err) {
        if (err)
            console.error(err);
        else {
            console.log("Tabela Stavke_plejliste uspesno kreirana");
        }
    });

    var stmt = db.prepare("INSERT INTO Autori(ime,prezime) VALUES(?,?)");
    stmt.run("Zeljko","Joksimovic");
    stmt.run("Zdravko","Colic");
    stmt.run("Tose","Proeski");
    stmt.run("Momcilo","Bajagic");
    stmt.finalize();


    stmt = db.prepare("INSERT INTO Pesme(naziv,autorID) VALUES(?,?)");
    stmt.run("Ledena",3);
    stmt.run("Pratim te",3);
    stmt.run("Tanana",1);
    stmt.run("Karavan",1);
    stmt.run("Varnice",1);
    stmt.run("Tisina",4);
    stmt.run("Muzika na struju",4);
    stmt.run("Godine prolaze",4);
    stmt.run("Zivot je nekad siv, nekad zut",4);
    stmt.run("Pusti, pusti modu",2);
    stmt.finalize();


    stmt = db.prepare("INSERT INTO Plejliste(naziv) VALUES(?)");
    stmt.run("Pop");
    stmt.run("Rok");
    stmt.run("Svastara");
    stmt.finalize();
}
);