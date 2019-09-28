<template>
	<!-- 用户界面 -->
	<div id="user">
		<!-- 用户头像 -->
		<div class="user">
			<img class='user_img' src="../../../img/p5.jpg" alt="">
			名字
		</div>
		<!--功能导航  管理地址  -->
		<router-link to="/adress">
		<div class="use_bar">
			
			<div class="left">
				<img src="../../../assets/dizhi.png" alt="">管理地址
			</div>
			<img src="../../../assets/right2.png" alt="">
		</div></router-link>
		<!--功能导航  会员卡  -->
		<div class="use_bar">
			<div class="left">
				<img src="../../../assets/huiyuan.png" alt="">会员卡
			</div>
			<img src="../../../assets/right2.png" alt="">
		</div>
		<!--功能导航  我的优惠券  -->
		<div class="use_bar">
			<div class="left">
				<img src="../../../assets/youhui.png" alt="">我的优惠券
			</div>
			<img src="../../../assets/right2.png" alt="">
		</div>
		<!-- 联系客服 -->
		<div class="use_bar">
			<div class="left">
				<img src="../../../assets/kefu.png" alt="">我的优惠券
			</div>
			<img src="../../../assets/right2.png" alt="">
		</div>
	</div>
</template>
<style scoped>
/* 用户头像 */
	.user {
		height: 140px;
		box-sizing: border-box;
		padding: 30px 0 0 20px;
		margin-bottom: 5px;
	}
	.user .user_img{
		height: 80%;
		width: auto;
		border-radius: 50%;
		overflow: hidden;
		margin-right: .5rem;
		vertical-align: middle;
	}
	/* 功能导航 */
	#user a{
		color: black;
	}
	#user .use_bar{
		padding: 5px;
		margin-bottom: 1px;
		display: flex;
		justify-content: space-between;
	}
	#user .use_bar img{
		height: 30px; width: auto;
		vertical-align:-9px;
		margin-right: 5px;
	}
	#user .use_bar>img{
		margin-top: 5px;
		height: 20px;
	}
</style>