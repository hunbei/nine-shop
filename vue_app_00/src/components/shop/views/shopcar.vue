<template>
  <!-- 购物车页面 -->
  <div class="shopcar">
    <div class="header">
      <span>共{{shopcars.length}}件商品</span>
      <span @click="dels">管理</span>
    </div>
    <!-- 购物车清单 -->

    <!-- 单个购物单 -->
    <div class="car_item" v-for="(item,i) of shopcars" :key="i" @touchstart="touchStart($event,i)" @touchend="touchEnd($event,i)" >
      <div class="car_select" :class="i==moveIndex && isdel?'car_selectdel':''">
        <input type="checkbox" @click="select" v-model="item.cb" :data-key='i'/>
      </div>
      <div class="item_right">
       <img :src="require('../../../img/products/'+item.img+'.jpg')"  @click="goDetail(item.pid)"/>
        <div class="item_intro">
          <p>{{item.detail}}</p>
          <div>
            <span>￥{{item.price.toFixed(2)}}</span>
            <div class="btn" @click="change($event,i)" >
              <i>-</i>
              <i >{{item.sum}}</i>
              <i >+</i>
            </div>
          </div>
        </div>
      </div>
      <div class="del" :class="i==moveIndex &&isdel?'delshow':''" @click="delOrd(i)">&nbsp;删除&nbsp;</div>
    </div>

    <!-- 结算||删除 -->
    <div class="sem">
      <div class="car_selectall">
        <label for>
          <input type="checkbox" v-model="selectAll" @click="select" value='全选'/>全选
        </label>
      </div>
      <div class="sem_right" v-if="isdels"> 
        合计:
        <span>￥{{total.toFixed(2)}}</span>
        <!-- 跳转结算页面 -->
       <router-link to="/sett"> <button>结算{{sum}}</button></router-link>
      </div>
			<!-- 删除多个 -->
			<div class="sem_right" v-else ><button @click='delOrd()'>删除</button></div>
    </div>
		
  </div>
