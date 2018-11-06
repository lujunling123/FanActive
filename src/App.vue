<template>
	<div>
		<Header v-if="!isShow.issj" :isShow='isShow' :headerActive="headerActive"></Header>
		<banner></banner>
  	<!--<huadong></huadong>-->
		<div id="app">
			<router-view/>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/components/Header.vue'
	import banner from '@/components/components/banner.vue'
	import huadong from '@/components/components/huadong.vue' //我的余额
	export default {
		name: 'App',
		components: {
			banner,
			Header,
			huadong
		},
		data() {
			return {
				headerActive: 'lifeActive',
				isShow: {
					issj: true
				}
			}
		},
		mounted() {
			this.setWith()
			this.isSj()
			var selt = this;
			window.onresize = function() {
				selt.setWith()
			}
		},
		methods: {
			setWith() {
				if(document.body.scrollWidth > 1200) {
					document.getElementById('app').style.maxWidth = '40%';
					document.getElementById('app').style.margin = '0 auto';
					var aa = 100 * (document.body.scrollWidth / 100 * parseInt(document.getElementById('app').style.maxWidth) / 750) + 'px'
				} else {
					var aa = 100 * (document.body.scrollWidth / 750) + 'px'
				}
				document.getElementsByTagName('html')[0].style.fontSize = aa;
			},
			isSj() {
				if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {

					this.isShow.issj = true
				} else {
					this.isShow.issj = false
				}

			}
		}
	}
</script>

<style>


	.pc_banner {
		display: none;
		width: 100%;
	}

	.app_banner {
		display: block;
	}

	@media only screen and (min-width: 1201px) {
		.pc_banner {
			display: block;
		}
		#app {
			background: none;
		}
		.app_banner {
			display: none;
		}
	}
</style>
