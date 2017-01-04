//DEPENDENCIES

var express = require("express");
var app = express();

//ROUTE

app.get("/", function(req, res){
   res.send("Welcome to whereWasI, written by Sid Kumar and Daniel Zheng. The application is currently under development.");
});

//LISTENING PORT

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});