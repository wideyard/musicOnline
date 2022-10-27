<template>
<view class="home">
    <swiper :indicator-dots="true" :autoplay="true" :interval="2500" :duration="1000" :circular="true">
      <!--循环遍历数组 -->
	  <swiper-item v-for="item in swipers" >
        <!-- <image :src="item.images" url= "item.url" @click="OnJump(item.url)"></image> -->
		<image :src="item.images" @click.native="OnJump(item.url)"></image>
      </swiper-item>
    </swiper>
	
	
	<!-- 导航区 -->
	<view class="container">
		<view class="image" v-for="item in logos"> 
			<image :src="item.images"  :url= "item.url" @click="Jump()" class="image" :mode="widthFix"></image>
			<view>
				<text >{{item.text}}</text>
			</view>
		</view>
				
	
	</view>
	
	
	
</view> 
</template>

<!-- 动态绑定
<!--<template>
  <view>
    <!-- 轮播图区域
<!--    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
     <!-- 循环渲染轮播图的 item 项
<!--      <swiper-item v-for="(item, i) in swiperList" :key="i">
        <view class="swiper-item">
          <!-- 动态绑定图片的 src 属性
<!--          <image :src="item.image_src"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>
-->
<script>
  export default {
    data() {
      return {
        // 头条轮播
        swipers:[
			{
				images:'https://hakaimg.com/i/2022/10/25/h0ylwj.png',
				url:'/pagesA/news/new1'
			},
			{
				images:'https://hakaimg.com/i/2022/10/25/h1jhsm.png',
				url:'/pagesA/news/new2'
			},
			{
				images:'https://hakaimg.com/i/2022/10/25/h1hbo1.png',
				url:'/pagesA/news/new3'
			}
        					// 'https://hakaimg.com/i/2022/10/25/puolq.jpg',
        					// 'https://hakaimg.com/i/2022/10/25/putua.jpg',
        					// 'https://hakaimg.com/i/2022/10/25/pv0lf.jpg',
        ],
		
		logos:[
			{
				images:'https://hakaimg.com/i/2022/10/26/hd5h2f.png',
				url:'/pagesA/news/news',
				text:'新闻'
			},
			{
				images:'https://hakaimg.com/i/2022/10/26/hd5hgo.png',
				url:'/pagesA/news/news',
				text:'旅游'
			},
			{
				images:'https://hakaimg.com/i/2022/10/26/hd5ibe.png',
				url:'/pagesA/news/news',
				text:'影像'
			},
			{
				images:'https://hakaimg.com/i/2022/10/26/hd5qxi.png',
				url:'/pagesA/news/news',
				text:'机构'
			}
		]
      }
    },
	
	methods: {
		//跳转到详情页
		OnJump(url){ //点击图片触发的事件
			console.log(url)
			uni.redirectTo({
		    //uni.navigateTo({ // 不关闭当前页面，跳转到非tarber页面
		        url: url
		    })
		},
		
		Jump(){
			uni.redirectTo({url:"/pagesA/news/news"});
		}
		
	},
}
</script>

	
	
    //onLoad() {
    //  this.getSwiperlist()
    //},
    //methods: {
    //  async getSwiperlist() {
    //    const res = await uni.$http.get('里面写你的资源路径 比如/api/public/v1/home/swiperdata')
    //    // 请求失败
    //    if (res.meta.status !== 200) {
    //      return uni.showToast({
    //        title: '数据请求失败！',
    //        duration: 1500,
    //        icon: 'none',
    //      })
    //    }
    //    // 请求成功，为 data 中的数据赋值
    //    this.swiperList = res.message
    //  }
    //}
  


<style lang="scss">
  swiper {
    height: 400rpx;

    .swiper-item,
    image {
      width: 100%;
      height: 100%;
    }
  }


.container{
	display: flex;
	flex-direction: row; 
	justify-content: space-around;
}
	
	.image{
		width:40px;
		height:40px;
		text-align: center;
	}
	
	.text{
		display: flex;
		flex-direction: row; 
		font-size: 40rpx;
		display:inline-block;
		line-height:100rpx;
		padding:0 30rpx;
		color:#333;
		// &.activate{
		// 	color:#1E90FF;
		// }
	}




</style>