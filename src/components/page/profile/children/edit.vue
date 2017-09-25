<template>
  <div class="page bg-gray">
    <header class="app-header">
      <div class="back" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="page-title">修改用户名</div>
    </header>
    <section>
      <div class="content">
        <input class="name-input" type="text" v-model="name">
        <div class="submit-button">保存</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '黄鹤'
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
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
section {
  background-color: transparent;
}
.name-input {
  padding: 0 2vw;
  width: 100%;
  height: 9vw;
  font-size: 4vw;
  border-radius: 0.6vw;
}
.submit-button {
  margin-top: 6vw;
  padding: 2vw 0;
  font-size: 4.2vw;
  color: #fff;
  text-align: center;
  background-color: $primaryColor;
  border-radius: 0.6vw;
}
</style>
