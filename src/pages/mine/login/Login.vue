<!-- 登录页 -->
<template>
	<div >
		<Going  gooren="登录" myurl="/mine">
			<div slot="form">
				<form action="" class="login_form">
					<p><input v-model='name' type="text" placeholder="请输入账号、123456"></p>
					<p><input v-model='password' type="text" placeholder="请输入密码、123456"></p>
					<p class="goning_go" @click="logins">
						<span>登录</span>
					</p>
					<div v-show="flag" class="go_test">
						<p>把所有的文字点正</p>
						<span v-for="item in nums" :id="item.name" @click="rotate($event)">{{item.info}}</span>
					</div>
					<div class="go_password">
						<span>忘记密码？</span>
						<span @click="go_enroll">立即注册</span>
					</div>
				</form>
			</div>
		</Going>
		
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	import Going from "@/components/Going";
	export default{
		data(){
			return {
				name:"",
				password:"",
				// 初始化的节点旋转度数
				nums:[
				{name:"rotate1",rotate:90,info:"天"},
				{name:"rotate2",rotate:180,info:"下"},
				{name:"rotate3",rotate:-180,info:"无"},
				{name:"rotate4",rotate:-90,info:"敌"},
				],
				flag:false,
				// 验证是不是第一次点登录成功
				goflag:true,
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
		 	// 登录
		    logins:function () {
				var vm = this	
		        this.axios.get('/api/userinfo',{params:{user:this.name,pwd:this.password}}).then((res)=>{
		      		if(res.data.info == "没有该账号"){
		      			setTimeout(function(){
		      				MessageBox.confirm('没有该账号是否注册').then(action => {
		 						vm.$router.push("/enroll")
							},rej => {
								return
							});
		      			},1000)
		      			
		      			console.log(res)
		      		}else{
		      			if(this.goflag){
		      				this.show_span()
			      			this.goflag = false
		      			}
	      				var endspan1 = parseInt(document.getElementById("rotate1").getAttribute("end-rotate"))
		      			var endspan2 = parseInt(document.getElementById("rotate2").getAttribute("end-rotate"))
		      			var endspan3 = parseInt(document.getElementById("rotate3").getAttribute("end-rotate"))
		      			var endspan4 = parseInt(document.getElementById("rotate4").getAttribute("end-rotate"))
		      			if (((endspan1)/360)%1 == 0 && ((endspan2)/360)%1 == 0&& ((endspan3)/360)%1 == 0&& ((endspan4)/360)%1 == 0){
		 					MessageBox.alert('验证通过').then(action => {
								setTimeout(function(){
			      					vm.$router.push("/mine")
				      			},1000)
							});
		 				}
		      			
		      			

		      		}
			    });
		    },
		    go_enroll(){
		    	this.$router.push("/enroll")
		    },
		    // 每个元素旋转
		    rotate(event){
		    	var el = event.currentTarget;
		    	// 获取当前旋转度
		    	var req = /[\-0-9]+/g
				var is_rotate = parseInt(el.style.transform.match(req)[0])
		    	is_rotate+=90
		    	el.style.transform = "rotate("+is_rotate+"deg)";
		    	el.setAttribute("end-rotate",is_rotate)	
		    },
		    // 创建验证节点
		    show_span(){
		    	// 出现下面的节点
				this.flag = true
				// 初始化节点旋转度数
		      	var span1 = document.getElementById("rotate1")
		      	var span2 = document.getElementById("rotate2")
		      	var span3 = document.getElementById("rotate3")
		      	var span4 = document.getElementById("rotate4")
	      		span1.style.transform = "rotate("+this.nums[0].rotate+"deg)"
	      		span2.style.transform = "rotate("+this.nums[1].rotate+"deg)"
	      		span3.style.transform = "rotate("+this.nums[2].rotate+"deg)"
	      		span4.style.transform = "rotate("+this.nums[3].rotate+"deg)"
	      		console.log(span1)
		    }

		 }

	}
	
</script>

<style lang="less">
@import "http://at.alicdn.com/t/font_887746_dn6hvae7xes.css";
.go_test{
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 120/75rem;
	line-height: 100/75rem;
	/*background: red;*/
	&>span{
		width: 100/75rem;
		
		animation: all 1s;
	};	
}


</style>