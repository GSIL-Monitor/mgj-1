<!-- 头部列表 -->
<template>
	<div>
	<div class="header">
		<Header>
			<i slot="classify" class="iconfont icon-xiaoxi"></i>
			<span slot="content" class="search" ><i class="iconfont icon-search"></i><input type="text" placeholder="学生百搭装扮衬衫" @keyup.enter="show(meagess)" v-model="meagess"></span>
			<i slot="rightIcon" class="iconfont icon-icon"></i>
		</Header>
		<div class="router_content">
			<div class="classify_showheader">
				<li :key="item.maitKey" @click="show_list(item.maitKey,item.miniWallkey,index)" v-for="(item,index) in url_list"  class="list_head" :class="{active:flag == index}" :flag="item.maiKey">{{item.title}}</li>
			</div>
			<div class="classify_showlist">
				<Listshow :show_info=shows></Listshow>
			</div>
		</div>
		
	</div>
		
	</div>

</template>
<script>
	import Header from "@/components/Header"
	// 顶部分页
	import Listshow from "@/components/List_show"

	export default{
		components:{
			Header,
			Listshow,
			
		},
		data(){
			return {
				url_list:[],
				shows:[],
				flag:"",
				meagess:""
			}
		},
		props:{
			show_lists:{
				type:String,
				default:""
			},
			
		}
		,
		methods:{
			show_list(url,url1,index){
				
				var urlm = "https://mce.mogucdn.com/jsonp/get/3?pid="+url+"&appPlat=m&_="+url1+"callback"
				this.$jsonp(urlm).then(json => {
				　　// 返回数据 json， 返回的数据就是json格式
					this.shows = json.data.list
				})
		
				this.flag = index
				
			},
			show(val){
				var href = "https://m.mogujie.com/wall/s?q="+val+"&acm=3.mce.1_10_11k.37705.28553.pC6Ulr7xW2Fx5.p_0_625901107-mid_37705-sd_115-mdt_hotWord-dit_18-lc_201&ptp=m1._mf1_1239_4537.0.0.MDVLOegG"
				window.open(href)
			
			}


		}
		,
		// 创建时让底部不显示
		created:function () {
            this.$emit('public_footer',false);
        }
		,
		mounted(){
			console.log(this.meagess)
			var url = "https://mce.mogucdn.com/jsonp/multiget/3?token=dVEJJrjGxhBYAzzGntwgPL0RTk24vhBFoiW0i39uJ5AEDDRtskQzzLZBmcMj7V0R&appPlat=m&pids=117330"
			this.$jsonp(url).then(json => {
			　　// 返回数据 json， 返回的数据就是json格式
				this.url_list = json.data[117330].list
		
				this.show_list(this.url_list[0].maitKey,this.url_list[0].miniWallkey,0)
			})
			
		}
	}

</script>
<style lang="less" >
.header{
	.iconfont{font-size: 60/75rem;vertical-align:middle;}
	.search{
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
	}}
	.headers{
		border-bottom: 1px solid #ccc;
	}
	.classify_showheader{
		width: 25%;
		display: flex;
		flex-direction:column;
		align-items: center;
		height: 610*2/75rem;
		overflow: auto;
		justify-content: flex-start;
		&::-webkit-scrollbar { width: 0 !important }
		
		.list_head{
			text-align: center;
			display: block;
			width: 100%;
			line-height: 95/75rem;
			&.active{
				border-left: 2px solid #ff00f5;
				color: #e64662;
			}
			/*background: red;*/
		}

	}
	.classify_showlist{
		width: 75%;
		height: 610*2/75rem;
		overflow: auto;
		&::-webkit-scrollbar { width: 0 !important }
	}
	.router_content{
		margin-top: 105/75rem;
		height: 610*2/75rem;
		display: flex;
		justify-content: space-around;
		overflow: hidden;
		
	}

	
</style>