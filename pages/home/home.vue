<template>
  <view class="home">
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
        <image :src="item.images" :url="item.url" @click="Jump()" class="image" :mode="widthFix"></image>
        <view>
          <text>{{item.text}}</text>
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
      }
    },
  }
</script>


<style lang="scss">
  swiper {
    height: 400rpx;

    .swiper-item,
    image {
      width: 100%;
      height: 100%;
    }
  }


  .search-box {
    // 吸顶
    position: sticky;
    top: 0;
    // 防止被轮播图覆盖
    z-index: 999;
  }



  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .image {
    width: 40px;
    height: 40px;
    text-align: center;
  }

  .text {
    display: flex;
    flex-direction: row;
    font-size: 40rpx;
    display: inline-block;
    line-height: 100rpx;
    padding: 0 30rpx;
    color: #333;
  }
</style>
