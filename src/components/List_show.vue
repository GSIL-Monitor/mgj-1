<!-- 头部列表组件 -->
<template>
	<div class="list_show">
		<ul>
			<li v-for="(item,index) in show_info">
			<img :src="item.image" alt="">
			<p>{{item.title}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:{
			show_info:{
				type:Array,
				default:[]
			}
			
		}
	}
</script>
<style lang="less">
	.list_show ul{
		display: flex;
		flex-wrap: wrap;
		padding: 20/75rem;

		li{
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			width: 33.3%;
			margin-bottom: 40/75rem;
			img{
				width: 130/75rem;
				height: 130/75rem;
				margin-bottom: 10/75rem;
			}
		}
	}
</style>