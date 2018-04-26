var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("hi, welcome to my first express practice");
});

app.get("/speak/:animal",function(req,res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I dont hate you humam",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send(sound);
});

app.get("/repeat/:message/:times", function(req,res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(var i=0; i<times; i++){
        result = result + message + " ";
    }
    res.send(result);
});

app.get("*",function(req,res){
    res.send("what are you doing with your life");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is currently running");
})