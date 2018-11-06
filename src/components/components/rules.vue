<template>
  <div class="app">
    <div class="text">
      <div class="textBox">
        <img src="../../assets/images/redTitle.png"/>
        <div>
          <p style="margin-top: 0.49rem;">1、 活动对象：此活动新老用户都可参与；与平台其他活动奖励同享，具体以活动介绍为准。</p>
          <p>2、奖励内容：领取后随机发放一张优惠券，包括现金红包、抵扣红包、加息券。</p>
          <p>3、领取方式；打开分享的链接，绑定领取的手机号，该手机号为注册手机号，优惠券将在1个工作日内发放至个人账户，APP可在“我的-优惠券”查看，官网可在“账户管理-我的优惠”。</p>
          <p>4、使用规则：现金红包可直接变现到存管账户，加息券、抵扣红包用于投资抵扣使用，不找零。优惠券使用条件、有效期以优惠券上的显示为准，请及时登录账号使用。</p>
          <p>5、未注册用户请使用常用手机号进行绑定，系统自动注册为甲壳虫金融用户；已注册用户请使用注册的手机号进行绑定。</p>
          <p>6、本活动最终解释权归甲壳虫金融所有。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  	export default {
		name: 'rules',
		 components: {
	    },
		}
  
</script>

<style scoped>
  @media only screen and (max-width:1200rem) {
    .app {
      background: #FFB338;
      background-size: 100% auto;
    }
  }

  .text {
    width: 100%;
    padding-top: .62rem;
    padding-bottom: 0.42rem;
    overflow-x: hidden;
  }

  @media only screen and (min-width:1201rem) {
    .text {
      /*background: url(../assets/images/pc_bottom.png) center bottom no-repeat;*/
      background-size: auto 15%;
    }
  }

  .text img {
    width: 6.9rem;
    margin: 0 auto;
  }

  .tab_bg {
    position: relative;
    top: -.15rem;
    z-index: 1;
    width: 6.6rem;
    margin: 0 auto 0;
    background: #00b17d;
    box-shadow: 0 .1rem .1rem rgba(13, 68, 42, 0.35) inset, 0rem .1rem .15rem 1rem rgba(13, 68, 42, 0.4);
    padding-bottom: .3rem;
  }

  .tab_bg>img {
    width: 5.96rem;
    margin: 0 auto;
    padding-top: .2rem;
  }
  .textBox{
    margin: 0 auto;
    padding: 0.52rem .40rem;
    width:6.90rem;
    background:rgba(254,243,194,1);
    opacity:0.4;
    border-radius:.20rem;
    font-size:.28rem;
    font-weight:400;
    color:rgba(207,83,31,1);
    line-height:.50rem;
  }
  .ljtz {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background:linear-gradient(90deg,rgba(243,76,70,1) 0%,rgba(255,143,77,1) 100%);
    color: #fff;
    line-height: 1rem;
    text-align: center;
    font-size: .32rem;
    z-index: 100;
  }
</style>
