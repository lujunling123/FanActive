<template>
<div class="aa">
      <img style="width: 1rem" src="../../assets/images/jiaxi.png"/>
      <img src="../../assets/images/money1.png"/>
      <img style="width: 1rem" src="../../assets/images/jiaxi.png"/>
      <img src="../../assets/images/money1.png"/>
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

  .aa{
    position: absolute;
    z-index:1 ;
    top: 0;
    height: 6.7rem;
    width: 100%;
    overflow: hidden;
  }

  .aa img{
    animation:myfirst 2s infinite linear;
    position: absolute;
    top: 0;
    right: 10%;
    color: #000;
  }
  .aa img:last-child{
    animation:myfirst1 2s infinite linear;
    top: 0;
    left: 50%;
  }
  .aa img:nth-child(2){
    animation:myfirst2 2s infinite linear;
    top: 0;
    left: 60%;
  }
  .aa img:nth-child(3){
    animation:myfirst3 2s infinite linear;
    top: 0;
    left: 10%;
  }
  @keyframes myfirst
  {
    0%   {right:10%; top:0;}
    100% {right:50%; top:6rem;}
  }
  @keyframes myfirst1
  {
    0%   {left:35%; top:0;}
    100% {left:10%; top:6rem;}
  }
  @keyframes myfirst2
  {
    0%   {left:13%; top:0;}
    100% {right:10%; top:6rem;}
  }
  @keyframes myfirst3
  {
    0%   {left:60%; top:0;}
    100% {left:70%; top:6rem;}
  }
</style>
