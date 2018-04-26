var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar: thing});
});

app.get("/post",function(req,res){
    var posts = [
            {title:"Post 1", author:"lxy"},
            {title:"Post 2", author:"ptk"},
            {title:"Post 3", author:"tkft"}
        ];
        res.render("posts.ejs",{posts:posts});
        
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is now running");
});