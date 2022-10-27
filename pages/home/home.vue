<template>
  <view class="home">
    <view class="search-box">
      <my-search @click="gotoSearch"></my-search>
    </view>
    <swiper :indicator-dots="true" :autoplay="true" :interval="2500" :duration="1000" :circular="true">
      <!-- 循环遍历数组 -->
      <swiper-item v-for="item in swipers">
        <image :src="item"></image>
      </swiper-item>
    </swiper>

  </view>
</template>

<!-- 动态绑定 -->
<!--<template>
  <view>
    <!-- 轮播图区域 -->
<!--    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
     <!-- 循环渲染轮播图的 item 项 -->
<!--      <swiper-item v-for="(item, i) in swiperList" :key="i">
        <view class="swiper-item">
          <!-- 动态绑定图片的 src 属性 -->
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
        swipers: [
          'https://hakaimg.com/i/2022/10/25/puolq.jpg',
          'https://hakaimg.com/i/2022/10/25/putua.jpg',
          'https://hakaimg.com/i/2022/10/25/pv0lf.jpg',
        ]
      };
    },
    methods: {
      gotoSearch() {
        uni.navigateTo({
          url: '/subpkg/search/search'
        })
      }
    }


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
</style>
