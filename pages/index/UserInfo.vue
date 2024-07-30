<template>
  <view>


    <view class="title">用户信息</view>
    <button @click="goBack">返回登录界面</button>
    <button @click="getInfo">获得信息</button>
    <!--  <input type="text" placeholder="请输入用户邮箱" v-model="email" />
    <button v-model="is_visible" @click="changeEmail">修改邮箱</button> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        is_visible: false,
      }
    },
    onLoad() {

    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      getInfo() {
        console.log("get info, token: ", uni.getStorageSync('token'));
        uni.request({
          url: "http://localhost:8080/info",
          method: 'GET',
          data: {

          },
          header: {
            'content-type': 'application/json',
            // 不再需要了，main.js中已经设置全局请求头
            // 'token': uni.getStorageSync('token'),
            // 'Authorization': uni.getStorageSync('token'),
          },
          success: (res) => {
            console.log("success: ", res.data);
          },
          fail: (err) => {
            console.log("fail: ", err.data);
          }
        })
      }
    }
  }
</script>

<style>
  .title {
    font-size: 24px;
    font-weight: bold;
    color: cadetblue;
  }
</style>