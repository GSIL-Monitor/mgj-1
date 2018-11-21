<template>
	<div class="liveContent">
		<div class="prev" @click="liveclick" ><i class="mintui mintui-back"></i></div>
		<video id="video" src="../../../../assets/image/miao.mp4" loop autoplay controls="controls" width="100%" ></video>
		<div class="comment-content">
			<div class="danmu">
				<marquee scrollamount="4" behavior="scroll" :key="index" direction="left" v-for="(item,index) in lists_live" >{{item}}</marquee>

			</div>
			<div class="comment-center">
				<input type="text" v-model="msg">
				<button class="comment-btn" @click="btnClick()">提交</button>
			</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
			msg:"",
			lists_live:[]
		}
		},
		methods:{
			btnClick() {
				var vm = this
				this.lists_live.push(this.msg)
				this.msg = "";
				setTimeout(function(){
					vm.lists_live.shift()
				},8000)
			},
			liveclick(){
				this.$router.push("/live")
			}
		},
		created() {
				this.$emit('public_footer',false);
		}
	}

</script>

<style lang="less">
.liveContent{
	height:666*2/75rem;
	overflow: hidden;
}
.comment-text{
	margin-top:20*2/75rem;
	font-size:15*2/75rem;
	overflow: hidden;
	p{
		margin-top:5*2/75rem;
		text-indent:10*2/75rem;
	}
}
.comment-center{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	input{
		height: 30*2/75rem;
    margin: 20*2/75rem;
    padding: 10*2/75rem;
    outline: none;
    background: #8d2e2e00;
    border: 2*2/75rem #2dffff solid;
    border-radius: 10*2/75rem;
		text-indent:15*2/75rem;
		font-size:15*2/75rem;
		color: orangered;
	}

	.comment-btn{
		outline: none;
    background: pink;
    border: 1*2/75rem solid #09ff00;
    border-radius: 15*2/75rem;
    width: 70*2/75rem;
    height: 30*2/75rem
	}
	
}
.danmu,.prev{
	width: 100%;
	position: fixed;
	top: 0;
	font-size: 18*2/75rem;
	marquee{
		color: gold;
	}
	.mintui{
		
		background: rgba(77,127,241,.8);
		border-radius:20*2/75rem ;
		padding: 10/75rem;
		font-size: 30*2/75rem;
	}
}
.prev{
	z-index: 99999;
	width: 40*2/75rem;
	left: 10px;
	top: 10px;
}
</style>