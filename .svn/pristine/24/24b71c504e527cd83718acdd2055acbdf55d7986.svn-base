var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('baza.db');

router.get('/', function(req, res, next) {

  var str, nizz, strtip, nizztip, strsvitip, nizzsvitip, strtoptip, nizztoptip;

  db.serialize(function()
  {

    db.all("SELECT * FROM klubovi", function(err, rows)
    {
      str = JSON.stringify(rows);
      nizz = JSON.parse(str);
    });

    db.all("SELECT * FROM vrsteTipova", function(err, rows)
    {
       strtip = JSON.stringify(rows);
       nizztip = JSON.parse(strtip);
    });

    var upit = "";

    upit += "SELECT k1.imeKluba as Domacin, k2.imeKluba as Gost,  vt.tip as Tip, t.datum as Datum ";
    upit += "FROM tipovi t JOIN klubovi k1 ON t.idkluba1 = k1.idkluba ";
    upit += "JOIN klubovi k2 ON t.idkluba2 = k2.idkluba ";
    upit += "JOIN vrsteTipova vt ON vt.id = t.idtipa ";
    upit += "ORDER BY t.datum DESC ";
    upit += "LIMIT 60 ";

    console.log(upit);

    db.all(upit, function(err, rows)
    {
       strsvitip = JSON.stringify(rows);
       nizzsvitip = JSON.parse(strsvitip);
    });

    var upit = "";

    upit += "SELECT k1.imeKluba as Domacin, k2.imeKluba as Gost,  vt.tip as Tip, COUNT(*) AS Koliko ";
    upit += "FROM tipovi t JOIN klubovi k1 ON t.idkluba1 = k1.idkluba  ";
    upit += "JOIN klubovi k2 ON t.idkluba2 = k2.idkluba  ";
    upit += "JOIN vrsteTipova vt ON vt.id = t.idtipa ";
    upit += "GROUP BY k1.imeKluba, k2.imeKluba, vt.tip    ";
    upit += "ORDER BY koliko DESC ";
    upit += "LIMIT 6 ";

    console.log(upit);

    db.all(upit, function(err, rows)
    {
        strtoptip = JSON.stringify(rows);
        nizztoptip = JSON.parse(strtoptip);
    });

    setTimeout(function()
    {
      var nizzaslanje = [];
      for(var x in nizz)
      {
        nizzaslanje.push(nizz[x]);
      }

      console.log(nizzaslanje);

      var nizzaslanjetip = [];
      for(var y in nizztip)
      {
         nizzaslanjetip.push(nizztip[y]);
      }

      console.log(nizzaslanjetip);

      var nizzaslanjesvitip = [];
      for(var z in nizzsvitip)
      {
          nizzaslanjesvitip.push(nizzsvitip[z]);
      }

      var nizzaslanjetoptip = [];
      for(var a in nizztoptip)
      {
          nizzaslanjetoptip.push(nizztoptip[a]);
      }

      res.render('index', { title: 'PL tipovanje',  klubovi: nizzaslanje, tipovi: nizzaslanjetip, svitipovi: nizzaslanjesvitip, toptipovi: nizzaslanjetoptip });
    }, 600);

  });

});

router.get('/tipuj', function(req, res, next) {

    var texturl = "" + req.url;

    var ukparova;
    var domacini = [];
    var gosti = [];
    var tipovi = [];
    var pozicijaMejl;
    var mejl = "";


    //pokupi koliko

    if (texturl[20] == 0) ukparova = 10;
    else ukparova = texturl[19];

    console.log("Koliko polja: " + ukparova);

    //pokupi parove i tipove
    var j = 0;

    for (var i = 9; i < texturl.length; i++) {
        if (texturl[i] == 'm') {
            pozicijaMejl = i;
            break;
        }

        if (texturl[i] == 'd') {
            if (texturl[i + 3] != '&') {
                domacini[j] = texturl[i + 2] + texturl[i + 3];
                i += 3;
            }
            else domacini[j] = texturl[i + 2];
        }

        if (texturl[i] == 'g') {
            if (texturl[i + 3] != '&') {
                gosti[j] = texturl[i + 2] + texturl[i + 3];
                i += 3;
            }
            else gosti[j] = texturl[i + 2];
        }

        if (texturl[i] == 't') {
            tipovi[j] = texturl[i + 2];
            j++;
        }

    }

    for (var i = 0; i < domacini.length; i++)
        console.log("D: " + domacini[i] + " G: " + gosti[i] + " T: " + tipovi[i]);

    console.log(texturl);

    //pokupi email

    for (var i = 0; i < texturl.length; i++)
    {
        while(texturl[i] != 'm') i++;

        if(texturl[i] == 'm')
        {
            if(texturl[i+5] == "&")
            {
                mejl = "nepoznat";
                console.log("Mejl je nepoznat!");
                break;
            }
            else
            {
                i = i+5;

                for(var j = 0; texturl[i] != '&'; j++, i++)
                {
                    mejl += texturl[i];
                }
                console.log("Mejl je: " + mejl);
                break;
            }
        }
    }

    //INSERT podataka, tipova

    db.serialize(function()
    {
        setTimeout(function()
        {
            for(var i = 0; i < ukparova; i++)
            {
                db.run("INSERT INTO tipovi (idkluba1, idkluba2, idtipa, datum, email) VALUES (" + domacini[i] + ", " + gosti[i] + ", " + tipovi[i] + ", DATETIME('now')" + ", '" + mejl + "');");
            }
        });
    });

    res.render('poruka', { title: 'PL tipovanje' });

});

module.exports = router;
