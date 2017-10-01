<template>
  <div class="page bg-gray">
    <header class="app-header">
      <div class="back" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="page-title">个人资料</div>
      <div class="link">
        <div @click="submit">完成</div>
      </div>
    </header>
    <section class="edit-card">
      <div class="edit-item">
        <span class="edit-label">用户名</span>
        <input class="edit-input" type="text" placeholder="请输入" v-model="name">
      </div>
      <div class="edit-item">
        <span class="edit-label">手机号</span>
        <input class="edit-input" type="text" readonly v-model="phone">
      </div>
    </section>
  </div>
</template>

<script>
import store from '@/utils/store.js'

export default {
  data () {
    return {
      id: '',
      name: '',
      phone: ''
    }
  },
  created () {
    // 初始化
    const userData = this.$route.params
    this.id = userData.uid
    this.name = userData.name
    this.phone = userData.phone
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    submit () {
      if (this.name.length < 2) {
        this.$toast('用户名至少2位')
        return
      }
      if (this.name.length > 8) {
        this.$toast('用户名最多8位')
        return
      }
      // 提交
      const params = new URLSearchParams()
      params.append('id', this.id)
      params.append('name', this.name)
      this.$http.post('http://localhost/58pige/server/api/updateUser/', params)
        .then(res => {
          console.log(res.data)
          if (res.data.code === 200) {
            // 写入本地
            store.update('user', {name: this.name})
            this.$toast('修改成功')
          } else if (res.data.code === 400) {
            this.$toast(res.data.msg)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/subpage';

.page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.edit-card, .edit-input {
  font-size: 4vw;
}
.edit-card {
  padding-left: $wrap;
}
.edit-item {
  padding: 3vw $wrap 3vw 0;
  border-bottom: 1px solid #E9EDF0;
  overflow: auto;
  &:last-of-type {
    border-bottom: 0;
  }
  .edit-label {
    color: #9A9FA4;
  }
  .edit-input {
    margin-top: .6vw;
    float: right;
    color: #333;
    width: 60%;
    text-align: right;
  }
}
</style>
