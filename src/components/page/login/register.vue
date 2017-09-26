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

    <div class="step-slide" :class="{'next': isNext}">
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
        <div class="login-button" :class="{'button-avl': (phoneIsMatch && codeIsMatch) && !nextClick}" @click="!nextClick && toStep2()">{{ nextText }}</div>
      </div>
      <div class="login-form step-two">
        <div class="input-item">
          <input type="password" maxlength="12" placeholder="设置6~12位密码" autocomplete="off" v-model="password">
          <i class="iconfont icon-guanbi icon" @click="clear('password')" v-show="password"></i>
        </div>
        <div class="login-button" :class="{'button-avl': pwdIsMath && !isSubmit}" @click="!isSubmit && register()">{{ submitText }}</div>
        <span class="other-act back-step" @click="backStep" v-show="!isSubmit">返回上一步</span>
      </div>
    </div>  

    <transition name="slide">
      <success :successData="successData" v-if="isSuccess"></success>
    </transition>
  </div>
</template>

<script>
import success from '@/components/common/success'

export default {
  data () {
    return {
      phone: null,
      code: null,
      password: null,
      isSend: true,
      msgText: '获取验证码',
      phoneIsMatch: false,
      codeIsMatch: false,
      pwdIsMath: false,
      nextClick: false,
      nextText: '下一步',
      isNext: false,
      isSubmit: false,
      submitText: '确认',
      successData: {
        title: '注册成功',
        button: {
          text: '立即登录',
          path: '/login',
          query: {
            backhome: true
          }
        }
      },
      isSuccess: false
    }
  },
  watch: {
    /*
     * 验证手机号和验证码
     */
    phone: function () {
      this.check('phone', 'phoneIsMatch')
    },
    code: function () {
      this.check('code', 'codeIsMatch')
    },
    password: function () {
      this.check('password', 'pwdIsMath')
    }
  },
  components: {
    success
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    /**
     * @method 清空输入框
     * @param {String} target 需要清空的输入框绑定的参数名
     */
    clear (target) {
      this[target] = ''
    },
    /**
     * @method 发送验证码短信
     */
    sendMsg () {
      // 验证手机号码
      if (!this.phoneIsMatch) {
        this.$toast('请输入正确的手机号码')
        return
      }
      // 调后台 发送验证码api
      // 验证码按钮倒计时
      let seconds = 60
      this.isSend = false
      const timer = setInterval(function () {
        --seconds
        this.msgText = `重新发送(${seconds})`
        if (seconds === 55 - 1) {
          clearInterval(timer)
          this.msgText = '获取验证码'
          this.isSend = true
        }
      }.bind(this), 1000)
    },
    /**
     * @method 表单验证
     * @param {String} name 验证对象的参数名
     * @param {String} matchName 验证对象匹配状态的参数名
     */
    check (name, matchName) {
      this[name].length > 3
        ? this[matchName] = true
        : this[matchName] = false
    },
    /**
     * @method 进行后台验证，如果正确则切换到下一步
     */
    toStep2 () {
      // 前端验证失败 弹出提示
      if (!(this.phoneIsMatch && this.codeIsMatch)) {
        this.$toast('验证码不正确')
        return
      }
      // 后台验证通过则切换到下一步
      this.nextText = '正在验证...'
      this.nextClick = true
      setTimeout(() => {
        this.isNext = true
      }, 500)
    },
    /**
     * @method 返回上一步
     */
    backStep () {
      this.nextText = '下一步'
      this.nextClick = false
      this.isNext = false
    },
    /**
     * @method 注册
     */
    register () {
      if (!this.pwdIsMath) {
        this.$toast('请输入正确密码')
        return
      }
      this.isSubmit = true
      this.submitText = '正在注册...'
      setTimeout(() => {
        this.isSuccess = true
      }, 500)
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

.slide-enter-active, .slide-leave-active {
  transition: .4s ease-in-out;
}
.slide-enter, .slide-leave-active {
  transform: translate(100%, 0);
}
</style>
