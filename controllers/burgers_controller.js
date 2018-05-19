// Dependencies //

var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database functions // 

var burger = require("../models/burger.js");

// Create all routes and set up the logic within those routes where required // 
// ----------------------------------------------------------------------------
// Index Redirect // 

router.get("/", function(req, res) {
    res.redirect("/index");  
});

// Index Page (render all burgers to the DOM) //
router.get("/index", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        // console.log(hbsObject); <-- This works! 
        res.render("index", hbsObject);
    });
});

// Create a new burger //
router.post("/burger/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/index");
    });
});

// Devour a burger //
router.post("/burger/eat/:id", function(req, res) {    
    burger.updateOne(req.params.id, function() {
        res.redirect("/index"); 
    }); 
}); 

// ------------------------------------------------------- //

// Export router for server.js to use //
module.exports = router;
