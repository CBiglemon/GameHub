// Requesting express

const express = require("express");
const server = express();

// Requesting router
const router = require("./app/router");

// Indicating what model we're using
server.set('view engine', 'ejs');

// Indicating where to find it!
server.set('views', './app/views');

// Indicating the static public folder 
server.use(express.static('public'));

const games = require("./games.json");

server.use((req,res,next)=>{
    // j'enregistre dans les locals mes jeux
    res.locals.games = games;
    console.log("middleware dans l'index");

    next();
});

// Requesting router
server.use(router);

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
});

