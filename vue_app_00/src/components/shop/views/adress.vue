<template>
<!-- 地址管理界面 -->
	<div>
        <!-- 返回按钮 -->
    <div class="detail_titel">
      <i @click="fanhui"></i>
      商品详情
    </div>
		<van-address-list
  v-model="chosenAddressId"
  :list="list"
  @add="onAdd"
  @edit="onEdit"/>
	</div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
    }
  },
  methods: {
    onAdd() {
      this.$toast('新增地址');
    },
    fanhui(){
      this.$router.go(-1)
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  }
}

</script>
<style>
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
</style>