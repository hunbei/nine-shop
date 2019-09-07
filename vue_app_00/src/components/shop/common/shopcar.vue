<template>
<!-- 购物车页面 -->
		<div class="shopcar">
			<div class="header">
				<span>共{{}}件商品</span>
				<span>管理</span>
			</div>
			<!-- 购物车清单 -->
			<div >
			<!-- 单个购物单 -->
			<div class="car_item" v-for="(item,i) of lists" :key="i">
					<div class="car_select">
						<input type="checkbox" @click="select" v-model="item.cb">
					</div>
					<div class="item_right">
						<img src="../../../img/p5.jpg" alt="">
						<div class="item_intro">
							<p>dsafafsddddddddddddddddddddddddddd</p>
							<div >
								<span>￥{{item.price}}</span>
								<div class="btn" @click="change" >
									<i  >-</i>
									<i >{{item.sum}}</i>
									<i >+</i>
								</div>
							</div>
						</div>
					</div>
					<div class="del">
					 	&nbsp;删除&nbsp;
					</div>
					<!-- 结算 -->
					
			</div>
			
			</div>
				<!-- 结算 -->
			<div class="sem">
				<div class="car_select">
					<label for="">
						<input type="checkbox" v-model="selectAll">全选
					</label>
				</div>
				<div class="sem_right">
					合计：<span>￥338.00</span>
					<button>结算{{1}}</button>
				</div>
				
				
			</div>
		</div>
</template>
<style scoped>

/* 背景颜色 */
	.shopcar{
		padding:10px;
		background-color: #f2f2f2;
		height: 100%;
	}
	/* 头部样式 */
	.shopcar .header{
		padding:5px;
		margin:10px auto;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		border-radius: 5px;
	}
	.shopcar .header>span+span{
		color:#c96323;
	}
	/* 商品样式 */
	.shopcar .car_item{
		height: 110px;
		margin:10px 0;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding: 10px;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.car_select{
		overflow: hidden;
		color:#c96323;
	}
	.car_select input[type=checkbox]{
		margin: 0 auto;
		height:18px;width:18px;	
		vertical-align: bottom;
		-webkit-appearance:radio;
		color : #c96323;
	}
	/* 卡片图片 */
	.car_item .item_right {
		height: 100%;
		width: 89%;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	}
	.car_item .item_right img{
		width:35%;
	}
 .item_right .item_intro{
	 width:60%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 18px;
		padding: 3px 0;
	}
	.item_intro p{
		width: 100%;
		height: 50px;
		overflow:hidden;
    text-overflow:ellipsis; 
     -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
     overflow: hidden;
	}
	.item_intro>div>span:first-child{
		color:#c96323;
	}
	.item_intro>div>.btn{
		float: right;
	}
	.item_intro>div>.btn i{
		min-width: 20px;
		display: inline-block;
		text-align: center;
		box-sizing: border-box;
		overflow: hidden;
		background: #fff;
		color: #000;
		border:1px solid #000;
		outline: none;
		font-size: 15px;
		font-style: normal;
		border-radius: 2px;
		margin: 2px;
	}
	/* 结算 */
	.car_item .del{
		height:100%;
		/* width:auto; */
		width: 0;
		background: #c96323;
		color: #fff;
		line-height: 110px;
		overflow: hidden;	
		border-radius: 2px;
	}
	.sem{
		height: 50px;background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		vertical-align: bottom;
		position: fixed;
		bottom: 0;
		width: 100%;
		margin-left: -10px;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 5px;
	}
	.sem_right span{
		color: #c96323;
	}
	.sem_right button{
		border: none;
		border-radius:100px;
		padding:5px 15px;
		background: #c96323;
		color: #fff;
		margin: 0 7px;
	}
</style>
<script>
	export default{
		data(){
			return{
				lists:[
					{sum:1,cb:true,price:338.00},	
					{sum:1,cb:false,price:3328.00},	
					{sum:1,cb:false,price:118.00},	
					{sum:1,cb:true,price:3348.00},
						
				],
				selectAll:"",
			}
		},
		methods: {
			change,
			select,
		},


	}
	//增删数量
	function change(e){
		if(e.target.innerHTML=="-"){
			if(this.list[0].sum==1){
				this.$toast("减不动啦")
			}else{
			this.list[0].sum--
			}
		}else if(e.target.innerHTML=="+"){
			this.list[0].sum++;
		}
	}
	// 选中购买
	function select(e){
		var input=e.target;
		if (input.checked==false) {
			this.selectAll=false;
		}else{	
			var cbs=document.querySelectorAll(".car_item .car_select input");
			var t=true;
			for (const i in cbs) {	
				console.log(cbs[i])			
				if (cbs[i].checked==false) {
					t=false;				
				}
			}
			this.selectAll=t;	
			}
			
			
		}


</script>


