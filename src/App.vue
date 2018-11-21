<template>
  <div id="app">
    <router-view v-on:public_footer="public_footer" />
    <Tabbar v-if="footer_show" />
  </div>

</template>

<script>

	//引入Tabbar.vue
  import Tabbar from "@/components/Tabbar"
  // 引入header.vue
	import Header from "@/components/Header"

export default {
  components:{
  	Tabbar
  },
  data(){
    return {
      footer_show:true,
    }
  },
 	mounted(){
 		this.$router.push("/")
   

 	},
  methods:{
 //是否显示底部
      public_footer:function (bool) {
          this.footer_show = bool;
      }
  },
}
</script>

<style>
@import "assets/css/reset.css";

*{
	padding:0;
	margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
