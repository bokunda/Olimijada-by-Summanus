var sqlite3 = require('sqlite3');
var db = new sqlite3.Database("mydb.db");

db.run("DELETE from user_info where info = '456'", function(err)
{
    if(err)
        console.log(err);
    else
        console.log("Successfully deleted");
});