const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{
	console.log(req.query);
	var uaccount=req.query.uaccount;
	var upwd=req.query.upwd
	var sql='select * from user where uaccount= ? and upwd=?';
	pool.query(sql,[uaccount,upwd],(err,result)=>{
		if(err) console.log(err);
		// console.log(result);
		try{
			if(result.length>0){
				req.session.uid=result[0].uid;
				console.log(req.session.uid);
				res.send({code:1,data:result})
			}else{
				res.send({code:-1,msg:"用户名密码错误"})
			}
		}	catch (error) {
			console.log( error);
			res.send({code:500,msg:"输入正确的口令"})
		}
		
	})
})


module.exports=router;