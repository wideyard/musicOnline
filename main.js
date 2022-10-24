<<<<<<< HEAD
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
=======

// #ifndef VUE3
import Vue from 'vue'
import App from './App'

>>>>>>> b7116c8719907cb4d4b1c3fe1d817a548d684674
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
<<<<<<< HEAD
  ...App
=======
    ...App
>>>>>>> b7116c8719907cb4d4b1c3fe1d817a548d684674
})
app.$mount()
// #endif

// #ifdef VUE3
<<<<<<< HEAD
import {
  createSSRApp
} from 'vue'
=======
import { createSSRApp } from 'vue'
>>>>>>> b7116c8719907cb4d4b1c3fe1d817a548d684674
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
<<<<<<< HEAD
// #endif
=======
// #endif
>>>>>>> b7116c8719907cb4d4b1c3fe1d817a548d684674
