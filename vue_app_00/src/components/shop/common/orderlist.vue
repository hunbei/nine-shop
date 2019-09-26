<template>
<!-- 订单页面 -->
	<div id='orderlist'>
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
				orderlistorderlist
			</mt-tab-container-item>

			<mt-tab-container-item id="payment">
				paymentpayment
			</mt-tab-container-item>

			<mt-tab-container-item id="rec">
				recrec
			</mt-tab-container-item>

			<mt-tab-container-item id="comment">
				commentcommentcomment
			</mt-tab-container-item>

			<mt-tab-container-item id="saled">
				saledsaled
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				selected:'orderlist'
			}
		}
	}
</script>