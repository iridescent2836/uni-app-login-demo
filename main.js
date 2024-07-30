import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false

// 添加请求拦截器
uni.addInterceptor('request', {
  // 拦截请求方法
  invoke(request) {
    // 获取本地存储中的 token
    const token = uni.getStorageSync('token');
    if (token) {
      // 设置请求头 Authorization 字段
      request.header['Authorization'] = `Bearer ${token}`;
      request.header['token'] = `${token}`;
    }
    return request;
  }
});

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


export function createApp() {
  const app = createSSRApp(App)

  // 添加请求拦截器
  app.config.globalProperties.$http.interceptors.request.use((config) => {
    // 获取本地存储中的 token
    const token = uni.getStorageSync('token');
    if (token) {
      // 设置请求头 Authorization 字段
      config.header['Authorization'] = `Bearer ${token}`;
      config.header['token'] = `${token}`;
    }
    return config;
  });

  return {
    app
  }
}
// #endif