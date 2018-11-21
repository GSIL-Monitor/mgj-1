<template>
	<div class="storeWrap">
		
		<div class="head">
			<Header>
				<router-link to="/classify" slot="classify" class="iconfont icon-streamlist"></router-link>
				<span class="con_search" slot="content"><i class="iconfont icon-search"></i><input type="text" placeholder="学生秋日百搭新款"></span>
				<i slot="rightIcon" class="iconfont icon-xiaoxi"></i>
			</Header>
		</div>
		<!--第一部分限时快抢-->
		<div class="cont-one">
			 <div class="cont-imgBox">
			 	<div class="imgBox-one">
			 		<a href="javaScript:;" v-for="(item,index) in arr" @click="clickImg()" :key="item.color">
			 			<div class="txt-img" :style="{background:item.color}">
			 				<img :src="item.src" alt=""/>
			 				<div class="time" v-show="item.flag">
			 					<span>{{`${hr}`}}</span>
			 					<em></em>
			 					<span>{{`${min+4}`}}</span>
			 					<em></em>
			 					<span>{{`${sec}`}}</span>
			 				</div>
			 				<p class="title" >{{item.img_title}}</p>
			 			</div>
			 		</a>
			 		
			 	</div>
			 </div>
		</div>
		<!--第二部分款式展示-->
		<div class="cloth-list">
			<div class="c-l-row">
				<a class="row-f" :key="item1.cid" v-for="(item1,index1) in list_arr_girlCloth" @click="clickImg()">
					<div class="row-g">
						<img :src="item1.image" alt="" class="clo-img"/>
						<p class="clo-dec">{{item1.title}}</p>
					</div>
				</a>
			</div>
		</div>
		<!--第三部分热门精选-->
		<div class="hot-cloth">
			<div class="h-c-all">
				<a class="h-c-f" @click="switchoverClick()">
					<img src="../../assets/image/store5.jpg" alt="" />
					<em></em>
					<p class="h-c-title">热门精选 | 解锁初冬单品穿搭LOOK→</p>
				</a>
				<!--轮播部分使用swiper插件-->
				<div class="swiper-container">
					<div class="swiper-wrapper">
			            <div class="swiper-slide" v-for="(item3,index3) in arr3" :key="item3.flag">
			            	<img :src="item3.src" alt="" />
			            	<h5>{{item3.swiper_h5}}</h5>
			            	
			            </div>
			        </div>
			        <!-- Add Pagination -->
			        <div class="swiper-pagination"></div>
				</div>
			</div>
		</div>
		<!--第四部分-->
		<div class="fashion">
			<h3 >流行元素</h3>
			<div class="fashion-ele">
				<a class="f-e-single" :key="item.fcid" v-for="(item,index) in list_arr_fahion">
					<p>{{item.title}}</p>
					<img :src="item.image" alt="" />		
				</a>
			</div>
		</div>
		<!--第五部分穿搭课堂-->
		<div class="class">
			<h3>穿搭课堂</h3>
			<mt-navbar v-model="selected">
			  	<mt-tab-item id="1">气质毛呢</mt-tab-item>
			  	<mt-tab-item id="2">温暖棉服</mt-tab-item>
			  	<mt-tab-item id="3">时髦套装</mt-tab-item>
			  	<mt-tab-item id="4">甜美大衣</mt-tab-item>
			  	
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  	<mt-tab-container-item id="1">
			    	<!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
			    	<div class="swiper-container">
						<div class="swiper-wrapper">
				            <div class="swiper-slide" v-for="(item3,index3) in arr3" :key="item3.flag2">
				            	<img :src="item3.src" alt="" />
				            	<h5>{{item3.swiper_h5}}</h5>
				            </div>
				        </div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination"></div>
					</div>
			  	</mt-tab-container-item>
			  	<mt-tab-container-item id="2">
			    	<!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
			    	<div class="swiper-container">
						<div class="swiper-wrapper">
				            <div class="swiper-slide" v-for="(item,index) in cotton" :key="item.cfav">
				            	<img :src="item.img" alt="" />
				            	<h5>{{item.title}}</h5>
				            </div>
				        </div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination"></div>
					</div>
			  	</mt-tab-container-item>
			  	<mt-tab-container-item id="3">
			    	<!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
			    	<div class="swiper-container">
						<div class="swiper-wrapper">
				            <div class="swiper-slide" v-for="(item,index) in suit" :key="item.cfav"> 
				            	<img :src="item.img" alt="" />
				            	<h5>{{item.title}}</h5>
				            </div>
				        </div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination"></div>
					</div>
			  	</mt-tab-container-item>
			  	<mt-tab-container-item id="4">
			    	<!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
			    	<div class="swiper-container">
						<div class="swiper-wrapper">
				            <div class="swiper-slide" v-for="(item,index) in sweater" :key="item.cfav">
				            	<img :src="item.img" alt="" />
				            	<h5>{{item.title}}</h5>
				            </div>
				        </div>
				        <!-- Add Pagination -->
				        <div class="swiper-pagination"></div>
					</div>
			  	</mt-tab-container-item>
			</mt-tab-container>
		</div>
		
		<!--第六部分猜你喜欢-->
		<div class="guess">
			<img src="https://s10.mogucdn.com/mlcdn/c45406/180904_79g7dd4id14ii77j2hd068li89i2i_2154x222.png_1200x9999.v1c7E.webp" alt="" />
		</div>
		<div class="like-cloth"> 
			<router-link to="/clothdetail" :key="item.cfav" class="link-single" href="" v-for="(item,index) in link_cloth" >
				<img v-lazy="item.img" alt="" />
				<div class="link-title">
					<p class="l-tit-p">{{item.title}}</p>
					<p class="l-t-fl">
						<span class="price" >￥{{item.price}}</span>
						<span class="num">{{item.sale}}</span>
						<span class="icon"></span>
					</p>
				</div>
				<button >立即购买</button>
			</router-link>
		</div>
		
		
		<!--空div-->
		<div class="box"></div>
		<Top/>
	</div>
