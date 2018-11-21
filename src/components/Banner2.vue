<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>


<style>
	@import "../assets/swiper/css/swiper.css";
	
</style>
<script>
	import "../assets/swiper/js/swiper.js"
	export default{
	
		mounted(){
			var swiper = new Swiper('.swiper-container', {
		        paginationType: 'fraction',
		        pagination: '.swiper-pagination'
		    });
		}
	}
</script>

