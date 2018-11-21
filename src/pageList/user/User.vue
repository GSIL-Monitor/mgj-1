<template>
	<div class="user">
		<div class="user_header">
			<div class="user_img fl">
				<img src="../../assets/image/user_img.jpg"  alt="">
			</div>
			<div class="user_right fr">
				<div class="fl">
					<span>{{num}}</span><br/>
					<span>粉丝</span>
				</div>
				<div class="fr">
					<span>100</span><br/>
					<span>关注</span>
				</div>
			</div>
			<div class="keep fl">
				<button v-show="flag2" @click="clickBtn()">
					<span>关注</span>
				</button>
				<button v-show="flag" @click="clickBtn2()">
					<span>已关注</span>
					<span>私聊</span>
				</button>
			</div>
			<div class="clearfix">
				<p class="fl jiantou" @click="clickJantou()"><i :class="{rotate:flag3}" class="iconfont icon-shangjiantou"></i></p>
			</div>
			<div class="info">
				<span>陈晓雅Alline</span>
				<span>官方认真</span>
				<p>演员</p>
				<p>经典不过时 流行请看我 买买买 护肤 做发型</p>
			</div>
			
		</div>
		<div class="recommend" v-show="flag3">
			<div class="slide_txt clearfix">
				<h2 class="fl">推荐关注</h2>
				<span class="fr" @click="clickX()">x</span>
			</div>
			<div class="slide-con">
				<Slide>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head01.jpg" alt=""><br/>
						<span>不太开心小刘</span>
					</div>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head02.jpg" alt=""><br/>
						<span>大衣呢</span>
					</div>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head03.jpg" alt=""><br/>
						<span>Abby彤_</span>
					</div>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head04.jpg" alt=""><br/>
						<span>La是我呀</span>
					</div>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head05.jpg" alt=""><br/>
						<span>你的困困</span>
					</div>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head06.jpg" alt=""><br/>
						<span>五彩棉花糖123</span>
					</div>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head07.jpg" alt=""><br/>
						<span>少女心平平平</span>
					</div>
					<div class="swiper-slide" slot="swiper-con">
						<img src="../../assets/image/slide/slide_head08.jpg" alt=""><br/>
						<span>请叫我EE呗</span>
					</div>
				</Slide>
			</div>
		</div>
		<div class="show-con">
			<div class="show-header">
				<span>J.crew</span>
				<span>Hemes</span>
				<span>UNIQ</span>
			</div>
			<div class="show-center">
				<Bannerr>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner01.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner02.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner03.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner04.jpg"  alt="">
					</div>
				</Bannerr>
				<div class="comment">
					<span><i class="iconfont icon-fenxiang"></i></span>
					<span @click="Like()"  class="fr"><i :class="{likeColor:flagRed}" class="iconfont icon-dianzan" ></i>{{likeData}}</span>
					<span style="margin-right:35px;" class="fr"><i @click="clickLike()" class="iconfont icon-pinglun"></i>{{commentData}}</span>
				</div>
				<div class="browse clearfix">
					<p>天气真的越来越冷了 大衣必须穿起来❤️ 大衣袖子有蝴蝶结设计 很有设计感🧥 衬衫是J. crew的 一点点是小樱桃啊🍒 很是可爱 阔腿裤 搭配复仇风暴的板鞋～ 酷酷的！别忘了袜子也要搭配一下啊🤗 包包是爱马仕的入门款 菜篮包 黑银 不用配货就买到啦 幸运🌟</p>
					<span class="fl">8天前</span>
					<span class="fl">|</span>
					<span class="fl">991.4万人浏览</span>
				</div>
				<div class="else-comment">
					<p><span>奥妈妈：</span>我想知道上次衣服的链接</p>
					<p><span>刘家第二帅：</span>我想知道上次衣服的链接</p>
					<p><span>wang are：</span>我想知道上次衣服的链接</p>
					<p>共155条评论></p>
				</div>
			</div>
		</div>
			<div class="show-con">
			<div class="show-header">
				<span>J.crew</span>
				<span>Hemes</span>
				<span>UNIQ</span>
			</div>
			<div class="show-center">
				<Bannerr>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner05.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner06.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner07.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner08.jpg"  alt="">
					</div>
				</Bannerr>
				<div class="comment">
					<span><i class="iconfont icon-fenxiang"></i></span>
					<span  class="fr"><i class="iconfont icon-dianzan" ></i></span>
					<span style="margin-right:35px;" class="fr"><i class="iconfont icon-pinglun"></i></span>
				</div>
				<div class="browse clearfix">
					<p>天气真的越来越冷了 大衣必须穿起来❤️ 大衣袖子有蝴蝶结设计 很有设计感🧥 衬衫是J. crew的 一点点是小樱桃啊🍒 很是可爱 阔腿裤 搭配复仇风暴的板鞋～ 酷酷的！别忘了袜子也要搭配一下啊🤗 包包是爱马仕的入门款 菜篮包 黑银 不用配货就买到啦 幸运🌟</p>
					<span class="fl">8天前</span>
					<span class="fl">|</span>
					<span class="fl">991.4万人浏览</span>
				</div>
				<div class="else-comment">
					<p><span>奥妈妈：</span>我想知道上次衣服的链接</p>
					<p><span>刘家第二帅：</span>我想知道上次衣服的链接</p>
					<p><span>wang are：</span>我想知道上次衣服的链接</p>
					<p>共155条评论></p>
				</div>
			</div>
		</div>
			<div class="show-con">
			<div class="show-header">
				<span>J.crew</span>
				<span>Hemes</span>
				<span>UNIQ</span>
			</div>
			<div class="show-center">
				<Bannerr>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner09.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner010.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner11.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner12.jpg"  alt="">
					</div>
				</Bannerr>
				<div class="comment">
					<span><i class="iconfont icon-fenxiang"></i></span>
					<span  class="fr"><i class="iconfont icon-dianzan" ></i></span>
					<span style="margin-right:35px;" class="fr"><i class="iconfont icon-pinglun"></i></span>
				</div>
				<div class="browse clearfix">
					<p>天气真的越来越冷了 大衣必须穿起来❤️ 大衣袖子有蝴蝶结设计 很有设计感🧥 衬衫是J. crew的 一点点是小樱桃啊🍒 很是可爱 阔腿裤 搭配复仇风暴的板鞋～ 酷酷的！别忘了袜子也要搭配一下啊🤗 包包是爱马仕的入门款 菜篮包 黑银 不用配货就买到啦 幸运🌟</p>
					<span class="fl">8天前</span>
					<span class="fl">|</span>
					<span class="fl">991.4万人浏览</span>
				</div>
				<div class="else-comment">
					<p><span>奥妈妈：</span>我想知道上次衣服的链接</p>
					<p><span>刘家第二帅：</span>我想知道上次衣服的链接</p>
					<p><span>wang are：</span>我想知道上次衣服的链接</p>
					<p>共155条评论></p>
				</div>
			</div>
		</div>
			<div class="show-con">
			<div class="show-header">
				<span>J.crew</span>
				<span>Hemes</span>
				<span>UNIQ</span>
			</div>
			<div class="show-center">
				<Bannerr>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner01.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner02.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner03.jpg"  alt="">
					</div>
					<div slot="swiper-con" class="swiper-slide" >
						<img src="../../assets/image/slide/banner04.jpg"  alt="">
					</div>
				</Bannerr>
				<div class="comment">
					<span><i class="iconfont icon-fenxiang"></i></span>
					<span  class="fr"><i class="iconfont icon-dianzan" ></i></span>
					<span style="margin-right:35px;" class="fr"><i class="iconfont icon-pinglun"></i></span>
				</div>
				<div class="browse clearfix">
					<p>天气真的越来越冷了 大衣必须穿起来❤️ 大衣袖子有蝴蝶结设计 很有设计感🧥 衬衫是J. crew的 一点点是小樱桃啊🍒 很是可爱 阔腿裤 搭配复仇风暴的板鞋～ 酷酷的！别忘了袜子也要搭配一下啊🤗 包包是爱马仕的入门款 菜篮包 黑银 不用配货就买到啦 幸运🌟</p>
					<span class="fl">8天前</span>
					<span class="fl">|</span>
					<span class="fl">991.4万人浏览</span>
				</div>
				<div class="else-comment">
					<p><span>奥妈妈：</span>我想知道上次衣服的链接</p>
					<p><span>刘家第二帅：</span>我想知道上次衣服的链接</p>
					<p><span>wang are：</span>我想知道上次衣服的链接</p>
					<p>共155条评论></p>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="less">
	.user{
		.displayX{
			display:none;
		}
		background:#e6e6e6;
		.recommend{
			.slide_txt{
				font-size:15rem*2/75;
				span{
					font-size:16rem*2/75;
					margin-right:5rem*2/75;
				}
			}
			.slide-con{
				height:140rem*2/75;
				margin:1rem*2/75 4rem*2/75;
				display:flex;
				overflow:auto;
					.swiper-slide{
						background:#fff;
						width:120rem*2/75;
						height:120rem*2/75;
						flex:1;
						margin-left:10rem*2/75;
						text-align:center;
					img{
						width:70rem*2/75;
						height:70rem*2/75;
						border-radius:50%;
						margin-top:15rem*2/75;
						margin-bottom:5rem*2/75;

					}
				}
				.swiper-slide:first-child{
					margin-left:0;
				}
			}
			
		}
		.user_header{
			height:180rem*2/75;
			background:#fff;
			margin-bottom:10rem*2/75;
			.jiantou{
				margin-left:12rem*2/75;
				height:25rem*2/75;
				width:30rem*2/75;
				border:1px solid #e6e6e6;
				line-height:25rem*2/75;
				text-align:center;
				.icon-shangjiantou{
					display:inline-block;
				}
			}
			.rotate{
				transform:rotateZ(180deg);
			}
			.keep{

				button{
					width:200rem*2/75;
					height:25rem*2/75;
					border:0;
					border:1rem*2/75 solid #e6e6e6;
					outline:none;
					background:none;
					margin-left:25rem*2/75;
					display:flex;
					span{
						flex:1;
					}
					span:first-child{
						border-right:1rem*2/75 solid #e6e6e6;
					}
				}
			}
			.user_img{
				width:80rem*2/75;
				height:80rem*2/75;
				margin:10rem*2/75 8rem*2/75;
				img{
					width:100%;
					border-radius:50%;
				}
			}
			.user_right{
				width:220rem*2/75;
				margin-top:30rem*2/75;
				margin-right:40rem*2/75;
				div:first-child{
					margin-left:20rem*2/75;
					text-align:center;
					span:first-child{
						font-size:15rem*2/75;
					}
					span:last-child{
						font-size:17rem*2/75;
					}
				}
				div:last-child{
					margin-right:20rem*2/75;
					text-align:center;
					span:first-child{
						font-size:15rem*2/75;
					}
					span:last-child{
						font-size:17rem*2/75;
					}
				}
			}
		}
	}
	.info{
		margin-top:5rem*2/75;
		margin-left:8rem*2/75;

	}
	.info span{
		display:inline-block;
	}
	.info span:nth-child(2){
		margin-left:7rem*2/75;
		color:red;
		font-size:12rem*2/75;
	}
	.info span:nth-child(1){
		font-size:15rem*2/75;
		font-weight:700;
	}
	.show-con{
		// height:500rem*2/75rem;
		background:#fff;
		margin-bottom:10rem*2/75;
		padding:5rem*2/75 5rem*2/75;
		height:720px;
	}
	.show-con .show-header{
		height:40rem*2/75;
		display:flex;
		text-align:center;
		span{
			flex:1;
			font-size:18rem*2/75;
			background:#f5f6f9;
			margin-right:10rem*2/75;
			line-height:40rem*2/75;
		}
		span:last-child{
			margin-right:0;
		}
	}
	.show-con .show-center{
		height:400px;
		margin-top:8rem*2/75;
		margin-left:20rem*2/75;
		margin-right:20rem*2/75;
		.swiper-slide{
			height:400px;
			background:red;
			img{
				width:100%;
				height:100%;
			}
		}
		.swiper-pagination{
			text-align:right;
			padding-right:10rem*2/75;
			span{
				font-weight:700;
				color:red;
				font-size:17rem*2/75;
			}
		}
	}
	.comment span{
		font-weight:700;
	}
	.comment .iconfont{
		font-size:22rem*2/75;
	}
	.comment span:nth-child(2){
		margin-right:30px;
	}
	.likeColor{
		color:red;
	}
	.browse{
		margin-top:10px;
		height:120px;
		border-bottom:1px solid #f6f6f6;
	}
	.browse span:nth-child(3){
		margin-left:10px;
		color:#e6e6e6;
	}
	.browse span:nth-child(4){
		margin-left:10px;
	}
	.browse span{
		color:#999;
	}
	.else-comment{
		margin-top:10px;
		p{
			margin-bottom:5px;
			span{
				color:#999;
			}
		}
	}
</style>

<script>
	import Slide from "../../components/Slide.vue"
	import Bannerr from "../../components/Banner2.vue"
	export default{
		components:{
			Slide,
			Bannerr
		},
		data(){
			return{
				flag:false,
				flag2:true,
				flag3:false,
				num:66,
				commentData:14,
				likeData:49,
				flagRed:false
			}
		},
		created:function () {
            this.$emit('public_footer',false);
        },
        methods:{
        	clickBtn(){
        		this.flag = true;
        		this.flag2 = false;
        		this.num++
        	},
        	clickBtn2(){
        		this.flag = false;
        		this.flag2 = true;
        		this.num--
        	},
        	clickJantou(){
        		if(this.flag3 == false){
        			this.flag3 = true;
        		}else{
        			this.flag3 = false;
        		}
        	},
        	clickX(){
        		this.flag3 = false;
        	},
        	Like(){
        		this.likeData++;
        		this.flagRed = true;
        	},
        	clickLike(){
        		this.$router.push("/like");
        	}
        	
        }
	}
</script>