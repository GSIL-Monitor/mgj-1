<template>
	<div class="nav">
			<div class="nav-list">
				<span :class="{active:nowIndex==0}" @click="nowIndex=0">
					<router-link to="/live/tags">热门</router-link>
				</span>
				<span :class="{active:nowIndex==1}" @click="nowIndex=1">
					<router-link to="/live/looks">穿搭</router-link>
				</span>
				<span :class="{active:nowIndex==2}" @click="nowIndex=2">
					<router-link to="/live/update">上新</router-link>
				</span>
				<span :class="{active:nowIndex==4}" @click="nowIndex=4">
					<router-link to="/live/beautyMakeup">美妆</router-link>
				</span>
			</div>
			<div>
				<router-view></router-view>
			</div>
		</div>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return {
				nowIndex:0
			}
		},
		created() {
				this.$emit('public_footer',true);
		}
	}
</script>

<style lang="less">

.nav{
	.nav-list{
		text-align:center;
		display: flex;
			align-items: center;
		span{
			width: 25%;
			padding-bottom:2px;
			border-bottom:1px solid #eee;
			
			a{
				display: inline-block;
				font-size:14px;
				font-weight:500;
				padding:8px 18px 10px;
				color:#333;
			}
		}
	}
}
.router-link-exact-active{
	border-bottom:2px solid red;
}

</style>