const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
	console.log(req.query.id);
	res.send(req.query.id)
})

module.exports=router; 