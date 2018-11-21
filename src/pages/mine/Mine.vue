<template>
	<div id="Mine">
		<div class="mine_head" :style='{backgroundImage:"url("+head_img+")"}' >
			<div class="mine_head_box">
				<img :src="user_img" class="mine_head_box_img" alt="">
				<h2 class="mine_head_box_title">{{userName}}</h2>
				<div class="mine_head_box_info">
					<span><i class="iconfont icon-user_select"></i>个人主页</span>
				</div>

			</div>
		</div>
		<div class="mine_list">
			<Header :style='{top:""+item.top+""}' class="mine_list_items" :key="item.widgetId" @load="show(index)" :num="index" v-for="(item,index) in arr">
				<img slot="classify" :src="item.iconUrl">
				<div slot="content" @click="antiao($event)" class="item-main">
					<span class="item-title">{{item.title}}</span> 
					<span >{{item.subTitle}}</span>	
				</div>
				<i slot="rightIcon" class="iconfont icon-left1"></i>
			</Header>

			<div class="login"><router-link to="/login">退出登录</router-link></div>
		</div>
		
	</div>
</template>

<script>
	//引入头部.vue
  import Header from "@/components/Header"
	export default{
		components:{
			Header
		},
		data(){
			return {
				arrinfo:[],
				arr:[],
				head_img:"",
				user_img:"",
				userName:"",
				num:""
			}
		},
		methods:{
			show(index){
				console.log(index)
			},
			antiao(e){
				var shopping = e.currentTarget.innerHTML.match(/[\u4e00-\u9fa5]+/)[0]
				shopping
				if (shopping == "购物车"){
					
					this.$router.push("/shopping")
				}
			}
		},
	
		created(){
 			this.$emit('public_footer',true);
		}
		,mounted(){

			//var That = this;
			console.log(this.num)
			this.axios.get("/api/minedata").then((res)=>{
				this.arr = res.data.data.datalist
				this.arrinfo = res.data.data.userinfo
				console.log(this.arr);
				this.head_img = this.arrinfo.back_url
				this.user_img = this.arrinfo.avatarUrl
				this.userName = this.arrinfo.userName
			})
		}
	}
</script>

<style lang="less">
@import "http://at.alicdn.com/t/font_887746_0drh7o1zzb4.css";
.top_45{
	position: relative;
	top:-45/75rem;
}
#Mine{
	overflow: hidden;
}
.mine_head{
	height: 380/75rem;
	background: no-repeat;
	background-size: contain;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	/*background: red;*/
	.mine_head_box{
		height: 227/75rem;
		width: 650/75rem;
		background: #fff;
		border-radius:20/75rem;
		box-shadow:2/75rem 8/75rem 15/75rem #ccc;
		display: flex;
		justify-content: center;
		/*align-items: center;*/
		flex-wrap:wrap;

		img{
			.top_45;
			width: 120/75rem;
			height: 120/75rem;
			border-radius: 50%;
			border:4/75rem solid #fff;
		}
		.mine_head_box_title{
			.top_45;
			width: 100%;
			text-align: center;
			height: 40/75rem;
			font-size: 16px;
		}
		.mine_head_box_info{
			.top_45;
			width: 100%;
			text-align: center;
			height: 30/75rem;
			span{
				border: 2/75rem solid #ccc;
				padding: 10/75rem;
				border-radius:25/75rem;
			}
			
		}
	}
}
.mine_list{
	overflow: auto;
	margin-top:40/75rem;
	height: 1100/75rem;
	padding: 40/75rem;
	position: relative;
	.headers{
		position: absolute;
		.icon-left1{
			font-size: 30/75rem;
		}
	}
	.login{
		height: 80/74rem;
		border-radius: 15/75rem;
		background: #ff5777;
		width: 90%;

		position: absolute;
		bottom: 180/75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		a{
			color: #fff;
			font-size: 30/75rem
		}
	}
	.item-main{
		display: flex;
		justify-content: space-between;
		width: 85%;

	}
	img{
		width: 44/75rem;
		height: 44/75rem;
		vertical-align: middle;
	}
	.mine_list_items{
		position: absolute;
		height: 120/75rem;
	}
}
</style>