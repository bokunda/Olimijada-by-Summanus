var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("mydb.db");

db.run("UPDATE user_info set info = '456' where info = '123'", function(err)
{
    if(err)
        console.error(err);
    else
        console.error("Successfully updated");
});