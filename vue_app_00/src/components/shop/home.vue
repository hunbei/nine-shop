<template>
  <div class="container">
		<!-- 搜索框 固定头部-->
		<div class="search">
			<div >			
			<svg t="1567682221452" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2065" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M688.565345 653.900847c0 0-11.672854 15.440667-27.297716 30.575366l179.917696 176.300308 29.860075-27.91784L688.565345 653.900847 688.565345 653.900847zM752.457514 462.786135c0 175.017082-134.816498 306.400389-301.919331 306.400389C276.296767 766.655887 149.950174 629.448946 149.950174 463.021495c0-160.758334 135.995347-296.318776 300.588009-296.318776C617.641015 166.70272 752.457514 304.025295 752.457514 462.786135L752.457514 462.786135zM449.439152 206.867488c-143.231145 0-259.32421 116.181069-259.32421 261.075087 0 144.898111 116.093065 261.882476 259.32421 261.882476 143.250588 0 262.8495-116.984365 262.8495-261.882476C712.288652 323.048557 592.68974 206.867488 449.439152 206.867488L449.439152 206.867488zM449.439152 206.867488" p-id="2066" fill="#3d3d3d"></path></svg>搜索
		 </div>
		</div>

		<!-- 轮播组件 -->
		<div class="h_swipe">
			<div class="swipe">
				<mt-swipe :auto="4000" :continuous="false">
					<mt-swipe-item>
						<img src="../../img/01.jpg" alt />
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../img/02.jpg" alt />
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../img/03.jpg" alt />
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		<!-- 商品导航 -->
		<ul class="nav">
			<li class="nav-item" v-for="i of 8" :key="i">
				<img src="../../img/tab1.jpg" alt="">
				蕾姆
			</li>
		</ul>
		<!-- 隔离带 -->
		<div class="geli"></div>
		<!-- 直播间导航】 -->
		<div class="rec">
			<img src="../../img/tab9.jpg" alt="">
			<div class="rec_item">
				<i class="rec_i">直播</i>
				<span class="rec_x">小沈阳直播</span>
			</div>
		</div>
		<!-- 隔离带 -->
		<div class="geli"></div>
		<!-- swiper 广告横幅-->
		<div class="quality">
			<div class="title">精品首发<span>更多>></span></div>			
      <swiper :options="swiperOption">
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/02.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/03.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/04.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/05.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/02.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/03.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/04.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/05.jpg" alt=""></swiper-slide>
      </swiper>
		</div>
		<!-- 隔离带 -->
		<div class="geli"></div>
		<div class="quality">
			<div class="title">精品首发<span>更多>></span></div>			
      <swiper :options="swiperOption">
        <swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/02.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/03.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/04.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/05.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/01.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/02.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/03.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/04.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="../../img/05.jpg" alt=""></swiper-slide>
      </swiper>
		</div>
		<!-- 隔离带 -->
		<div class="geli"></div>
		<!-- 秒杀专区 -->
		<div class="quality">
			<div class="title"> 秒杀专区</div>
			<img src="../../img/05.jpg" alt="">
		</div>
		<products :products="products" :title="'秒杀专区'"></products>
		<products :products="products" :title="'限量购专区'"></products>
		<products :products="products" :title="'第二件半价'"></products>	
					
  </div>
</template>
<script>
//引入子组件
	import products from "./common/products.vue"

	export default{
		//注册子组件
		components:{
			products:products,
		},
		data(){
			return{
				startX:"",
				endX:"",
				swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 30,
					freeMode: true,
					width: 800, 
					freeModeMinimumVelocity:0.3,
					freeModeMomentumRatio:0.5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
					}
				},
			products:[
			{id:1,intro:"【现货速发】Apple/苹果 iPhone XR",img:"p0.jpg",price:99.00},
			{id:2,intro:"【现货速发】Apple/苹果 iPhone XR",img:"p1.jpg",price:99.00},
			{id:3,intro:"【现货速发】Apple/苹果 iPhone XR",img:"p2.jpg",price:99.00},
			{id:4,intro:"【现货速发】Apple/苹果 iPhone XR",img:"p3.jpg",price:99.00},
			{id:5,intro:"【现货速发】Apple/苹果 iPhone XR",img:"p5.jpg",price:99.00},
			{id:6,intro:"【现货速发】Apple/苹果 iPhone XR",img:"p4.jpg",price:99.00},
			],
			}
		},

		methods:{
			TStart(e){
				this.startPoint = e.touches[0].pageY;
				console.log(this.startPoint)
			},
			TEnd(e){
				
			},
			TMove(e){

			}
		},
	}


</script>

<style>
/* 背景颜色 */
.container{
	background:#fff;
}

.search{
	width:100%;
	position: fixed;
	z-index: 999;
	padding: 5px 0;
	background: #fff;
	opacity: 1;
	top: 0px;
}
.search div{
	display: flex;
	align-items: center;
	justify-content: center;
	width:60%;
	background: #ededed;
	margin: 0 auto;
	border-radius: 3px;
}


/* 广告横幅 */
.quality{
	position:relative;
	height:240px;
}
.title{
	height:42px;
	line-height: 42px;
	text-align: center;
	font-size:18px;
	color:#c96323;
}
.title>span{
	color:red;
	position:absolute;
	right:0px;
	top: 0px;
}
.quality img{
	position:relative;
	left:10px;
	height: 188px;
	width:auto;
	border-radius:5px;
}
.swiper-slide{
	width:auto !important;
}



.geli{
	margin: 2px 0;
	height:10px;
	background-image: linear-gradient(to bottom,#f6f6f6,#f2f1f7);
}
.rec{
	width: 90%;height:auto;
	position:relative;
	margin:0 auto;
}
.rec img{
	display:block;
	width:100%;
	height: auto;
	border-radius:3px;
}
.rec_item{
		color:#fff;
		position:absolute;
		top:15px;left:15px;	
}
.rec .rec_i{
	display:block;
	border-radius:20px;
	background-image:linear-gradient(to bottom,#d8433f,#d64b46);
	padding:4px 10px;
	font-style: normal;
	float:left;
	margin-right:1rem;
}
.rec .rec_x{
	position: relative;
	top: 2px;
}





/* 导航 */
.nav{
	display: flex;
	flex-wrap: wrap;
	width:100%;	
	list-style: none;
	height: 188px;
	font-size:14px;
	text-align: center;
	margin-bottom:20px;

}
.nav .nav-item{
	width:24%;
	height:50%;
	overflow: hidden;

}
.nav-item img{
	display: block;
    max-width: 25%;
    height: auto;
		margin: 10px auto;

}


/* 头部轮播微调 */
.h_swipe{
	margin-top:35px;
}
.swipe {
  height: 188px;
  margin: 0 auto;
  padding: 0 4px;
}
.mint-swipe-item img {
  width: auto;
  height: 100%;
  margin: 0 auto;
  border-radius: 2px;
}
.mint-swipe-indicator.is-active {
  background: rgb(240, 6, 142) !important;
}


</style>