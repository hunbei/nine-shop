const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{
	// 获取当前用户id
	var uid=req.session.uid;

	if(!uid){//未定义就是没登录
		res.send({code:-1,data:'请先登录'});
		console.log('请登录')
		return;
	}
	// 查询当前用户的购物车
	var sql='SELECT sid,cb,sum,pid,pname,price,detail,info,img,imgs FROM shopcar,products where proid=pid and userid= ?';
	pool.query(sql,uid,(err,result)=>{
		if(err) console.log(err);
		res.send({code:1,data:result})
	})
})
router.get('/delete',(req,res)=>{
	// 获取当前用户id
	var uid=req.session.uid;
	// 删除购物车
	// 订单id
	var sid=req.query.sid;
	var sql='delete from shopcar where sid= ?'
	pool.query(sql,sid,(err,result)=>{
		if(err) console.log(err);
		if(result.affectedRows>0){
			res.send({code:1,data:'删除成功'});
			return;
		}else{
			res.send({code:-1,data:'删除失败'});
			return;
		}		
	})
});
router.get('/deletes',(req,res)=>{
	// 订单id
	var sid=req.query.sid;
	var sql='delete from shopcar where sid =?'
		pool.query(sql,sid,(err,result)=>{
			if(err) console.log(err);
			if(result.affectedRows>0){
				res.send({code:1,data:'删除成功'});				
			}else{
				res.send({code:-1,data:'删除失败'});			
			}		
		})	
})
router.get('/add',(req,res)=>{
	var ord=JSON.parse(req.query.shop);
	var uid=req.session.uid;
	if(!uid){
		res.send({code:0,data:'请先登录'})
		return;
	}
	ord.userid=uid;
	var sql='insert into shopcar set ?'
	pool.query(sql,ord,(err,result)=>{
		 if(err) console.log(err);
		if(result.affectedRows>0){
			res.send({code:1,data:'添加成功'});	
		}else{
			res.send({code:-1,data:'添加失败'});			
		}	
	})
})
router.get('/sett',(req,res)=>{
	var uid=req.session.uid;
	if(!uid){
		res.send({code:0,data:'请先登录'})
		return;
	}
	var sql='SELECT sid,cb,sum,pid,pname,price,detail,info,img,imgs FROM shopcar,products where proid=pid and userid= ? and cb!=0';
	pool.query(sql,uid,(err,result)=>{
		if(err) console.log(err);
		res.send({code:1,data:result})
	})	
})
router.get('/update',(req,res)=>{

	var shopcar=req.query.shopcars;
	console.log(shopcar,typeof shopcar);
	var uid=req.session.uid;
	var sql='UPDATE shopcar SET sum=?,cb=? WHERE userid=? and sid=?;'
	for (const item of shopcar) {
		var i=JSON.parse(item);
		pool.query(sql,[i.sum,i.cb,uid,i.sid],(err,result)=>{
			if(err) console.log(err);
			console.log(result)
		})
	}
	

})


module.exports=router;