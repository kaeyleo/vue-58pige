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
      <img src="../../../assets/logo-text.png" alt="logo">
    </div>
    <div class="login-form">
      <div class="input-item">
        <input type="tel" maxlength="11" placeholder="账户手机号" autocomplete="off" v-model="phone">
        <i class="iconfont icon-guanbi icon" v-show="phone" @click="clear('phone')"></i>
      </div>
      <div class="input-item">
        <input type="password" maxlength="16" placeholder="请输入密码" autocomplete="off" v-model="password" v-if="!isShow">
        <input type="text" maxlength="16" placeholder="请输入密码" autocomplete="off" v-model="password" v-if="isShow">
        <i class="iconfont icon-ai-eye icon" @click="showPwd"></i>
      </div>
      <div class="login-button" :class="{'button-avl': (phoneIsMatch && pwdIsMath) && !isSubmit}" @click="((phoneIsMatch && pwdIsMath) && !isSubmit) && login()">{{ submitText }}</div>
      <router-link class="other-act forget-pwd" to="/forget">忘记密码</router-link>
    </div>
  </div>
</template>

<script>
import store from '@/utils/store.js'
import validate from '@/utils/validate.js'

export default {
  data () {
    return {
      phone: null,
      password: null,
      phoneIsMatch: false,
      pwdIsMath: false,
      isShow: false,
      submitText: '登录',
      isSubmit: false
    }
  },
  watch: {
    /*
     * 验证手机号和验证码
     */
    phone: function (value) {
      this.phoneIsMatch = validate.phoneNumber(value)
    },
    password: function (value) {
      this.pwdIsMath = validate.password(value)
    }
  },
  methods: {
    goback () {
      this.$route.query.backhome
        ? this.$router.push('/home')
        : this.$router.go(-1)
    },
    clear (target) {
      this[target] = ''
    },
    showPwd () {
      this.isShow = !this.isShow
    },
    login () {
      this.isSubmit = true
      this.submitText = '正在登录'
      // 后台登录请求
      const params = new URLSearchParams()
      params.append('phone', this.phone)
      params.append('password', this.password)
      this.$http.post('http://localhost/58pige/server/api/login/', params)
        .then(res => {
          if (res.data.code === 200) {
            // 用户数据
            const uid = res.data.data.uid
            const name = res.data.data.name
            const phone = res.data.data.phone
            const login = true
            // 本地存储数据...
            store.get('user') === null
              ? store.set('user', {uid, name, phone, login})
              : store.update('user', {login})
            this.$toast('登录成功')
            this.$router.push('/home')
          } else if (res.data.code === 401) {
            this.$toast(res.data.msg)
            // 登录会话过期，跳转到登录页面...
          } else {
            this.$toast(res.data.msg)
          }
          // 恢复按钮状态
          this.isSubmit = false
          this.submitText = '登录'
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

.logo {
  margin: 6vw 0;
  img {
    display: block;
    margin: 0 auto;
    width: 14%;
  }
}
</style>
