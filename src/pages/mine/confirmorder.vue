<template>
	<div class="confir">
		<!--通用头部-->
		<div class="navbar">
			<Headers class="storelist">
				<span slot="classify"><router-link to="/store" class="iconfont icon-xiangzuojiantou"></router-link></span>
				<span class="title" slot="content"><span></span>确认订单</span>
				<span slot="rightIcon"><i class="iconfont icon-gouwuche1"></i></span>
			</Headers>
		</div>
		<!--确认订单导航-->
		<div class="nav" @click="address()" >

			<span class="location"><i class="iconfont icon-dingweidizhigpsditu fl"></i>
				
			</span>
			<span v-show="!flag" class="add_height"><strong>{{addcontent}}</strong></span>

			<span v-show="flag" class="add_height">
				<span>收货人：{{addcontent.name}}&nbsp;</span><br />
			<span>收货地址：{{addcontent.add}}</span>
			</span>

			<span class="fr add_right"><i class="iconfont icon-arrow-right-copy-copy"></i></span>
		</div>
		<mt-popup class="address" style="width:100% " v-model="gians" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
			<div v-show="!add">
				<img src="../../assets/image/address.png" alt="" class="address_img" />
				<p style="text-align:center">您还没有收货地址哦~</p>
			</div>
			<ul  class="list_cons" v-show="add">
				<div class="list_select" v-for="(item,index) in contect">
					<li>
						<p>
							<span>名字：{{item.name}}</span>
							<span>手机号码：{{item.iphone}}</span>
						</p>
						<p>详细地址：{{item.add}}</p>
					</li>
					<li class="list_default">
						<p class="fl" @click="adddefault(index)">设为默认</p>
						<p class="fr">
							<span>编辑</span>
							<span @click="cut(index)">删除</span>
						</p>
					</li>
				</div>
			</ul>

			<p class="new_address" @click="new_address()">&plus;&nbsp;新增地址</p>
		</mt-popup>
		<mt-popup style="width:100%" v-model="newly" popup-transition="popup-fade" closeOnClickModal="true" position="left">
			<div class="add_address">
				<ul>
					<label class="add_container">
							<p class="fl add_title" >收货人</p>							
							<input type="text" v-model="text1"/>
						</label>
					<label class="add_container">
							<p class="fl add_title" >手机号</p>							
							<input type="text" v-model="text2"  @click="emptys1()" placeholder="输入手机号"  />
						</label>
					<label class="add_container"  >
							<p class="fl add_title">省份</p>
							 <mt-picker :slots="slots"   @change="onValuesChange1" :visible-item-count="1"></mt-picker>
						</label>
					<label class="add_container">
							<p class="fl add_title" >城市</p>
							<mt-picker :slots="slot1"  @change="onValuesChange2" class="add_city" :visible-item-count="1"></mt-picker>
						</label>
					<label class="add_container ">
							<p class="fl add_title">详细地址</p>
							<input type="text" v-model="text5"/>
						</label>
					<label class="add_container">
							<p class="fl add_title">邮编</p>
							<input type="text" @click="emptys2()" name="number" v-model="text6" placeholder="请输入正确的邮政编码"  />
						</label>
				</ul>
				<div class="button-wrapper">
					
					<mu-button @click="delet">取消</mu-button>
					<mu-button  class="error" @click="add_contact()">确认</mu-button>
				</div>
			</div>
		</mt-popup>

		<!--订单商品栏-->
		<div class="order">
			<div class="goods">
				<span>{{goods}}</span>
				<span class="fr "><i class="iconfont icon-dkw_xiaoxi"></i>&nbsp;联系商家</span>
			</div>
			<ul class="goods_container">
				<li class="fl">
					<img :src="src.imgUrl" alt="" class="goods_img" />
				</li>
				<li class="goods_title fl">
					<span>{{src.title}}</span>
					<p>
						<span>{{goods_info.attributeKey}}:{{goods_info.attributeValue}}</span>;&nbsp;&nbsp;
						<span>{{goods_size.attributeKey}}:{{goods_size.attributeValue}}</span>;
					</p>
				</li>
				<li class="fl">
					<span class="goods_price">￥{{goods_price|new_pic}}</span><br />
					<span>￥{{goods_newPrice|new_pic}}</span><br />
					<button type="primary" @click="decrease" class="btn">-</button >
				    <button class="btn">{{count}}</button>
					<button type="primary" @click="increment" class="btn">+</button >
				</li>
			</ul>
		</div>
		<!--退运部分-->
		<div class="refund">
			<ul>
				<li>
					<span>退货运费补贴：</span>
					<span class="fr">商家赠送</span>
				</li>
				<li>
					<span>延误必赔</span>
					<span class="fr" @click="send">商家赠送
						<i class="iconfont icon-arrow-right-copy-copy"></i>
					</span>
					<mt-popup style="width:100%" v-model="delay" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
						<div class="delay">
							<p>快递延误补贴
								<i class="fr" @click="array()">&times;</i>
							</p>
							<p>收货延迟赔付：</p>
							<p>快递延误可领取5元全场优惠券补贴</p>
						</div>
					</mt-popup>

				</li>
				<li>
					<span>店铺合计：</span>
					<span class="fr" >￥{{count*goods_newPrice | new_pic}}</span>
				</li>
				<li>
					<input type="text" placeholder="有什么想对商家说的请在这里留言哦！" />

				</li>
			</ul>
		</div>
		<!--底部-->
		<footer>
			<div class="footer">
				<span>总计:￥{{count*goods_newPrice | new_pic}}</span>
				<span class="fr">共{{count}}件商品			
				 <mu-button color="error">提交订单</mu-button>
				</span>
			</div>
		</footer>
	</div>
