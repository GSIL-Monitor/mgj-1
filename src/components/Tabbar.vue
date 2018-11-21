<template>
	<div class="tabbarWrap">
		<Item txt="首页" @change="getVal" mark="index" :sel="selected">
			<img slot="normalImg" src="../assets/image/0 (5).png" alt="" />
			<img slot="activeImg" src="../assets/image/0 (1).png" alt="" />
		</Item>
		<Item txt="直播" @change="getVal" mark="live" :sel="selected">
			<img slot="normalImg" src="../assets/image/0 (6).png" alt="" />
			<img slot="activeImg" src="../assets/image/0 (2).png" alt="" />
		</Item>
		<Item txt="商城" @change="getVal" mark="store" :sel="selected">
			<img slot="normalImg" src="../assets/image/0 (7).png" alt="" />
			<img slot="activeImg" src="../assets/image/0 (3).png" alt="" />
		</Item>
		<Item txt="我的" @change="getVal" mark="mine" :sel="selected">
			<img slot="normalImg" src="../assets/image/0 (8).png" alt="" />
			<img slot="activeImg" src="../assets/image/0 (4).png" alt="" />
		</Item>	
	</div>
	
	
</template>

<script>
	//引入Item.vue
	import Item from "@/components/Item"
	export default{
		//注册子组件Item
		components:{
			Item
		},
		methods:{
			getVal(mark){
				this.selected =mark;
			}
		},
		data(){
			return{
				selected:"index",
			}
		},
		props:{
			tabbarShow:{
				type:Boolean,
				default:false
			}
		},
	}
	
</script>

<style lang="less">
	.tabbarWrap{
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		height:120/75rem;
		display: flex;
		background: #fff;
		z-index:10;
	}
	
</style>