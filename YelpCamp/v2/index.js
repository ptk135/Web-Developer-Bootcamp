var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var mongoose = require("mongoose");
// 连接数据库的方法 若该数据库不存在则新建
mongoose.connect("mongodb://localhost/yelp_camp");

app.set("view engine", "ejs"); 

// schema setup
var campgroundsSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String
});

var Campground = mongoose.model("Campground",campgroundsSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//         description:"this is good"
        
//     }, function(err,campground){
//         if(err){
//             console.log(err);
//         } else{
//             console.log("NEWLY CREATED CAMPGROUND");
//         }
//     }
//     );

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        } else{
            // 返回的allCampgrounds是对象数组
            res.render("index",{campgrounds:allCampgrounds});
        }
    })
    
});

//约定：添加campground的route和展示所有的campground用的都是/campgrounds
app.post("/campgrounds",function(req,res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name:name, image:image, description:description};
    Campground.create(newCampground,function(err, newllycreatedcampground){
        if(err){
            console.log(err);
        }else{
            //redirect back to campgrounds page
             res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.get("/campgrounds/:id",function(req,res){
    // find the campground with provided id
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            // render show template with that campground
            res.render("show",{campground:foundCampground});
        }
    });
    
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("the yelpcamp server has started");
});