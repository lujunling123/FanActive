<template>
	<div class="getMain">
	
		<div class="info">
			<span class="phoneT">甲壳虫优惠券已放入：{{lingqu.phone}}</span>
			<div class="redPage">
				<div class="moneyNum">
					<span class="span1">{{lingqu.value}}</span>
					<span class="span2" v-if="lingqu.type == 2">%</span>
					<span class="span2" v-if="lingqu.type == 1">元</span>
				</div>
				 <div class="moneyTitle"  v-if='lingqu.typeStr == "现金"' style="padding-top: .42rem">
		            <span class="title1" style="font-size:.28rem;margin-bottom: .27rem;">出借分享现金红包</span>
		            <span class="title2" style="color:#FFCB7F;">还有{{lingqu.expireDays}}天过期</span>
		          </div>
				<div class="moneyTitle"  v-if='lingqu.typeStr !== "现金"'>
					<span class="title1">出借分享</span>
					<span class="title2">适用{{lingqu.moneyLimit}}元及以上</span>
					<span class="title3">适用出借{{lingqu.timeLimit}}个月及以上</span>
				</div>
				<img @click="down()" class="goUse" src="../../assets/images/gouse.png" />
				<div class="moneyBottom"  v-if='lingqu.typeStr !== "现金"'>
					<span class="bottomT">仅限精选标、彩虹桥</span>
					<span>还有{{lingqu.expireDays}}天过期</span>
				</div>
			</div>
		</div>
		<div class="list_info">
			<div>
				<img src="../../assets/images/linered.png" />
			</div>
			<div class="lineList">
				<ul>
					<li v-for="a in receive">
						<div class="lineBox">
							<div class="linLift" style="float: left">
								<img :src="a.deadImgUrl" />
								<span class="spanL">{{a.nickName}}</span>
								<span class="spanB">{{a.time}}</span>
							</div>
							<div class="linRight">
								<div class="blocks red">{{a.typeStr}}</div>
								<span>{{a.value}}<span v-if="a.typeStr !== '加息'">元</span><span v-if="a.typeStr == '加息'">%</span></span>
							</div>
						</div>
					</li>

				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'rules',
		props: {},
		data() {
			return {
				search: { //网页自带参数 拿到用
					keyId: this.$route.query.keyId ? this.$route.query.keyId : '',
					type: this.$route.query.type ? this.$route.query.type : '',
					ui: this.$route.query.ui ? this.$route.query.ui : '',
					wechatCode: this.$route.query.wechatCode ? this.$route.query.wechatCode : ''
				},
				res: { // 绑定账号的用户会有这两个参数
					recordId: '1057868937586282498',
					userId: '475'
				},
				lingqu: {}, //用户自己领取的红包
				receive: [], //红包领取记录  列表
				phone:sessionStorage.getItem('phone')?sessionStorage.getItem('phone'):0,
				userId:sessionStorage.getItem('userId')?sessionStorage.getItem('userId'):0
			}
		},
		mounted() {
			this.getBind() // 每次进入网页查看是否绑定
		},
		methods: {
			down(){
				this.$parent.down();
			},
			
			getBind() { //微信是否绑定账号
				var self = this;
				var data = this.extend(this.canshu(), this.search)
				if(this.phone)
					data.phone = this.phone
				if(this.userId)
					data.userId = this.userId
				self.request("/app/api/shareCoupon/checkWechatCode", data, r => {
					if(r.res_data.result == "false")
						this.$router.push({
							path: '/index',
							query: self.search
						}); //如果没有绑定账号，则跳转网页 去注册页面
					else {
						self.res.recordId = r.res_data.recordId; //如果绑定账号，得到红包的id
						self.res.userId = r.res_data.userId; //如果绑定账号，得到用户的id
						self.getCoupon() //如果绑定账号，则领取红包
						self.getReceive() //如果绑定账号，则查看自己领取的红包。应对第二次点进来的用户
						self.getByRecordId() //如果绑定账号，则查看该红包的领取记录
					}
				})
			},
			getCoupon() { //领取红包
				var self = this;
				var data = this.extend(this.canshu(), this.res)
				data.wechatCode = self.search.wechatCode
				self.request("/app/api/shareCoupon/receiveCoupon", data, r => {
					if(r.res_code == '9999') {
						self.getReceive() //领取红包之后，查看自己领取的红包
						self.getByRecordId() //领取之后刷新 该红包领取记录
					}else{
						Toast({
						  message: r.res_msg,
						  position: 'bottom',
						  duration: 3000
						});
					}
				})
			},
			getReceive() { // 领取红包情况
				var self = this;
				var data = this.extend(this.canshu(), this.res)
				self.request("/app/api/shareCoupon/getUserReceive", data, r => {
					if(r.res_code == "9999"&&r.res_data.result=="true") {
						self.lingqu = r.res_data //自己领取的红包在网页上面显示  以下是红包对象里面的属性
						/*result	string	是否领取成功 ：true-是  false-否
						timeLimit	string	使用时间限制
						typeStr	string	类型（字符串）
						expireDays	string	过期天数
						phone	string	领取人手机号码
						moneyLimit	string	使用金额限制
						type	string	类型 ： 1-红包 2-加息券
						value	string	数值*/
					

					}else if(r.res_data.result=="false"){
						Toast({
						  message: r.res_msg,
						  position: 'bottom',
						  duration: 3000
						});
					}
				})
			},
			getByRecordId() { // 该红包领取记录
				var self = this;
				var data = this.extend(this.canshu(), this.res)
				self.request("/app/api/shareCoupon/getReceiveByRecordId", data, r => {
					if(r.res_code == "9999") {
						self.receive = r.res_data.rows //该红包领取记录   列表  ，  以下是 列表中对象的属性
						/*deadImgUrl	string	微信头像
						typeStr	string	类型
						value	string	数值
						time	string	时间
						nickName	string	微信昵称
						timeLimit	string	使用时间限制
						typeStr	string	类型（字符串）
						expireDays	string	过期天数*/

					}
				})
			}
		}

	}
