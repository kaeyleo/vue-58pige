<template>
  <div class="page">
    <header class="app-header">
      <div class="back" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="page-title">注册</div>
      <div class="link">
        <router-link to="/login">登录</router-link>
      </div>
    </header>

    <div class="step-slide">
      <div class="login-form step-one">
        <div class="input-item">
          <input type="tel" maxlength="11" placeholder="手机号" autocomplete="off">
          <i class="iconfont icon-guanbi icon"></i>
        </div>
        <div class="input-item">
          <input type="tel" class="code-input" maxlength="6" placeholder="验证码" autocomplete="off">
          <i class="iconfont icon-guanbi icon icon-clear-phone"></i>
          <div class="sendMsg-button">获取验证码</div>
        </div>
        <a class="login-button" href="">下一步</a>
      </div>
      <div class="login-form step-two">
        <div class="input-item">
          <input type="password" maxlength="12" placeholder="设置6~12位密码" autocomplete="off">
          <i class="iconfont icon-guanbi icon"></i>
        </div>
        <a class="login-button button-avl" href="">注册</a>
        <span class="other-act back-step">返回上一步</span>
      </div>
    </div>  

  </div>
</template>

<script>
  export default {
    methods: {
      goback () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../../style/login';

.login-form {
  margin: 0;
  width: 100%;
  float: left;
}

.back-step {
  width: 100%;
  text-align: center;
}
</style>
