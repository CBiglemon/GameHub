// Requesting express
const express = require("express");

// Creating router through express
const router = express.Router();

// Setting path for /

router.get("/",(req,res)=>{
    res.render("index")
});

// Exporting router 
module.exports = router;