</template>

<script>
	//引用头部	
	import Headers from "@/components/Header";
	const address = {
    '北京': ['北京'],
    '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
    '上海': ['上海'],
    '天津': ['天津'],
    '重庆': ['重庆'],
    '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
    '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
    '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
    '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
    '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
    '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
    '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
    '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
    '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
    '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
    '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
    '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
    '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
    '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
    '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
    '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
    '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
    '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
    '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
    '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
    '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
    '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
    '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
    '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
    '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
    '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
    '香港': ['香港'],
    '澳门': ['澳门'],
    '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
  };
  
	export default {
		components: {
			Headers,			
		},
		data() {
			return {				 
				goods: "",
				src: "",
				goods_info: "",
				goods_size: "",
				goods_price: "",
				addcontent:"请填写收货地址",
				goods_newPrice: "",
				delay: false,
				gians: false,
				newly:false,
				count:1,
				key:"",
				text1:"",
				text2:"",
				provice:"北京",
				city:"北京",
				text5:"",
				add:true,
				text6:"",
				item:[],
				flag:false,
				contect:[{name:"大l",iphone:1234567,add:666}],
				addname:"北京",
				slots:
				[
			    {		          
		          values: [],
		        
		          textAlign:"center",
		        }
			  ],
       			slot1:[{values: []}],
  	}
  },
			

		filters:{
			new_pic(pic){
				var end_pics = String(pic).slice(-2)
				var head_pics = String(pic).slice(0,-2)
				return head_pics+"."+end_pics
			}
		},
		mounted() {
			var vm = this
			this.axios.get("/api/order").then((res) => {
				//				console.log(res.data.dataInfo.skuGroupList[0].skuPrice)
				this.goods = res.data.dataInfo.shopName;
				this.src = res.data.dataInfo.skuGroupList[0];
				this.goods_info = res.data.dataInfo.skuGroupList[0].skuAttrList[0];
				this.goods_size = res.data.dataInfo.skuGroupList[0].skuAttrList[1];
				this.goods_price = res.data.dataInfo.skuGroupList[0].skuPrice
				this.goods_newPrice = res.data.dataInfo.totalPrice
				//					console.log(String(res.data.dataInfo.totalPrice).slice(0,2)+"."+String(res.data.dataInfo.totalPrice).slice(2))
			
			})
			for(let i in address){
				this.key = i;
				this.item.push(address[i])				
				vm.slots[0].values.push(this.key)
			}
			
		},
		methods: {
			onValuesChange1(a,b){			
				this.slot1[0].values=address[b[0]]
				this.provice=b[0]
			},
			onValuesChange2(a,b){				
			this.city=b[0]
				console.log(b)
			},
			
			send() {            
				this.delay = true         
			},
			array() { 
				this.delay = false
			},
			address() {
				this.gians = true
			},
			new_address(){
				this.newly = true
			},
			delet(){
				this.newly=false
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
		      }
			},	
			onAddressChange(picker, values) {
	        picker.setSlotValues(1, address[values[0]]);
	        this.addressProvince = values[0];
	        this.addressCity = values[1];	 
	        console.log(setSlotValues)
			},
			add_contact(){
				console.log(555)
				var newinfo = {
					name:this.text1,
					iphone:this.text2,
					add:this.provice+","+this.city+","+this.text5					
				}
				//手机验证
				var iphonenub=/^1[0-9]{10}$/
				//验证邮编
				var titlenub=/\d{6}/
				if(!iphonenub.test(this.text2)){
					this.name="请输入正确的电话号码"
				}else if(!titlenub.test(this.text6)){
					this.text6="请输入正确的邮政编码"
				}else{
					console.log(666,this.contect)

					this.contect.push(newinfo)
					this.text1="";
					this.text2="";
					this.slots=[{values: ["北京"]}]
					this.slot1=[{values: ["北京"]}]
					this.text5="";
					this.text6="";
					this.newly=false
				}
//				console.log(this.provice+this.city+this.text5)
				
			},
			// 验证未通过输入清空
		    emptys1(){
		    	if(this.name == "请输入正确的手机号码"){
		    		this.name = ""
		    	}
		    },
		    emptys2(){
		    	if(this.password == "请输入正确的邮政编码"){
		    		this.password = ""
		    	}
		    },
		    cut(index){
		    	this.contect.splice(index,1)
		    },
		    adddefault(index){
		    	this.flag = true
		    	
		    	this.addcontent = this.contect[0]
		    }
		 }
