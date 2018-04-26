var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("hi there");
});

app.get("/hhh",function(req,res){
    res.send("hahahahah");
});

app.get("/r/:sub/:su",function(req,res){
    var sub = req.params.sub;
    var su = req.params.su;
    res.send("welcome to " + sub + "  " + su);
});

app.get("*",function(req,res){
    res.send("chi");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server has started");
});