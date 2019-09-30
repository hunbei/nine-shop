<template>
<!-- 商品详情页 -->
  <div id="detail">
    <!-- 返回按钮 -->
    <div class="detail_titel">
      <i @click="fanhui"></i>
      商品详情
    </div>
    <!-- 商品详情卡片 -->
    <div class="item_card">
      <!-- 轮播组件 -->
      		<div class="h_swipe">
			<div class="swipe">
				<mt-swipe :auto="4000" >
					<mt-swipe-item v-for="(item,i) in imgs " :key='i'>
						<img :src='require(`../../../img/products/${imgs[i]}.jpg`)' alt />
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
      <!-- 商品详情 -->
      <p>{{detail.detail}}</p>
      <!-- 商品介绍 -->
      <p>{{detail.info}} </p>
      <!-- 价格 -->
      <p class="price">￥{{detail.price.toFixed(2)}}</p>
    </div>
    <!-- 购物篮 -->
    <div class="basket">
      <!-- 上部 -->
      <div class="b_up">
        <p>已选：</p>
        <div class="btn" @click="change">
          <i>-</i>
          <i>{{sum}}</i>
          <i>+</i>
        </div>
      </div>
      <!-- 下面 -->
      <div class="b_down">
        <p>服务：</p>
        <div>
          <img src="../../../assets/bz.png" alt />
          正品保障
        </div>
        <div>
          <img src="../../../assets/sh.png" alt />
          无忧售后
        </div>
        <div>
          <img src="../../../assets/tk.png" alt />
          极速退款
        </div>
      </div>
    </div>=
    

    <!-- 商品详情参数图片 -->
    <div class="detail_img">
      <p>商品详情</p>
      <img v-for="(item,i) in imgs " :key='i' :src='require(`../../../img/products/${imgs[i]}.jpg`)' alt />
    </div>
    <!-- 底部导航条 -->
    <van-goods-action>
    <van-goods-action-icon icon="wap-home-o" text="返回首页" to="home"/>

		 
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" to="/shopcar"/>
			
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<style scoped>
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

/* 详情页头部标题 */
.detail_titel {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
}
.detail_titel i {
  height: 100%;
  width: 30px;
  background: url("../../../assets/return.png") no-repeat;
  background-position: center center;
}
.detail_titel i:hover {
  background: #9e9d9d;
}
.item_card {
  margin-bottom: 10px;
}
/* 商品详情 */
.item_card > p:nth-child(2) {
  color: #000;
  text-indent: 1rem;
  margin:5px 0;
}
/* 商品介绍 */
.item_card > p:nth-child(3) {
  color: #747373;
  font-size: 14px;
  text-indent: 0.3rem;
}
/* 商品价格 */
.item_card > .price {
  color: #c96323;
  text-indent: 0.5rem;
}
/* 轮播组件微调 */
#detail .h_swipe {
  margin-top: 0px;
}
#detail .swipe {
  height: 388px;
  margin: 0 auto;
}

/* 购物篮上部 */
.basket{
	margin: 20px 0;
}
.basket .b_up {
  /* 弹性布局 */
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.btn i {
  min-width: 20px;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  background: #fff;
  color: #000;
  border: 1px solid #000;
  outline: none;
  font-size: 15px;
  font-style: normal;
  border-radius: 2px;
  margin: 2px;
  padding: 0 2px;
}
/*购物篮 下部 */
.basket .b_down {
  padding: 0 10px;
  display: flex;
}
.b_down img {
  vertical-align: bottom;
  margin-left: 10px;
}
/* 商品详情参数图片 */
.detail_img {
  text-align: center;
  margin: 10px 0 50px;
}
.detail_img p {
  margin: 10px 0;
}
.detail_img img {
  width: 100%;
  height: auto;
}
/* 商品底部导航 */
#detail .van-goods-action-icon{
	min-width: 70px;
	height: 60px;
}
#detail .van-goods-action-button{
	height: 30px;
}
#detail .van-goods-action-icon__icon{
	font-size: 25px;
}

</style>
<script>
// 导入头部轮播组件
import headrswipe from "./headr_swipe";
export default {
  created() {
    this.loading();
  },
  components: {
    headrswipe
  },
  props:['pid'],
  data() {
    return {
      sum: 1,
      detail:{},
      imgs:[],
    };
  },
  methods: {
    change(e) {
      if (e.target.innerHTML == "-") {
        if (this.sum == 1) {
          this.$toast("减不动啦");
        } else {
          this.sum--;
        }
      } else if (e.target.innerHTML == "+") {
        this.sum++;
      }
    },
    // 返回
    fanhui(){
      this.$router.go(-1)
    },
    loading(){
       // 路径url
    var url="detail";
     // 传入商品pid参数
      var pid={pid:this.pid};
      console.log(pid);
       this.axios.get(url,{params:pid})
       .then(res=>{
         console.log(res.data.data[0])
         this.detail=res.data.data[0];
          // var imgs=JSON.parse(this.detail);
          // this.imgs=imgs.split(',');
          this.imgs=this.detail.imgs.split(',');
         
       })
    }
  }
};
</script>