//		}
	}
</script>

<style scoped lang="less">
	/*通用样式*/
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	@import "http://at.alicdn.com/t/font_811359_1xe00fmcekd.css";
	.confir {
		background: #ccc;
	}
	/*头部样式*/
	
	.navbar {
		margin-top: 7/75rem;
		position: fixed;
		width: 100%;
		z-index: 999;
		background: red;
		border-bottom: 2px solid #ccc;
	}
	
	.storelist {
		border-bottom: 1/75rem solid #CCCCCC;
		h3 {
			padding-left: 200/75rem;
			font-weight: bold;
			font-size: 118%;
		}
	}
	/*确认订单导航*/	
	.nav {
		font-size:15px;
		background: #FFFFFF;
		margin-top: 100/75rem;
		position: relative;
		height: 150/75rem;
		/*line-height: 150/75rem;*/
		border-bottom: 2/775rem solid #ccc;
		padding: 0 20/75rem;
		overflow:hidden;
		.location{
			display: block;			
			padding-top:40/75rem;
		}
		.add_right{
			position:absolute;
			top: 22px;
    		left: 383px;
		}
		
	}
	.add_height{
			/*display:inline-block;*/
			height: 150/75rem;
			/*width:50%;*/
			background:yellow;
		}
	.address {
		height: 800/75rem;
		.address_img {
			width: 100%;
		}
		.new_address{
			background: #FFFFFF;
			position:fixed;
			top:0;
			/*left:200/75rem;*/
			width:100%;
			margin-top:700/75rem;
			height:50/75rem;
			text-align:center;
			line-height:100/75rem;
			color:#ff0099;
			font-size:40/75rem;
			font-weight:bold;
			border-top:2/75rem solid #ccc;		
		}
		.list_cons{
			list-style: none;
		    position: absolute;
		    top: 0;
		    bottom: 300/75rem;
		    left: 0;
		    right: 0;
		    height: 700/75rem;
    		overflow: auto;
		}
		.list_select{
			li{
				padding:20/75rem 20/75rem 50/75rem;
			}
			    border: 2px solid #f35779;
    			position: relative;
    			margin: 50/75rem 30/75rem;
			    background-color: #fff;
			    border: 1px solid #ff06cc;
			    border-radius: 4px;
			    /*padding:20/75rem 20/75rem 50/75rem;*/
			   .list_default{
			   	border-top:2/75rem solid #CCCCCC;
			   }
		}
	}
	.add_address{
			padding:0 30/75rem;
			height:500px;
			background:#fffff;			
			input[type="text"]{
				outline:none;
				width:80%;
				border:none;
				text-indent:30/75rem;
			}
		}
		.add_container{
				display: flex;
			    font-size: 1em;
			    color: #5e5e5e;
			    line-height: 1.5;
			    border-bottom: 1px solid #eee;
			    background-color: #fff;
			    position: relative;
			    .add_title{
			    	width: 150/75rem;
    				text-align: center;
    				flex-shrink: 0;
				    padding: 20/75rem;
				    line-height: 1;
				    position: relative;
				    border-right:2/75rem solid #eee;
			    }
			    /*.add_provice{
			    	height:1rem;
			    	
			    }
			    .add_city{
			    	text-align: left;
			    	height:1rem;
			    }*/
			}
			.button-wrapper{
				width:100%;
				text-align: center;
				margin-top:50/75rem;
				
			}
	/*订单商品栏*/
	
	.order {
		background: #FFFFFF;
		margin-top: 20/75rem;
		padding: 0 20/75rem;
		height: 350/75rem;
		border-top: 1/775rem solid #f1eded;
		box-sizing: border-box;
		.goods {
			height: 100/75rem;
			line-height: 100/75rem;
			border-bottom: 1/775rem solid #f1eded;
			.icon-dkw_xiaoxi {
				color: red;
			}
		}
		.goods_container {
			height: 100px;
			width: 100%;
			margin-top: 20/75rem;
			.goods_img {
				height: 150/75rem;
			}
			.goods_title {
				margin-left: 30/75rem;
				width: 400/75rem;
			}
			.goods_price {
				text-decoration: line-through;
			}
			.goods_num {
				outline: none;
				border-top: 1/75rem solid #ccc;
				width: 50/75rem;
			}
		}
	}
	.btn{
			width: 44/75rem;
		    height: 50/75rem;
		    margin-right: -5px;
		    border:1px solid #FE8C8C;
		    background: #fff;
    	}
	
	/*退运部分*/
	
	.refund {
		height: 400/75rem;
		background: #FFFFFF;
		li {
			height: 100/75rem;
			line-height: 100/75rem;
			/*margin-top:5/75rem;*/
			border-bottom: 2/75rem solid #ccc;
			border-top: 2/75rem solid #ccc;
			padding: 0 30/75rem;
			input[type="text"] {
				background: #f7f7f7;
				outline: none;
				width: 100%;
				border-radius: 10/75rem;
				height: 80/75rem;
				padding: 0;
				border: 2/75rem solid #ccc;
			}
			.delay {
				padding: 0 30/75rem;
				p:first-child {
					text-align: center;
					font-size: 40/75rem;
					color: #000000;
					border-bottom: 2/75rem solid #ccc;
				}
			}
		}
	}
	/*底部*/
	
	.footer {
		line-height: 100/75rem;
		background: #FFFFFF;
		height: 100/75rem;
		margin-top: 100/75rem;
		padding: 0 30/75rem;
	}
</style>