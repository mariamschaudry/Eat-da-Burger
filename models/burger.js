// Import the ORM to create functions that will interact with the database and call the ORM functions using specified burger input // 
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(tableInput, callback) {
        orm.selectAll("burgers", function(res) {
            callback(result);
        });
    },
    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers", function (res) {
            callback(result);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(result) {
            callback(result);
        });

    }

};

// Export database functions for burgers_controller.js //
module.exports = burger;