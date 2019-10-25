<template>
	<div id='#search'>
		 <!-- 顶部导航返回按钮 -->
    <div class="detail_titel">
      <i @click="fanhui"></i>
      搜索
    </div>
		<!-- 搜错框 -->
		<van-search v-model="value" placeholder="搜索" show-action shape="round" @search="onSearch(value)">
  <div slot="action" @click="onSearch(value)">搜索</div>
</van-search>
	</div>
</template>
<style scoped>
/* 头部导航 */
.detail_titel {
  height: 50px;
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.detail_titel i {
  height: 100%;
  width: 35px;
  background: url("../../../assets/return.png") no-repeat;
  background-position: center center;
}
.detail_titel i:hover {
  background: #9e9d9d;
}

</style>
<script>
	export default{
		data(){
			return{
				value:'',
			}
		},
		methods: {
			fanhui(){
				this.$router.go(-1)
			},
			onSearch(){
			console.log(this.value)
		}
		},

	}

</script>