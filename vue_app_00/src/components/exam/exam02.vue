<template>
	<div>
		<button @click="del">click me</button>
		<button @click="de">显示交互式提示框</button>
		<button @click="de2">显示确认框</button>
		<button @click="de3">输入卡号</button>
		<mt-field label="标题" placeholder="请输入用户名" v-model="uname" :attr="{maxlength:10}"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" v-model="upwd" type="password" ></mt-field>
		<mt-button  @click="reg" size="large" style="background-color:lightblue">提交</mt-button>
	</div>
</template>
<script>
export default{
	data() {
		return {
			uname:"",
			upwd:""
		}
	},
	methods:{
		//验证用户输入表单
		reg(){
			//创建正则表达式一，用户名密码  3~
			
			var reg1=/^[a-zA-Z0-9]{3,12}$/;
			//创建正则表达式 年龄;
			var reg2=/^\d{2}$/;
			//获取用户名
			//获取用户密码，
			//获取年龄
			//验证用户名，密码，年龄，如果出错交互提示
			if(!reg1.test(this.uname)){
				this.$messagebox("用户名出错");
				return;
			}
			else if(!reg1.test(this.upwd)){
				this.$messagebox("密码出错"+this.upwd);
				return;
			}else{
				this.$messagebox("注册成功");
				return;
			}

			//验证成功 ajax请求完成注册任务
		},
		//输入交互框
		de3(){
			this.$messagebox.prompt("请输入卡号")
			.then((value,action)=>{ //输入成功回调
				console.log(value); //输入内容
			}).catch(err=>console.log(err))//取消时执行的回调
		},
		//交互,式提示框
		de(){
			this.$messagebox("消息","数据加载成功")
		},
		de2(){
			//确认提示框,
			this.$messagebox.confirm("是否删除指定数据")
			.then(res=>{      //点击确认执行成功后回调用，回调函数都是是异步操作，
				console.log(res)
			}).catch(err=>{console.log(err)})//点击取消执行后回调用

		},
		del() {
			
			this.$toast({
				message:"删除成功",//消息提示
				position:"middle",//位置
				iconClass:"iconfont icon-chenggong"//图标
				});
		}
	}
}



</script>