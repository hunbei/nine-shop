const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
	console.log(req.query.data);
	var data=req.query.data;
	data=data=="全部"?"":data=="沙发"?10:data=="床"?20:data=="桌子"?10:data=="柜子"?20:data=="茶几"?10:20;
	var sql=data==""?"select pid,pname,price,brand,spec,detail,img,imgs from product_list":"select pid,pname,price,brand,spec,detail,img,imgs from product_list where familyId = ?";
	pool.query(sql,data,(err,result)=>{
		if(err) console.log(err);
		res.send({code:1,msg:"查询成功",data:result});
		console.log()
	});
	
	
})
module.exports=router;