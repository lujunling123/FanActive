<template>
	<div class="header">
		<div class="header-menu">
			<div class="header-menu-content" v-if="isLogin == false">
				<a :href="webUrl + '/mobile/appDownload.html'" class="menuBtn">APP下载</a>
				<a :href="webUrl + '/user/register.html'" class="menuBtn">注册</a>
				<a :href="webUrl + '/user/login.html'" class="menuBtn">登录</a>
			</div>
			<div class="header-menu-content" v-if="isLogin != false">
				<a :href="webUrl + '/mobile/appDownload.html'" class="menuBtn">APP下载</a>
				<a :href="webUrl + '/user/logout.html'" class="menuBtn">安全退出</a>
			</div>
		</div>

		<div class="header-nav">
			<div class="header-nav-content">
				<div class="nav-logo">
					<a :href="webUrl" class="jkc-logo" title="甲壳虫金融"></a>
				</div>
				<div class="nav-item">
					<ul>
						<li>
							<a :href="webUrl" class="nav-top">首页<i></i></a>
						</li>
						<li class="nav-slider">
							<a :href="webUrl + '/index.html'" class="nav-top">理财服务<i></i></a>
							<div class="drop-down-menu">
								<a :href="webUrl + '/borrowBespeak/bespeak.html'">我要借款</a>
								<a :href="webUrl + '/invest/index.html'">我要出借</a>
								<a :href="webUrl + '/bond/index.html'">我要转让</a>
							</div>
						</li>
						<li class="nav-slider">

							<a :href="webUrl + '/html-modules/lclife/index.html#/financial/life'" class="nav-top" :class="{active: headerActive == 'lifeActive'}">理财生活<i></i></a>

							<div class="drop-down-menu">
								<a :href="webUrl + '/html-modules/lclife/index.html#/indiana'">彩虹币夺宝</a>
								<a :href="webUrl + '/html-modules/lclife/index.html#/exchange'">彩虹币兑换</a>
								<a :href="webUrl + '/member/score/mall/tenderLottery.html'">幸运转盘</a>
								<a :href="webUrl + '/html/xchy/index.html'">星虫互娱</a>
							</div>
						</li>
						<li class="nav-slider">
							<a :href="webUrl + '/member/main.html'" class="nav-top">个人中心<i></i></a>
							<div class="drop-down-menu">
								<a :href="webUrl + '/member/main.html'" title="出借账户">出借账户</a>
								<a :href="webUrl + '/member/main.html?borrow=1'" title="借款账户">借款账户</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		name: 'Header',
		props: {
			headerActive: String,
			isShow: {}
		},
		data() {
			return {
				webUrl: '',
				isLogin: false
			}
		},
		mounted() {
			this.getWebUrl()
			if(!this.isShow.issj)
				this.getIsLogin()
		},
		methods: {
			getWebUrl() {
				this.webUrl = window.location.origin;
			},
			getIsLogin() {

				this.request("/indiana/rainbowCoins.html", {}, (res) => {
					if(res.rainbowCoins !== "false") {
						this.isLogin = true
					} else {
						this.isLogin = false
					}
				})

			}
		}
	}
</script>
<style scoped>
	.header {
		width: 100%;
		min-width: 1200px;
		position: relative;
		top: 0px;
		left: 0px;
		z-index: 99;
	}
	
	.header .header-menu {
		width: 100%;
		height: 34px;
		background: #3A405A;
	}
	
	.header .header-menu .header-menu-content {
		width: 1200px;
		height: 34px;
		overflow: hidden;
		margin: 0px auto;
		text-align: right;
	}
	
	.header .header-menu .header-menu-content .menuBtn {
		display: block;
		font-size: 12px;
		line-height: 34px;
		color: #fff;
		font-family: PingFangSC, "微软雅黑 Light";
		margin-left: 56px;
		float: right;
	}
	
	.header .header-menu .header-menu-content .menuBtn:hover {
		color: #ff7142;
		transition: color .2s ease-in;
	}
	
	.header .header-nav {
		width: 100%;
		height: 80px;
		background: #fff;
		position: relative;
		z-index: 2;
	}
	
	.header .header-nav .header-nav-content {
		width: 1200px;
		height: 80px;
		margin: 0px auto;
	}
	
	.header-nav-content .nav-logo {
		float: left;
		width: 163px;
		height: 38px;
		padding: 21px 0px;
	}
	
	.header-nav-content .nav-logo .jkc-logo {
		display: inline-block;
		width: 163px;
		height: 38px;
		background: url('../../assets/logo.png') no-repeat;
	}
	
	.header-nav-content .nav-item {
		float: right;
		display: inline-block;
	}
	
	.header-nav-content .nav-item ul li {
		float: left;
		display: inline-block;
		margin-left: 80px;
		position: relative;
	}
	
	.header-nav-content .nav-item ul li .nav-top {
		display: inline-block;
		font-size: 16px;
		line-height: 80px;
		color: #3A405A;
		font-family: PingFangSC;
	}
	
	.header-nav-content .nav-item ul li .nav-top i {
		position: absolute;
		top: 59px;
		left: 0px;
		width: 0px;
		height: 2px;
		background: #FF7142;
		visibility: hidden;
		-webkit-transition: width .2s ease;
		-moz-transition: width .2s ease;
		transition: width .2s ease;
	}
	
	.header-nav-content .nav-item ul li .nav-active,
	.header-nav-content .nav-item ul li:hover .nav-top {
		color: #FF7142;
	}
	
	.header-nav-content .nav-item ul li .active {
		color: #FF7142;
	}
	
	.header-nav-content .nav-item ul li:hover .nav-top i {
		visibility: visible;
		width: 20px;
		transition: all .2s ease;
	}
	
	.header-nav-content .nav-item ul li .drop-down-menu {
		position: absolute;
		top: 110px;
		left: -20px;
		width: 134px;
		padding: 12px 0px;
		background: #fff;
		visibility: hidden;
		opacity: 0;
		-webkit-transition: all .2s ease-in;
		-moz-transition: all .2s ease-in;
		transition: all .2s ease-in;
	}
	
	.header-nav-content .nav-item ul li .drop-down-menu a {
		display: block;
		font-size: 16px;
		line-height: 48px;
		color: #3A405A;
		font-family: PingFangSC-Medium;
		text-align: center;
	}
	
	.header-nav-content .nav-item ul li .drop-down-menu a:hover {
		color: #FF7142;
	}
	
	.header-nav-content .nav-item ul li:hover .drop-down-menu {
		top: 80px;
		visibility: visible;
		opacity: 1;
		-webkit-transition: all .5s;
		-moz-transition: all .5s;
		-ms-transition: all .5s;
		transition: all .5s;
	}
</style>