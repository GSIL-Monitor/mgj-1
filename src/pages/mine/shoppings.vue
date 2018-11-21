<!-- 购物车 -->
<template>
	<div class="shoppings">
		<header class="shopping-headers"><router-link class="iconfont icon-left" to="/mine" ></router-link><span class="header_s">购物车（5）</span><span><a v-show="flag_info" @click="minShow()" href="javascript:">编辑</a><a @click="minShow()" href="javascript:" v-show="!flag_info">完成</a> <i class="iconfont icon-xiaoxi"></i></span></header>

		<div class="shop_item_list">
			<div  v-for="(item,index) in show_shoplist">
					<div class="shop_meun">
					<div class="icon_show">
						<span @click="show_in_flag(index)" class="border_radius"><i v-show="item.shopInfo.crossBorder" class="iconfont icon-dui"></i></span>
					<span class="shop_head">{{item.shopInfo.shopName}}</span>
					</div>
					<div>
						<span>领券 ></span>
					</div>
				</div>
				<ShowItem :flag_info="flag_info" :myIndex="index" @show_pic="addall_pic" :showlist1="item.cartItemGroup" class="shop_item"></ShowItem>

			</div>
		</div>
		<div class="icon_show button_go">
			<div>
				<span @click="allFlag()" class="border_radius"><i v-show="all_flag" class="iconfont icon-dui"></i></span><b class="info_padd">全选（ {{num_shop}} ）<span class="money" v-show="flag_info" >￥ {{all_pic|new_pic}}</span></b>
			</div>
			<div v-show="flag_info"><router-link to="/confirmorder"><div class="settle">去结算</div></router-link></div>
			<div v-show="!flag_info" class="mid_"><div>移入收藏夹</div><div  class="settle" @click="remove()">删除</div></div>
		</div>
	</div>

</template>
<script>
	import ShowItem from "@/components/shopping_item"
	export default{
		components:{
			ShowItem
		},
		data(){
			return {
				// 传入子的数据
				show_shoplist:[],
				// 全选
				all_flag:false,
				// 商品数量
				num_shop:0,
				// 商品价格
				all_pic:0,
				// 商店选中
				shopends:false,
				// 获取选中商店的下标
				shopends_index:0,
				// 商店选中数量
				shopends_num:0,
				// 控制数量显示消失
				flag_info:true,
				// 删除商品的下标
				removeIndex:999,
				// 删除的商店
				removeshop:999,
			}
		},
		filters:{
			new_pic(pic){
				if(pic == 0){
					return 0
				}
				var end_pics = String(pic).slice(-2)
				var head_pics = String(pic).slice(0,-2)
				return head_pics+"."+end_pics
				shopends_num:0
			}
		},
		created(){
			this.$emit('public_footer',false);
			this.axios.get("/api/shopcart").then(data =>{
				this.show_shoplist = data.data.dataInfo
			})
		},
		mounted(){
			
		},
		methods:{
			// 控制编辑消失
			minShow(){
				this.flag_info= !this.flag_info
			},

			// 处理店铺点击勾选
			show_in_flag(index){
				this.shopends_num = 0
				this.show_shoplist[index].shopInfo.crossBorder = !this.show_shoplist[index].shopInfo.crossBorder
					this.show_all()
				this.show_shoplist[index].cartItemGroup.map(item=>{
					if(item.sku.bondedGoods){
						this.all_pic-=item.sku.nowprice*item.number
						this.num_shop -=1
					}

					 item.sku.bondedGoods = this.show_shoplist[index].shopInfo.crossBorder
						// 如果之前没选中着选中时增加价格
					 if(!item.sku.bondedGoods){
					 	return
					 }else{
					 	this.removeshop = index
					 	this.all_pic+=item.sku.nowprice*item.number
					 	this.num_shop +=1
					 	console.log(this.removeshop)

					 }
				})
				
			},
			// 全选
			allFlag(){
				console.log(this.show_shoplist)
				var vm = this
				this.all_pic = 0
				this.num_shop = 0
				this.all_flag = !this.all_flag

				this.show_shoplist.map(item=>{
					item.shopInfo.crossBorder = this.all_flag
					item.cartItemGroup.map(items=>{
						items.sku.bondedGoods = this.all_flag
						if(this.all_flag){
							this.all_pic += items.sku.nowprice*items.number
							this.num_shop +=1

						}
					})
				})

			},
			// 价格,状态处理
			addall_pic(value,trfs,shopend,index,reindex){
				this.removeIndex = reindex
				this.shopends_num = 0
				// 商店处理
				// 如果传来shopend着表示商店选中index获得选中的商店
				var vm = this
				this.shopends = shopend
				this.shopends_index = index
				if(vm.shopends){
					vm.show_shoplist[vm.shopends_index].shopInfo.crossBorder = true
					this.show_all()
				}else{
					this.all_flag = false
					vm.show_shoplist[vm.shopends_index].shopInfo.crossBorder = false
				}

				// 单个处理
				if(trfs){
					this.all_pic += value
					this.num_shop += 1

				}else{
					this.all_pic -= value
					this.num_shop -= 1
				}
				// this.all_pic = 0
			},
			show_all(){
					this.show_shoplist.map(item=>{
						if(item.shopInfo.crossBorder){
							this.shopends_num += 1
						}
					})
					if(this.show_shoplist.length==this.shopends_num){
						this.all_flag = true
					}else{
						this.all_flag = false
					}
			},
			// 删除商品
			remove(){
				var vm = this
				// 商店删除
				this.show_shoplist.map((item,index)=>{
					// 单品删除
					item.cartItemGroup.map(items=>{
						if(items.sku.bondedGoods){
							vm.num_shop--
							this.all_pic -= items.sku.nowprice*items.number
							this.show_shoplist[index].cartItemGroup.splice(vm.removeIndex,1)
						}
					})
					if(item.shopInfo.crossBorder){
						this.show_shoplist.splice(index,1)
					}
				})
				// 全选删除
				if(this.all_flag){
					this.show_shoplist = []
					this.all_flag = false
					this.num_shop = 0
					this.all_pic = 0
				}

			}

		}
	}

