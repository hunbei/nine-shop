<template>
<!-- 轮播组件 -->
	<div>
		<!-- 轮播组件 -->
		<div class="h_swipe">
			<div class="swipe">
				<mt-swipe :auto="4000" >
					<mt-swipe-item>
						<router-link to="/detail">
						<img src="../../../img/01.jpg" alt />
						</router-link>
					</mt-swipe-item>
					<mt-swipe-item>
						<router-link to="/detail">
						<img src="../../../img/02.jpg" alt />
						</router-link>
					</mt-swipe-item>
					<mt-swipe-item>
						<router-link to="/detail">
						<img src="../../../img/03.jpg" alt />
						</router-link>
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
	</div>
</template>
<style >
	/* 头部轮播微调 */
.h_swipe{
	margin-top:35px;
}
/* 轮播高度 */
.h_swipe .swipe {
  height: 188px;
  margin: 0 auto;
}
/* 超出的图片部分隐藏 */
.h_swipe .mint-swipe-item{
		overflow: hidden;
}
/* 图片大小 */
.h_swipe .mint-swipe-item img {
  width: auto;
  height: 100%;
  margin: 0 auto;
  border-radius: 2px;
}
/* 指示器颜色样式 */
.h_swipe .mint-swipe-indicator.is-active {
  background: rgb(240, 6, 142) !important;
}

</style>