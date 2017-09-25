<template>
  <div class="page bg-gray">
    <header class="app-header">
      <div class="back" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="page-title">个人资料</div>
    </header>
    <section class="profile-card">
      <div class="profile-item">
        <span class="profile-item-label">用户名</span>
        <i class="iconfont icon-icon1"></i>
        <span class="profile-item-content">黄鹤</span>
      </div>
      <div class="profile-item">
        <span class="profile-item-label">手机号</span>
        <i class="iconfont icon-icon1"></i>
        <span class="profile-item-content">123213123</span>
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

.profile-card {
  padding-left: $wrap;
  font-size: 4vw;
}
.profile-item {
  padding: 3vw $wrap 3vw 0;
  border-bottom: 1px solid #E9EDF0;
  overflow: auto;
  &:last-of-type {
    border-bottom: 0;
  }
  .profile-item-content, .iconfont {
    float: right;
  }
  .profile-item-content {
    margin-right: 2vw;
    color: #9A9FA4;
  }
  .iconfont {
    font-size: 5vw;
    color: #C5C9D2;
  }
}
</style>
