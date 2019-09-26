// 搭建服务器
const express =require('express');
const cors=require("cors");
const bodyParser=require("body-parser");

//导入路由器
const search=require("./routes/search")
const detail=require("./routes/detail")

var app=express();
var server=app.listen(8080)//部署服务器监听8000
// 解决跨域问题
app.use(cors({
	origin:["http://127.0.0.1:5050"]
}));
// 使用中间件bodyParser
app.use(bodyParser.urlencoded({extended:false}));
// 托管静态资源
app.use(express.static('public'));

// 挂载路由
app.use("/search",search);
app.use("/detail",detail)
