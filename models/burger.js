// Import the ORM to create functions that will interact with the database and call the ORM functions using specified burger input // 
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(burger_name, callback) {
        orm.insertOne("burgers", function (res) {
            callback(res);
        });
    },
    updateOne: function(burger_id, callback) {
        orm.updateOne(burger_id, function(res) {
            callback(res);
        });

    }

};

// Export database functions for burgers_controller.js //
module.exports = burger;