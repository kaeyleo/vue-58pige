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
          <input type="tel" class="code-input" maxlength="6" placeholder="验证码" :readonly="!sendOnce" @click="codeTip" autocomplete="off" v-model="code">
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
import validate from '@/utils/validate.js'
import success from '@/components/common/success'

export default {
  data () {
    return {
      phone: null,
      code: null,
      password: null,
      server: {
        phone: null,
        code: null
      },
      sendOnce: false,
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
    phone: function (value) {
      this.phoneIsMatch = validate.phoneNumber(value)
    },
    code: function (value) {
      this.codeIsMatch = validate.code(value)
    },
    password: function (value) {
      this.pwdIsMath = validate.password(value)
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
    codeTip () {
      !this.sendOnce ? this.$toast('请获取验证码') : ''
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
      const params = new URLSearchParams()
      params.append('phone', this.phone)
      this.$http.post('http://localhost/58pige/server/api/sendRegMsg/', params)
        .then(res => {
          if (res.data.code === 200) {
            !this.sendOnce ? this.sendOnce = true : ''
            this.server.phone = res.data.data.phone
            this.server.code = res.data.data.code
          } else if (res.data.code === 401) {
            this.$toast(res.data.msg)
            // 登录会话过期，跳转到登录页面...
          } else {
            this.$toast(res.data.msg)
            clearInterval(timer)
          }
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
      // 验证码按钮倒计时
      let seconds = 60
      this.isSend = false
      const timer = setInterval(() => {
        --seconds
        this.msgText = `重新发送(${seconds})`
        if (seconds === 55 - 1) {
          clearInterval(timer)
          this.msgText = '获取验证码'
          this.isSend = true
        }
      }, 1000)
    },
    /**
     * @method 进行后台验证，如果正确则切换到下一步
     */
    toStep2 () {
      // 表单验证
      if (this.code === this.server.code) {
        this.$toast('验证码错误')
        return
      }
      if (this.phone === parseInt(this.server.phone)) {
        this.$toast('手机号不正确')
        return
      }
      // 后台验证通过则切换到下一步
      this.nextText = '正在验证...'
      this.nextClick = true
      this.isNext = true
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
      // 调后台 注册api
      const params = new URLSearchParams()
      params.append('password', this.password)
      params.append('phone', this.server.phone)
      this.$http.post('http://localhost/58pige/server/api/register/', params)
        .then(res => {
          if (res.data.code === 200) {
            this.isSuccess = true
          } else if (res.data.code === 401) {
            this.$toast(res.data.msg)
            // 登录会话过期，跳转到登录页面...
          } else {
            this.$toast(res.data.msg)
            this.isSubmit = false
            this.submitText = '确认'
          }
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
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
