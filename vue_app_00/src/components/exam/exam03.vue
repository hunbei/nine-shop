<template>
	<div>
		<h1>exam03.vue</h1>
		<h1>开关组件：移动端项目使用</h1>
		<mt-switch v-model="val2" @change="hand2" >
			{{val2==true?"开":"关"}}
		</mt-switch>
		<h1>单选列表：移动端项目使用</h1>
		<mt-radio title="单选列表" :options="['a','b','c','d']" v-model="val3"></mt-radio>
		<button @click="get3">选中值</button>
		<mt-radio title="东哥今年多大" v-model="val4" :options="options"></mt-radio>
		<button @click="get4">东哥年龄</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				val2:true,
				val3:"",
				val4:"",
				options:[
					//label是页面显示的值，value是内存实际存的数据
					{label:"去年",value:"34"},
					{label:"今年",value:"33"},
					{label:"明年",value:"30"},
					]
			}
		},
		methods:{
			hand2(){
				this.$messagebox("开关改变了")
			},
			get3(){
				console.log("选中："+this.val3)
			},
			get4(){
				console.log("东哥今年："+this.val4)
			}
		}


	}

</script>

