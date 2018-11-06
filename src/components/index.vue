<template>
	<div class="app">
		<!--<money></money>-->
    <div class="text">
      <div class="textBox">
        <img src="./../assets/images/redTitle.png"/>
        <div>
          <p style="margin-top: 0.49rem;">  1、该活动新老用户均可参与领取</p>
          <p>  2、优惠券发放于领取时输入的手机号，该手机号即为注册手机号。</p>
          <p>  3、每个链接每个手机号限领一份，数量有限，先到先得</p>
          <p>  4、领取到的优惠券可见“我的-优惠券”</p>
          <p>  5、其他未尽事宜，请联系客服400-0123-888</p>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
	// import money from './components/money.vue' //我的余额
	export default {
		name: 'MTButton',
		components: {
		},
		data() {
			return {
			}
		},
		mounted() {

		},
		methods: {
		}
	}
</script>


<style scoped>
  /*@media only screen and (max-width:1200rem) {*/
    /*.app {*/
      /*background:linear-gradient(#fd7153 0%,#fa2c53 100%);*/
      /*background-size: 100% auto;*/
    /*}*/
  /*}*/

  .text {
    width: 100%;
    padding-top: .62rem;
    padding-bottom: .42rem;
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
