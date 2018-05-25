// Importing MySQL database connection // 

var connection = require("../config/connection.js");

// Helper function for SQL syntax //
function printQuestionMarks(num) {
    var arr = []; 

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper functin for SQL syntax - to convert object key/value pair as a string int arr // 
function objToSql(ob) {
    var arr = [];

    // For loop to loop though keys and push the key/value as a string int arr //     
    for (var key in ob) {
        var value = ob[key];
        // Returns a Boolean value indicating whether an object has a property with the specified name //
        // The hasOwnProperty method returns true if object has a property of the specified name, false if it does not //
        if (Object.hasOwnProperty.call(ob, key)) {

            // If string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Methods that will execute the necessary MySQL commands in the controllers. //
// These methods are necessary to use in order to retrieve and store data in the database //

// Methods for MySQL commands // 

var orm = {
    
    // selectAll()
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res){
            if (err) {
                throw err; 
            }
            cb(res);
    });
},
    insertOne: function(table, vals, cb) {
        var queryString = "INSERT INTO " + table;
        console.log("this is the table" + table);
        console.log("this is vals!" + vals);
        // console.log('this is col' + cols);

        queryString += " (";
        queryString += "burger_name";
        // queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUE ('";
        // queryString += printQuestionMarks(vals.length);
        queryString += vals;
        queryString += "') ";

        console.log("This is the query string!" + queryString);
        // console.log("This is printQuestionMarks" + printQuestionMarks());

        connection.query(queryString, vals, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

   // updateOne()
   updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};
    
// Export the orm object for the model burger.js //

module.exports = orm;