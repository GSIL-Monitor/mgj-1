<template>
	<div class="like">
		<div class="like-m" v-for="(item,index) in likeArr">
			<div class="clearfix">
				<div class="link-img fl">
					<img :src="item.src" height="40" width="40" alt="">
				</div>
				<div class="fl" style="margin-left:10px;">
					<h3 style="margin-bottom:3px;">{{item.user}}</h3>
					<span>{{item.time}}</span>
					<p>{{item.desc}}</p>
				</div>
				<div class="fr l-icon">
					<i @click="clickLun(index)" class="iconfont icon-pinglun"></i>
					<i @click="clickZan(index)" :class="{redZan:item.zan}" class="iconfont icon-dianzan"></i>
				</div>
			</div>
		</div>
		<div v-show="flag" @click="clickBack()" class="l-back">
			
		</div>
		<div class="l-footer">
			<div @click="clickSearch()" class="search fl">
				<input v-model="msg" @keyup="keyupCommit($event)" v-focus="flag"  type="text">
			</div>
			<div class="bt fl">
				<button @click="clickLike()">发送</button>
			</div>
		</div>
	</div>
</template>

<style lang="less">
	.like{
		.like-m{
			margin-bottom:15rem*2/75;
			margin-top:8rem*2/75;
			margin-left:8rem*2/75;
			margin-right:8rem*2/75;
			border-bottom:1px solid #f6f6f6;
			.l-icon i:first-child{
				margin-right:15rem*2/75;
			}
			.l-icon i{
				font-size:20rem*2/75;
			}
		}
	}
	.l-footer{
		position:fixed;
		bottom:0;
		left:0;
		height:50rem*2/75;
		width:100%;
		border-top:1px solid;
		z-index:3;
		.search{
			height:30rem*2/75;
			width:300rem*2/75;
			border:1px solid;
			margin-left:10rem*2/75;
			margin-top:8rem*2/75;

			input{
				width:100%;
				height:100%;
				border:0;
				background:#e6e6e6;
				outline:none;
			}
		}
		.bt button{
			width:50rem*2/75;
			height:30rem*2/75;
			margin-top:8rem*2/75;
			margin-left:5rem*2/75;
			background:#fff;
			outline:none;
			border:0;
			border:1px solid red;


		}
	}
	.l-back{
		width:100%;
		height:100%;
		background:black;
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		opacity:.5;
		z-index:2;
	}
	.redZan{
		color:red;
	}
</style>

<script>
	export default{
		data(){
			return{
				likeArr:[
					{user:"张三",time:"12:40:12",desc:"丰厚的搜狐佛法",zan:false,src:require("../../assets/image/shoppingArea/6.png")},
					{user:"李四",time:"11:40:44",desc:"发货快递收费低数据恢复ID",zan:false,src:require("../../assets/image/shoppingArea/7.png")}
				],
				flag:false,
				use:"奥巴马",
				sr:require("../../assets/image/shoppingArea/13.png"),
				tim:"",
				msg:"",
				focu:false
			}
		},
		methods:{
			clickSearch(){
				this.flag = true;
			},
			clickBack(){
				this.flag = false;
			},
			keyupCommit(e){
				if(e.keyCode == 13){
					if(this.msg == ""){
						return
					}else{
						var date = new Date();
						var hour = date.getHours();
						var min = date.getMinutes();
						var sec = date.getSeconds();
						var time = hour+":"+min+":"+sec;
						this.tim = time;
						this.likeArr.unshift({user:this.use,time:this.tim,src:this.sr,desc:this.msg});
						this.msg = "";
						this.flag = false;
					}
					
				}
			},
			clickLike(){
				var date = new Date();
				var hour = date.getHours();
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var time = hour+":"+min+":"+sec;
				this.tim = time;
				this.likeArr.unshift({user:this.use,time:this.tim,src:this.sr,desc:this.msg})
				this.msg = ""
				this.flag = false;
			},
			clickZan(index){
				if(this.likeArr[index].zan == false){
					this.likeArr[index].zan = true;
				}else{
					this.likeArr[index].zan = false;
				}
			},
			clickLun(index){
				if(this.focu == false){
					this.flag = true;
				}else{
					this.flag = false;
				}
			}
		},
		directives:{
			focus:{
				update:function(el,{value}){
					if(value){
						el.focus()
					}
				}
			}
		}
	}
</script>