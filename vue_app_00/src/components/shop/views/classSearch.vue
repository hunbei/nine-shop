<template>
	<div id='#search'>
		 <!-- 顶部导航返回按钮 -->
    <div class="detail_titel">
      <i @click="fanhui"></i>
      {{cid=='10'?'榨汁机':cid=='20'?'杯子':cid=='30'?'食材':cid=='40'?'饭煲锅具':cid=='50'?'花样面煎':cid=='60'?'烘焙':cid=='70'?'净水器':'智能厨具'}}
    </div>
		<!-- 排序方式 -->
		<div class="sort">
			<p @click="sort(1)" :class="light=='down'?'light':''">价格最高</p>
			<p @click="sort(-1)" :class="light=='up'?'light':''">价格最低</p>
		</div>
		<!-- 商品列表查询结果 -->
			<div class="produ_list">
			<ul>
				<li class="produ_list_item" v-for="(item,i) of products" :key="i" :data-pid='item.pid' @click="detail(item.pid)">
				<img :src="require('../../../img/products/'+item.img+'.jpg')" alt="">
				<p>{{item.detail}}</p>
				<p class="price">￥{{item.price.toFixed(2)}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
/* 头部导航 */
.detail_titel {
  height: 50px;
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.detail_titel i {
  height: 100%;
  width: 35px;
  background: url("../../../assets/return.png") no-repeat;
  background-position: center center;
}
.detail_titel i:hover {
  background: #9e9d9d;
}

/* 排序 */
.sort{
	display: flex;
	justify-content: space-around;
	font-size: 14px;
	padding: 10px 0;
}
.sort .light{
  color: #c96323;
}

/* 商品列表 */
	.produ_list>ul{
		/* display: flex;
		justify-content: space-between;
		list-style:none;
		flex-wrap: wrap; */
		width: 95%;
		display: flex;
		margin: 0 auto;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.produ_list .produ_list_item{
		width:48%;
		box-shadow:0 0 2px 2px #ccc;
		padding: 10px;
		box-sizing: border-box;
		font-size:12px;
		margin-bottom:10px;
	}
	.produ_list .produ_list_item img{
		width:100%;
		height:148.75px;
		margin-bottom: 5px;
	}
	.produ_list_item img+p{
		display: -webkit-box;-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;
	}
	.produ_list .produ_list_item .price{
		margin-top: 5px;
  color: #c96323;
	}
</style>
<script>
	export default{
		data(){
			return{
				value:'',
				products:[],
				light:'',
			}
		},
		props:['cid'],
		methods: {
			fanhui(){
				this.$router.go(-1)
			},
			onSearch(){
			console.log(this.value)
			},
			// 获取商品数据
			getProducts(){
				var url='classSearch'
				var cid={cid:this.cid};
				// 发送ajax
				this.axios.get(url,{params:cid})
				.then(res=>{
					console.log(res.data.data);
					this.products=res.data.data;
				})
			},
			sort(num){
				if(num==1){//价格最高,降序
				this.light='down';
				var arr=[];
				var c=0;
				for (let i = 0; i < this.products.length; i++) {
					const element = this.products[i];
					for (let j = i+1; j < this.products.length; j++) {
						if (this.products[i].price<this.products[j].price) {
							c=this.products[i];
							this.products[i]=this.products[j];
							this.products[j]=c;
						}		
					}				
				}
				}else{
					this.light='up';
					var arr=[];
					var c=0;
					for (let i = 0; i < this.products.length; i++) {
						const element = this.products[i];
						for (let j = i+1; j < this.products.length; j++) {
							if (this.products[i].price>this.products[j].price) {
								c=this.products[i];
								this.products[i]=this.products[j];
								this.products[j]=c;
						}		
					}				
				}		
				}
			},
			// 跳转商品详情
			detail(pid){
				this.$router.push('/detail/'+pid)
			}
		},
		created() {
			this.getProducts()
		},

	}

</script>