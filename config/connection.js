// Dependencies //

var mysql = require("mysql");

// Connecting Node to MySQL //

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,

    user: "root",
    password: "",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("There seems to be an error in connecting: " + err.stack);
        return; 
    }
    console.log("You are connected to the burger database at id " + connection.threadId + "!");

});

// Exporting the config connection for ORM use // 

module.exports = connection;