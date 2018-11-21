<template>
	<div class="liu">
		<div @click="clickItem(index)" :class="{default:index==current}" class="item" v-for="(item,index) in huaArr">
			<p>{{item.price}}M</p>
			<span>售价:</span>
			<span>{{item.selling}}元</span>
		</div>
	</div>
</template>

<style lang="less">
	.liu{
		display:flex;
		flex-wrap:wrap;
		border-bottom:1px solid #e6e6e6;
		.item{
			width:104.5rem*2/75;
			height:60rem*2/75;
			margin-left:10rem*2/75;
			border:1rem*2/75 solid red;
			margin-bottom:15rem*2/75;
			border-radius:5rem*2/75;
			padding:0 2rem*2/75;
			p{
				height:25rem*2/75;
				margin-top:5rem*2/75;
			}
		}
	}
	.default{
		background:pink;
		color:#fff;
	}
</style>

<script>
	export default{
		data(){
			return{
				huaArr:[
					{price:20,selling:"19.91"},
					{price:30,selling:"29.91"},
					{price:50,selling:"49.91"},
					{price:100,selling:"99.90"},
					{price:200,selling:"199.90"},
					{price:500,selling:"499.90"}
				],
				current:-1
			}
		},
		methods:{
			clickItem(index){
				this.current = index;
			}
		}
	}
</script>