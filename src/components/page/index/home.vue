<template>
  <div class="bg-gray">
    <header class="home-header" :class="{'header-fixed': isFixed}">
      <div class="logo"></div>
      <nav v-show="isLogin">
        <router-link to="/publish" class="nav-item">发布</router-link><router-link to="/profile" class="nav-item">我的</router-link>
      </nav>
      <nav v-show="!isLogin">
        <router-link to="/login" class="nav-item">登录</router-link><router-link to="/reg" class="nav-item">注册</router-link>
      </nav>
    </header>
    <div class="banner">
      <div class="slide">
        <img src="../../../assets/banner.png" alt="">
      </div>
    </div>
    <section>
      <header><h2>推荐商品</h2></header>
      <ul class="info-feeds">
        <router-link class="info-item" :to="{path: '/detail', query: {infoId: item.info_id}}" tag="li" v-for="item in list" key="item">
          <div class="icontent">
            <div class="title">{{ item.title }}</div>
            <div class="parameter">
              <div class="param-list left">
                <div class="param-item">
                  <span class="value">{{ item.parameters[0].value }}</span>
                  <span class="param">品种</span>
                </div>
                <div class="param-item">
                  <span class="value">{{ item.parameters[1].value }}</span>
                  <span class="param">皮胚</span>
                </div>
                <div class="param-item">
                  <span class="value">{{ item.parameters[2].value }}</span>
                  <span class="param">厚度</span>
                </div>
              </div>
              <div class="price right">
                <span>¥{{ item.price }}</span>
              </div>
            </div>
            <footer class="clear">
              <span class="left">{{ item.shop.name }}</span>
              <span class="right">{{ item.shop.address }}</span>
            </footer>
          </div>
          <div class="mark">企业认证</div>
        </router-link>
        <li class="load-more" @click="haveMore && loadMore()">{{ loadText }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import store from '@/utils/store.js'

export default {
  data () {
    return {
      isFixed: false,
      isLogin: false,
      list: [],
      page: 1,
      pageSize: 3,
      haveMore: true,
      loadText: '加载更多'
    }
  },
  created () {
    // 加载数据
    this.initData()
    // 判断是否登录
    if (store.get('user') !== null) {
      const userData = store.get('user', true)
      userData.login ? this.isLogin = true : ''
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.fixedheader)
    })
  },
  methods: {
    fixedheader () {
      let scroll = document.body.scrollTop
      scroll >= 140 ? this.isFixed = true : this.isFixed = false
    },
    // TODO: 获取banner数据
    initData () {
      this.getList()
    },
    getList () {
      const params = new URLSearchParams()
      params.append('page', this.page)
      params.append('pageSize', this.pageSize)
      this.$http.post('http://localhost/58pige/server/api/getInfoList/', params)
        .then(res => {
          if (res.data.code === 200) {
            const list = res.data.data.list
            if (list.length !== 0) {
              for (let i = 0; i < list.length; i++) {
                const item = list[i]
                item.shop = JSON.parse(item.shop)
                item.parameters = JSON.parse(item.parameters)
                this.list.push(item)
              }
            } else {
              this.haveMore = false
              this.loadText = '没有更多了'
              this.$toast('没有更多了')
            }
          }
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadMore () {
      if (!this.isLogin) {
        this.$toast('登录即可查看更多')
        return
      }
      // 加载下一页
      ++this.page
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/infolist';

.home-header {
  position: absolute;
  top: 0;
  padding: 0 $wrap;
  width: 100%;
  height: 13vw;
  box-sizing: border-box;
  z-index: 999;
}

.header-fixed {
  position: fixed;
  top: 0;
  background-image: -webkit-gradient(linear,left top,right top,from(#FF8F4E),to(#FF6449));
  box-shadow: 0 0 3vw rgba( 0, 0, 0, .2);
}

.logo {
  float: left;
  margin-top: 3vw;
  width: 6.6vw;
  height: 6.6vw;
  background: url('../../../assets/logo-white.png') no-repeat center;
  background-size: 100%;
}

nav {
  float: right;
  height: 100%;
  text-align: center;
}

.nav-item {
  padding: 0 1.5vw;
  font-size: 3.9vw;
  color: #fff;
  font-weight: 500;
  line-height: 14vw;
}

.bg {
  background-color: rgba( 255, 255, 255, 1);
  border-bottom: 1px solid #eee;
  .logo {
    background: url('../../../assets/logo.png') no-repeat center;
    background-size: 100%;
  }
  .nav-item {
    color: #858B9B;
  }
}

.slide {
  position: relative;
  background-color: #D3D8E5;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    // opacity: .3;
  }
  &:after {
    content: '';
    display: block;
    margin-top: 48%;
  }
} 

section {
  margin-top: 12px;
  background-color: #fff;
  header {
    padding: 0 $wrap;
    height: 36px;
    border-bottom: 1px solid #ECEEF3;
    h2 {
      margin: 0;
      font-size: 15px;
      color: #333;
      font-weight: normal;
      line-height: 38px;
    }
  }
}
.load-more {
  @include page-padding-bottom;
}
</style>
