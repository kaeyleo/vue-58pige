<template>
  <div class="success-page">
    <i class="iconfont icon-chenggong"></i>
    <h2>{{ this.successData.title }}</h2>
    <ul>
      <router-link :to="{path: this.successData.button.path, query: this.successData.button.query}" tag="li" class="more">{{ this.successData.button.text }}</router-link>
      <router-link to="/home" tag="li" class="backhome">返回首页</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.successData)
  },
  props: ['successData']
}
</script>

<style lang="scss" scoped>
.success-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #fff;
  .iconfont {
    display: block;
    margin-top: 30%;
    font-size: 26vw;
    color: #5CD14F;
  }
  h2 {
    margin-top: 2vw;
    font-size: 6vw;
    font-weight: normal;
    color: #333;
  }
  ul {
    margin-top: 30vw;
    li {
      margin: 0 auto;
      padding: 2.4vw 0;
      width: 80%;
      border-radius: .8vw;
    }
    .more {
      font-size: 4.6vw;
      color: #fff;
      background-color: #FF7E5A;
    }
    .backhome {
      margin-top: 2vw;
      font-size: 4vw;
      color: #798490;
    }
  }
}
</style>
