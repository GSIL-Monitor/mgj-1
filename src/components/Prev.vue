<template>
	<div>
		<div class="prev" @click="liveclick" ><i class="mintui mintui-back"></i></div>

	</div>

</template>

<script>
export default{

  methods:{
    liveclicks(){
      this.$router.push("/index")
    }
  }

}


</script>

<style lang="less">
.prev{
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 999;
	font-size: 18*2/75rem;
	marquee{
	}
	.mintui{

		background: rgba(77,127,241,.8);
		border-radius:20*2/75rem ;
		padding: 10/75rem;
		font-size: 30*2/75rem;
	}
}
.prev{
	z-index: 99999;
	width: 40*2/75rem;
	left: 10px;
	top: 10px;
}


</style>
