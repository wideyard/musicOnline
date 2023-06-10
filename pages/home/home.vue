<template>
  <view class="home">
	  
	<!-- 背景图 -->
	<view class="bg" >
	    <image class="bg-image" mode="scaleToFill"></image>
	</view>
	  
    <!-- 搜索栏 -->

    <view class="search-box">
      <my-search @click="gotoSearch"></my-search>
    </view>

    <!-- 轮播图 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="2500" :duration="1000" :circular="true">
      <swiper-item v-for="item in swipers">
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
	
	<!-- 历史文章专区 -->
	<view class="history">
		<!-- 分割线 -->
		<view class="splite">
			_______历史纵览_______
		</view>
		
		<!-- 进入曲艺、戏剧、古乐的专区 -->
		<view class="getin" v-for="item in histories">
			<view :url= "item.url" @click="Jump_history(item.url)" class="content">
				<text class="title_history">{{item.text}}</text>
				<image :src="item.images" class="image"></image>
			</view>
		</view>
		
	</view>

  </view>
</template>


<script>
  export default {
    data() {
      return {
        // 头条轮播
        swipers: [{
            images: 'https://hakaimg.com/i/2022/10/25/h0ylwj.png',
            url: '/pagesA/news/new1'
          },
          {
            images: 'https://hakaimg.com/i/2022/10/25/h1jhsm.png',
            url: '/pagesA/news/new2'
          },
          {
            images: 'https://hakaimg.com/i/2022/10/25/h1hbo1.png',
            url: '/pagesA/news/new3'
          }
        ],

        logos: [{
            images: 'https://hakaimg.com/i/2022/10/26/hd5h2f.png',
            url: '/pagesA/news/news',
            text: '新闻'
          },
          {
            images: 'https://hakaimg.com/i/2022/10/26/hd5hgo.png',
            url: '/pagesA/news/news',
            text: '旅游'
          },
          {
            images: 'https://hakaimg.com/i/2022/10/26/hd5ibe.png',
            url: '/pagesA/news/news',
            text: '影像'
          },
          {
            images: 'https://hakaimg.com/i/2022/10/26/hd5qxi.png',
            url: '/pagesA/news/news',
            text: '机构'
          }
        ],
		// 跳转到历史文章页面区域，并显示相关的文字图片
		histories: [{
		    images: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190414%2Fc10e9c715dff4e41a6e3ac6967bfbfbe.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669513554&t=75d704ebc7f4cee0bf3ffa39b740dabc',
		    url: '/pagesA/history/quyi',
		    text: '曲艺'
		  },
		  {
		    images: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.art.ifeng.com%2F2016%2F0225%2F1456388374423.jpg&refer=http%3A%2F%2Fupload.art.ifeng.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669513405&t=40ce27c6afd6421d3edfdecb2705a5b1',
		    url: '/pagesA/history/xiju',
		    text: '戏剧'
		  },
		  {
		    images: 'https://img1.baidu.com/it/u=977355781,1361695817&fm=253&fmt=auto&app=138&f=JPEG?w=823&h=500',
		    url: '/pagesA/history/guyue',
		    text: '古乐'
		  }
		]
      }
    },

    methods: {
      // 跳转到搜索
      gotoSearch() {
        uni.navigateTo({
          url: '/subpkg/search/search'
        })
      },
      //跳转到详情页
      OnJump(url) { //点击图片触发的事件
        console.log(url)
        uni.redirectTo({
          //uni.navigateTo({ // 不关闭当前页面，跳转到非tarber页面
          url: url
        })
      },

      Jump() {
        uni.redirectTo({
          url: "/pagesA/news/news"
        })
      },
	  
	  Jump_history(to_url) {
		console.log("进行一个页面跳转的操作", to_url)
	    uni.redirectTo({
	      url: to_url
	    })
	  }
    },
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


// 历史文章专区
.history {
	font-size: 30px;
	padding: 30rpx;
	display: flex;
	flex-direction: column; 
	justify-content: center;
	align-items: center;
	.splite {
		color:#444d77;
	}
	// 进入历史文章专栏的三个版块
	.getin {
		font-size: 30px;
		padding: 30rpx;
		display: flex;
		flex-direction: column; 
		justify-content: center;
		align-items: center;
		.content {
			display: flex;
			flex-direction: row; 
			justify-content: space-around;
			align-items: center;
			.title_history {
				font-size: 25px;
				color: #363950;
			}
			.image {
				width: 620rpx;
				height: 300rpx;
				border-radius: 30px;
			}
		}
	}
}
</style>
