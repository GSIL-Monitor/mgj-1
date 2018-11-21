<!-- 注册页页 -->
<template>
	<div>
		<Going gooren="免密注册" myurl="/login" :flag=false >
			<div slot="form">
				<form action="" class="login_form">
					<p><input v-model='name' type="text" placeholder="请输入手机号码"></p>
					<p><input v-model='password' type="text" placeholder="请输入密码"></p>
					<p class="goning_go">
						<span @click="logins">注册</span>
					</p>
				</form>
			</div>
		</Going>
	</div>
</template>
<script>
	import Going from "@/components/Going"
	export default{
		data(){
			return {
				name:"",
				password:"",
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
		    logins:function () {
		
		    	console.log(this.name,this.password)
			      this.axios.get('/api/userinfo',{params:{user:this.name,pwd:this.password}}).then((res)=>{
			      		console.log(res.data)
			      });
		    },
		    go_enroll(){
		    	this.$router.push("/enroll")
		    }
		 }

	}
	
</script>

<style lang="less">
	
</style>