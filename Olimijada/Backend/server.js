// production mod za server
process.env.NODE_ENV = 'production';

// kompresija
var compression = require('compression');

var express = require('express');
//var sqlite3 = require('sqlite3');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var auth = require('http-auth');
//var tokenGenerator = require('jsonwebtoken');
//var tajniKljuc = 'tajniKljuc';

//var appKorisnik = express();
//var appAdmin = express();	//jedn express koristimo
var app = express();

//jedan index za korisnik rute i jedan indexadmin za reute za admina
//

var ruter = require('./index.js');	//za korisnike rute
//var ruterAdmin = require('./indexAdmin.js');  //za admin rute

// koristi kompresiju
//appKorisnik.use(compression());
app.use(compression());

var dbPristup = require('./database.js');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mail = require('./mailer');

/*

var basicKorisnik = auth.basic({
    realm: "Summanus Olimijada",
    file: __dirname + "/.htpasswd"
});

var basicAdmin = auth.basic({
    realm: "Summanus Olimijada",
    file: __dirname + "/.htpasswd"
});

appKorisnik.use(auth.connect(basicKorisnik));
appAdmin.use(auth.connect(basicAdmin));
*/


/*
appKorisnik.use(cors({origin: ["http://localhost:4200"], credentials: true}));
appKorisnik.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./index.html koji moze da bude i prazan')));	//ovde da se stavi da server renderuje neku html stranu i to da radi na nekom portu a angular
//appKorisnik.use(fileUpload());
appKorisnik.use('/',ruter)
//appKorisnik.use(expressKorisnik.static('app/public'));


appAdmin.use(cors({origin: ["http://localhost:4201"], credentials: true}));
appAdmin.use(bodyParser.json());
appAdmin.use(express.static(path.join(__dirname,'./publicAdmin')));
//appAdmin.use(fileUpload());

*/
//
app.use(cors({origin: ["http://localhost:4200","http://localhost:4201","http://147.91.204.116:11002","http://147.91.204.116:11001"], credentials: true, methods:['GET', 'PUT', 'POST']}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./public')));
//app.use(express.static(path.join(__dirname,'./index.html')));	//ovde da se stavi da server renderuje neku html stranu i to da radi na nekom portu
//app.use(fileUpload());

/*
app.get('/', (req, res, next) => 
{	//pojma nemam dal ovo treba ovako
    res.render("index1.html");
});
*/
app.use('/',ruter);
//app.use('/admin',ruterAdmin);

app.listen(8081, function()	
{	
	console.log(this.address().address);
	console.log("Server pokrenut na portu " + this.address().port);
});

// interval za kreiranje meceva
setInterval(dbPristup.NapraviSveMeceve,12000);

setInterval(dbPristup.UbaciRezultate,6000);

/*appKorisnik.listen(8080, function()
{
	console.log(this.address().address);
	console.log("Server korisnik pokrenut na 11000");
});*/

/*
appAdmin.use('**',function(req,res)
{
	console.log("Admin *");
	res.sendFile('index.html', { root: "./publicAdmin" })
});

appKorisnik.use('**',function(req,res)
{
	console.log("Korisnik *");
	res.sendFile('index.html', { root: "./publicKorisnik" })
});

*/

//appAdmin.use(expressAdmin.static('app/public'));
/*
appKorisnik.get('**',function(req,res)
{
	console.log("Korisnik *");
	res.sendFile('index.html', { root: "./publicKorisnik" })
});

appAdmin.get('**',function(req,res)
{
	console.log("Admin *");
	res.sendFile('index.html', { root: "./publicAdmin" })
});
*/

// preimenuj ako radi
/*
const ruterNepostojeceKorisnik = require('./ruterAdmin.js');
appKorisnik.use('/',ruterNepostojeceKorisnik);
*/

/*
appKorisnik.use(function(req,res,next)
{
	console.log("Korisnik *");
	res.sendFile('index.html', { root: "./publicKorisnik" });
});
*/