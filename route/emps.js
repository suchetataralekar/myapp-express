var express =require("express");
var mysql=require("mysql");
var config =require("config");

var router=express();
router.use(express.json());
var connection=mysql.createConnection({
    host:config.get("host"),
    user:config.get("user"),
    database:config.get("database"),
    password:config.get("password"),
});

connection.connect();

router.get("/",(request,responce)=>
{
    qu=`select *from Emp`;
    connection.query(qu,(err,res)=>
    {
        if(err==null)
        {
            responce.send(JSON.stringify(res));
        }
        else
        {
            responce.send(JSON.stringify(err));
        }
    })
})

router.get("/:No",(request,responce)=>
{
  var  qu=`select *from Emp  where No=${request.params.No}`;
    connection.query(qu,(err,res)=>
    {
        if(err==null)
        {
            responce.send(JSON.stringify(res));
        }
        else
        {
            responce.send(JSON.stringify(err));
        }
    })
})

router.delete("/:No",(request,responce)=>
{
   var qu=`delete from Emp  where No=${request.params.No}`;
    connection.query(qu,(err,res)=>
    {
        if(err==null)
        {
            responce.send(JSON.stringify(res));
        }
        else
        {
            responce.send(JSON.stringify(err));
        }
    })
})

router.put("/:No",(request,responce)=>
{
   var qu=`update Emp set Name='${request.body.Name}', Age=${request.body.Age} where No=${request.params.No}`;
    connection.query(qu,(err,res)=>
    {
        if(err==null)
        {
            responce.send(JSON.stringify(res));
        }
        else
        {
            responce.send(JSON.stringify(err));
        }
    })
})

router.post("/",(request,responce)=>
{
   var qu=`Insert into Emp values(${request.body.No},'${request.body.Name}',${request.body.Age})`;
    connection.query(qu,(err,res)=>
    {
        if(err==null)
        {
            responce.send(JSON.stringify(res));
        }
        else
        {
            responce.send(JSON.stringify(err));
        }
    })
})

module.exports=router;