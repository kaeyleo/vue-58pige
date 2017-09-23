<template>
  <div class="page">
    <header class="app-header">
      <div class="back">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="page-title">重置密码</div>
    </header>

    <div class="step-slide" v-bind:class="{'next': isNext}">
      <div class="login-form step-one">
        <div class="input-item">
          <input type="tel" maxlength="11" placeholder="手机号" autocomplete="off" v-model="phone">
          <i class="iconfont icon-guanbi icon" @click="clear('phone')" v-show="phone"></i>
        </div>
        <div class="input-item">
          <input type="tel" class="code-input" maxlength="6" placeholder="验证码" autocomplete="off" v-model="code">
          <i class="iconfont icon-guanbi icon icon-clear-phone" @click="clear('code')" v-show="code"></i>
          <div class="sendMsg-button" @click="isSend && sendMsg()">{{ msgText }}</div>
        </div>
        <div class="login-button" @click="toStep2">下一步</div>
      </div>
      <div class="login-form step-two">
        <div class="input-item">
          <input type="password" maxlength="12" placeholder="设置6~12位密码" autocomplete="off" v-model="password">
          <i class="iconfont icon-guanbi icon" @click="clear('password')" v-show="password"></i>
        </div>
        <div class="login-button button-avl">确认</div>
        <span class="other-act back-step" @click="isNext = false">返回上一步</span>
      </div>
    </div>  

  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: null,
      code: null,
      password: null,
      isSend: true,
      msgText: '获取验证码',
      isNext: false
    }
  },
  methods: {
    clear (target) {
      this[target] = null
    },
    sendMsg () {
      const self = this
      let seconds = 60
      this.isSend = false
      const timer = setInterval(function () {
        --seconds
        self.msgText = `重新发送(${seconds})`
        if (seconds === 55 - 1) {
          clearInterval(timer)
          self.msgText = '获取验证码'
          self.isSend = true
        }
      }, 1000)
    },
    toStep2 () {
      this.isNext = true
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
</style>
