<template>
  <div class="page bg-gray">
    <header class="app-header">
      <div class="back" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="page-title">我的店铺</div>
      <div class="link">
        <a>完成</a>
      </div>
    </header>
    <section class="edit-card">
      <div class="edit-item">
        <span class="edit-label">店铺名</span>
        <input class="edit-input" type="text" placeholder="请输入" value="江南皮革厂">
      </div>
      <div class="edit-item">
        <span class="edit-label">店铺地址</span>
        <input class="edit-input" type="text" placeholder="请输入" value="浙江温州">
      </div>
      <div class="edit-item">
        <span class="edit-label">联系人</span>
        <input class="edit-input" type="text" placeholder="请输入" value="黄鹤">
      </div>
      <div class="edit-item">
        <span class="edit-label">手机号</span>
        <input class="edit-input" type="text" placeholder="请输入" value="15800000123">
      </div>
    </section>
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
