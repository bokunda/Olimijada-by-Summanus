var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('mydb.db');

db.all("SELECT * from user_info", function(err, rows)
{
    for(var i = 0; i < rows.length; i++)
    {
        console.log(rows[i].info);
    }
});