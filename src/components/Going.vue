<!-- 登录注册模版 -->
<template>
	<div class="login">
		<Header>
			 <i slot="classify" @click="go_index()" class="iconfont icon-left"></i>
			 <span slot="content" class="content">{{gooren}}</span>
			 <i slot="rightIcon" class="iconfont iconmins icon-left"></i>
		</Header>
		<div class="giong_input" slot="going">
			<div><i class="iconfont icon-mogujielogo"></i></div>
			<slot name="form">
				
			</slot>
			
			<div class="going_footer" v-if="flag">
				<div><i class="iconfont icon-taobaoGray"></i><br /><br />淘宝{{gooren}}</div>
				<div><i class="iconfont icon-ipone"></i><br /><br />免密{{gooren}}</div>
				<div><i class="iconfont icon-wx"></i><br /><br />微信{{gooren}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	import Header from "@/components/Header"
	export default{
		components:{
			Header
		},
		props:["gooren","myurl","flag"],
		methods:{
			go_index(){
				this.$router.push(this.myurl)
			}
		}

	}
	
</script>

<style lang="less">

.content{
	width: 20%;
	font-size: 30/75rem
}
.iconmins{
	visibility: hidden
}

.going_footer{
	display: flex;
	justify-content: space-around;
	width: 100%;
	&>div{
		text-align:center;
		
	}
}
.pading_logo{
	padding: 10/75rem;
	border: 1px solid #ccc;
	border-radius:50%;
}
.giong_input{
	margin-top: 120/75rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	&>div{
		width: 100%;
		margin: 40/75rem 0 40/75rem;
	}
}

.login{
	text-align: center;
	.iconfont{

		width: 88/75rem;
		height: 88/75rem;
		font-size: 70/75rem;
		&.icon-taobaoGray{
			color: #ff5353;
			.pading_logo
		}
		&.icon-wx{
			.pading_logo;
			color: #11960c;
		}
		&.icon-mogujielogo{
			color:#fe8c8c;
		}&.icon-left{
			font-size: 30/75rem;
		}
	}
	.login_form{
		padding-left: 70/75rem;
		padding-right: 70/75rem;
		input{
			/*display: inline-block;*/
			width: 100%;
			height: 70/75rem;
			text-indent: 40/75rem;
			outline:none;
			border:1px solid #ccc; 
			border-radius: 10/75rem;
		}
		p{
			margin-top:40/75rem; 
			border-radius: 10/75rem;
		}
		.goning_go{
			line-height: 80/75rem;
			background:pink;
			font-size: 35/75rem;
			color:#b12e45;
		}
		.go_password{
			display: flex;
			margin: 10/75rem;
			justify-content: space-between;
		}
	}

}
</style>