</script>
<style lang="less">
.shoppings{
	padding-top:120/75rem; 
	background-color: #f6f6f6;

	.shopping-headers{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 10;
		padding: 30/75rem;
		display: flex;
		border-bottom: 1px #ccc solid;
		background-color: #f6f6f6;
		justify-content:space-between;
		align-items: center;
		.iconfont{
			vertical-align: middle;
		}
	}
	.icon_show{
	.border_radius{
		display: inline-block;
		position: absolute;
		top: 50%;
		border-radius: 50%;
		transform: translateY(-50%);
		border: 1px solid;
		width: 40/75rem;
		height: 40/75rem;

	}
	.iconfont{
		display: inline-block;
		position: absolute;
		top: 50%;
		left: -1px;
		transform: translateY(-50%);
		vertical-align: middle;
		font-size: 40/75rem;
		color: pink;
	}}
	.header_s{
		position: relative;
		left: 30/75rem;
		font-size: 36/75rem;
	}
	.shop_item_list{
		position: fixed;
	    height: 600px;
	    top: 0;
	    right: 0;
	    left: 0;
	    bottom: 0;
	    margin-top: 60px;
	    padding-bottom: 80px;
	    overflow: auto;
	    background-color: #ebd7d7; 
		/*商品头部*/
	.shop_meun{
		display: flex;
		justify-content: space-between;
		position: relative;
		background-color: #fff;
		padding:16/75rem 36/75rem 16/75rem;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		margin-top: 30/75rem;
	}
	.shop_head{
		padding-left:60/75rem; 
		font-weight: bold;
		font-size: 30/75rem;
	}
		
		.shop_item{
			background-color: #f6f6f6;
			&>div{
				background-color: #fff;
			}
		}
	}
	.button_go{
		position: relative;
		line-height: 100/75rem;
		padding: 0 36/75rem 0;
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 10;
		background-color: #fff;
		justify-content: space-between;
		align-items: center;
	}
	.money{
		color:#ee4566;
	}
	.info_padd{
		padding-left:60/75rem; 
	}
	.settle{
		background: #ff5777;
		width: 100*2/75rem;
		line-height: 34*2/75rem;
		text-align: center;
		color: #fff;
		font-size: 16*2/75rem;
		border-radius:10/74rem;
	}
	.mid_{
		display: flex;
		align-items: center;
		.settle{
			margin-left: 50/75rem;
			height: 34*2/75rem;
			width: 70*2/75rem;
		}
	}
}
	

</style>