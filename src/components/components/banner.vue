<template>
	<div class="ban">
		<img src="../../assets/images/backfanbei.png" class="app_banner" />
		<img src="../../assets/images/pc_banner.jpg" class="pc_banner" />
	</div>
</template>
<script>
	export default {
		props: {},
		data() {
			return {}
		},
		methods: {}

	}
</script>

<style scoped>
	.pc_banner {
		display: none;
		width: 100%;
	}

	.app_banner {
		display: block;
		width: 100%;
	}

	@media only screen and (min-width: 1201px) {
		.pc_banner {
			display: block;
		}
		.app_banner {
			display: none;
		}
	}
</style>
