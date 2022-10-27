<template>
  <view class="home">
	  
	<!-- 背景图 -->
	<view class="bg" >
	    <image class="bg-image" mode="scaleToFill"></image>
	</view>
	  
	<!-- 搜索 -->
    <view class="search-box">
      <my-search @click="gotoSearch"></my-search>
    </view>
	
	<!-- 轮播图 -->
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
			
			<text class="text">{{item.text}}</text>
			
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
		},
		gotoSearch() {
		  uni.navigateTo({
		    url: '/subpkg/search/search'
		  })
		}
		
	}
}
</script>

    


<style lang="scss">
// 轮播图
  swiper {
	width:700rpx;
    height:300rpx;
	margin: 0 auto;
	
    .swiper-item,
    image {
		border-radius: 50px;
		width: 100%;
		height: 100%;
    }
  }
// 搜索栏
.search-box {
    // 吸顶
    position: sticky;
    top: 0;
    // 防止被轮播图覆盖
    z-index: 999;
  }

//分类
.container{
	font-size: 8px;
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
		// display: flex;
		// flex-direction: row; 
		font-size: 30rpx;
		display:inline-block;
		line-height:0rpx;
		//padding:0 20rpx;
		color:#444d77;
		//color:#969dbd;
		// &.activate{
		// 	color:#1E90FF;
		// }
	}

	
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

