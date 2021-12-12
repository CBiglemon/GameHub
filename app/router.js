// Requesting express
const express = require("express");

// Creating router through express
const router = express.Router();

// Setting path for /

router.get("/",(req,res)=>{
    res.render("index")
});

router

router.get("/game/:nameGame", (req, res)=>{

    const gameName = req.params.nameGame;

    const game = res.locals.games.find(myGame => myGame.name === gameName);
    console.log("game", game);

    if (game) {

        const dataForView = {
            jsFile: game.jsFile,
            cssFile: game.cssFile,
        }

        res.render(game.name, dataForView);
    }
    else {
        next();
    }
});

// Exporting router 
module.exports = router;