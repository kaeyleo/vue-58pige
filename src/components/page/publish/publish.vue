<template>
  <div class="page bg-gray">
    <header class="app-header header-fill">
      <div class="back" @click="goback"><span>取消</span></div>
      <div class="page-title">发布</div>
      <div class="link">
        <a>提交</a>
      </div>
    </header>
    <section class="edit-card">
      <div class="edit-item">
        <span class="edit-label">标题</span>
        <input class="edit-input" type="text" placeholder="请输入">
      </div>
      <div class="edit-item">
        <span class="edit-label">价格</span>
        <input class="edit-input" type="text" placeholder="请输入">
      </div>
      <div class="edit-item">
        <textarea class="edit-textarea" rows="3" placeholder="详细信息（选填）"></textarea>
      </div>
    </section>
    <section>
      <div class="content">
        <ul class="parameter">
          <li>
            <input class="name" type="text" readonly value="品种">
            <input class="value" type="text" placeholder="例：牛皮、羊皮">
          </li>
          <li>
            <input class="name" type="text" readonly value="皮层">
            <input class="value" type="text" placeholder="例：头层">
          </li>
          <li>
            <input class="name" type="text" readonly value="厚度">
            <input class="value" type="text" placeholder="例：1.3mm">
          </li>
          <li>
            <input class="name" type="text" placeholder="请填写参数名">
            <input class="value" type="text" placeholder="请填写参数信息">
          </li>
        </ul>
        <div class="add-button">添加参数</div>
      </div>
    </section>
    <transition name="slide">
      <div class="success-page" v-if="isSuccess">
        <i class="iconfont icon-chenggong"></i>
        <h2>发布成功</h2>
        <ul>
          <router-link :to="{path: '/detail', query: {infoId: 123, routerFrom: 'publish'}}" tag="li" class="more">立即查看</router-link>
          <router-link to="/home" tag="li" class="backhome">返回首页</router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSuccess: false
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
@import '../../../style/subpage';

.page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

textarea, input {
  &::-webkit-input-placeholder {
    color: #9A9FA4;
  }
}

.edit-card, .edit-input, .edit-textarea {
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
    display: inline-block;
    color: #9A9FA4;
    width: 20%;
  }
  .edit-input {
    margin-top: .2vw;
    float: right;
    width: 80%;
    color: #333;
  }
  .edit-textarea {
    width: 100%;
    display: inline-block;
    outline: none;
    resize: none;
  }
}

.parameter {
  li {
    overflow: auto;
    padding: 3vw 0;
    border-bottom: 1px solid #ECEEF3;
    input {
      float: left;
      display: inline-block;
      font-size: 4vw;
    }
    .name {
      margin-top: .2vw;
      width: 50%;
      color: #333;
    }
    .value {
      width: 50%;
    }
  }
}
.add-button {
  display: block;
  margin: 6vw auto 0 auto;
  padding: 1.4vw 0;
  width: 100%;
  font-size: 3.8vw;
  color: #99A1A7; 
  border: 1px dashed #BBC3CB;
  border-radius: 5vw;   
  text-align: center;
  &:active {
    background-color: #F6F7F9;
  }
}

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

.slide-enter-active, .slide-leave-active {
  transition: .4s ease-in-out;
}
.slide-enter, .slide-leave-active {
  transform: translate(100%, 0);
}
</style>
