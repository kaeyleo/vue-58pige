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
            <h1>闲置物品 寄卖置换 全新模式 全国招商加盟</h1>
          </div>
          <div class="price"><strong>12</strong>元/平方英尺</div>
          <footer class="statis">
            <span class="date">发布于2017.09.12</span>
            <span class="pv">128次浏览</span>
          </footer>
        </div>
      </section>
      
      <section>
        <div class="content">
          <ul class="info-list">
            <li>
              <span class="name">商家名称</span><span class="value">成都弘商达电子商务有限公司</span>
            </li>
            <li>
              <span class="name">商家地址</span><span class="value">成都成华八里小区</span>
            </li>
            <li>
              <span class="name">联系人</span><span class="value">张先生</span>
            </li>
          </ul>
          <div class="certi">
            <i class="iconfont icon-renzheng1"></i><span>企业认证</span>
          </div>
          <div class="call-button">
            <i class="iconfont icon-dianhua"></i>
            <span>拨打电话</span>
          </div>
          <p class="warning">任何要求预付定金、汇款等方式均存在风险，谨防上当受骗。</p>
        </div>
      </section>

      <section class="detail-info">
        <header><span>详细信息</span></header>
        <div class="content">
          <p>这里是备注信息...</p>
          <br>
          <p>联系我时，请说是在58皮革网上看到的，谢谢！ </p>
        </div>
      </section>

      <section class="parameter">
        <header><span>产品参数</span></header>
        <div class="content">
          <ul class="info-list">
            <li>
              <span class="name">品种</span><span class="value">黄牛皮</span>
            </li>
            <li>
              <span class="name">皮层</span><span class="value">头层</span>
            </li>
            <li>
              <span class="name">厚度</span><span class="value">1.3mm</span>
            </li>
            <li>
              <span class="name">产地</span><span class="value">进口</span>
            </li>
            <li>
              <span class="name">颜色</span><span class="value">深棕色</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
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
  font-size: 4vw;
  strong {
    font-size: 5vw;
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
  span {
    margin-left: -2vw;
    font-size: 4vw;
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
