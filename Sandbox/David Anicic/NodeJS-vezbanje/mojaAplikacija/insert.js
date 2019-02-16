var sqlite3 = require('sqlite3');
var db =new sqlite3.Database('mydb.db');

db.run("INSERT into user_info(info) VALUES (123)",function(err)
{
    if(err)
        console.error(err);
    else
        console.log("Successfully inserted");
})