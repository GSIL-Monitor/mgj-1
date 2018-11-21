<template>
	<div class="keep">
		<div class="keep-con" v-for="(item,index) in keepArr">
			<div class="user_info clearfix">
				<div class="user_tou fl">
					<img :src="item.feedUserInfo.avatar" alt="">
				</div>
				<div class="user_text fl">
					<h3>{{item.feedUserInfo.name}}</h3>
					<span>{{item.feedUserInfo.height}}</span>
					<span>{{item.feedUserInfo.weight}}kg</span>
					<span>{{item.feedUserInfo.location}}</span>
					<span>{{item.feedUserInfo.career}}</span>
				</div>
			</div>
			<div class="swiper-wrap">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item2 in item.images">
							<img :src="item2.path" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="wrapper-icon clearfix">
				<div class="icon-left fl">
					<i class="iconfont icon-fenxiang"></i>
					<i class="iconfont icon-shoucang1"></i>
				</div>
				<div class="icon-right fr">
					<i class="iconfont icon-pinglun"></i>
					<i @click="clickZan()" :class="{red:red}" class="iconfont icon-dianzan"></i>
				</div>
				<div class="alert" :class="{active:move}">
					<span>点赞成功</span>
				</div>
				<div class="alert" :class="{active:move2}">
					<span>取消点赞</span>
				</div>
			</div>
			<div>
				<p>{{item.content}}</p>
				<span>{{item.feedObjectType}}小时前</span>
				<span style="margin-left:10px;">{{item.cScan}}浏览</span>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	@import "../../../assets/swiper/css/swiper.css";
	.keep{
		background:#f6f6f6;
		border-top:1px solid #f6f6f6;
	}
	.keep .keep-con{
		margin:10px 10px;
		margin-bottom:10px;
		background:#fff;
	}
	.keep-con:last-child{
		height:570px;
	}
	.user_info .user_tou{
		width:50rem*2/75;
		height:50rem*2/75;
		border:1px solid;
		border-radius:50%;
		img{
			width:100%;
			border-radius:50%;
		}
	}
	.user_info .user_text h3{
		font-size:18rem*2/75;
		font-weight:700;
	}
	.swiper-wrap{
		height:400px;
		background:#f6f6f6;
	}
	.keep-con .swiper-container{
		margin-top:10px;
		overflow:auto;
		height:400px;
		background:#f6f6f6!important;
		.swiper-slide{
			width:100%;
			height:100%;
			img{
				width:100%;
				height:100%;
			}
		}
	}
	.wrapper-icon .icon-left i:last-child{
		margin-left:25px;
	}
	.wrapper-icon .icon-right i:first-child{
		margin-right:25px;
	}
	.wrapper-icon .icon-left i{
		font-size:20px;
		font-weight:700;
	}
	.wrapper-icon .icon-right i{
		font-size:20px;
		font-weight:700;
	}
	.alert{
		width:70px;
		height:30px;
		position:fixed;
		top:50%;
		left:50%;
		z-index:12;
		opacity:0;
		text-align:center;
		line-height:30px;
		background:#521865;
		border-radius:10px;
		transform:translate(-50%,-50%);
		span{
			color:#fff;
			font-size:12px;
		}
	}
	.active{
		animation:move 3s ease;
	}
	.red{
		color:red;
	}
	@keyframes move{
		0%{
			opacity:.5;
		}
		25%{
			opacity:.5;
		}
		50%{
			opacity:.5;
		}
		75%{
			opacity:.5;
		}
		100%{
			opacity:0;
		}
	
	}
</style>

<script>
	import "../../../assets/swiper/js/swiper.js"
	export default{
		data(){
			return{
				keepArr:[],
				move:false,
				red:false,
				move2:false
			}
		},
		mounted(){

			this.axios.get("/api/Keep").then((res) =>{
				this.keepArr = res.data.data.list;
			});

		},
		updated(){
			var swiper = new Swiper('.swiper-container', {
				paginationClickable: true,
				loop:true
		    });
		},
		methods:{
			clickZan(){
				if(this.red == false){
					this.red = true;
					this.move = true;
					this.move2 = false;
				}else{
					this.red = false;
					this.move = false;
					this.move2 = true;
				}
			}
		}
		
	
	}
</script>