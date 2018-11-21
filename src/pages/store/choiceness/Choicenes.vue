<template>
	<div class="choiceness">
		<ul>
			<li @click="selectionOfDetails()" v-for="(item,index) in list">
			<img :src="item.image" alt="">
			</li>
		</ul>
	</div>
</template>

<script>                   
	export default {
		data(){
			return {list:[]}
		},
		mounted(){
			this.axios.get("/api/store_choiceness").then(res=>{
				// console.log(res.data[122871].list)
				this.list = res.data.dataInfo[122871].list
				console.log(res)
			})
		},
		methods:{
			selectionOfDetails(){
				this.$router.push("/selectionOfDetails")
			}
		},
		created() {
            this.$emit('public_footer',false);
        }
	}
</script>

<style lang="less">
@keyframes wangwangxiaomantou {
		0%{
			transform: rotate(-5deg);
		}
		100%{
			transform: rotate(5deg);
		}
	}
	.choiceness{
		ul li{
			list-style:none;
		}
		li{
			animation: wangwangxiaomantou 5s infinite alternate;
			margin-top:25px;
			img{
				height: 100%;
				width:95%;
				margin:0 auto;
				
			}
		}
	}
	
</style>