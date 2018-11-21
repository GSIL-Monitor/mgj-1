<template>
	<div class="itemWrap" @click="clickItem()">
		<span v-show="!flag"><slot name="normalImg"></slot><br/></span>
		<span v-show="flag"><slot name="activeImg"></slot><br/></span>
		<span :class="{blue:flag}">{{txt}}</span>
	</div>
</template>

<script>
	export default{
		props:["txt","mark","sel"],
		
		methods:{
			clickItem(){
				this.$router.push("/"+this.mark)
				this.$emit("change",this.mark);
				//跳转到对应的视图中
			}
		},
		//计算属性
		computed:{
			flag:function(){
				if(this.mark ===this.sel){
					return true;
				}
				return false;
			}
		}
	}
	
	
	
</script>

<style lang="less">
	.blue{
		color:#25c0f9;
	}
	.itemWrap{
		flex:1;
		text-align: center;
	}
	.itemWrap img{
		width:80/75rem;
		height:80/75rem;
	}
	.itemWrap span{
		position: relative;
		top:-2px;
		font-size: 12px;
	}
</style>