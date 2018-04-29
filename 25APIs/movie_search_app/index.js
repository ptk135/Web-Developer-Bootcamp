var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("search");
});



app.get("/results", function(req,res){
    // req.query是获取url中提交信息的object
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    // 发送请求
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            // 此时得到的body是string需要处理成js object
            // res.send(body);
            var data = JSON.parse(body);
            // 在之前设置view engine ejs之后就不用再加.ejs了
            // 把data传给相应的ejs
            res.render("results",{data:data});
            // res.send(results["Search"][0]["Title"]);
            
        }
    });
});






app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie App has started");
});