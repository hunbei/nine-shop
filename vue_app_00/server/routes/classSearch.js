const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{
	var cid=req.query.cid;
	var sql='select * from products where classid= ?';
	pool.query(sql,cid,(err,result)=>{
		if(err) console.log(err);
		// console.log(result);
		res.send({code:-1,data:result})
	})
})


module.exports=router;