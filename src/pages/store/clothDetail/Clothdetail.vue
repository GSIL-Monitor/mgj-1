<template>
	<div class="clothdetail">
		<div class="detail-box">
			<mt-header fixed class="detail-header">
				<router-link to="/Store" slot="left">
    				<mt-button icon="back"></mt-button>
  				</router-link>
  				<mt-button slot="right" class="iconfont icon-buy-car"></mt-button>	
  				<mt-button slot="right" icon="more"></mt-button>	
				
			</mt-header>
			<div class="swiper-container">
				<div class="swiper-wrapper">
		            <div class="swiper-slide" v-for="(item,index) in clothdetail">
		            	<img :src="item" alt="" />
		            </div>
		       </div>
			</div>
		</div>
		<!--价格部分-->
		<div class="clothprice">
			<div class="price-box">
				<div class="sale-price">
					<span class="sale-icon">￥</span>
					<span class="sale-num">109.00</span>
				</div>
				<div class="nosale">
					<span class="nosale-num">￥184.29</span>
					<span class="nosale-title">拼团价</span>
				</div>
			</div>
		</div>
		<div class="cloth-dec">
			<p class="dec-text">字母流苏慵懒风甜美小清新网红毛衣套头女韩版秋装新款针织衫上衣</p>
		</div>
		<div class="cloth-free">
			<span class="free-left">免邮费</span>
			<span class="free-right">浙江省嘉兴市</span>
		</div>
		<div class="background"></div>
		<!--第三部分优惠-->
		<div class="sale">
			<div class="sale-title">优惠</div>
			<div class="sale-box">
				<div class="sale-coupon">
					<img src="../../../assets/image/clothdetail-1.png" alt="" />
					<span class="couponAfter">领券后，下单至少可减<i>5元</i></span>
				</div>
				<span class="get-coupon" @click="ShouPup">
					领券
					<span class="iconfont icon-arrow-right-copy-copy"></span>
				</span>
				<mt-popup style="width:100%" v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
					<div class="sale-modal">
						<div class="tickets">
							<div class="ticket-title">店铺优惠券</div>
							<div class="s-m-ticket" v-for="(item,index) in tickets">
								<div>
									<span class="t-unit">¥</span>
									<span class="t-num">{{item.num}}</span> 
									<span class="t-desc">满{{item.price}}元立减</span>
								</div>
								<div class="t-time">2018.8.26 11:03-2019.2.2 23:59</div>
								<div class="btn-text" @click="showMsg(index)" :class="{display:!item.flag3}">立即领券</div>
								<div class="btn-text" :class="{display:item.flag3}">已领取</div>
							</div>
						</div>
					</div>
				</mt-popup>
				<div class="coupon">
					<span class="coupon-store">店铺优惠券</span>
					<div class="subtraction">
						<p>满99元立减5元</p>
						<p>满159元立减8元</p>
					</div>
				</div>
			</div>
		</div>
		<div class="deliver" @click="ShouServer">
			<div class="deliver-content">
				<span class="deliver-icon">
					<img src="../../../assets/image/clothdetail-1.png" alt="" />
				</span>
				<span class="deliver-item">
					72小时发货
				</span>
			</div>
			<div class="deliver-content">
				<span class="deliver-icon">
					<img src="../../../assets/image/clothdetail-1.png" alt="" />
				</span>
				<span class="deliver-item">
					7天无理由退货
				</span>
			</div>
			<div class="deliver-content">
				<span class="deliver-icon">
					<img src="../../../assets/image/clothdetail-1.png" alt="" />
				</span>
				<span class="deliver-item">
					退货补运费
				</span>
			</div>
			<div class="right-icon iconfont icon-arrow-right-copy-copy"></div>
		</div>
		<mt-popup style="width:100%" v-model="popupServer" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
				<div class="deliver-popup">
					<h3 class="d-p-title">服务说明</h3>
					<div class="d-p-server">
						<h4 class="d-p-h4">72小时发货</h4>
					</div>
					<div class="d-p-server">
						<h4 class="d-p-h4">7天无理由退货</h4>
						<p class="d-p-p">物流签收后7天内买家可无理由退货，需满足退货条件</p>
					</div>
					<div class="d-p-server">
						<h4 class="d-p-h4">退货补运费</h4>
					</div>
					<div class="d-p-server">
						<h4 class="d-p-h4">7天无理由退货</h4>
						<p class="d-p-p">白付美分期购：在我的钱包 →白付美页面开通即可使用分期购。本月消费，分3/6/12期还款，每月只还一点点，轻松享受大牌好货。（分12期只对部分用户开放。）</p>
					</div>
				</div>	
		</mt-popup>
		<div class="background"></div>		
		<div class="open">
			<a href="javaScript:;">
				<img src="../../../assets/image/clothdetail-2.png" alt="" />
				<span>开通白付美，先享受，下月再付款！</span>
				<span class="open-right">
					免费开通
				<span class="iconfont icon-arrow-right-copy-copy"></span></span>
			</a>
		</div>
		<div class="background"></div>
		<div class="choice" @click="ShouClothes">
			<span>请选择：</span>
			<span :class="{disColor:!flag4}">颜色</span>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<span class="c-m-s-color">"米白色"</span>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<span class="c-m-s-color">"粉红色"</span>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<span class="c-m-s-color">"蓝色"</span>
				</mt-tab-container-item>
			</mt-tab-container>
			<span :class="{size1:!flag1,size2:flag1}">"均码"</span>
			<span class="iconfont icon-arrow-right-copy-copy cho-icon"></span>
		</div>
		<mt-popup style="width:100%" v-model="popupClothes" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
			<div class="c-f-model">
				<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1" class="c-m-img">
						<img src="../../../assets/image/store9.jpg" alt="" />
					</mt-tab-container-item>
					<mt-tab-container-item id="2" class="c-m-img">
						<img src="../../../assets/image/store8.jpg" alt="" />
					</mt-tab-container-item>
					<mt-tab-container-item id="3" class="c-m-img">
						<img src="../../../assets/image/store7.jpg" alt="" />
					</mt-tab-container-item>
				</mt-tab-container>
				<span class="c-m-desc">
					<span class="c-m-price">
						<span class="c-m-team" :class="{size1:!flag1,size2:flag1}">拼团</span>
						<span class="c-m-icon">¥</span>
						<span class="c-m-num">109.00</span>
					</span>
					<mt-tab-container v-model="selected">
	  					<mt-tab-container-item id="1">
							<p class="c-m-stock">库存57件</p>
						</mt-tab-container-item>
						<mt-tab-container-item id="2">
							<p class="c-m-stock">库存68件</p>
						</mt-tab-container-item>
						<mt-tab-container-item id="3">
							<p class="c-m-stock">库存93件</p>
						</mt-tab-container-item>
					</mt-tab-container>
					<p class="c-m-stock" style="display: none;">库存164件</p>
					<p class="c-m-color">
						请选择：
						<span :class="{disColor:!flag4}">颜色</span>
						<span class="c-m-size">
							<mt-tab-container v-model="selected">
			  					<mt-tab-container-item id="1">
									<span class="c-m-s-color">"米白色"</span>
								</mt-tab-container-item>
								<mt-tab-container-item id="2">
									<span class="c-m-s-color">"粉红色"</span>
								</mt-tab-container-item>
								<mt-tab-container-item id="3">
									<span class="c-m-s-color">"蓝色"</span>
								</mt-tab-container-item>
							</mt-tab-container>
							<span :class="{size1:!flag1,size2:flag1}" >"均码"</span>
						</span>
					</p>
					
				</span>
				<span class="iconfont icon-x c-m-x" @click="clickX"></span>
			</div>
			<div class="c-f-color">
				<p>颜色:</p>
				<mt-navbar v-model="selected" >
				  	<mt-tab-item id="1" ><div @click="showColor">米白色</div></mt-tab-item>
				  	<mt-tab-item id="2" ><div @click="showColor">粉红色</div></mt-tab-item>
				  	<mt-tab-item id="3" ><div @click="showColor">蓝色</div></mt-tab-item>
				</mt-navbar>
			</div>
			<div class="c-f-color">
				<p>尺码：</p>
				<p :class="{selected:flag,uniform:!flag}" @click="clickUniform">均码</p>
			</div>
			<div class="c-f-color">
				<p>数量：</p>
			    <button type="primary" @click="decrease" :class="{red:flag,gray:!flag}">-</button >
			    <button class="num">{{count}}</button>
			    <button type="primary" @click="increment" class="red">+</button >
			</div>
			<div class="shop-cart">
				<span @click="addShop" class="s-c-add">加入购物车</span>
				<span @click="buyShop" class="s-c-buy">拼团购买</span>
			</div>
		</mt-popup>
		<div class="background"></div>
		<!--蘑菇拼团-->
		<div class="mushroom">
			<div class="collage">
				<h3>蘑菇拼团</h3>
				<p>支付商品开团，邀请好友参与，成功发货失败退款。</p>
			</div>
			<div class="enjoy-collage">
				<p class="e-c-p">以下小伙伴正在发起拼团，您可以直接参与：</p>
				<div class="e-c-page">
					<span class="e-c-img">
						<img src="../../../assets/image/0 (1).png" alt="" />
					</span>
					<span class="e-c-name">恰似***鸿</span>
					<div class="e-c-team">
						<p class="e-c-per">还差1人成团</p>
						<p class="e-c-remainder">
							剩余
							<span class="e-c-time">{{ hr }}</span>
						</p>
					</div>
					<span class="e-c-go">去参团</span>
				</div>
					<div class="e-c-page">
					<span class="e-c-img">
						<img src="../../../assets/image/0 (3).png" alt="" />
					</span>
					<span class="e-c-name">星星***草</span>
					<div class="e-c-team">
						<p class="e-c-per">还差2人成团</p>
						<p class="e-c-remainder">
							剩余
							<span class="e-c-time">{{ sec}}</span>
						</p>
					</div>
					<span class="e-c-go">去参团</span>
				</div>
			</div>
		</div>
		<div class="background"></div>
		<!--店家-->
		<div class="business">
			<div class="bus-desc">
				<div class="bus-img">
					<img src="../../../assets/image/0 (2).png" alt="" />
				</div>
				<div class="bus-name">
					<p class="bus-grass">兰思草</p>
					<p class="bus-imgs"> 
						<img src="../../../assets/image/clothdetail-3.png" alt="" />
						<img src="../../../assets/image/clothdetail-3.png" alt="" />
						<img src="../../../assets/image/clothdetail-3.png" alt="" />
					</p>
				</div>
				<div class="bus-go">
					进店
					<span class="bus-right iconfont icon-arrow-right-copy-copy"></span>
				</div>
			</div>
			<div class="bus-all">
				<div class="bus-volume">
					<p class="bus-number">14350</p>
					<p class="bus-text">总销量</p>
				</div>
				<div class="bus-collect">
					<p class="bus-number">11824</p>
					<p class="bus-text">收藏数</p>
				</div>
				<div class="bus-bewrite">
					<p class="bus-match">
						描述相符
						<span class="bus-num">4.72</span>
					</p>
					<p class="bus-quality">
						质量满意
						<span class="bus-num">4.72</span>
					</p>
				</div>
			</div>
		</div>
		<div class="background"></div>
		<div class="img-detail">
			<div class="imgText">
				<mt-navbar v-model="select">
				  	<mt-tab-item id="11">图片详情</mt-tab-item>
				  	<mt-tab-item id="22">商品参数</mt-tab-item>
				  	<mt-tab-item id="33">热卖推荐</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="desc-over">
				<div class="desc-start lineBar">
					<i class="lineBar--dot"></i>
				</div>
				<div class="desc-text">
					字母流苏慵懒风甜美小清新网红毛衣套头女韩版秋装新款针织衫上衣
				</div>
				<div class="desc-end lineBar">
					<i data-v-e74571ce="" class="lineBar--dot"></i>
				</div>
			</div>
			<mt-tab-container v-model="select">
				<mt-tab-container-item id="11">
					<div class="wear-effect">
						<p>穿着效果</p>
						<img :src="item" alt="" v-for="(item,index) in wear_effect"/>
					</div>
					<div class="wear-effect">
						<p>整体款式</p>
						<img :src="item" alt="" v-for="(item,index) in wear_effect1"/>
					</div>
					<div class="wear-effect">
						<p>细节做工</p>
						<img :src="item" alt="" v-for="(item,index) in wear_effect2"/>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="22">
					<div class="parameter">
						<table>
							<tr class="font-color">
								<td>尺码</td>
								<td>肩宽</td>
								<td>衣长</td>
								<td>胸围</td>
								<td>袖长</td>
							</tr>
							<tr>
								<td class="font-color">均码</td>
								<td>63</td>
								<td>64</td>
								<td>116</td>
								<td>47</td>
							</tr>
							<tr>
								<td class="font-color">厚薄</td>
								<td>加厚</td>
							</tr>
							<tr>
								<td class="font-color">颜色</td>
								<td colspan="3">蓝色,米白色,粉红色</td>
							</tr>
							<tr>
								<td class="font-color">尺码</td>
								<td>均码</td>
							</tr>
							<tr>
								<td class="font-color">衣长</td>
								<td colspan="3">常规款(51-65cm)</td>
							</tr>
							<tr>
								<td class="font-color">版型</td>
								<td>宽松</td>
							</tr>
							<tr>
								<td class="font-color">季节</td>
								<td>秋冬</td>
							</tr>
							<tr>
								<td class="font-color">材质</td>
								<td>针织</td>
							</tr>
							<tr>
								<td class="font-color">领型</td>
								<td>圆领</td>
							</tr>
							<tr>
								<td class="font-color">袖长</td>
								<td>长袖</td>
							</tr>
							<tr>
								<td class="font-color">风格</td>
								<td>甜美</td>
							</tr>
						</table>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="33" class="like-cloth" >
					<div class="link-single" v-for="(item,index) in cloth_list">
						<img v-lazy="item.img" alt="" />
						<div class="link-title">
							<p class="l-tit-p">{{item.title}}</p>
							<p class="l-t-fl">
								<span class="price" >￥{{item.price}}</span>
								<span class="num">{{item.sale}}</span>
								<span class="icon"></span>
							</p>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<div class="bottom-fixed">
			<div class="bottom-save">
				<div class="save">
					<span class="iconfont icon-iconfontxingxing"></span><br/>
					<span>收藏</span>
				</div>
				<div class="min-home">
					<span class="iconfont icon-wxbzhuye"></span><br/>
					<span>小店</span>
				</div>
			</div>
			<div class="bottom-button">
				<button @click="addShop" class="addShop11">加入购物车</button>
				<button @click="buyShop" class="buyShop11">拼团购买</button>
			</div>
			
		</div>
		<Top/>
	</div>
	
