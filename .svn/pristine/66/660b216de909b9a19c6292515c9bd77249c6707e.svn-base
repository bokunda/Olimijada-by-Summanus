var auth = require('http-auth');
var express = require('express');
var path = require('path');


var app = express();

var basic = auth.basic({
    realm: "Summanus Olimijada",
    file: __dirname + "/.htpasswd"
});


app.use(auth.connect(basic));
app.use(express.static(path.join(__dirname,'./public')));

app.get('**',function(req,res)
{
	res.sendFile('index.html' ,{ root: './public' });
})

app.listen(11001, function()
{
	console.log("Admin server na 8080");
})