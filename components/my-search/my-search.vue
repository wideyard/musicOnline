<template>
  <view class="my-search-container" :style="{'background-color': bgcolor}">
   <view class="my-search-box" :style="{'border-radius': radius + 'px'}" @click="searchBoxHandler">
     <uni-icons type="search" size="17"></uni-icons>
     <text class="placeholder">搜索</text>
   </view>
  </view>
</template>

<script>
  export default {
    name: "my-search",
    props: {
      bgcolor: {
        type: String,
        //default: '#ffffff'

        default: '#444d77'
      },
      radius: {
        type: Number,
        default: 18
      }
    },
    data() {
      return {

      };
    },
    methods: {
      // 点击输入框
      searchBoxHandler() {
        console.log('~')
        // 触发click事件处理函数
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .my-search-container {
    //background-color: #444d77;
    background-color: #969dbd;

    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }

  .my-search-box {
    height: 30px;
    background-color: #ffffff;
    border-radius: 13px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .placeholder {
      font-size: 15px;
      margin-left: 5px;
    }
  }
</style>
