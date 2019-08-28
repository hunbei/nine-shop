<template>
	<div>
		<h1>自定义组件</h1>
	</div>
</template>
<script>
//调用短消息组件
export default {
	created() {
		//vue组件声明周期时间，表示当创建成功，立即调用函数
		//默认3s就消息消失
		this.$toast({message:"添加成功",position:" left_bottom "});
		
	}
}

</script>