</script>

<style scoped>
	.getMain {
		position: relative;
		padding-top: .09rem;
	}
	
	.info {
		margin: 0 auto;
		width: 6.90rem;
		height: 3.22rem;
		background: rgba(254, 243, 194, 1);
		border-radius: .2rem;
	}
	
	.info .phoneT {
		display: block;
		height: .82rem;
		font-size: .24rem;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(207, 83, 31, 1);
		line-height: .82rem;
		text-align: center;
	}
	
	.redPage {
		position: relative;
		width: 6.50rem;
		height: 2.10rem;
		background-image: url("../../assets/images/redPageb.png");
		background-size: 100% 2.1rem;
		margin: 0 auto;
		padding: 0.2rem;
	}
	
	.redPage10 {
		position: relative;
		width: 6.50rem;
		height: 2.10rem;
		background-image: url("../../assets/images/redpage2.png");
		background-size: 100% 2.1rem;
		margin: 0 auto;
		padding: 0.2rem;
	}
	
	.moneyNum {
		float: left;
		width: 1.72rem;
		text-align: center;
		height: 1.06rem;
		line-height: 1.06rem;
	}
	
	.span1 {
		display: inline-block;
		font-family: PingFangSC-Semibold;
		font-size: .80rem;
		color: rgba(255, 255, 255, 1);
	}
	
	.span2 {
		display: inline-block;
		font-family: PingFangSC-Semibold;
		font-size: .280rem;
		color: rgba(255, 255, 255, 1);
	}
	
	.moneyNum10 {
		float: left;
		width: 1.72rem;
		text-align: center;
		line-height: 1.50rem;
	}
	
	.moneyTitle {
		width: 2.5rem;
		margin-left: 1.92rem;
		padding-top: .13rem;
	}
	
	.moneyTitle span {
		display: block;
		color: rgba(255, 255, 255, 1);
	}
	
	.title1 {
		line-height: .23rem;
		font-size: .24rem;
		font-weight: 500;
		margin-bottom: .19rem;
	}
	
	.title2 {
		line-height: .22rem;
		font-size: .22rem;
		font-weight: 500;
		margin-bottom: .09rem;
	}
	
	.title3 {
		line-height: .22rem;
		font-size: .22rem;
		font-weight: 300;
		margin-bottom: .09rem;
	}
	
	.goUse {
		position: absolute;
		top: 0.50rem;
		right: .45rem;
		width: 1rem;
		height: 1rem;
	}
	
	.moneyBottom {
		padding-top: .11rem;
		line-height: .6rem;
	}
	
	.moneyBottom span {
		width: 1.98rem;
		height: .22rem;
		font-size: .22rem;
		font-family: PingFangSC-Light;
		font-weight: 300;
		color: rgba(255, 203, 127, 1);
		line-height: .50rem;
	}
	
	.bottomT {
		margin-right: .83rem;
	}
	
	.list_info {
		margin: 0 auto;
		margin-top: .6rem;
		padding: 0.49rem .38rem 0rem .38rem;
		width: 6.90rem;
		background: rgba(254, 243, 194, 1);
		border-radius: .20rem;
	}
	
	.lineBox {
		height: 0.7rem;
		margin: .36rem 0;
		padding-bottom: 1rem;
		border-bottom: 1px solid rgba(255, 203, 127, 0.4);
	}
	
	.lineList {
		margin-top: .21rem;
	}
	
	.lineList img {
		float: left;
		width: .7rem;
		height: .7rem;
	}
	
	.lineList .spanL {
		display: block;
		margin-left: 1.02rem;
		font-size: .28rem;
		font-weight: 400;
		color: rgba(207, 83, 31, 1);
		line-height: .40rem;
	}
	
	.lineList .spanB {
		display: block;
		margin-left: 1.02rem;
		font-size: .22rem;
		font-weight: 400;
		color: rgba(233, 166, 69, 1);
		line-height: .40rem;
	}
	
	.blocks {
		display: inline-block;
		text-align: center;
		font-style: normal;
		font-size: .22rem;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		width: .60rem;
		height: .32rem;
		line-height: .32rem;
		border-radius: 0.03rem;
	}
	
	.red {
		background: linear-gradient(270deg, rgba(254, 114, 77, 1) 0%, rgba(255, 82, 82, 1) 100%);
	}
	
	.blue {
		background: linear-gradient(270deg, rgba(97, 182, 251, 1) 0%, rgba(51, 134, 224, 1) 100%);
	}
	
	.orige {
		background: linear-gradient(270deg, rgba(255, 171, 25, 1) 0%, rgba(254, 141, 77, 1) 100%);
	}
	
	.linRight {
		float: right;
	}
	
	.linRight span {
		font-size: .36rem;
		display: inline-block;
		font-weight: 400;
		color: rgba(207, 83, 31, 1);
		line-height: .50rem;
	}
	
	.lineList ul li:last-child .lineBox {
		border-bottom: none;
	}
</style>