// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 网络请求包
import {
  $http
} from '@escook/request-miniprogram'

//uni.$http = $http
//
//$http.baseUrl = '这里面填资源url'
//// 请求拦截器
//$http.beforeRequest = function(options) {
//  uni.showLoading({
//    title: 'loading ...'
//  })
//}
//
//// 响应拦截器
//$http.afterRequest = function() {
//  uni.hideLoading()
//}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
