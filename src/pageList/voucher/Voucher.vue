<template>
	<div class="voucher">
		<div class="wrap">
			<div class="mobile_voucher">
				<div class="mobile_input">
					<input @keyup="keyInput()" v-model="msg" type="text" placeholder="点击输入手机号">
					<span>{{title}}</span>
				</div>
				<div class="router_switch">
					<span :class="{active:activeIndex==0}" @click="activeIndex=0">
						<router-link to="/voucher/hua">话费</router-link>
					</span>
					<span :class="{active:activeIndex==1}" @click="activeIndex=1">
						<router-link to="/voucher/liu">流量</router-link>
					</span>
				</div>
				<div>
					<router-view></router-view>
				</div>
				<div class="btn">
					<button @click="once()">立即充值</button>
				</div>
			</div>
			<div class="banner">
				<Banner :paginationShow="true" paginationPosition="center">
					<div slot="swi-con" class="swiper-slide swipers">
						<img src="../../assets/image/banner/slide05.jpg" width="100%" alt="">
					</div>
					<div slot="swi-con" class="swiper-slide swipers">
						<img src="../../assets/image/banner/slide06.jpg" width="100%" alt="">
					</div>
				</Banner>
			</div>
			<div class="banner-con">
				<div class="item">
					<img src="../../assets/image/1.jpg" width="50"  alt=""><br/>
					<span>借钱</span>
				</div>
				<div class="item">
					<img src="../../assets/image/2.jpg" width="50"  alt=""><br/>
					<span>办卡</span>
				</div>
				<div class="item">
					<img src="../../assets/image/3.jpg" width="50"  alt=""><br/>
					<span>赚钱</span>
				</div>
				<div class="item">
					<img src="../../assets/image/4.jpg" width="50"  alt=""><br/>
					<span>保险</span>
				</div>
			</div>
			<div class="member">
				<div class="video_men">
					<img src="../../assets/image/5.jpg" width="20" alt="">
					<span>视频会员</span>
				</div>
				<div class="mobile_input">
					<input type="text" placeholder="点击输入手机号">
				</div>
				<div class="select">
					<div class="items" :class="{active:activeIndex2==0}" @click="activeIndex2=0">
						<img src="../../assets/image/6.jpg" width="50" alt=""><br/>
						<span>爱奇艺视频</span>	
					</div>
					<div class="items" :class="{active:activeIndex2==1}" @click="activeIndex2=1">
						<img src="../../assets/image/7.jpg" width="50" alt=""><br/>
						<span>优酷视频</span>
					</div>
					<div class="items" :class="{active:activeIndex2==2}" @click="activeIndex2=2">
						<img src="../../assets/image/8.jpg" width="50" alt=""><br/>
						<span>腾旭视频</span>
					</div>
					<div class="items" :class="{active:activeIndex2==3}" @click="activeIndex2=3">
						<img src="../../assets/image/9.jpg" width="50" alt=""><br/>
						<span>搜狐视频</span>
					</div>
					<div class="items" :class="{active:activeIndex2==4}" @click="activeIndex2=4">
						<img src="../../assets/image/6.jpg" width="50" alt=""><br/>
						<span>芒果视频</span>
					</div>
				</div>
				<div class="list">
					<div style="display:block" class="ai item">
						<li>
							<h3>一个月</h3>
							<span>售价：19.80元</span>
						</li>
						<li>
							<h3>三个月</h3>
							<span>售价：49.80元</span>
						</li>
						<li>
							<h3>六个月</h3>
							<span>售价：99.80元</span>
						</li>
					</div>
					<div class="you item">
							<li>
							<h3>一个月</h3>
							<span>售价：19.80元</span>
						</li>
						<li>
							<h3>二个月</h3>
							<span>售价：49.80元</span>
						</li>
						<li>
							<h3>三个月</h3>
							<span>售价：99.80元</span>
						</li>
					</div>
					<div class="ten item">
							<li>
							<h3>一个月</h3>
							<span>售价：19.80元</span>
						</li>
						<li>
							<h3>二个月</h3>
							<span>售价：49.80元</span>
						</li>
						<li>
							<h3>三个月</h3>
							<span>售价：99.80元</span>
						</li>

					</div>
					<div class="sou item">
							<li>
							<h3>一个月</h3>
							<span>售价：19.80元</span>
						</li>
						<li>
							<h3>二个月</h3>
							<span>售价：49.80元</span>
						</li>
						<li>
							<h3>三个月</h3>
							<span>售价：99.80元</span>
						</li>
					</div>
					<div class="mang item">
							<li>
							<h3>一个月</h3>
							<span>售价：19.80元</span>
						</li>
						<li>
							<h3>一个月</h3>
							<span>售价：49.80元</span>
						</li>
						<li>
							<h3>一个月</h3>
							<span>售价：99.80元</span>
						</li>
					</div>
				</div>
			</div>
			<div v-show="flag2" class="back"></div>
			<div class="footer" v-show="flag2" :class="{footerMove:flag2}">
				<div class="money">
					<span @click="clickX()">x</span>
					<span>收银台</span>
				</div>
				<div class="manner">
					<span>支付方式</span>
					<span>微信支付></span>
				</div>
				<div class="price">
					<span>支付金额</span>
					<span>20元</span>
				</div>
				<div class="affirm">
					<button>确认支付</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	.voucher{
		padding:10rem*2/75;
		background:#eeeeee;
		width:100%;
		border-top:5rem*2/75 solid pink;
		.wrap{
			
			.mobile_voucher{
				height:300rem*2/75;
				text-align:center;
				background:#fff;
			}
		}
		.wrap .mobile_voucher .mobile_input{
			text-align:left;
			height:40rem*2/75;
			border-bottom:1rem*2/75 solid;
			input{
				height:100%;
				outline:none;
				border:0;
				width:150rem*2/75;
				font-weight:500;
				font-size:20rem*2/75;
				text-indent:10rem*2/75;
			}
			span{
				display:inline-block;
				margin-left:20rem*2/75;
				font-size:18rem*2/75;
			}
		}
		.wrap .mobile_voucher .router_switch{
			display:flex;
			height:40rem*2/75;
			line-height:40rem*2/75;
			margin-bottom:15rem*2/75;
			span{
				flex:1;
				font-size:18rem*2/75;
			}
			
		}
	}
	.active{
		border-bottom:1rem*2/75 solid red;
	}
	.btn button{
		margin-top:13rem*2/75;
		border:1px solid red;
		outline:none;
		background:none;
		width:120rem*2/75;
		height:25rem*2/75;
		line-height:25rem*2/75;
		border-radius:10rem*2/75;
		color:red;
	}
	.banner{
		margin-top:10rem*2/75;
		.swipers{
			height:100rem*2/75;
		}
	}
	.banner-con{
		height:120rem*2/75;
		display:flex;
		background:#fff;
		text-align:center;
		margin-top:2rem*2/75;
		.item{
			flex:1;
			img{
				margin-top:15rem*2/75;
			}
		}
	}
	.member{
		margin-top:10rem*2/75;
		background:#fff;
		.video_men{
			height:50rem*2/75;
			border-bottom:1px solid #d6d6d6;
			line-height:50rem*2/75;
			text-align:center;
		}
		.mobile_input{
			text-align:left;
			height:40rem*2/75;
			input{
				height:100%;
				outline:none;
				border:0;
				width:150rem*2/75;
				font-weight:500;
				font-size:20rem*2/75;
				text-indent:10rem*2/75;
			}
		}
	}
	.select{
		height:80rem*2/75;
		display:flex;
		width:100%;
		text-align:center;
		.items{
			flex-grow: 1;
		}
	}
	.list .item{
		height:90rem*2/75;
		display:none;
	}
	.list .ai{
		height:90rem*2/75;
		li{
			float:left;
			height:60rem*2/75;
			width:105rem*2/75;
			border:1px solid red;
			margin-left:10rem*2/75;
			border-radius:10rem*2/75;
			text-align:center;
			h3{
				margin-top:10rem*2/75;
			}
		}
	}
	.list .you{
		height:90rem*2/75;
		li{
			float:left;
			height:60rem*2/75;
			width:105rem*2/75;
			border:1px solid red;
			border-radius:10rem*2/75;
			margin-left:10rem*2/75;
			text-align:center;
			h3{
				margin-top:10rem*2/75;
			}
		}
	}
	.list .ten{
		height:90rem*2/75;
		li{
			float:left;
			height:60rem*2/75;
			width:105rem*2/75;
			border:1px solid red;
			border-radius:10rem*2/75;
			margin-left:10rem*2/75;
			text-align:center;
			h3{
				margin-top:10rem*2/75;
			}
		}
	}
	.list .sou{
		height:90rem*2/75;
		li{
			float:left;
			height:60rem*2/75;
			width:105rem*2/75;
			border:1px solid red;
			border-radius:10rem*2/75;
			margin-left:10rem*2/75;
			text-align:center;
			h3{
				margin-top:10rem*2/75;
			}
		}
	}
	.list{
		margin-top:15rem*2/75;
	}
	.list .mang{
		height:90rem*2/75;
		li{
			float:left;
			height:60rem*2/75;
			width:105rem*2/75;
			border:1px solid red;
			border-radius:10rem*2/75;
			margin-left:10rem*2/75;
			text-align:center;
			h3{
				margin-top:10rem*2/75;
			}
		}
	}
	.back{
		width:100%;
		height:100%;
		background:black;
		position:fixed;
		left:0;
		right:0;
		top:0;
		bottom:0;
		z-index:9;
		opacity:.5;
	}

	
	
	.footer{
		height:350rem*2/75;
		position:fixed;
		bottom:-350rem*2/75;
		left:0;
		width:100%;
		background:#fff;
		z-index:10;
		.money{
			height:50rem*2/75;
			border-bottom:1px solid #e6e6e6;
			line-height:50rem*2/75;
			span:first-child{
				font-size:20rem*2/75;
				margin-left:10rem*2/75;
			}
			span:last-child{
				font-size:18rem*2/75;
				display:inline-block;
				margin-left:140rem*2/75;
			}
		}
		.manner{
			height:50rem*2/75;
			border-bottom:1px solid #e6e6e6;
			line-height:50rem*2/75;
			span:first-child{
				font-size:18rem*2/75;
				margin-left:10rem*2/75;
			}
			span:last-child{
				font-size:18rem*2/75;
				display:inline-block;
				margin-left:200rem*2/75;
			}
		}
		.price{
			height:50rem*2/75;
			border-bottom:1px solid #e6e6e6;
			line-height:50rem*2/75;
			span:first-child{
				font-size:18rem*2/75;
				margin-left:10rem*2/75;
			}
			span:last-child{
				font-size:18rem*2/75;
				display:inline-block;
				margin-left:200rem*2/75;
			}
		}
		.affirm{
			margin-top:150px;
			text-align:center;
			button{
				outline:none;
				width:250rem*2/75;
				height:30rem*2/75;
				background:none;
				border:0;
				background:#ff5777;
				color:#fff;
			}
		}
	}
	.footerMove{
		animation:move2 .2s linear both;
	}
	@keyframes move2{
		0%{
			bottom:-350rem*2/75;
		}
		30%{
			bottom:-250rem*2/75;
		}
		60%{
			bottom:-150rem*2/75;
		}
		100%{
			bottom:0rem*2/75;
		}
	}
	
	
	.activeJudge{
		animation:jmove 1s linear;
	}
	@keyframes jmove{
		0%{
			opacity:0;
		}
		100%{
			opacity:1;
		}
	}
</style>

<script>
	import Banner from "@/components/Banner"
	export default {
		components:{
			Banner
		},
		data(){
			return{
				activeIndex:0,
				activeIndex2:0,
				msg:"",
				title:"",
				content:"",
				flag:false,
				flag2:false,
				judge:false
			}
		},
		created:function () {
            this.$emit('public_footer',false);
        },
        methods:{
        	keyInput(){
        		var reg = /^[1][3][5][0-9]{8}$/;
        		var reg2 = /^[1][3][6][0-9]{8}$/;
        		if(reg.test(this.msg)){
        			this.title = "中国移动"
        		}else if(reg2.test(this.msg)){
        			this.title = "中国联通"
        		}else{
        			this.title = ""
        		}

        	},
        	once(){
        		if(this.msg == ""){
        			this.content = "手机号码不能为空"
        			this.judge = true;
        			
        		}else{
        			this.flag2 = true;
        		}
        	},
        	clickX(){
        		this.flag2 = false;
        	}
        },
        mounted(){
        	$(".select .items").on("click",function(){
        		var $index = $(this).index();
        		$(".list div").eq($index).show().siblings().hide();
        	})

        }
	}
</script>