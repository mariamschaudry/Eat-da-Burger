// Dependencies //

var mysql = require("mysql");
// var connection; 

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

// // For Heroku Deployment vs. Local MySQL Database //
// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else{
//     connection = mysql.createConnection({
//         host     : 'localhost',
//         user     : 'root',
//         password : "", // Add your password
//         database : 'burgers_db' // Add your database
//     });
// }

// Exporting the config connection for ORM use // 

// connection.connect(); 
module.exports = connection;