<template>
	<div class="ranking">
		<div class="content clearfix" v-for="(item,index) in rankingArr">
			<div class="user_info clearfix">
				<div class="user_img fl">
					<img :src="item.avatar" alt="">
				</div>
				<div class="user_txt fl">
					<h3>{{item.showName}}</h3>
					<span>{{item.publishUserCount}}人参与</span>
					<span>更新了{{item.lookTotal}}个Look</span>
				</div>
			</div>
			<p>{{item.title}}</p>
			<div class="show_img">
				<div class="items" v-for="item2 in item.ctList" >
					<img :src="item2.cover" width="100%" height="100%" alt="">
				</div>
			</div>
		</div>	
	</div>
</template>

<style lang="less">
		.ranking{
			margin-top:20rem*2/75;
		}
		.content{
		margin-bottom:20rem*2/75;
		height:270rem*2/75;
		border-bottom:1rem*2/75 solid #efefef;
		.user_info{
			margin-bottom:12rem*2/75;
		}
		.user_info .user_txt{
			margin-left:5rem*2/75;
		}
		.user_info .user_txt h3{
			margin-top:5rem*2/75;
			font-size:15rem*2/75;
			margin-bottom:5rem*2/75;
		}
		p{
			height:40rem*2/75;
			width:375rem*2/75;
			font-size:14rem*2/75;
			text-overflow:-o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display:-webkit-box;
			-webkit-line-clamp:2;
			-webkit-box-orient:vertical;
			padding:0 5rem*2/75;
			margin-bottom:5rem*2/75;
		}
		.user_info .user_txt span{
			margin-right:4rem*2/75;
		}
		.user_info .user_img{
			width:50rem*2/75;
			height:50rem*2/75;
			img{
				width:100%;
				border-radius:50%;
			}
		}
		.show_img{
			display:flex;
				.items{
				height:150rem*2/75;
				width:125rem*2/75;
				margin-right:2rem*2/75;
			}
		}
	}
</style>

<script>
	export default{
		data(){
			return{
				rankingArr:[]
			}
		},
		mounted(){
			this.axios.get("/api/ranking").then((res)=>{
				this.rankingArr = res.data.data.list;
			})
		}
	}
</script>