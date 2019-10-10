// 搭建服务器
const express =require('express');
const cors=require("cors");
const bodyParser=require("body-parser");
//引入session模块，
const session=require("express-session")

//导入路由器
const search=require("./routes/search")
const detail=require("./routes/detail")
const classSearch=require("./routes/classSearch")
const discount=require("./routes/discount")
const login=require("./routes/login")
const shopcar=require("./routes/shopcar")

var app=express();
var server=app.listen(8080)//部署服务器监听8000
// 解决跨域问题
// 使用session
app.use(session({
	//为什么要设置安全字符串,由于将session篇号发送给客户浏览器(cookie)，将session对象编号加密后，发送给客户，（将安全字符串值放加密算法中在加密）sercet值是个字符串就可以
	secret:"128位字符串",
	//resave每次请求是否更新原有数据
	resave:true,
	//保存初始化数据
	saveUninitialized:true,
}));
app.use(cors({
	origin:["http://127.0.0.1:5050"],
	credentials:true
}));
// 使用中间件bodyParser
app.use(bodyParser.urlencoded({extended:false}));
// 托管静态资源
app.use(express.static('public'));


// 挂载路由
app.use("/search",search);
app.use("/detail",detail);
app.use("/classSearch",classSearch);
app.use("/discount",discount);
app.use("/login",login);
app.use("/shopcar",shopcar); 
