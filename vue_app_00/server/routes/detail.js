const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
	 var pid=req.query.pid;
	var sql='select * from products where pid= ?'
	 pool.query(sql,pid,(err,result)=>{
	 	 if(err) console.log(err);
	res.send({code:1,data:result})
	 })
})

module.exports=router; 