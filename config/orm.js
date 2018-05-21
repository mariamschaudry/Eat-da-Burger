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
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function (err, result){
            if (err) {
                throw err; 
            }
            callback(result);
    });
},

    // insertOne()
    insertOne: function(burger_name, callback) {
        console.log(burger_name);
        connection.query("INSERT INTO burgers SET ?", {
            burger_name : burger_name,
            devoured: false
        }, function(err, result) {
            if(err) throw (err);
            callback(result);
        });
    },

   // updateOne()
   updateOne: function(burgerID, callback) {
       connection.query("UPDATE burges SET ? WHERE ?", [{devoured: true}, {id: burgerID}], function(err, result){
           if (err) throw err;
           callback(result);
       });
    }

};
    
// Export the orm object for the model burger.js //

module.exports = orm;