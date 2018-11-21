<template>
	<div class="selectionOfDetails clearfix">
		<div class="selectionOfDetails-header">
			<h3>颜值保暖兼备的毛呢大衣</h3>
			<p>💕经典的毛呢大衣已然成为网红达人的出街利器，说它是冬季出镜率最高的单品之一也毫不夸张～<span>廓形遮肉、收腰显瘦，格子文艺、驼色气场十足！</span></p> 
			<p><span>款式推荐：</span>萌白甜小姐姐可以选择翻领款，想要显瘦显身材可以选择束腰款，名媛千金可以选择斗篷款，小个子妹子可以选择经典色短款……</p>		
			
			<div class="content clearfix" v-for="(item,index) in selectionOfDetailsArr" :key="item.item_id">
				<div class="leftImg fl">
					<img v-lazy="item.image">
				</div>	
				<div class="rightTxt fr">
					<h3>{{item.title}}</h3>
					<p>{{item.description}}</p>	
					<p><em>￥{{item.price}}</em></p>
					<button>查看详情</button>
				</div>	
			</div>
		</div>
		<div class="selectionOfDetails-content clearfix">
			<h3>小编力荐&nbsp;&nbsp;▼</h3>
			<div class="selectionOfDetails-content-centner" v-for="(item,index) in selectionOfDetailsArrs">
				<img v-lazy="item.image" class="fl">
				<span>￥{{item.price}}</span>
				 <p class="clearfix">{{item.title}}</p>
			</div>
		</div>
		<div class="selectionOfDetails-floor">
			<p>更多精选</p>
			<div class="like-cloth"> 
				<router-link to="/clothdetail" :key="item.cfav" class="link-single" href="" v-for="(item,index) in link_cloth" >
					<img v-lazy="item.img" alt="" />
					<div class="link-title">
						<p class="l-tit-p">{{item.title}}</p>
						<p class="l-t-fl">
							<span class="price">￥{{item.price}}</span>
							<span class="num">{{item.sale}}</span>
							<span class="icon"></span>
						</p >
					</div>
					<button>立即购买</button>
				</router-link>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
	data(){
		return {
			selectionOfDetailsArr:[],
			selectionOfDetailsArrs:[],
			link_cloth:[]
			}
	},	

	mounted(){
			this.axios.get("/api/info_list_show").then(res=>{
				this.selectionOfDetailsArr = res.data.dataInfo[128267].list
				// console.log(this.selectionOfDetailsArr)
			
			});
			this.axios.get("/api/info_list_show_for").then(res=>{
				this.selectionOfDetailsArrs = res.data.dataInfo[128269].list
				// console.log(this.selectionOfDetailsArrs)
			});
			this.axios.get("/api/listdata").then((res)=>{
				this.link_cloth =res.data.dataInfo.wall.docs
				console.log(res.data.dataInfo.wall.docs)
			})
	},
	created(){
		this.$emit("public_footer",false)
	}
}
</script>


<style lang="less">
.selectionOfDetails{
	margin:15rem*2/75 10rem*2/75 60rem*2/75;
	line-height:19rem*2/75;
	h3{
		font-size:16px;
		font-weight:600;
		margin-bottom:10rem*2/75;
	}p{	
		font-size:13px;
		&:first-of-type{ 
			margin-bottom:15rem*2/75;
			span{
			background:pink;
			padding:0 4rem*2/75;
			border-radius:8rem*2/75;
			}
		}
	}
	img[lazy] {

		  background: url("../../../assets/image/lazy.gif") no-repeat fixed center;
		}
}

	.content{
		overflow: hidden;
		margin-top:20rem*2/75;
		height: 200rem*2/75;
		.leftImg{
			width:45%;
			height: 100%;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.rightTxt{
			width: 50%;
			height: 100%;
			font-size:12px!important;
			color:#666;
			h3{
				font-size:16px!important;
				color: #525252;
				font-weight:600;
				border-bottom:1rem*2/75 solid #e5e5e5;
				margin:15rem*2/75 0 10rem*2/75;
				padding-bottom:5rem*2/75;
				white-space: nowrap;  
				text-overflow:ellipsis; 
				overflow:hidden;
			}
			p{
					font-size:12px!important;
					line-height:17rem*2/75!important;
					color:#666;
					overflow: hidden;
				    text-overflow: ellipsis;
				    display: -webkit-box;
				    -webkit-box-orient: vertical;
				    -webkit-line-clamp: 3;
				&:first-of-type{margin-bottom:30rem*2/75;
				}
				em{
					font-size:17px!important;
					font-weight:600;
					color:black;
				}
			}
			button{
				height:25rem*2/75;
				width:80rem*2/75;
				background:pink;
				border:none;
				font-size:13px;
				color:#fff;
				border-radius:2rem*2/75;
				margin-top:5rem*2/75;
			}

		}
	}
	.selectionOfDetails-content{
		margin-top:20rem*2/75;
		h3{
			font-size:12px;
			font-weight:500;
			text-indent:8rem*2/75;
			margin-bottom:2rem*2/75;
		}
		.selectionOfDetails-content-centner{
			position:relative;
			float: left;
			width: 45%!important;
			margin:5rem*2/75 7rem*2/75;
			span{
				position:absolute;
				bottom:45rem*2/75;
				right: 0rem*2/75;
				background:rgba(0, 0, 0, 0.3);
				color:#FFFFFF;
				border-radius:5rem*2/75;
				font-size:9px;
				line-height: 15rem*2/75;
				font-weight:700;
			}
			img{
				width: 100%;
				height: 200rem*2/75;
				border-radius:5rem*2/75;
			}
			p{
				height: 39rem*2/75;
				width: 100%;
				font-size:12px!important;
				line-height:17rem*2/75!important;
				color:#666;
				overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    margin-bottom: 5rem*2/75;
			    padding-top:5rem*2/75;
			}
			
		}
	}
	.selectionOfDetails-floor{
		text-align:center;
		p{
			margin-top:15px;
		}
		.like-cloth{
			margin-top:20rem*2/75;
			width:100%;
			text-align:center;
			overflow: hidden;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		.link-single{
			display:inline-block;
			text-align: center;
			width:45%!important;
			height:6.6rem;
			margin:0.15rem;
			box-sizing:border-box;
			background:#fff;
			margin-bottom:2.9rem!important;
			img{
				width:100%;
				height:100%;
				border-radius:5rem*2/75;
			}
			.link-title{
				padding:0.15rem;
				width:100%;
				overflow: hidden;
				.l-tit-p{
					font-size: 16px;
					font-weight: 600;
					margin-top:0.15rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.l-t-fl{
					margin-top:0.15rem;
					.price{
						float:left;
					}
					.num,icon{
						float:right;
					}
				}
			}
			button{
				width:100%;
				border:1px solid #ccc;
				background:#FF5777;
				color:#fff;
				height:0.8rem;
				margin-top:0.1rem;
				border-radius: 0.1rem;
			}
		}
	}
}
</style>