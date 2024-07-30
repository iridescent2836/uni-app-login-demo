<template>
  <view class="content">
    <input type="number" placeholder="请输入账号" v-model.number="userId" />
    <input type="text" placeholder="请输入密码" v-model.number="pwd" />
    <button @click="login">登录</button>
    <button @click="register">注册</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        userId: null,
        pwd: null,
      }
    },
    onLoad() {

    },
    methods: {
      login() {
        uni.request({
          url: 'http://localhost:8080/login',
          method: 'POST',
          data: {
            userId: this.userId,
            pwd: this.pwd
          },
          header: {
            'content-type': 'application/json'
          },
          success: (res) => {


            console.log('success:', res.data);
            if (res.data.code === '200') {
              //store token
              uni.setStorageSync("token", res.data.data.token);
              // change page
              uni.navigateTo({
                url: '/pages/index/UserInfo'
              })
            }
          },
          fail: (err) => {
            console.log('fail:', err)
          }
        })

        console.log("login");
      },
      register() {
        uni.request({
          url: 'http://localhost:8080/register',
          method: 'POST',
          data: {
            userId: this.userId,
            pwd: this.pwd
          },
          header: {
            'content-type': 'application/json'
          },
          success: (res) => {
            console.log('success:', res.data);
          },
          fail: (err) => {
            console.log('fail:', err)
          }
        })
        console.log("register");
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }

  input {
    margin: 5px 5px;
    border-bottom: #8f8f94 1px solid;
    flex-grow: 1;
  }

  button {
    margin: 5px;
  }
</style>