<template>
  <view>
    <view class="search-box">
      <!-- 使用 uni-ui 提供的搜索组件 -->
      <uni-search-bar @input="input" :radius="100" cancelButton="none"></uni-search-bar>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 延时器的 timerId
        timer: null,
        // 搜索关键词
        kw: ''
      };
    },
    methods: {
      // 防抖处理
      input(e) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          // 500 毫秒内无触发
          this.kw = e.value
          console.log(this.kw)
        }, 500)
      }
    }
  }
</script>

<style lang="scss">
  .search-box {
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>
