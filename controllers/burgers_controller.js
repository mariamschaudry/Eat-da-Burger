// Dependencies //

var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database functions // 

var burger = require("../models/burger.js");

// Create all routes and set up the logic within those routes where required // 
// ----------------------------------------------------------------------------
// Index Redirect // 

// Index Page (render all burgers to the DOM) //
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject); 

        res.render("index", hbsObject);
    });
});

// Create a new burger //
router.post("/api/create", function(req, res) {
    console.log(req.body)
    let values = [req.body["burger_name"]];
    console.log("API create - this are the values" + values);

    burger.insertOne("burgers", values, function(results) {
        console.log("this is the result" + results);
        res.json(results);
    });
});

// Devour a burger //
router.put("/:id", function(req, res) {  
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({devoured : req.body.devoured}, condition, function() {
        // res.json(results)
        res.redirect("/");
    
    });
}); 


// ------------------------------------------------------- //

// Export router for server.js to use //
module.exports = router;
