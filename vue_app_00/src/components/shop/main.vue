<template>
	<div>
		<mt-tabbar v-model="selected">
			<mt-tab-item id="home">
				<img slot="icon" :src="selected=='home'?require('../../assets/home_s.png'):require('../../assets/home.png')">
				主页
			</mt-tab-item>
			<mt-tab-item id="order">
				<img slot="icon" :src="selected=='order'?require('../../assets/order_s.png'):require('../../assets/order.png')">
				订单
			</mt-tab-item>
			<mt-tab-item id="car">
				<img slot="icon" :src="selected=='car'?require('../../assets/car_s.png'):require('../../assets/car.png')">
				购物车
			</mt-tab-item>
			<mt-tab-item id="me">
				<img slot="icon" :src="selected=='me'?require('../../assets/me_s.png'):require('../../assets/me.png')">
				我的
			</mt-tab-item>
		</mt-tabbar>
		<mt-tab-container v-model="selected">
			<!-- 主页 -->
			<mt-tab-container-item id="home">
				<div class="te"></div>
			</mt-tab-container-item>
			<!-- 订单页 -->
			<mt-tab-container-item id="order">
222
			</mt-tab-container-item>
			<!-- 购物车 -->
			<mt-tab-container-item id="car">
				<shopcar></shopcar>
			</mt-tab-container-item>
			<!-- 用户页 -->
			<mt-tab-container-item id="me">
444
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
//引入购物车组件
import shopcar from './common/shopcar'
	export default{
		// 注册子组件
		components:{
			shopcar:shopcar,
		},
		data(){
			return{
				selected:'home'
			}
		}
	}


</script>
<style scoped>
	.mint-tabbar .mint-tab-item.is-selected{
		color: #c96323;
	}
	.mint-tabbar{
		z-index: 999;
	}
	.te{
		height: 1000px;
		background: #c96323;
	}

</style>