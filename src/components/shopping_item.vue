<!-- 购物车 -->
<template>
	<div class="item_shops">
		<div v-for="(item,index) in showlist1">
		<div class="shop_show_list" >
			<div class="icon_show">
				<span @click="click_show(index)" class="border_radius"><i v-show="item.sku.bondedGoods" class="iconfont icon-dui"></i></span>
			</div>

			<div class="info_right">
				<span><img :src="item.sku.imgUrl" alt=""></span>
				<div  v-show="flag_info" class="info_title">
					<h3>{{item.sku.title}}</h3>
					<h4>颜色：{{item.sku.skuAttributes[0].value}}；尺码：{{item.sku.skuAttributes[1].value}}</h4>
					<h5>￥ {{item.sku.nowprice | new_pic}} <span><del>￥{{item.sku.price | new_pic}}</del><b>x{{item.number}}</b></span></h5>
				</div>
				<div class="info_title" v-show="!flag_info">
					<div class="add_">
						<a @click="minus_shopnumber(index)" href="javascript:">-</a>
						<span >{{item.number}}</span>
						<a @click="add_shopnumber(index)" href="javascript:">+</a>
					</div>
					<div class="show_lm">
						<h4>颜色：{{item.sku.skuAttributes[0].value}}；尺码：{{item.sku.skuAttributes[1].value}}</h4>
						<i class="iconfont icon-bottom" ></i>
					</div>
				</div>
			</div>
		</div>
		</div>
		
	</div>

</template>
<script>
	export default{
		props:{
			showlist1:{
			type:Array,
			default:[]	
			},
			myIndex:"",
			// 子组件控制数量出现消失
			flag_info:{
			type:Boolean,
			default:false	
			},

		},
		data(){
			return {
				addPic:0,
				addPic_flag:false,
				// 数值对比
				num_end:0,
				// 让商店选中
				shopend:false,
				// 显示编辑
			}
		}
		,
		filters:{
			new_pic(pic){
				var end_pics = String(pic).slice(-2)
				var head_pics = String(pic).slice(0,-2)
				return head_pics+"."+end_pics
			}
		},
		methods:{
			// 加商品
			add_shopnumber(index){
				this.showlist1[index].number++
			},
			// 减商品
			minus_shopnumber(index){
				this.showlist1[index].number--

			},

			//动态更新
				addall:function(index){
					this.num_end = 0
					this.addPic = 0
					this.addPic = this.showlist1[index].sku.nowprice*this.showlist1[index].number
					this.addPic_flag = this.showlist1[index].sku.bondedGoods								
					// console.log(this.showlist1[index])
				},
			// 点击勾选
			click_show(index){

				this.showlist1[index].sku.bondedGoods = !this.showlist1[index].sku.bondedGoods
				// 取到所有为true的金钱
				this.addall(index)
				// 如果两个都为true则为true
				this.showlist1.map(item=>{
					if(item.sku.bondedGoods){
						this.num_end++
					}
				})
				// 如果选中的为数组长度表示全选
				if(this.num_end==this.showlist1.length){
					this.shopend = true
					console.log(this.myIndex)
				}else{
					this.shopend = false
				}
				// 把金钱给父亲
				this.$emit("show_pic",this.addPic,this.addPic_flag,this.shopend,this.myIndex,index)

			},
			
		},

	}

</script>
<style lang="less">
	@import "http://at.alicdn.com/t/font_887746_asqrzxqrxaj.css";
.item_shops{
	background: #ccc;
	/*商品列表*/
	.shop_show_list{
		border-bottom:1px solid #ccc; 
		position: relative;
		display: flex;
		padding-top:20/75rem; 
		height: 130*2/75rem;
		justify-content: space-around;
		img{
			height: 96*2/75rem;
			width: 64*2/75rem;
		}
	}
	.info_right{
		width: 80%;
		display: flex;
		justify-content: space-between;
	}
	.info_title{
		padding: 10/75rem;
		width: 75%;
		h3{
			font-weight: bold;
		}
		h4{
			color:#ccc;
		}
		h5{
			bottom: 20px;
			font-size: 30/75rem;
			span{

				display: flex;
				justify-content: space-between;
				color:#ccc;
				font-size: 20/75rem;
			}
		}
	}
	/*编辑时*/
	.show_lm{

		margin-top: 40/75rem;
		padding: 10/75rem;
		border: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h4{
		color:#666;

		}
	}
	.add_{
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 60/75rem;
		a{
			text-align: center;
			width: 100%;
			border:1px solid #ccc;
		}
		span{
			width: 150%;
			text-align: center;

			border-top:1px solid #ccc;
			border-bottom:1px solid #ccc;
		}
	}
}
</style>