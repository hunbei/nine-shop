
<template>
<!-- // 商品专区 -->
	<div class="products">
		<div class="img_title">
			{{title}}
			<img :src="require('../../../img/products/'+timg+'.jpg')" class="img_title_img">
		</div>
		<div class="produ_list">
			<ul>
				<li class="produ_list_item" v-for="(item,i) of products" :key="i" :data-pid='item.pid' @click="detail(item.pid)">
				<img :src="require('../../../img/products/'+item.img+'.jpg')" alt="">
				<p>{{item.detail}}</p>
				<p class="price">￥{{parseInt(item.price).toFixed(2)}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
	.img_title{
		margin:10px 0;
		height: 240px;
		padding: 0 5px;
		text-align:center;
		color:#c96323;
		font-size:16px;
		overflow: hidden;
	}
	.img_title_img{
		margin:10px 0;
		width:100%;
		height:auto;

	}
	/* 商品列表 */
	.produ_list>ul{
		width: 95%;
		display: flex;
		margin: 0 auto;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.produ_list .produ_list_item{
		width:45%;
		box-shadow:0 0 2px 2px #ccc;
		padding: 10px;
		box-sizing: border-box;
		font-size:12px;
		margin-bottom:10px;
	}
	.produ_list .produ_list_item img{
		width:100%;
		height:148.75;
	}
	.produ_list_item img+p{
		display: -webkit-box;-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;
	}
	.produ_list .produ_list_item .price{
		 color: #c96323;
	}


</style>
<script>
export default{
data(){
	return{
		products:[],
		timg:'h4',
	}
},
props:["title"],
methods: {
	getproducts(){
		var url='discount';
		var pno=this.title=='秒杀专区'?1:this.title=='限量购专区'?2:3;
		this.timg=this.title=='秒杀专区'?'h4':this.title=='限量购专区'?'h5':'h6';
		var data={pno};
		this.axios.get(url,{params:data})
		.then(res=>{
			this.products=res.data.data;
		})
	},
	detail(pid){
		this.$router.push('/detail/'+pid)
	}
},
created() {
	this.getproducts();
},


}

</script>