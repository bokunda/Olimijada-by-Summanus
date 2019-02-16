var auth = require('http-auth');
var path = require('path');
var express = require('express');

var app = express();

var basicKorisnik = auth.basic({
    realm: "Summanus Olimijada",
    file: __dirname + "/.htpasswd"
});



app.use(auth.connect(basicKorisnik));

app.use(express.static(path.join(__dirname,'./public')));

app.get('**',function(req,res)
{
	res.sendFile('index.html', {root: './public'});
});

app.listen(11006, function()	
{	
	console.log(this.address().address);
	console.log("Server pokrenut na portu 11002");
});

