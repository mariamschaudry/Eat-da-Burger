// Import the ORM to create functions that will interact with the database and call the ORM functions using specified burger input // 
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
         cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        orm.insertOne(table, cols, vals, function (res) {
         cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
         cb(res);
        });

    }

};

// Export database functions for burgers_controller.js //
module.exports = burger;