<!-- 注册页页 -->
<template>
	<div>
		<Going gooren="注册" myurl="/login" :flag=true >
			<div slot="form">
				<form action="" class="login_form">
					<p><input v-model='name' type="text" @click="emptys1()" placeholder="请输入手机号码"></p>
					<p class="pasds" ><input v-model='password' :type="passhow" @click="emptys2()" placeholder="密码由数字英文组成6-18位"><i v-show="eye" @click="eyes()" class="iconfont">&#xe602;</i><i v-show="!eye" @click="eyes()" class="iconfont">&#xe635;</i></p>
					<p class="goning_go" @click="logins">
						<span>注册</span>
					</p>
				</form>
			</div>
		</Going>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	import Going from "@/components/Going"
	export default{
		data(){
			return {
				name:"",
				password:"",
				eye:true,
				passhow:"password"
			}
		},
		components:{
			Going
		},
		created:function () {
            this.$emit('public_footer',false);
        }
		,
		 methods:{

		 	// 注册验证
		    logins:function () {
		    	var vm = this
		    	// 验证手机
		    	var namereq = /^1[0-9]{10}$/
		    	// 验证密码
		    	var passwordreq = /^[a-zA-Z0-9]{6,18}/
		    	if(!namereq.test(this.name)){
		    		this.name = "请输入正确的手机号码"
		    	}else if(!passwordreq.test(this.password)){
		    		this.password = "密码格式不正确"
		    	}else{
		    		setTimeout(function(){
		    			MessageBox.prompt('请输入验证码').then(({ value, action }) => {
		    					vm.$router.push("/login")	
						});
		    			
		    		},1000)
		    	}
		    },
		    // 验证未通过输入清空
		    emptys1(){
		    	if(this.name == "请输入正确的手机号码"){
		    		this.name = ""
		    	}
		    },
		    emptys2(){
		    	if(this.password == "密码格式不正确"){
		    		this.password = ""
		    	}
		    },
			// 眼睛
			eyes(){
				this.eye = !this.eye
				if(this.passhow == "password"){
					this.passhow = "text"
				}else{
					this.passhow = "password"
					}
				
			}
		 }

	}
	
</script>

<style lang="less">
	.pasds{
		position: relative;
		.iconfont{
			font-size:18px !important;
			position: absolute;
			right: 0;
			top: 5px;
		}
	}
</style>