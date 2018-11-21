<template>
	<div>
		<!--头部-->
		<div class="navbar">
			<Header class="storelist">
				<span slot="classify"><router-link to="/store" class="iconfont icon-xiangzuojiantou"></router-link></span>
				<h3 class="title" slot="content"><span></span>入秋套装</h3>
				<span slot="rightIcon"><router-link to="/shopping" class="iconfont icon-gouwuche1"></router-link></span>
			</Header>
		</div>
		<!--二级导航-->
		<div class="list-container">
			<div class="navbar">
				<mt-navbar v-model="selected" class="list-nav">
					<mt-tab-item class="list_item" id="1">综合</mt-tab-item>
					<mt-tab-item class="list_item" id="2">销量</mt-tab-item>
					<mt-tab-item class="list_item" id="3">新品</mt-tab-item>
					<a class="store-price" @click="price()">价格<span>
						<i v-show="!flag" class="iconfont icon-jiantou-shang"></i>
						<i v-show="flag" class="iconfont icon-jiantou-shang"></i>
					</span></a>

					<mu-container class="price-container" v-show="prie">
						 <mu-row gutter class="price-cell">
						    <mu-col span="4"><div class="grid-cell">70-80</div></mu-col>
						    <mu-col span="4"><div class="grid-cell">80-105</div></mu-col>
						    <mu-col span="4"><div class="grid-cell">105-155</div></mu-col>
						 </mu-row>
						 <mu-row gutter class="price-gutter">
							 <mu-col span="2"><div class="grid-cell"><span>区间(元)</span></div></mu-col>
						    <mu-col span="6"><div class="grid-cell"><input class="price-input" type="text" />-<input class="price-input" type="text" /></div></mu-col>
						    <mu-col span="2"><div class="grid-cell"><input class="price-input"  type="submit" value="确认"/></div></mu-col>
						</mu-row>

					</mu-container>

				</mt-navbar>
			</div>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<!--综合类-->
				<mt-tab-container-item id="1">
					<div class="list_container">
						<a class="list_li" @click="goinfo()" href="javascript:" v-for="(item,index) in list_arr">
							<img :src="item.img" alt="" />
							<p class="list_title"><span v-for="(litem,index) in item.props">
								{{litem}}
							</span></p>

							<!--收藏功能-->
							 <div class="page-toast-wrapper">
							<div class="page-toast">
							    <h1 class="page-title fr"> <i @click.native="openToastWithIcon()" size="large" class="iconfont icon-shoucang1"></i></h1>

							    <p class="list_price">￥{{item.price}}</p>
							    </div>
							 </div>
						</a>
					</div>
					<!--<mt-cell />-->
				</mt-tab-container-item>
				<!--销售类-->
				<mt-tab-container-item id="2">
					<div class="list_container">
						<a class="list_li" href="" v-for="(item,index) in list_arr">
							<img :src="item.img" alt="" />
							<p class="list_title"><span v-for="(litem,index) in item.props">
								{{litem}}
							</span></p>

							<!--收藏功能-->
							 <div class="page-toast-wrapper">
							<div class="page-toast">
							    <h1 class="page-title fr"> <i @click.native="openToastWithIcon()" size="large" class="iconfont icon-shoucang1"></i></h1>
							    <p class="list_price">￥{{item.price}}</p>
							    </div>
							 </div>
						</a>
					</div>
					<!--<mt-cell />-->
				</mt-tab-container-item>
				<!--新品类-->
				<mt-tab-container-item id="3">
					<div class="list_container">
						<a class="list_li" href="" v-for="(item,index) in list_arr">
							<img :src="item.img" alt="" />
							<p class="list_title"><span v-for="(litem,index) in item.props">
								{{litem}}
							</span></p>

							<!--收藏功能-->
							 <div class="page-toast-wrapper">
							<div class="page-toast">
							    <h1 class="page-title fr"> <i @click.native="openToastWithIcon()" size="large" class="iconfont icon-shoucang1"></i></h1>
							    <p class="list_price">￥{{item.price}}</p>
							    </div>
							 </div>
						</a>
					</div>

					<!--<mt-cell />-->
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<!--右下角的浮标-->
		<div>
			 <mt-palette-button content="导航"  @toggle="main_log('expand')"
      direction="lt" class="pb" :radius="100" ref="target_3"
      style="right:30px;">
				<div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"><i class="iconfont icon-gouwuche1"></i></div>
				<div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"><i class="iconfont icon-searchs"></i></div>
				<div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(5)"><i class="iconfont icon-shouye "></i></div>
			</mt-palette-button>
		</div>

	</div>

