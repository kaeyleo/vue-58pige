<template>
  <div class="page bg-gray">
    <div class="scroll-view">
      <header class="app-header header-fill">
        <div class="back" @click="goback">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="page-title">详情</div>
      </header>
      
      <section>
        <div class="content">
          <div class="title">
            <h1>{{ title }}</h1>
          </div>
          <div class="price"><strong>{{ price }}</strong>元/平方英尺</div>
          <footer class="statis">
            <span class="date">发布于{{ date }}</span>
            <span class="pv">{{ views }}次浏览</span>
          </footer>
        </div>
      </section>
      
      <section>
        <div class="content">
          <ul class="info-list">
            <li>
              <span class="name">商家名称</span><span class="value">{{ shop.name }}</span>
            </li>
            <li>
              <span class="name">商家地址</span><span class="value">{{ shop.address }}</span>
            </li>
            <li>
              <span class="name">联系人</span><span class="value">{{ shop.contact }}</span>
            </li>
          </ul>
          <!-- <div class="certi">
            <i class="iconfont icon-renzheng1"></i><span>企业认证</span>
          </div> -->
          <div class="call-button">
            <i class="iconfont icon-dianhua"></i>
            <a href="tel:15882424765">拨打电话</a>
          </div>
          <p class="warning">任何要求预付定金、汇款等方式均存在风险，谨防上当受骗。</p>
        </div>
      </section>

      <section class="parameter">
        <header><span>产品参数</span></header>
        <div class="content">
          <ul class="info-list">
            <li v-for="item in parameters">
              <span class="name">{{ item.name }}</span><span class="value">{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="detail-info" v-show="intro">
        <header><span>详细信息</span></header>
        <div class="content">
          <p>{{ intro }}</p>
          <!-- <br>
          <p>联系我时，请说是在58皮革网上看到的，谢谢！ </p> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      price: '',
      intro: '',
      shop: {},
      parameters: [],
      timestamp: '',
      views: 0
    }
  },
  created () {
    const infoId = this.$route.query.infoId
    // 获取数据
    const params = new URLSearchParams()
    params.append('info_id', infoId)
    this.$http.post('http://localhost/58pige/server/api/getDetail/', params)
      .then(res => {
        console.log(res.data)
        if (res.data.code === 200) {
          const data = res.data.data
          this.title = data.title
          this.price = data.price
          this.intro = data.intro
          this.shop = JSON.parse(data.shop)
          this.parameters = JSON.parse(data.parameters)
          this.timestamp = data.timestamp
          this.views = data.views
        } else if (res.data.code === 400) {
          this.$toast(res.data.msg)
          setTimeout(() => {
            this.$router.push('/home')
          }, 1000)
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    goback () {
      this.$route.query.backhome
        ? this.$router.push('/home')
        : this.$router.go(-1)
    }
  },
  computed: {
    date () {
      return this.timestamp.split(' ')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/subpage';

section {
  &:last-of-type {
    @include page-padding-bottom;
  }
}
.title {
  h1 {
    font-size: 5vw;
    font-weight: normal;
  }
}
.price {
  padding: 1vw 0;
  font-size: 3.6vw;
  strong {
    font-size: 4.6vw;
  }
}
.statis {
  margin-top: 1vw;
  font-size: 3.4vw;
  color: $fontGray;
  overflow: auto;
  .date {
    float: left;
  }
  .pv {
    float: right;
  }
}

.info-list {
  margin-bottom: 3vw;
  li {
    padding: 0.8vw 0;
    span {
      display: inline-block;
      font-size: 3.6vw;
    }
    .name {
      width: 20%;
      color: $fontGray;
    }
    .value {
      width: 80%;
    }
  }
}
.certi {
  padding: 2vw 2vw;
  margin: 3vw 0;
  font-size: 0;
  color: #FF9650;
  background-color: #FFFBF2;
  border-radius: 0.6vw;
  border: 1px solid #FFE8D5;
  .icon-renzheng1 {
    font-size: 3.4vw;
  }
  span {
    margin-left: 1vw;
    font-size: 3.6vw;
  }
}
.call-button {
  height: 11.2vw;
  color: #fff;
  text-align: center;
  line-height: 11.2vw;
  background-color: $primaryColor;
  border-radius: 0.6vw;
  .icon-dianhua {
    position: relative;
    top: -0.5vw;
    left: -2vw;
    font-size: 4vw;
  }
  a {
    margin-left: -2vw;
    font-size: 4vw;
    color: #fff;
  }
}
.warning {
  margin: 2vw 0;
  margin-bottom: 0;
  font-size: 3.2vw;
  color: $fontGray;
  text-align: center;
}

.detail-info {
  p {
    font-size: 3.6vw;
  }
}

.parameter {
  overflow: auto;
  .content {
    padding: 0 $wrap;
  }
  .info-list {
    float: right;
    width: 98%;
    margin-bottom: 0;
    li {
      padding: 3vw 0;
      border-bottom: 1px solid #ECEEF3;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
