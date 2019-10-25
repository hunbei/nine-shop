<template>
<!-- 订单页面 -->
	<div id='orderlist' :class="orderlists==''?'none':''">
		<div>
		<mt-navbar v-model="selected">
 		  <mt-tab-item id="orderlist">全部订单</mt-tab-item>
 		  <mt-tab-item id="payment">代付款</mt-tab-item>
 			<mt-tab-item id="rec">待收货</mt-tab-item>
 			<mt-tab-item id="comment">待评价</mt-tab-item>
 			<mt-tab-item id="saled">售后</mt-tab-item>
		</mt-navbar>
			<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="orderlist">
				<!-- 没订到时显示 -->
				<div :class="orderlists==''?'none':''">
					<p v-show="orderlists==''">暂无订单，快去看看吧~</p>
				</div>
	
			</mt-tab-container-item>

			<mt-tab-container-item id="payment">
				<!-- 没订到时显示 -->
				<div :class="orderlists==''?'none':''">
					<p v-show="orderlists==''">暂无订单，快去看看吧~</p>
				</div>
			
			</mt-tab-container-item>

			<mt-tab-container-item id="rec">
				<!-- 没订到时显示 -->
				<div :class="orderlists==''?'none':''">
					<p v-show="orderlists==''">暂无订单，快去看看吧~</p>
				</div>
			</mt-tab-container-item>


			<mt-tab-container-item id="comment">
							<!-- 没订到时显示 -->
				<div :class="orderlists==''?'none':''">
					<p v-show="orderlists==''">暂无订单，快去看看吧~</p>
				</div>
			</mt-tab-container-item>


			<mt-tab-container-item id="saled">
				<!-- 没订单时显示 -->
				<div :class="orderlists==''?'none':''">
					<p v-show="orderlists==''">暂无订单，快去看看吧~</p>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				selected:'orderlist',
				orderlists:[]
			}
		}
	}
</script>
<style scoped>
.mint-tab-container{
	height: 100% !important;
}
#orderlist .none{
		min-height: 400px;
		margin-bottom: 50px;
		position: relative;
		background: url('../../../assets/orderNone.png') no-repeat;
		background-position: center 30%;
		overflow: hidden;
	}
	.none p{
		color: #707070;
		position: absolute;
		top: 43%;
		left:30%;
	}

</style>