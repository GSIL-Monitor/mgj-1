<!-- 头部 -->
<template>
	<div class="headers">
		<span class="leftIcon" ><slot name="classify"></slot></span>
		<slot name="content"></slot>
		<span class="rightIcon"><slot name="rightIcon"></slot></span>

	</div>
</template>
<script>
	export default{
		props:["url"],
		methods:{
			go_index(){
				console.log(this.url)
				this.$router.push(""+this.url)
			}
		}
	}

</script>
<style lang="less">
	@import "http://at.alicdn.com/t/font_811359_qq3mj633fhg.css";
	
	@import "http://at.alicdn.com/t/font_887746_72drolqgg5b.css";
	.headers{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		line-height: 65/75rem;
		background: #fff;
		padding:20/75rem;
		
	}


</style>