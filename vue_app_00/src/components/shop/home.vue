<template>
  <div>
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
		<!-- 直播间导航】 -->
		<div class="rec">
			<img src="../../img/tab9.jpg" alt="">
			<div class="rec_item">
				<i class="rec_i">直播</i>
				<span class="rec_x">小沈阳直播</span>
			</div>
		</div>
		<!-- swiper 广告横幅-->

		<div class="quality">
			<div>精品首发</div>
      
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
  </div>
</template>
<script>
	export default{
		data(){
			return{
				startX:"",
				endX:"",
				swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 30,
					freeMode: true,
					freeModeMinimumVelocity:0.3,
					freeModeMomentumRatio:0.5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
					}
				}
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
.quality{
	height:593px;
	margin-left: 10px;
}
.quality img{
	height: 188px;
	width:auto;
	border-radius:5px;
}





.rec{
	width: 90%;height:120px;
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


/* 轮播微调 */
.swipe {
  height: 188px;
  margin: 0 auto;
  padding: 0 4px;
}
.mint-swipe-item img {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 2px;
}
.mint-swipe-indicator.is-active {
  background: rgb(240, 6, 142) !important;
}


</style>