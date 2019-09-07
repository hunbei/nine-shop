<template>
	<div class="products">
		<div class="img_title">
			{{title}}
			<img src="../../../img/05.jpg" class="img_title_img">
		</div>
		<div class="produ_list">
			<ul>
				<li class="produ_list_item" v-for="(item,i) of products" :key="i">
				<img :src="require('../../../img/'+item.img)" alt="">
				<p>{{item.intro}}</p>
				<p class="price">￥{{item.price.toFixed(2)}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
	.img_title{
		margin:10px 0;
		height: 240px;
		text-align:center;
		color:#c96323;
		font-size:16px
	}
	.img_title_img{
		margin:10px 0;
		width:100%;
		height:auto;
	}
	.produ_list>ul{
		display: flex;
		justify-content: space-around;
		list-style:none;
		width:100%;
		flex-wrap: wrap;
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
	.produ_list .produ_list_item .price{
		color: rgb(180, 132, 78)
	}


</style>
<script>
export default{
data(){
	return{
		
	}
},
props:["products","title"]



}

</script>