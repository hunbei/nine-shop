<template>
  <!-- 订单结算页面 -->

  <div id="sett">
    <!-- 顶部导航返回按钮 -->
    <div class="detail_titel">
      <i></i>
      订单结算
    </div>
    <!-- 个人信息 -->
    <div class="shop">
      <div class="user">
        <div class="up">
          <p>名字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{}}</p>
          <i></i>
        </div>
        <p>sdfasdfasdfasdf</p>
      </div>
      <div class="ordLists">
        <div class="card" v-for="i of 10" :key="i">
          <img src="../../../img/p5.jpg" alt />
          <div class="card_detail">
            <p>dfasdfasdfasd单方事故歌发送到发送到发发大水发生大发大法师的诗达噶啥地方干啥发的发达</p>
            <div>
              <span>￥79</span>
              <span>x1</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell/>
			<!-- 积分优惠单元格 -->
			<div data-v-511ba9a6="" role="button" tabindex="0" class="van-cell van-cell--clickable van-coupon-cell"><div data-v-511ba9a6="" class="van-cell__title"><span data-v-511ba9a6="">积分抵扣</span></div><div data-v-511ba9a6="" class="van-cell__value"><span data-v-511ba9a6="">使用积分抵扣</span></div><i data-v-511ba9a6="" class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div>

			<!-- 留言板 -->
			<div class="mes">
				<p>留言</p>
				<textarea name="留言" placeholder="给卖家留言"></textarea>
			</div>
			<!-- 订单汇总 -->
			<div class="sum">
				<div class="sum_bar"> </div>
			</div>

    </div>
    <!-- 底部支付 -->
    <van-submit-bar label="应付金额：" :price="3050" button-text="立即支付" @submit="onSubmit" />
  </div>
</template>
<style scoped>
#sett .shop {
  padding: 10px;
  font-size: 14px;
  background: #000;
  /* background-image: linear-gradient(to bottom,#f6f6f6,#f2f1f7); */
  margin-bottom: 50px;
}
/* 头部导航 */
.detail_titel {
  height: 35px;
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.detail_titel i {
  height: 100%;
  width: 25px;
  background: url("../../../assets/return.png") no-repeat;
  background-position: center center;
}
.detail_titel i:hover {
  background: #9e9d9d;
}
.user {
  text-indent: 0.5rem;
  background: #fff;
  padding: 5px 0;
}
#sett .user .up {
  padding-right: 10px;
  display: flex;
  color: #000;
  justify-content: space-between;
}
/* 右箭头 */
.user .up i {
  display: block;
  height: 25px;
  width: 25px;
  background: url("../../../assets/right.png") no-repeat;
  background-position: center center;
}
/* //地址 */
.up + p {
  color: #747474;
}
/* 订单列表 */
#sett .ordLists {
  margin: 10px 0;
}
/* 卡片样式 */
.ordLists .card {
  padding: 8px;
	margin-bottom: 1px;
	border-radius: 3px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
/* 卡片图片大小 */
.card img {
  height: 80px;
  width: auto;
  border-radius: 5px;
}
/* 卡片详情 */
.card .card_detail {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card_detail p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
/* 价格和数量排列 */
.card_detail p + div {
  display: flex;
  justify-content: space-between;
}
.card_detail p + div span:first-child {
  color: #c96323;
}
/* 优惠劵 */
#sett .van-cell {
  color: #000;
  border-radius: 3px;
  padding: 5px 10px;
}
/* 留言板 */
#sett .mes{
	display: flex;
	justify-content: space-between;
	background: #fff;
	padding: 5px 10px;
	margin: 10px 0;
	border-radius: 3px;
}
#sett .mes p{
	margin-top: 5px;
}
#sett .mes textarea{
	height: 50px;
	flex-grow:1;
	padding: 5px;
	outline: none;
	border: none;

}


/* 底部支付微调 */
.van-submit-bar__bar {
  padding: 0 10px;
}
#sett .van-submit-bar__price {
  color: #c96323;
}
#sett .van-button--danger {
  background: #c96323;
  height: 35px;
  line-height: 35px;
  border-radius: 35px;
  border: none;
}
</style>