</template>

<script>
	import Header from "@/components/Header";

	export default {
		components: {
			Header,
		},
		data() {
			return {
				selected: "1",
				selected1: "",
				list_arr: [],
				show1:true,
				flag:false,
				prie:false
			}
		},
		mounted() {
			//访问接口
			this.axios.get("/api/shoplist").then((res) => {
				this.list_arr = res.data.data.result.wall.docs
				//				console.log(res.data.dataInfo.result.wall.docs)
			})
		},
		methods: {
			price(){

				this.prie=!this.prie
			},
			sub_log(a){
				if(a == 1){
					this.$router.push("/shopping")
				}
				if(a == 5){
					this.$router.push("/index")
				}
			},
			goinfo(){
				this.$router.push("/clothdetail")
			}
		},
		created(){
			this.$emit('public_footer',false);
		},
	}
</script>

<style lang="less" scoped>
@import "http://at.alicdn.com/t/font_811359_6yzyit0evl.css";
@import url("//unpkg.com/muse-ui@3.0.1/dist/muse-ui.css");
	/*通用样式*/

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	img {
		width: 100%;
		height: 405/75rem;
	}

	.navbar {
		margin-top: 7/75rem;
		position: fixed;
		width: 100%;
		z-index: 999;
		/*background: red;*/
		border-bottom: 2px solid #ccc;
	}

	@import "http://at.alicdn.com/t/font_811359_myg05vezpo.css";
	/*头部样式*/

	.storelist {
		border-bottom: 1/75rem solid #CCCCCC;
		h3 {

			font-weight: bold;
			font-size: 118%;
		}
	}

	.list-container {
		margin-top: 100/75rem;
		width: 100%;
		height: 100/75rem;
		.list_li {
			margin-top: 10/75rem;
			margin-left: 10/75rem;
			/*border:1/75rem solid red;*/
			width: 46%;
			display: inline-block;
			padding-left: 20/75rem;
		}
	}

	.mint-tab-container-item {
		margin: 46px 11px 30px;
		width: 37%;
		float: left;
	}

	.list_container {
		width: 251%;
		margin-top: 2/75rem;
	}

	.list_title {
		/*overflow: hidden;*/
		text-overflow: ellipsis;
		height: 100/75rem;
		white-space: wrap;
		span {
			margin-top: 10/75rem;
			display: inline-block;
			line-height: .36rem;
			color: #5a6f7a;
			font-size: 12px;
			margin-left: 10/75rem;
			background: #eff3f6;
		}
	}

	.list_price {
		font-size: 20px;
		color: red;
	}
	.icon-shoucang1:before {
    font-size: 23px;
    content: "\e622";
}
.price-input{
    	width:150/75rem;
    	outline: none;
    	border:1/75rem solid #ccc;
    	text-align: center;
    }
.price-gutter{
	padding-top:20/75rem;
}
.price-cell{
	.grid-cell{
		background:#ccc;
		border:2/75rem solid #ccc;
}
}


	/*右下角浮标*/

	.pb {
		width: 100/75rem;
		height: 100/75rem;
		line-height: 100/75rem;
		bottom: 150/75rem;
		position: fixed;
		left: 600/75rem;
		border-radius: 50%;
		font-size: 8px;/**/
	}

	.my-icon-button {
		width: 60/75rem;
		height: 60/75rem;
		border-radius: 50%;
		background-color: #26a2ff;
		color: #fff;
		line-height: 60/75rem;
		text-align: center;
	}

	.mint-main-button {
    /*position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;*/
    color:#ffffff;
    border-radius: 50%;
    background-color: rgba(2, 2, 2, 0.59)!important;
    /*font-size: 2em;*/
}
.my-icon-button[data-v-3b159bad]{
	background-color: rgba(2, 2, 2, 0.59)!important;
}
/*价格样式*/
.store-price{
	position:fixed;
	top:46*2/75rem;
	right:0;
	height:50px;
	line-height:50px;
	width:200/75rem;
	background:#ffffff;
}
.price-container{
	position:fixed;
	top:190/75rem;
	left:2/75em;
	height:200/75rem;
	background:#FFFFFF;
	padding-top:20/75rem;
}
	.list_item{
		/*display: inline-block;*/
		/*padding:o 30px;*/
	}
	.navbar[data-v-3b159bad]{
		width: 76%!important;
	}
</style>
