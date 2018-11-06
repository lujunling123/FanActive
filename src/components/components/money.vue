<template>
	<div class="wode">
		<input class="phone" placeholder="请输入您的领取手机号" type="text" name="phone" id="phone" v-model="phone" />
		<img @click="tijiao()" src="../../assets/images/getButton.png" />
	</div>
</template>
<script>
	export default {
		name: 'MTButton',
		components: {},
		data() {
			return {
				search: {
					keyId: this.$route.query.keyId ? this.$route.query.keyId : '',
					type: this.$route.query.type ? this.$route.query.type : '',
					ui: this.$route.query.ui ? this.$route.query.ui : '',
					wechatCode: this.$route.query.wechatCode ? this.$route.query.wechatCode : ''
				},
				phone: ""
			}
		},
		mounted() {
			
		},
		methods: {
			
			tijiao() { //注册账号
				var self = this;
				var data = self.extend(self.canshu(), self.search)
				data.phone = self.phone;
				if(self.sjyz(self.phone))
					self.request("/app/user/registerByPhone.html", data, r => {
						console.log(r)
						if(r.res_code == "9999"){
							sessionStorage.setItem('phone',self.phone);
							sessionStorage.setItem('userId',r.res_data.userId);
							this.$router.go(-1) //注册成功后返回领取的网页  领取红包
						}
					})
			}
		}
	}
</script>

<style scoped>
	.wode {
		position: relative;
		padding-top: .3rem;
	}
	
	.wode .phone {
		font-family: PingFangSC-Regular;
		display: block;
		margin: 0 auto;
		border: 0;
		outline: none;
		width: 6rem;
		height: .97rem;
		background: rgba(255, 251, 245, 1);
		border-radius: .25rem;
		font-size: .36rem;
		font-weight: 400;
		color: rgba(255, 116, 57, 1);
		line-height: .40rem;
		text-align: center;
		margin-bottom: .3rem;
	}
	
	.phone::-webkit-input-placeholder {
		color: rgba(255, 116, 57, 1);
		font-size: .36rem;
		line-height: .40rem;
		font-weight: 400;
	}
	
	.wode img {
		width: 6.4rem;
		margin: 0 auto;
	}
</style>