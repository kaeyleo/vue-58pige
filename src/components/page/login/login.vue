<template>
  <div class="page">
    <header class="app-header">
      <div class="back" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="link">
        <router-link to="/reg">注册</router-link>
      </div>
    </header>
    <div class="logo">
      <img src="../../../assets/logo-text.png" alt="">
    </div>
    <div class="login-form">
      <div class="input-item">
        <input type="tel" maxlength="11" placeholder="账户手机号" autocomplete="off">
        <i class="iconfont icon-guanbi icon"></i>
      </div>
      <div class="input-item">
        <input type="password" maxlength="16" placeholder="请输入密码" autocomplete="off">
        <i class="iconfont icon-ai-eye icon"></i>
      </div>
      <a class="login-button" href="">登录</a>
      <router-link class="other-act forget-pwd" to="/forget">忘记密码</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback () {
      this.$route.query.backhome
        ? this.$router.push('/home')
        : this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/login';

.logo {
  margin: 6vw 0;
  img {
    display: block;
    margin: 0 auto;
    width: 14%;
  }
}
</style>
