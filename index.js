var express =require("express");
var empsRouter=require("./route/emps")
var config =require("config");

var app=express();


var port =parseInt(config.get("port"));
app.use(function(req,res,next)
{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    next();
});


app.use("/emps", empsRouter);

app.listen(port,()=>
{
    console.log("Server Started...");
})
