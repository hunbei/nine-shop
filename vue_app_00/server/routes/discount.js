const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{

	var pno=parseInt(req.query.pno);
	var sql='select * from products limit ?,6';
	pool.query(sql,pno,(err,result)=>{
		if(err) console.log(err);

		res.send({code:-1,data:result})
	})
})


module.exports=router;