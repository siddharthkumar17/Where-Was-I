//DEPENDENCIES

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//ROUTE

app.get("/", function(req, res){
   res.render("home");
});

app.get("/query=:query",function(req, res) {
    var query = req.params.query;
    res.send(query);
});

/*app.get("/:tvshow/:season/:episode", function(req, res){
    var tvshow = req.params.tvshow;
    var season = req.params.season;
    
    var episode = req.params.episode;
    res.send("You are currently watching " + tvshow + " at season "+season+" episode " + episode + "."); //wait dont update this shit cus its useless were gonna be using EJS
    
    
})*/

//LISTENING PORT

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});

//OK LETS USE MEVN SO VUE.JS IN PLACE OF ANGULAR, BECAUSE VUE IS A LOT EASIER TO LEARN AND SUITS OUR NEEDS VERY LIGHTWEIGHT ETC