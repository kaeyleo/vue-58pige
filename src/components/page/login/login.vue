<template>
  <div class="page">
    <header class="app-header">
      <div class="back">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="link">注册</div>
    </header>
    <div class="logo">
      <img src="../../../assets/logo-text.png" alt="">
    </div>
    <div class="form">
      <div class="input-item">
        <input type="text" size="11" placeholder="账户手机号" autocomplete="off">
        <i class="iconfont icon-guanbi icon"></i>
      </div>
      <div class="input-item">
        <input type="password" maxlength="16" placeholder="请输入密码" autocomplete="off">
        <i class="iconfont icon-ai-eye icon"></i>
      </div>
      <a class="button" href="">登录</a>
      <a class="forget" href="">忘记密码</a>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
@import '../../../style/helper';

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.app-header {
  padding: 12px $wrap;
  position: relative;
  overflow: auto;
  color: #555;
  div {
    display: block;
  }
  .back {
    float: left;
    .iconfont {
      font-size: 5vw;
      line-height: 5vw;
    }
  }
  .link {
    float: right;
    font-size: 4vw;
  }
}

.logo {
  margin: 6vw 0;
  img {
    display: block;
    margin: 0 auto;
    width: 14%;
  }
}

.form {
  margin: 0 auto;
  width: 90%;
}

.input-item {
  position: relative;
  padding: 3.6vw 0;
  border-bottom: 1px solid #DFE3EC;
  input, div {
    display: inline-block;
  }
  input {
    width: 80%;
    margin: 0;
    padding: 0;
    background-color: transparent;
    background-color: transparent;
    font-size: 3.8vw;
    &:-webkit-autofill {  
      -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;  
    }
  }
  .icon {
    position: absolute;
    top: 4.2vw;
    right: 0;
    width: 18px;
    height: 18px;
    color: #C4C7CE;
  }
}

.button {
  margin-top: 7vw;
  display: block;
  width: 100%;
  line-height: 11.6vw;
  text-align: center;
  font-size: 4vw;
  font-weight: 600;
  color: #fff;
  background-color: #FF6A41;
  border-radius: 3px;
}

.forget {
  margin-top: 3vw;
  float: right;
  font-size: 3.5vw;
  color: #989FB0;
}
</style>