</template>
<style scoped>
/* 背景颜色 */
.shopcar{
  height: 100%;
  padding: 10px 10px 10px 10px;
  background-color: #f2f2f2;
  background-clip: padding-box;
  margin-bottom: 120px
}
/* 头部样式 */
.shopcar .header {
  padding: 8px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
}
.shopcar .header > span + span {
  color: #c96323;
}
/* 购物单样式 */
.shopcar .car_item {
  height: 100px;
  margin-top: 2px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  flex-wrap: nowrap;
}
/* 显示删除按钮，隐藏选择按钮 */
.car_selectdel{
	width: 0;
}
.car_select,.car_selectall{
  overflow: hidden;
  color: #c96323;
	outline: none;
	/* 添加过渡效果 */
	transition:width 0.5s;
}
.car_select input[type="checkbox"] {
  margin: 0 auto;
  height: 18px;
  width: 18px;
  vertical-align: bottom;
  -webkit-appearance: radio;
  color: #c96323;
}
/* 购物单卡片图片 */
.car_item .item_right {
  height: 100%;
  width: 89%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.car_item .item_right img {
  width: 35%;
}
.item_right .item_intro {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  padding: 3px 0;
}
.item_intro p {
  color: black;
  margin: 0;
  padding-left: 2px;
  font-size: 14px;
  /* 两行显示不完，省略号 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.item_intro > div > span:first-child {
  color: #c96323;
}
.item_intro > div > .btn {
  float: right;
}
.item_intro > div > .btn i {
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
}

.car_item .del {
  height: 100%;
  /* width:auto; */
  width: 0;
  background: #c96323;
  color: #fff;
	font-size: 12px;
	/* 字体居中 */
	text-align: center; 
  line-height: 110px;
  overflow: hidden;
  border-radius: 2px;
		transition:width 0.5s;
}
/* 显示删除按钮 */
.car_item .delshow{
	width: 35px;
	
}
/* 结算 样式*/
.sem {
  height: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: bottom;
  position: fixed;

  bottom: 55px;
  width: 100%;
  margin-left: -10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
}
.sem_right span {
  color: #c96323;
}
.sem_right button {
  border: none;
  border-radius: 100px;
  padding: 5px 15px;
  background: #c96323;
  color: #fff;
  margin: 0 7px;
	outline: none;
}
</style>
<script>
export default { 
  props:['shopcars'],
  data() {
    return {
      lists: [
        // {pid:1, sum: 2, cb: true, price: 338.0 },
        // {pid:1, sum: 1, cb: false, price: 3328.0 },
        // {pid:1, sum: 3, cb: false, price: 118.0 },
        // {pid:1, sum: 3, cb: false, price: 118.0 },
        // {pid:1, sum: 3, cb: false, price: 118.0 },
        // {pid:1, sum: 3, cb: false, price: 118.0 },
      ],
			selectAll: false,
			clientX:0,
			target:'',
			isdel:false,    //单个订单是否显示删除按钮，默认false
			isdels:true,       //false时显示管理删除页面
			moveIndex:undefined,
    };
  },
  methods: {
    //增删数量
    change(e,i) {
      if (e.target.innerHTML == "-") {
        if (this.shopcars[i].sum == 1) {
          this.$toast("减不动啦");
        } else {
          this.shopcars[i].sum--;
        }
      } else if (e.target.innerHTML == "+") {
        this.shopcars[i].sum++;
      }
    },
    // 选中购买
    select(e) {
      var input = e.target;
      //判断点击的是否是全选
      if (input.value=='全选') {
        // 所有订单状态和全选按钮一直
        this.shopcars.forEach((value,i,arr)=>{
          value.cb=!this.selectAll;//显示慢一步，所以取反
        })
      }else{//点击的是单个选中按钮
        if (input.checked == false) {
        this.selectAll = false;
      } else {
				// 获得当前选中的订单序列
				var key=input.dataset.key;
				// 修改data数据中对应的选中状态
				this.shopcars[key].cb=input.checked;
				// 判断全部订单是否都选中了
				var bool=this.shopcars.every((value,i,arr)=>{
					return value.cb==true;
				})
				this.selectAll=bool;				
       }
      }
      
		},
		//显示管理页面
		dels(e){
			this.isdels=!this.isdels;
		  e.target.innerHTML=this.isdels?'管理':'完成';
		},
		// 删除购物订单
		delOrd(i){
			if (i!=undefined) {
				// 获得对应订单商品的数据
        var order=this.shopcars[i];
        var sid={sid:order.sid}
        // 向服务器端发送请求删除数据
        var url='shopcar/delete';
        this.axios.get(url,{params:sid})
        .then(res=>{
          if(res.data.code==1){
            // 删除成功
            this.$toast('删除成功');
            // 重新获取数据
            this.getshops();
          }
        })
				// 重新加载页面
			}else{
				// 如果没有传入参数说明是删除多项
				// 获得对应订单商品的数据
        var sids=this.shopcars.map(function(value,i,arr){
          if (value.cb) {
            return value.sid;
          }
        })
        var sid={sid:sids}
				console.log('sid:'+sids);
        // 向服务器端发送请求删除数据
        var url='shopcar/delete';
        this.axios.get(url,{params:sid})
        .then(res=>{
          if(res.data.code==1){
            // 删除成功
            this.$toast('删除成功');
            // 重新获取数据
            this.getshops();
          }
        })
			}		
    },
    		// 获取用户购物车
    getshops(){
      var url='shopcar';
      this.axios.get(url)
      .then(res=>{
        if(res.data.code==-1){//未登录
          this.$toast("请先登录")
        }else{
          this.shopcars=res.data.data;
        }
      })
    },
		// 左滑订单显示删除按钮
		touchStart(e,i){
			// 获取滑动的位置
			 this.target=e.target;
			 this.clientX=e.touches[0].clientX;
			 this.moveIndex = i;
		},
		//移动时间
		touchEnd(e,i){
			// 触摸离开时的x移动坐标
			var changeX=e.changedTouches[0].clientX-this.clientX;
			if(e.target==this.target){
				// 左移
				if(changeX<-10){
					// 显示删除按钮
					this.isdel=true;
				}else if(changeX>10){//右移
					// 隐藏删除按钮
					this.isdel=false;
				}
			}
    },
    //跳转详情页面
    goDetail(pid){
      this.$router.push('/detail/'+pid)
    },
  },
  created() {
    // this.getshops();
  },
	computed: {
		// 选中商品数量
		sum(){
			var sum=0;
			for (const i of this.shopcars) {
				if (i.cb==true) {
					sum++;
				}
			}
			return sum;
		},
		total(){
		 return this.shopcars.reduce((prev,elem,i,arr)=>{
			//  选中的才计算			 
				 if (elem.cb) {
					prev+=elem.price*elem.sum
				 }
				 return prev				 
		 },0)
		}
	},
  watch: {

  },

};
</script>


