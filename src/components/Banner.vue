<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<slot name="swi-con"></slot>
			</div>
			<div :style="{'text-align':paginationPosition}" :class="{'swiper-pagination':paginationShow}" class="pagin"></div>
		</div>
	</div>
</template>


<style>
	@import "../assets/swiper/css/swiper.css";
	.banner{
		position:relative;
	}
	.swiper-pagination-bullet{
		background:#fff!important;
		opacity:1!important;
	}
	.swiper-pagination-bullet-active{
		background:red!important;
	}
	.pagin{
		position:absolute;
		bottom:0px!important;
	}
</style>
<script>
	import "../assets/swiper/js/swiper.js"
	export default{
		props:{
			loop:{
				type:Boolean,
				default:true
			},
			autoplay:{
				type:Number,
				default:3000
			},
			effect:{
				type:String,
				default:"slide"
			},
			paginationType:{
				type:String,
				default:"bullets"
			},
			paginationPosition:{
				type:String,
				default:"left"
			},
			paginationShow:{
				type:Boolean,
				default:false
			}
		},
		mounted(){
			new Swiper(".swiper-container",{
				pagination:".swiper-pagination",
				loop:this.loop,
				autoplay:this.autoplay,
				paginationType:this.paginationType,
				effect:this.effect,
				autoplayDisableOnInteraction:false
			});
		}
	}
</script>

