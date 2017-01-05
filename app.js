//DEPENDENCIES

var express = require("express");
var app = express();

//ROUTE

app.get("/", function(req, res){
   res.send("Welcome to whereWasI, written by Sid Kumar and Daniel Zheng. The application is currently under development.");
});

app.get("/:tvshow", function(req, res){
    var tvshow = req.params.tvshow;
    var episode = Math.floor(1 + Math.random() * 100);//LOL
    res.send("Testing dynamic capabilities. You are currently watching " + tvshow + " and are currently on episode number " + episode + ".");
})

//LISTENING PORT

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});