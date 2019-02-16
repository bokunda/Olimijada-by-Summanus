function prikaziPesme(nizPesama) {
    var html = "";
    for(var i=0;i<nizPesama.length;i++) {
        pesma = nizPesama[i];
        
        html += "<option value='"+pesma.rowid+"'>";
        html += pesma.ime +" "+ pesma.prezime + " - " + pesma.naziv;
        html += "</option>";
    }

    document.getElementById("selectPesma").innerHTML = html;
}

function ucitajPesme() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var nizPesama = JSON.parse(this.responseText);
            
            prikaziPesme(nizPesama);
        }
    };

    xhttp.open("GET","svePesme",true);
    xhttp.send();
}

function prikaziPlejlisteSelect(nizPlejlisti) {
    var html = "";
    for(var i=0;i<nizPlejlisti.length;i++) {
        lista = nizPlejlisti[i];
        
        html += "<option value='"+lista.rowid+"'>";
        html += lista.naziv;
        html += "</option>";
    }

    document.getElementById("selectPlejlista").innerHTML = html;
}

function ucitajPlejliste() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var nizPlejlisti = JSON.parse(this.responseText);
            
            prikaziPlejlisteSelect(nizPlejlisti);
            prikaziPlejliste(nizPlejlisti);
        }
    };

    xhttp.open("GET","svePlejliste",true);
    xhttp.send();
}

function prikaziPlejliste(nizPlejlisti) {
    var html = "<table id='spisakListi'>";
    for(var i=0;i<nizPlejlisti.length;i++) {
        lista = nizPlejlisti[i];
        
        html += "<tr><td>"+lista.naziv+"</td>";
        html += "<td><button type='button' onclick='prikaziListu("+lista.rowid+")'>Prikazi listu</button></td></tr>";
    }

    html += "</table>";

    document.getElementById("prikaz").innerHTML = html;
}

function prikaziListu(lista) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var plejlista = JSON.parse(this.responseText);

            console.log(plejlista.naziv);
            console.log(plejlista.pesme)

            var html = "<h2>"+plejlista.naziv+"</h2>";
            html+="<table>";
            html += "<tr><th>Pesma</th><th>Autor</th></tr>";
            for (var i=0;i<plejlista.pesme.length;i++) {
                var pesma = plejlista.pesme[i];
                
                html += "<tr><td>"+pesma.naziv+"  </td>";
                html += "<td>  "+pesma.ime+" "+pesma.prezime+"</td></tr>"; 
                
            }
            html+="</table>";

            document.getElementById("prikaz2").innerHTML = html;
        }
    };

    xhttp.open("GET","plejliste/"+lista,true);
    xhttp.send();
}

function dodajUPlejlistu() {
    var pesma = document.getElementById("selectPesma").value;
    var lista = document.getElementById("selectPlejlista").value;

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("OK");
            prikaziListu(this.responseText);
        }
    };
    

    xhttp.open("POST","dodajUListu",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("pesma="+pesma+"&lista="+lista);


}

function obrisiIzPlejliste() {
    var pesma = document.getElementById("selectPesma").value;
    var lista = document.getElementById("selectPlejlista").value;

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            prikaziListu(JSON.parse(this.responseText));
        }
    };
    

    xhttp.open("POST","obrisiIzListe",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("pesma="+pesma+"&lista="+lista);
}