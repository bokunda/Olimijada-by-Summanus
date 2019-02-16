var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('mydb.db');

db.serialize(function()
{
    db.run("CREATE TABLE if not exists user_info (info TEXT)", function(err)
    {
        if(err)
            console.error(err);
        else
            console.log("Successfully created table");
    });

    var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
    for(var i = 0; i< 10; i++)
    {
        stmt.run("Ipsum " + i);
    }

    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM user_info", function(err, row)
    {
    console.log(row.id + ": " + row.info);
    });

});

db.close();