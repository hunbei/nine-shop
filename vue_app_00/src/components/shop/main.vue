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
				<home></home>
			</mt-tab-container-item>
			<!-- 订单页 -->
			<mt-tab-container-item id="order">
				<orderlist></orderlist>
			</mt-tab-container-item>
			<!-- 购物车 -->
			<mt-tab-container-item id="car">
				<shopcar :shopcars='shopcars'></shopcar>
			</mt-tab-container-item>
			<!-- 用户页 -->
			<mt-tab-container-item id="me">
				<user></user>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
//引入组件
import shopcar from './common/shopcar'
import home from './home'
import orderlist from './common/orderlist'
import user from './common/user'

	export default{
		// 注册子组件
		components:{
			shopcar:shopcar,
			home,
			orderlist,
			user,
		},
		data(){
			return{
				selected:'home',
				shopcars:[],
			}
		},
		methods: {
		// 获取用户购物车
    getshops(){
      var url='shopcar';
      this.axios.get(url)
      .then(res=>{
        if(res.data.code==-1){//未登录
          this.$toast("请先登录")
        }else{
					this.shopcars=res.data.data;
					this.shopcars.forEach(value => {				
					value.cb=value.cb==0?false:true;
					});
					
        }
      })
		},
		updateshops(){
			var url='shopcar/update';
			console.log(this.shopcars)
			this.axios.get(url,{params:{shopcars:this.shopcars}})
			.then(res=>{
			})
		}
		},
		created() {
			this.selected=this.$store.getters.getSelected;
		},
		watch: {
			selected(){
				this.$store.commit('updateSelected',this.selected);
				if(this.selected=='car'){
					this.getshops();
				}else{
					this.updateshops();
				}
			},

		},
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