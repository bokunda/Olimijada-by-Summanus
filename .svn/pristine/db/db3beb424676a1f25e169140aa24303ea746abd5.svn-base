var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('mydb.db');

app.use(express.static('public'));
app.get('/data', function (req, res)
{
    db.all("SELECT info from user_info", function(err, rows)
    {
      var rezultat = JSON.stringify(rows);
      res.send(rezultat);  
    })
});

app.get('/ajaxSqlite', function (req, res)
{
    
});

var server = app.listen(8081, function()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});