<template>
	<div class="home">
		<div class="head">
			<Header>
				<router-link to="/classify" slot="classify" class="iconfont icon-streamlist"></router-link>
				<span class="con_search" slot="content"><i class="iconfont icon-search"></i><input type="text" placeholder="学生秋日百搭新款"></span>
				<i slot="rightIcon" class="iconfont icon-xiaoxi"></i>
			</Header>
		</div>
		<!-- 轮播图 -->
		<div class="slide">
			<Banner :paginationShow="true">
				<div slot="swi-con" class="swiper-slide">
					<img src="../../assets/image/banner/slide01.jpg" width="100%" alt="">
				</div>
				<div slot="swi-con" class="swiper-slide">
					<img src="../../assets/image/banner/slide02.jpg" width="100%" alt="">
				</div>
				<div slot="swi-con" class="swiper-slide">
					<img src="../../assets/image/banner/slide03.jpg" width="100%" alt="">
				</div>
				<div slot="swi-con" class="swiper-slide">
					<img src="../../assets/image/banner/slide04.jpg" width="100%" alt="">
				</div>
			</Banner>
		</div>
		<div class="shoppingArea">
			<div @click="clickRecharge(index)" class="items" v-for="(item,index) in shoppingArr" >
				<img :src="item.sr" alt=""><br/>
				<span>{{item.text}}</span>
			</div>
		</div>
		<div class="option">
			<div class="wrap">
				<div>
					<router-link to="/index/find">
						<span @click="clickSp()">发现</span>
					</router-link>
				</div>
				<div>
					<router-link to="/index/keep" >
						<span @click="clickSp()">关注</span>
					</router-link>
				</div>
				<div>
					<router-link to="/index/ranking" >
						<span @click="clickSp()">排行榜</span>
					</router-link>
				</div>
			</div>
			<div>
				<router-view></router-view>
			</div>
			<div class="Dynamic">
				<img src="../../assets/image/Dynamic.gif" height="160" width="160" alt="">
			</div>
		</div>
		<!-- <Tabbar/> -->
	</div>
	
</template>
<style lang="less" scoped>
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
.slide{
	margin-top:53rem*2/75;
}
.router-link-exact-active{
	border-bottom:2rem*2/75 solid red;
}
.shoppingArea{
	width:100%;
	padding:0 10rem*2/75;
	padding-top:10rem*2/75;
	display:flex;
	flex-wrap:wrap;
	.items{
		width:71rem*2/75;
		height:70rem*2/75;
		margin-bottom:20rem*2/75;
		text-align:center;
		img{
			width:50rem*2/75;
			height:50rem*2/75;
		}
		span{
			font-size:13rem*2/75;
		}
	}
	.items:nth-child(6){
		margin-bottom:0;
	}
	.items:nth-child(7){
		margin-bottom:0;
	}
	.items:nth-child(8){
		margin-bottom:0;
	}
	.items:nth-child(9){
		margin-bottom:0;
	}
	.items:nth-child(10){
		margin-bottom:0;
	}

}
.wrap{
	display:flex;
	width:100%;
}
.wrap>div{
	height:30rem*2/75;
	flex:1;
	line-height:30rem*2/75;
	text-align:center;
	font-size:15rem*2/75;
	span{
		display:inline-block;
	}
}
.Dynamic{
	width:80rem*2/75;
	height:80rem*2/75;
	position:fixed;
	bottom:12%;
	right:12rem*2/75;
	z-index:10;
	img{
		width:100%;
	 	height:100%;
	}
}
.active{
	border-bottom:2rem*2/75 solid red;
}

</style>
<script>

	// import Tabbar from "@/components/Tabbar"
	import Banner from "@/components/Banner"
	import Header from "@/components/Header"
	export default{
		components:{
			Banner,
			// Tabbar,
			Header
		},
		data(){
			return{
				shoppingArr:[
					{sr:require("../../assets/image/shoppingArea/shoppingArea01.png"),text:"充值中心"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea02.jpg"),text:"29元任选"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea03.jpg"),text:"限时快抢"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea04.jpg"),text:"人气女装"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea05.jpg"),text:"签到有礼"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea06.jpg"),text:"当季热卖"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea07.jpg"),text:"内衣百货"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea08.jpg"),text:"TOP鞋包"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea09.jpg"),text:"美妆个护"},
					{sr:require("../../assets/image/shoppingArea/shoppingArea10.jpg"),text:"9.9专区"}

				],
				activeIndex:0,
				flag:true

			}

		},
		methods:{
			clickRecharge:function(index){
				if(index == 0){
					this.$router.push("/voucher");
				}
			},
			clickSp(){
				this.flag = false;
				
			}
		},
		created() {
            this.$emit('public_footer',true);
        }
   
	}
	
</script>

