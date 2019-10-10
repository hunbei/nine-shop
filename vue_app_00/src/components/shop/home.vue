<template>
<!-- 主页home -->
  <div class="container" id='home'>
		<!-- 搜索框 固定头部-->
		<router-link to="/search">	<div class="search" >
			<div >			
			<svg t="1567682221452" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2065" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M688.565345 653.900847c0 0-11.672854 15.440667-27.297716 30.575366l179.917696 176.300308 29.860075-27.91784L688.565345 653.900847 688.565345 653.900847zM752.457514 462.786135c0 175.017082-134.816498 306.400389-301.919331 306.400389C276.296767 766.655887 149.950174 629.448946 149.950174 463.021495c0-160.758334 135.995347-296.318776 300.588009-296.318776C617.641015 166.70272 752.457514 304.025295 752.457514 462.786135L752.457514 462.786135zM449.439152 206.867488c-143.231145 0-259.32421 116.181069-259.32421 261.075087 0 144.898111 116.093065 261.882476 259.32421 261.882476 143.250588 0 262.8495-116.984365 262.8495-261.882476C712.288652 323.048557 592.68974 206.867488 449.439152 206.867488L449.439152 206.867488zM449.439152 206.867488" p-id="2066" fill="#3d3d3d"></path></svg>搜索
		 </div>
		</div></router-link>


		<!-- 轮播组件 -->
		<headrswipe></headrswipe>
		<!-- 商品导航 -->
		<ul class="nav">
			<li class="nav-item">
				<router-link to="/classSearch/10">
				<img src="../../img/products/p10.png" alt="">
				榨汁机
				</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/classSearch/20">
				<img src="../../img/products/p20.png" alt="">
				杯子
				</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/classSearch/30">
				<img src="../../img/products/p30.png" alt="">
				食材
				</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/classSearch/40">
				<img src="../../img/products/p40.png" alt="">
				饭煲锅具
				</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/classSearch/50">
				<img src="../../img/products/p50.png" alt="">
				花样面煎
				</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/classSearch/60">
				<img src="../../img/products/p60.png" alt="">
				烘焙
				</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/classSearch/70">
				<img src="../../img/products/p70.png" alt="">
				净水器
				</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/classSearch/80">
				<img src="../../img/products/p80.png" alt="">
				智能厨电
				</router-link>
			</li>

		</ul>
		<!-- 隔离带 -->
		 <!-- <div class="geli"></div>

		<div class="rec">
			<img src="../../img/tab9.jpg" alt="">
			<div class="rec_item">
				<i class="rec_i">直播</i>
				<span class="rec_x">小沈阳直播</span>
			</div>
		</div> -->
		<!-- 隔离带 -->
		<div class="geli"></div>
		<!-- swiper 广告横幅-->
		<div class="quality">
			<div class="title">精品首发</div>			
      <swiper :options="swiperOption">		
        <swiper-slide>
					<router-link to="/detail/10">
					<img src="../../img/products/d20.jpg" alt="">
					</router-link>
				</swiper-slide>
        <swiper-slide>
					<router-link to="/detail/19">
					<img src="../../img/products/s26.jpg" alt="">
					</router-link>
				</swiper-slide>
        <swiper-slide>
					<router-link to="/detail/16">
					<img src="../../img/products/s18.jpg" alt="">
					</router-link>
				</swiper-slide>
        <swiper-slide>
					<router-link to="/detail/15">
					<img src="../../img/products/s15.jpg" alt="">
					</router-link>
				</swiper-slide>
        <swiper-slide>
					<router-link to="/detail/11">
					<img src="../../img/products/d23.jpg" alt="">
					</router-link>
				</swiper-slide>
        <swiper-slide>
					<router-link to="/detail/20">
					<img src="../../img/products/s28.jpg" alt="">
					</router-link>
				</swiper-slide>
        <swiper-slide>
					<router-link to="/detail/6">
					<img src="../../img/products/d8.jpg" alt="">
					</router-link>
				</swiper-slide>
					<swiper-slide>
					<img src="" alt="" width="100">
				</swiper-slide>	
      </swiper>
		</div>
		<!-- 隔离带 -->
		<div class="geli"></div>
		<div class="quality">
			<div class="title">剁手灵感</div>	
      <swiper :options="swiperOption">
        <swiper-slide>
					<router-link to="/detail/17">
					<img src="../../img/products/s20.jpg" alt="">
					</router-link>
				</swiper-slide>
				 <swiper-slide>
					<router-link to="/detail/21">
					<img src="../../img/products/s31.jpg" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail/8">
					<img src="../../img/products/d14.jpg" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail/1">
					<img src="../../img/products/s2.jpg" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail/31">
					<img src="../../img/products/cd10.jpg" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail/61">
					<img src="../../img/products/cd7.jpg" alt="">
					</router-link>
				</swiper-slide>
      </swiper>
		</div>
		<!-- 隔离带 -->
		<div class="geli"></div>
		<!-- 秒杀专区 -->
		<products  :title="'秒杀专区'"></products>
		<products :title="'限量购专区'"></products>
		<products :title="'第二件半价'"></products>	
					
  </div>
</template>
<script>
//引入子组件
	import products from "./common/products.vue"
	import headrswipe from './common/headr_swipe.vue'
	import search from './common/search.vue'
	export default{
		//注册子组件
		components:{
			products:products,
			headrswipe:headrswipe,
			search,
		},
		data(){
			return{
				swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 15,
					freeMode: true,
					width: 370, 
					freeModeMinimumVelocity:0.3,
					freeModeMomentumRatio:0.5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
					}
				},
				products:[
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
		watch: {
			
		},
	}


</script>

<style>
#home a{
	color: #000;
}
/* 背景颜色 */
.container{
	background:#fff;
	padding:0 5px;
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
  max-width: 40%;
   height: auto;
	margin: 10px auto;
}
#home{
	margin-bottom: 55px;
}
#home .search{
	color: #000;
}



</style>