</template>

<style lang="less">
	@import "../../assets/css/swiper.min.css";
	img[lazy=loading] {
	  	width: 80/75rem;
	  	height: 300/75rem;
	  	margin: auto;
	  	background: url("../../assets/image/lazy.gif") no-repeat fixed center;
	}
	.box{
		height:5rem;
	}
	
	/*头部*/
	.headers{
		z-index: 100!important;
	}
	.head{
		
	.iconfont{font-size: 60/75rem;vertical-align:middle;}
	.con_search{
	.iconfont{font-size: 40/75rem;}
		input{
			text-indent:20/75rem;
			outline: none;
			border: none;
			padding: 10/75rem;

		}
		padding: 0 20/75rem 0;
		border:1px solid #ccc;
		// background: red;
		border-radius:40/75rem;
	}
}
	.storeWrap{
		margin-top:53rem*2/75;
		background-color: #EFEFEF;
	.cont-one{
		margin: 0 auto;
    	.cont-imgBox{
    		overflow: hidden;
    		padding-top: 0.25rem;
		    padding-left: 0.2rem;
		    padding-bottom: 0.25rem;
		    background-color: rgb(255, 255, 255);
		    .imgBox-one{
		    	display: flex;
		    	width:100%;
		    	a{
		    		flex:1;
		    		display: inline-block;
		    		width: 2.2rem;
				    height: 2.2rem;
				    
		    	}
		    	.txt-img{
		    		width: 2.2rem;
				    height: 2.2rem;
				    margin-bottom: 0rem;
				    margin-right: 0.18rem;
				    position: relative;
				    border-radius: 0.2rem;
				    img{
					    height:80%;
					    width:80%;
				        position: absolute;
						left: 50%;
						transform: translateX(-50%);
				    }
				    .time{
				    	position: absolute;
    					bottom: 0.6rem;
    					display: flex;
					    color: #fff;
					    width: 1.5rem;
					    left: 50%;
					    margin-left: -0.56rem;
					    span{
				    	    background: #333333;
						    border-radius: 0.03rem;
						    width: 0.32rem;
						    height: 0.32rem;
						    text-align: center;
						    line-height: 0.32rem;
						    font-size: 0.3rem;
						    font-weight: 700;
					    }
					    em{
					    	font-style: normal;
						    position: relative;
						    display: inline-block;
						    width: 0.05rem;
						    height: 0.12rem;
						    margin: 0 0.03rem;
						    top: 0.12rem;
						    background:red;
					    }
				    }
				    .title{
				    	position: absolute;
					    bottom: 0.04rem;
					    left: 0;
					    width: 100%;
					    font-size: 0.4rem;
					    color: #fff;
					    text-align: center;
					    font-weight: 700;
				    }
		    	}
		    }
    	}
	}
	
	
	/*第二部分款式展示*/
	.cloth-list{
		margin: 0 auto;
	    margin-bottom: 0.2rem;
	    padding-top: 0rem;
	    padding-bottom: 0.1rem;
	    background-color: rgb(255, 255, 255);
		.c-l-row{
			padding-left:0.35rem;
    		padding-bottom: 0.3rem;
    		flex-wrap: wrap;
    		width: 100%;
    		.row-f{
    			display:inline-block;
    			flex: 1;
    			width:20%;
    			position: relative;
    			z-index: 1;
    			.row-g{
    				width: 1.6rem;
    				height: 1.6rem;
    				margin-bottom:0.7rem;
    				img{
    					width: 100%;
					    height: 100%;
					    display: block;
    				}
    				.clo-dec{
    					font-size: 0.4rem;
    					height: 0.36rem;
					    line-height: 0.36rem;
					    font-weight: normal;
					    text-align: center;
					    margin-top: 0.07rem;
    				}
    			}
    		}
		}
	}
	/*第三部分热门精选*/
	.hot-cloth{
		margin: 0 auto;
		position:relative;
		margin-bottom: 0.3rem;
		.h-c-all{
			margin-top: 0rem;
    		margin-bottom: 0.18rem;
    		.h-c-f{
    			display: block;
			    width: 100%;
			    height: 2.7rem;
			    position: relative;
			    img{
			    	width: 10rem;
    				height: 2.7rem;
			    }
			    em{
			    	position: absolute;
				    bottom: 0;
				    left: 0.8rem;
				    display: block;
				    width: 0;
				    height: 0;
				    border-bottom: 0.3rem solid #FFFFFF;
				    border-left: 0.3rem solid transparent;
				    border-right: 0.3rem solid transparent;
				    border-top: 0.3rem solid transparent;
			    }
			    .h-c-title{
			    	width: 7.5rem;
				    position: absolute;
				    left: 0.6rem;
				    top: 1.2rem;
				    color: #fff;
				    font-size: 0.44rem;
			    }
    		}
    		.swiper-container{
    			width: 100%;
        		height: 100%;
        		background:#fff;
        		z-index: 0;
        		.swiper-wrapper{
        			display: flex;
	        		.swiper-slide {
	        			width:33.333%;
				        text-align: center;
				        font-size: 18px;
				        background: #fff;
				        align-items: center;
				        img{
				        	width:100%;
				        	height:100%;
				        	padding:0.2rem;
				        }
				        h5{
				        	width:100%;
				        	color: #333;
				        	padding:0.15rem 0;
				        	font-size:0.25rem;	
				        	white-space: nowrap;
				        	text-overflow: ellipsis;
				        	overflow: hidden;
				        }
				        p{
				        	color: #999;
				        	font-size:0.35rem;
				        	padding-bottom: 1rem;
				        	white-space: nowrap;
				        	text-overflow: ellipsis;
				        	overflow: hidden;
				        }
				    }
			    }
    		}
    		
		}
	}
	/*第四部分流行元素*/
	.fashion{
		margin: 0 auto;
    	margin-bottom: 0.18rem;
	    padding-top: 0.18rem;
	    padding-left: 0.28rem;
	    background-color: rgb(255, 255, 255);
		h3{
			font-size: 0.5rem;
		    padding-left: 0.18rem;
		    font-weight: 700;
		    margin: 0.2rem 0 0.3rem;
		}
			.fashion-ele{
					width:100%;
				.f-e-single{
					display:inline-block;
					width: 2.9rem;
				    height: 2.9rem;
				    margin-bottom: 0.28rem;
				    margin-right: 0.28rem;
				    position: relative;
				    background: #F3F3F3;
				    border-radius: 0.1rem;
					p{
						position: absolute;
					    top: 0.3rem;
					    width: 100%;
					    font-size: 0.25rem;
					    color: #333;
					    text-align: center;
					    font-weight: 700;
					}
					img{
						position: absolute;
					    top: 35%;
					    left: 50%;
    					transform: translateX(-50%);
					    width: 1.8rem;
    					height: 1.6rem;
					    display: block;
					}
				}
			}
	}
	/*第五部分*/
	.class{
		background:#fff;
		h3{
			font-size: 0.5rem;
		    padding-left: 0.18rem;
		    font-weight: 700;
		    margin: 0.2rem 0 0.3rem;
		}
		.mint-tab-container{
			.swiper-slide{
				width:25%!important;
				padding:0.2rem;
				img{
					width:100%;
					height:4rem;	
				}
				h5{
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;	
				}
			}
		}
	}
	/*第六部分猜你喜欢*/
	.guess{
		width: 100%;
		padding-top:0.17rem;
    	img{
    		width:100%;
    		height:1.3rem;
    	}
    	
	}
	.like-cloth{
		width:100%;
		.link-single{
			display:inline-block;
			width:47%;
			height:6.6rem;
			margin:0.15rem;
			box-sizing:border-box;
			background:#fff;
			margin-bottom:2.6rem;
			img{
				width:100%;
				height:100%;
			}
			.link-title{
				padding:0.15rem;
				width:100%;
				overflow: hidden;
				.l-tit-p{
					font-size: 16px;
					font-weight: 600;
					margin-top:0.15rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.l-t-fl{
					margin-top:0.15rem;
					.price{
						float:left;
					}
					.num,icon{
						float:right;
					}
				}
			}
			button{
				width:100%;
				border:1px solid #ccc;
				background:#FF5777;
				color:#fff;
				height:0.8rem;
				margin-top:0.1rem;
				border-radius: 0.1rem;
			}
		}
	}
	}
</style>




<script>
	//引入swiper
	import "@/assets/lib/swiper"
	import Header from "@/components/Header"
	import Top from "@/components/Top"
	
	export default{
		components:{
		  	Header,
		  	Top
		},
		name: 'page-tab-container',
		data(){
			return {
				selected:"1",
				
				arr:[
					{src:require("../../assets/image/live.png"),img_title:"限时抢购",flag:true,color:"#f3be4e"},
					{src:require("../../assets/image/store-2.png"),img_title:"热销榜单",flag:false,color:"#de3a346b"},
					{src:require("../../assets/image/store-3.png"),img_title:"超级福利",flag:false,color:"#ef4110a6"},
					{src:require("../../assets/image/store-4.png"),img_title:"新品发现",flag:false,color:"#c5c307"}
				],
				list_arr_girlCloth:[],
				arr3:[
					{src:require("../../assets/image/store6.jpg"),swiper_h5:"爆款马丁靴",swiper_p:"瞬间营造9头生比例",flag:"01",flag2:"001"},
					{src:require("../../assets/image/store7.jpg"),swiper_h5:"甜美穿搭攻略",swiper_p:"甜到心间福祸TA",flag:"02",flag2:"002"},
					{src:require("../../assets/image/store8.jpg"),swiper_h5:"温暖之家必备",swiper_p:"软绒睡衣",flag:"03",flag2:"003"},
					{src:require("../../assets/image/store9.jpg"),swiper_h5:"毛衣种草单",swiper_p:"外穿内搭人手一件",flag:"04",flag2:"004"},
					{src:require("../../assets/image/store10.jpg"),swiper_h5:"4款超有型内搭",swiper_p:"万能搭配0出错",flag:"05",flag2:"005"},	
					{src:require("../../assets/image/store11.jpg"),swiper_h5:"",swiper_p:""},		
				],
				list_arr_fahion:[],
				cotton:[],
				suit:[],
				sweater:[],
				link_cloth:[],
				day: 0, 
				hr: 0, 
				min: 0, 
				sec: 0
			}
		},
		
		methods:{
			clickImg(){
				this.$router.push("/storeList")
			},
			clothDetail(){
				this.$router.push("/clothdetail")
			},
			switchoverClick(){
				console.log(5245)
				this.$router.push("/choiceness")
			},
			countdown: function () {
		      	const end = Date.parse(new Date('2018-11-05 05:30:29'))
		      	//1541376000000
		      	const now = Date.parse(new Date())
		      	const msec = end - now
		      	let day = parseInt(msec / 1000 / 60 / 60 / 24)
		      	let hr = parseInt(msec / 1000 / 60 / 60 % 24)
		      	let min = parseInt(msec / 1000 / 60 % 60)
		      	let sec = parseInt(msec / 1000 % 60)
		      	this.day = day
		      	this.hr = hr > 9 ? hr : '0' + hr
		      	this.min = min > 9 ? min : '0' + min
		      	this.sec = sec > 9 ? sec : '0' + sec
		      	const that = this
		      	setTimeout(function () {
		        	that.countdown()
		      	}, 1000)
		    }
		},
		mounted(){
			this.countdown();
			 var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 3,
		        paginationClickable: true,
//		        spaceBetween: 2
		    });
		    //var That = this;
			this.axios.get("/api/shopdata").then((res)=>{
				this.list_arr_fahion = res.data.data[123003].list;
				this.list_arr_girlCloth =res.data.data[126975].list;
			});	
			this.axios.get("/api/shoplist").then((res)=>{
				this.cotton = res.data.data.result.wall.docs.slice(0,16);
				this.suit =res.data.data.result.wall.docs.slice(16,32);
				this.sweater =res.data.data.result.wall.docs.slice(32,40);
			});
			this.axios.get("/api/listdata").then((res)=>{
				this.link_cloth =res.data.dataInfo.wall.docs
			});
			
			
		},
		created() {
				this.$emit('public_footer',true);
		}
			
		
	}
</script>

