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
        // Returns a Boolean value indicating whether an object has a property with the specified name //
        // The hasOwnProperty method returns true if object has a property of the specified name, false if it does not //
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

// Methods that will execute the necessary MySQL commands in the controllers. //
// These methods are necessary to use in order to retrieve and store data in the database //

// Methods for MySQL commands // 

var orm = {
    
    // selectAll()
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        
        // Run MySQL Query //
        connection.query(queryString, function (err, result) {
            if (err) throw err; 
            callback(result);
        });
    },

    // insertOne()
    insertOne: function(table, cols, vals, callback) {
        console.log(table, cols, vals);
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) {
              throw err; 
            }
            callback(result); 
    });
},

   // updateOne()
   updateOne: function(table, objColVals, condition, callback) {
       var queryString = "UPDATE" + table; 

       queryString += " SET ";
       queryString += objToSql(objColVals);
       queryString += " WHERE ";
       queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
    });
  }
};

// Export the orm object for the model burger.js //

module.exports = orm;