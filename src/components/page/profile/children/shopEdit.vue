<template>
  <div class="page bg-gray">
    <header class="app-header">
      <div class="back" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="page-title">我的店铺</div>
      <div class="link" v-show="createShop" @click="submit">
        <div>完成</div>
      </div>
    </header>
    <div v-show="!createShop && !isCreated">
      <h3 class="tips">您还没有店铺</h3>
      <div class="button button-primary" @click="createShop = true">立即创建</div>
    </div>
    <div v-show="isCreated">
      <section class="edit-card">
        <div class="edit-item">
          <span class="edit-label">店铺名</span>
          <input class="edit-input" type="text" readonly v-model="shop.name">
        </div>
        <div class="edit-item">
          <span class="edit-label">店铺地址</span>
          <input class="edit-input" type="text" readonly v-model="shop.address">
        </div>
        <div class="edit-item">
          <span class="edit-label">联系人</span>
          <input class="edit-input" type="text" readonly v-model="shop.contact">
        </div>
        <div class="edit-item">
          <span class="edit-label">手机号</span>
          <input class="edit-input" type="text" readonly v-model="shop.phone">
        </div>
      </section>
      <div class="button button-warn" @click="del">删除店铺</div>
    </div>
    <div v-show="createShop">
      <section class="edit-card">
        <div class="edit-item">
          <span class="edit-label">店铺名</span>
          <input class="edit-input" type="text" placeholder="请输入" v-model="shop.name">
        </div>
        <div class="edit-item">
          <span class="edit-label">店铺地址</span>
          <input class="edit-input" type="text" placeholder="请输入" v-model="shop.address">
        </div>
        <div class="edit-item">
          <span class="edit-label">联系人</span>
          <input class="edit-input" type="text" placeholder="请输入" v-model="shop.contact">
        </div>
        <div class="edit-item">
          <span class="edit-label">手机号</span>
          <input class="edit-input" type="text" placeholder="请输入" v-model="shop.phone">
        </div>
      </section>
      <div class="button button-warn" @click="goback">取消</div>
    </div>
  </div>
</template>

<script>
import store from '@/utils/store.js'
import validate from '@/utils/validate.js'

export default {
  data () {
    return {
      isCreated: false,
      createShop: false,
      shop: {
        id: null,
        name: null,
        address: null,
        contact: null,
        phone: null
      }
    }
  },
  created () {
    // 是否有店铺
    const params = new URLSearchParams()
    params.append('uid', store.get('user', true).uid)
    this.$http.post('http://localhost/58pige/server/api/queryShop/', params)
      .then(res => {
        console.log(res)
        if (res.data.code === 200) {
          this.isCreated = true
          // 设置数据
          const data = res.data.data
          this.shop.id = data.id
          this.shop.name = data.name
          this.shop.address = data.address
          this.shop.contact = data.contact
          this.shop.phone = data.phone
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    del () {
      confirm('确认删除吗？')
      // 调删除店铺接口
      const params = new URLSearchParams()
      params.append('sid', this.shop.id)
      this.$http.post('http://localhost/58pige/server/api/deleteShop/', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.$toast('删除成功')
            this.isCreated = false
            // 设置数据
            this.shop.id = null
            this.shop.name = null
            this.shop.address = null
            this.shop.contact = null
            this.shop.phone = null
          } else {
            this.$toast(res.data.msg)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    check () {
      if (this.shop.name === null) {
        this.$toast('店铺名不为空')
        return
      }
      if (this.shop.address === null) {
        this.$toast('地址不为空')
        return
      }
      if (this.shop.contact === null) {
        this.$toast('联系人必填')
        return
      }
      if (!validate.phoneNumber(this.shop.phone)) {
        this.$toast('请填写正确的手机号')
        return
      }
    },
    submit () {
      this.check()
      // 提交创建店铺
      const params = new URLSearchParams()
      params.append('uid', store.get('user', true).uid)
      params.append('name', this.shop.name)
      params.append('address', this.shop.address)
      params.append('contact', this.shop.contact)
      params.append('phone', this.shop.phone)
      this.$http.post('http://localhost/58pige/server/api/createShop/', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 200) {
            this.$toast('店铺创建成功')
            // 创建成功，切换模板状态
            this.isCreated = true
            this.createShop = false
          } else {
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
.tips {
  margin-top: 30%;
  font-size: 6vw;
  font-weight: normal;
  text-align: center;
}
.button {
  margin: 0 auto;
  padding: 2vw 0;
  width: 60%;
  font-size: 4vw;
  text-align: center;
  border-radius: .6vw;
  &:active {
    background-color: #E1E5EC;
  }
}
.button-primary {
  margin-top: 2vw;
  color: #FF6A42;
}
.button-warn {
  margin-top: 4vw;
  color: #FD4444;
}
</style>
