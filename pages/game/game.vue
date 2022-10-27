<template>
  <view>
	<!-- 背景图 -->
	<view class="bg" >
	    <image class="bg-image" mode="scaleToFill"></image>
	</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
//背景
.bg{
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:url('https://hakaimg.com/i/2022/10/27/ss7du7.jpg') 
	no-repeat #000;
	background-size:cover;
	z-index:-1;
	opacity: 0.3;
}

.bg-img{
    width : 100%;
    height : 100%;
	
}
</style>
