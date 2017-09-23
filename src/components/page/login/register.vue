<template>
  <div class="page">
    <header class="app-header">
      <div class="back">
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
          <input type="tel" class="code-input" maxlength="8" placeholder="验证码" autocomplete="off">
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
      </div>
    </div>  

  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
.login-form {
  margin: 0;
  width: 100%;
  float: left;
}

.sendMsg-button {
  float: right;
  width: 30%;
  font-size: 3.6vw;
  color: #9FA4AE;
  text-align: center;
}

.step-one {
  .code-input {
    width: 60%;
  }
  .icon-clear-phone {
    right: 32%;
  }
}

.step-slide {
  position: relative;
  width: 90%;
  margin: 4vw auto 0 auto;
}

.step-one, .step-two {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease-out;
}

.step-one {
  transform: translateX(0%);
}

.step-two {
  transform: translateX(110%);
}

.next {
  .step-one {
    transform: translateX(-110%);
  }
  .step-two {
    transform: translateX(0%);
  }
}
</style>
