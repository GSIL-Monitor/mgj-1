<template>
	<div class="beautyMakeup">
		<div class="beautyMakeup-contner" v-for="(item,index) in BeautyMakeupArr">
			<div class="beautyMakeup-text">
				<div class="beautyMakeup-text-left">
					<img :src="item.avatar" alt="">
				</div>
				<img src="../../../assets/image/live.png" alt="">
				<div class="beautyMakeup-text-right">{{item.userName}}</div>
			</div>
			<img :src="item.bgImg" alt="">
			<div class="beautyMakeup-center" @click="liveContent()">
				<div class="beautyMakeup-center-a">
					<p><i class="icon-1"></i>直播中<i></i><em>{{item.population}}万</em></p>
				</div>
				<div class="beautyMakeup-center-b">{{item.intro}}</div>
				<div class="beautyMakeup-center-c">
					<div class="beautyMakeup-center-img">
						<div class="qb" v-for="item2 in item.shopCarts.goods">
							<img :src="item2.cover" alt="">
							<p>{{item2.price}}</p>
						</div>
						<ul>
							<li v-for = "item3 in item.comments"><img :src="item3.avatar" alt=""><span>{{item3.content}}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data(){
		return {
			BeautyMakeupArr:[]
			// BeautyMakeupprice:[]
			}
		},
		mounted(){
			this.axios.get("/api/live").then(res=>{
				this.BeautyMakeupArr = res.data.dataInfo.lives
					console.log(this.BeautyMakeupArr)

			});
		},
		methods:{
			liveContent(){
				this.$router.push("/liveContent")
			}	
		}	
	}
</script>


<style lang="less">

/*直播内容区*/
	.beautyMakeup{
		margin:0 10px 50px;
		.beautyMakeup-contner{
			position:relative;
			margin-top:35px;
			height:230px;
			&:first-of-type{
				margin-top:15px;	
			}
			&>img{
				height:95%;
				width: 100%;
				border-radius:5px;
			}
			
		}
		.beautyMakeup-text{
			height:5%;
			display: flex;
			justify-content: center;
			margin-bottom:10px;
			font-size:14px;
			&>img{
				height: 35px;
				width: 55px;
				position:absolute;
				top: 22px;
				right:10px;
			}
			.beautyMakeup-text-left{
				img{
					width: 50px;
					height: 50px;
					border-radius:50%;
					position:absolute;
					top: 0;
					left:35px;
					border-radius:50%;

				}
			}
		}
		.beautyMakeup-center{
			color:#fff;
			position:absolute;
			bottom:5px;
			margin-left:2px;
			width: 100%;
			background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.4));
		}
		.beautyMakeup-center-a{
			margin-bottom:8px;
			text-indent:20px;
			padding-top:25px;
			.icon-1{
				/*直播边上的小红点*/
				display: inline-block;
				width: 7px;
				height: 7px;
				border-radius:50%;
				background: #f5342f;
				margin-right:5px;
				animation: iconFlash 4s linear infinite;
			}
		}
		.beautyMakeup-center-b{
			/*标题*/
			margin-bottom:10px;
			margin-left:12px;
			font-size:18px;
		}
		.beautyMakeup-center-c{
			/*个人标题下面的图片*/
			.beautyMakeup-center-img{
				display: flex;
				justify-content: center;
				.qb{
					text-align: center;
				img{
					width: 60px;
					height: 65px;
					border-radius:5px;
					margin-left:10px;
				}
				}
				ul{
					/*讨论区*/
					    margin-left: 38px;
					    width: 100px;
				li{	
					margin-bottom:4px;
					width:80px;
					overflow: hidden;
						white-space : nowrap;
					    text-overflow: ellipsis;
					
					img{
						height: 17px;
						width: 17px;
						border-radius:50%;
						margin-right:5px;
						}
					}
				}
			}
		}

	}


	/*直播小图标闪*/
		@keyframes iconFlash {
			0%{
				opacity: 1
			}
			20%{
				opacity: 0.6
			}
			40%{
				opacity: 0.3
			}
			60%{
				opacity: 0
			}
			80%{
				opacity: 0.5
			}
			100%{
				opacity: 1
			}
		}


	.beautyMakeup-center{
		margin-bottom:-15px;
	}
	
</style>