</template>
<style lang="less">
	@import "../../../assets/css/swiper.min.css";
	/*底部*/
	.bottom-fixed{
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		height:100/75rem;
		background: #fff;
		z-index:100;
		display: flex;
		.bottom-save{
			width:40%;
			display: flex;
			height:100/75rem;
			text-align:center;
			font-size:18px;
			.save{
				flex:1;
				
			}
			.min-home{
				flex:1;
				
			}
		}
		.bottom-button{
			width:60%;
			display:flex;
			height:100/75rem;
			button{
				flex:1;
				border:1px solid #ccc;
				font-size: 20px;
			}
			.addShop11{
				color: #FE8C8C;
	    		background: #FFC0CB;
			}
			.buyShop11{
				color: #fff;
	    		background: #FE8C8C;
			}
		}
		
	}
	
	/*热卖推荐*/
	img[lazy=loading] {
	  	width: 80/75rem;
	  	height: 600/75rem;
	  	margin: auto;
	  	background: url("../../../assets/image/lazy.gif") no-repeat fixed center;
	}
	.like-cloth{
		width:100%;
		.link-single{
			display:inline-block;
			width:30%;
			height:4rem;
			margin:0.15rem;
			box-sizing:border-box;
			background:#fff;
			img{
				width:100%;
				height:100%;
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
		}
	}
	/*商品参数*/
	.parameter{
		padding:0.23rem 0.23rem 0.3rem 0.34rem;
		table{
			width:100%;
			tr{
				height:1.5rem;
				line-height:1.5rem;
				border-bottom: 1px solid #ccc6;
				td{
					width: 20%;
					font-size:18px
				}
			}
			.font-color{
				color:#555;
			}
		}
		
	}
	/*图文详情*/
	.img-detail{
		padding:0.23rem 0.23rem 0.3rem 0.34rem;
		.desc-over{
			overflow: hidden;
		}
		.desc-start{
		    float: left;
		}
		.lineBar{
		    width: 1.8rem;
		    height: 1px;
		    background: #a3a3a5;
		    position: relative;
		}
		.desc-text{
			font-size:16px!important;
			margin:0.5rem 0;
		}
		.desc-end{
		    float: right;
		}
		.imgText{
			margin:0.4rem 0;
			.mint-tab-item-label{
				font-size: 18px;
			}
		}
	}
	.wear-effect{
		width:100%;
		p{
			font-size:20px;
		}
		img{
			width:100%;
			margin-top:0.3rem;
		}
	}
	/*第三部分优惠*/
	.sale{
		position: relative;
	    margin-left: .24rem;
	    font-size: .22rem;
	    padding: .2rem 0 .02rem;
	    border-bottom: .01rem solid #eee;
	    .sale-title{
	    	color: #999;
		    font-size: 0.4rem;
		    margin-right: .29rem;
		    white-space: nowrap;
	    }
	    .sale-box{
	    	margin-left: 1rem;
	    	margin-top: -0.5rem;
	    	position:relative;
	    	.sale-coupon{
	    		font-size: 0.42rem;
			    color: #333;
			    margin-bottom: .2rem;
			    img{
			    	margin-left: .08rem;
				    width: .28rem;
				    height: .28rem;
			    }
			    .couponAfter{
			    	i{
			    		font-size: 0.4rem;
			    		color: #ff5777;
			    	}
			    }
	    	}
	    	.get-coupon{
	    		position: absolute;
			    top: 0rem;
			    right: .32rem;
			    font-size: .4rem;
			    color: #999;
	    	}
	    	.coupon{
	    		margin-bottom: .22rem;
	    		margin-top: 0.4rem;
	    		font-size:0.35rem;
	    		.coupon-store{
	    			display: inline-block;
				    margin-right: .18rem;
				    border-radius: .17rem;
				    color: #ff5777;
				    background: #ffeef3;
				    white-space: nowrap;
				    text-align: center;
	    		}
	    		.subtraction{
	    			margin-left: 2rem;
	    			margin-top: -0.35rem;
	    			p{
    				    margin-right: .12rem;
					    border: 1px solid #ff5777;
					    color: #ff5777;
					    width:3rem;
					    vertical-align: middle;
					    position: relative;
					    padding: 0 .12rem;
					    white-space: nowrap;
					    margin-bottom:0.2rem;
	    			}
	    		}
	    	}
		}
	}
	
	
	.clothdetail{
		margin: 0 auto;
    	background-color: #fff;
    	.detail-box{
    		padding: .2rem .15rem 0;
    		.detail-header{
    			z-index: 999;
    			margin-top: 0.5rem;
    		}
	    	.mint-header{
	    		background-color: transparent;
	    	}
	    	.mint-button{
	    		font-size:30px;
	    		width:1.2rem;
	    		height:1.2rem;
	    		background:rgba(0,0,0,.4);
	    		border-radius: 50%;
	    	}
	    	.mintui{
	    		font-size:30px;
	    	}
    		.swiper-container{
    			width:100%;
    			.swiper-slide{
    				width:75%;
    				img{
    					width:100%
    				}
    			}
    		}
    	}
	}
	/*第二部分价格*/
	.clothprice{
		margin-top: .6rem;
	    line-height: .6rem;
	    padding: 0 .32rem;
	    .price-box{
	    	display: flex;
	    	flex-flow: row nowrap;
	    	align-items: center;
	    	.sale-price{
	    		color: #333;
	    		.sale-icon{
	    			font-size: .24rem;
				    display: inline-block;
				    line-height: .3rem;
	    		}
	    		.sale-num{
	    			font-size: .8rem;
	    		}
	    	}
	    	.nosale{
	    		margin-left: .25rem;
	    		.nosale-num{
	    			opacity: 0.7;
	    			display: block;
				    font-size: .3rem;
				    text-decoration: line-through;
				    color: #999;
	    		}
	    		.nosale-title{
	    			background-color: rgb(255, 232, 238);
    				color: rgb(255, 34, 85);
    				font-size: .3rem;
				    height: .4rem;
				    line-height: .4rem;
				    padding: 0 .08rem;
				    text-align: center;
				    display: block;
    				margin-right: .1rem;
	    		}
	    	}
	    	
	    }
	}
	.cloth-dec{
		text-align: left;
		display: block;
	    padding: 0 .3rem;
	    margin-top: .18rem;
	    margin-bottom: 0.2rem;
	    .dec-text{
	    	color: #424242;
		    font-size: .43rem;
		    line-height: .6rem;
	    }
	}
	.cloth-free{
	    margin-left: .32rem;
	    padding-right: .32rem;
	    line-height: .7rem;
	    padding-bottom: .15rem;
	    border-bottom: 1px solid #eee;
	    font-size: .34rem;
	    color: #999;
	    overflow: hidden;
	    .free-left{
	    	float:left;
	    }
	    .free-right{
	    	float:right;
	    }
	}
	.background{
		height: 0.3rem;
    	background-color: rgb(234, 234, 234);
	}
	/*sale模态框部分*/
	.sale-modal{
		padding: .23rem 0 1.5rem;
    	text-align: center;
		.ticket-title{
			color: #999;
		    font-size: 0.5rem;
    		margin-bottom: 0.42rem;
		    text-align: center;
		}
		.s-m-ticket{
			position: relative;
		    text-align: left;
		    margin: .38rem auto;
			background-image: url(../../../assets/clothdetail-2.png);
    		background-size: cover;
    		width: 9rem;
		    height: 2rem;
		    padding: .27rem 0 .54rem .23rem;
		    border-box:box-sizing;
		    .display{
		    	display:none;
		    }
		    .t-unit{
		    	color: #333;
			    font-size: .6rem;
			    vertical-align: .1rem;
		    }
		    .t-num{
		    	color: #333;
			    font-size: 1rem;
			    margin-right: .12rem;
			    line-height: .96rem;
		    }
		    .t-desc{
		    	color: #999;
    			font-size: .4rem;
		    }
		    .t-time{
		    	margin-top:0.15rem;
		    	color: #999;
    			font-size: .4rem;
		    }
		    .btn-text{
		    	color: #ff5777;
			    font-size: .38rem;
			    width: 1.9rem;
			    height: 1.5rem;
			    position: absolute;
			    right: 0;
			    top: 0.7rem;
		    }
		}
		
	}
	/*发货部分*/
	.deliver{
		width:90%;
		white-space: nowrap;
		padding: .23rem 0rem .5rem 0.25rem;
		.deliver-content{
			display: inline-block;
			width: 32%;
			.deliver-icon{
				display: flex;
    			width: 30%;
    			img{
    				width:.5rem;
    				height:.5rem;
    			}
			}
			.deliver-item{
				width: 70%;
				font-size: 10px;
			    color: #666;
			    display: block;
			    white-space: nowrap;
			    margin-left: .5rem;
			    margin-top: -0.5rem;
			}
		}
		.right-icon{
			display: inline-block;
			color:#999;
			font-size: 16px;
			padding-left: 0.3rem;
		}	
	}
	.deliver-popup{
			.d-p-title{
				font-size: 20px;
				color:#999;
				text-align: center;
				margin:.3rem auto;
			}
			.d-p-server{
				margin:.2rem auto;
				border-bottom: 1px solid #ccc;
				padding:.2rem .4rem ;
				.d-p-h4{
					font-size: 16px;
					margin-bottom: 0.2rem;
					color:#000;
				}
				.d-p-p{
					font-size: 12px;
					line-height: .6rem;
					color:#999;
				}
				
			}
		}
	.mint-toast.is-placemiddle{
		z-index:3000!important;
	}
	/*请选择*/
	.mint-tab-container {
	    display: initial;
	    width: 2.6rem;
	    color:#FE8C8C;
	}
	.mint-tab-container-wrap{
		display: initial;
		width: 2.6rem;
	}
	.mint-tab-container-item{
		display: initial;
		width: 2.6rem;
	}
	
	.mint-navbar .mint-tab-item{
		padding:.3rem 0;
	}
	.mint-toast.is-placetop{
		top:55%;
		z-index: 3000;
	}
	.choice{
		font-size:0.3rem;
		padding:0.23rem 0rem 0.3rem 0.34rem;
		position:relative;
		.cho-icon{
			position: absolute;
			color:#999;
			top: 0.15rem;
    		right: 0.35rem;		
		}
		.size1{
			color:#FE8C8C;
		}
		.size2{
			display: none;
		}
		
	}
	.c-f-model{
		
		padding:0.23rem 0rem 0.3rem 0.34rem;
		position:relative;
		.c-m-x{
			position:absolute;
			top: 0.4rem;
			right: 0.2rem;
		}
		.c-m-img{
			display:inline-block;
			position: relative;
		    max-height: 3rem;
		    width: 2.6rem;
		    border-radius: .04rem;
		    box-shadow: 0 0.08rem 0.16rem 0 rgba(0,0,0,.1);
		    img{
	    	    width: 100%;
			    height:4rem;
			    visibility: inherit;
			    margin-top: -3.8rem;
		    }
		}
		.c-m-desc{
			display:inline-block;
			flex: 1;
		    margin-left: .3rem;
		    margin-right: .35rem;
		    margin-bottom: .2rem;
		    flex-flow: column nowrap;
		    align-items: flex-start;
		    	.c-m-team{
		    		text-align: center;
		    		font-size: 0.3rem;
		    		display: inline-block;
		    		width:.9rem;
		    		height:.5rem;
		    		background:#FE8C8C;
		    		color:#fff;
		    	}
		    	.size1{
					color:#fff;
				}
				.size2{
					display: none;
				}
		    	.c-m-icon{
				    font-size: 0.7rem;
				    color: #333;
				    margin-top: .15rem;
				}
				.c-m-num{
					font-size: .76rem;
		    		color: #333;
				}
		    
		}
		.c-m-stock{
			font-size: .44rem;
    		color: #333;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    overflow: hidden;
		    max-width: 4.5rem;
		    margin: .2rem auto;
		}
		.c-m-color{
			margin-bottom: .2rem;
			font-size: .44rem;
    		color: #333;
    		.c-m-size{
    			/*color:#FE8C8C;*/
    			.size1{
					color:#FE8C8C;
				}
				.size2{
					display: none;
				}
    		}
    		
		}
	}
	.c-f-color{
		padding:0.23rem 0rem 0.3rem 0.34rem;
		.mint-navbar .mint-tab-item.is-selected {
		    border: 1px solid #FE8C8C;
		    color: #FE8C8C;
		}
		button{
			width: 1rem;
		    height: 1rem;
		    margin-right: -5px;
		    border:1px solid #FE8C8C;
		    background: #fff;
    	}
    	
    	.red{
    		color:#FE8C8C;
    	}
    	.gray{
    		color:#555;
    	}
		p{
			font-size:14px;
			margin-bottom: 0.2rem;
		}
		
		.selected{
			border:1px solid #FE8C8C;
			text-align: center;
			padding:0.1rem;
			width:2rem;
			color:#FE8C8C;
		}
		.uniform{
			border:1px solid #ccc;
			color:#555;;
			text-align: center;
			padding:0.1rem;
			width:2rem;
		}
	}
	.shop-cart{
		display:flex;
		margin-top:0.2rem;
		span{
			display: inline-block;
			flex:1;
			height:1.3rem;
			line-height: 1.3rem;
			text-align: center;
			font-size:14px;
		}
		.s-c-add{
			color:#FE8C8C;
			background:#FFC0CB;
		}
		.s-c-buy{
			color:#fff;
			background:#FE8C8C;
		}
	}
	/*开通白富美*/
	.open{
		padding:0.23rem 0rem 0.3rem 0.25rem;
		overflow: hidden;
		img{
			width: 0.5rem;
    		height: 0.5rem;
		}
		.open-right{
			margin-left: 1.7rem;
			color:#999;
			font-size:0.35rem;
		}
	}
	/*店家*/
	.business{
		padding:0.23rem 0.3rem 0.3rem 0.34rem;
		.bus-desc{
			height:1.5rem;
			overflow:hidden;
			box-sizing:border-box;
			.bus-img{
				float:left;
				width: 1.2rem;
			    height: 1.2rem;
			    background: #007AFF;
			    margin: 0.15rem 0.4rem;
				img{
					width:100%;
				}
			}
			.bus-name{
				float:left;
			    margin: 0.15rem 0.4rem;
			    text-align: center;
			    .bus-grass{
			    	font-size:14px;
			    }
			}
			.bus-go{
				float:right;
				width:1.5rem;
				height:0.9rem;
				border:1px solid #FE8C8C;
				text-align: center;
				line-height: 0.9rem;
				margin: 0.3rem 0.3rem;
				color:#FF5777;
				font-size: 14px;
			}
		}
		.bus-all{
			display:flex;
			margin: 0.15rem 0.4rem;
			.bus-number{
				font-size:18px;
			}
			.bus-volume{
				flex:1;
				
			}
			.bus-collect{
				flex:1;
				
			}
			.bus-bewrite{
				flex:1;
				font-size:14px;
				margin-top:0.1rem;
				span{
					color:#34b531;
				}
			}
			.line{
				
				border:1px solid #555;
			}
		}
	}
	.disColor{
		display:none;
	}
	/*蘑菇拼团*/
	.mushroom{
		padding:0.23rem 0.3rem 0.3rem 0.34rem;
		.collage{
			border-bottom:1px solid #ccc;
			h3{
				color:#FF5777;
				font-size:18px;
			}
			p{
				font-size:14px;
				margin:0.3rem 0;
			}
		}
		.enjoy-collage{
			margin:0.2rem 0;
			.e-c-p{
				font-size:14px;
				margin:0.3rem 0;
			}
			.e-c-page{
				height:1.5rem;
				background:#ffc0cb91;
				margin:0.2rem 0;
				position: relative;
				.e-c-img{
					display: inline-block;
					width:1.3rem;
					height:1.3rem;
					border-radius: 50%;
					background:#9e9e9e;
					position:absolute;
					top:0.1rem;
					left:0.4rem;
					img{
						width:100%;
					}
				}
				.e-c-name{
					position:absolute;
					top:0.4rem;
					left:2rem;
					font-size:14px;
				}
				.e-c-team{
					display: inline-block;
					position:absolute;
					left:4.2rem;
					.e-c-per{
						margin:0.2rem 0;
						color:#FF5777;
					}
				}	
				.e-c-go{
					display:inline-block;
					width:1.8rem;
					height:1.5rem;
					background:#FF5777;
					position:absolute;
					top:0rem;
					right:0;
					text-align: center;
					line-height: 1.5rem;
					font-size: 16px;
					color:#fff;
				}
			}
		}
	}
</style>
<script>
	//引入swiper
	import "@/assets/lib/swiper"
	//引入mint-ui
	import { Header } from 'mint-ui';
	import { Popup } from 'mint-ui';
	import { Picker } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Lazyload } from 'mint-ui';
	import Top from "@/components/Top";
	
	export default{
		components:{
		  	Top,
		},
		created:function () {
            this.$emit('public_footer',false);
       },
		data(){
			return {
				selected:"1",
				select:"11",
				count:1,
				flag:true,
				flag1:false,
				flag2:true,
				flag4:false,
				wear_effect:[],
				wear_effect1:[],
				wear_effect2:[],
				clothdetail:[],
				cloth_list:[],
				tickets:[
					{num:5,price:99,flag3:true,},
					{num:8,price:159,flag3:true,},
					{num:10,price:239,flag3:true,},
				],
                popupVisible: false,
				popupServer: false,
				popupClothes:false,
				endTime:"2018-11-16 18:30:00" ,
				hr: 0, 
				endTime1:"2018-11-15 12:00:00" ,
				sec: 0
			}
		},
		methods: {
			clickUniform(){
				if(this.flag){
					this.flag=false;
					this.flag1=true;
				}else{
					this.flag=true;
					this.flag1=false;
				}
			},
            ShouPup() {
                this.popupVisible = true
            },
			ShouServer(){
				this.popupServer = true
			},
           	showMsg:function(index){
				Toast({
				  message: '领取成功',
				  position: 'middle',
				  duration: 2000
				});
				for(var i=0;i<this.tickets.length;i++){
					this.tickets[index].flag3 =false;
				}
				
			},
			showColor(){
				this.flag4 =false;
			},
			ShouClothes:function(){
				this.popupClothes = true
			},
			clickX:function(){
				this.popupClothes = false;
			},
			// 增加
		    increment () {
		      this.count ++;
		    },
		    // 减少
		    decrease () {
		      this.count --;
		      if(this.count<=1){
		      	this.count =1;
			    Toast({
				  	message: '很抱歉，该商品至少购买1份',
				  	position: 'top',
				  	duration: 2000
				});
		      }
			},	
			addShop(){
				if(this.flag){
					Toast({
					  	message: '加入购物车成功',
					  	position: 'top',
					  	duration: 2000
					});
				}else{
					Toast({
					  	message: '请选择尺码',
					  	position: 'top',
					  	duration: 2000
					});
				}
			},
			buyShop(){
				if(this.flag){
					this.$router.push("/confirmOrder")
				}else{
					Toast({
					  	message: '请选择商品',
					  	position: 'top',
					  	duration: 2000
					});
				}
				
			},
		 	countdown: function (endTime) {
		      	const end = Date.parse(new Date(endTime))
		      	const now = Date.parse(new Date())
		      	const msec = end - now
		      	let day = parseInt(msec / 1000 / 60 / 60 / 24)
		      	let hr = parseInt(msec / 1000 / 60 / 60 % 24)
		      	let min = parseInt(msec / 1000 / 60 % 60)
		      	let sec = parseInt(msec / 1000 % 60)
		      	hr = hr > 9 ? hr : '0' + hr
		      	min = min > 9 ? min : '0' + min
		      	sec = sec > 9 ? sec : '0' + sec
		      	if(day<=0 && hr<="00" && min<="00" && sec<="00"){
		      		return "活动结束"
		      	}
		      	return day+":"+hr+":"+min+":"+sec
		    }
		},
		mounted(){
			const that = this
	      	setInterval(function () {
	        	that.hr=that.countdown(that.endTime)
	      	}, 1000)
			setInterval(function () {
	        	that.sec=that.countdown(that.endTime1)
	      	}, 1000)
			var swiper = new Swiper('.swiper-container', {
		        slidesPerView: 1.5,
		        paginationClickable: true,
		        spaceBetween: 20,
		        freeMode: true,
		        observer:true,//修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,//修改swiper的父元素时，自动初始化swiper
    		});
		    this.axios.get("/api/clothdetail").then((res)=>{
				this.clothdetail = res.data.dataInfo.result.topImages;
				//console.log(res.data.dataInfo.result)
			});	
			this.axios.get("/api/wear_effect").then((res)=>{
				this.wear_effect = res.data.data[0].list;
				this.wear_effect1 = res.data.data[1].list;
				this.wear_effect2 = res.data.data[2].list;
			});	
			this.axios.get("/api/shoplist").then((res)=>{
				this.cloth_list = res.data.data.result.wall.docs;
			});
			
		}
	}
</script>

