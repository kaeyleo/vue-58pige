<template>
  <div>
    <header class="app-header">
      <div class="logo"></div>
      <nav>
        <a href="" class="nav-item">发布</a><a href="" class="nav-item">我的</a>
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
        <li class="info-item">
          <div class="content">
            <div class="title">水刺底仿猪皮革 无纺布底PU仿猪里皮</div>
            <div class="parameter">
              <div class="param-list left">
                <div class="param-item">
                  <span class="value">黄牛皮</span>
                  <span class="param">品种</span>
                </div>
                <div class="param-item">
                  <span class="value">A级</span>
                  <span class="param">皮胚</span>
                </div>
                <div class="param-item">
                  <span class="value">0.7mm</span>
                  <span class="param">厚度</span>
                </div>
              </div>
              <div class="price right">
                <span>¥14.00</span>
              </div>
            </div>
            <footer class="clear">
              <span class="left">成都盛泓超纤皮革经营部</span>
              <span class="right">成都武侯</span>
            </footer>
          </div>
          <div class="mark">企业认证</div>
        </li>
        <li class="info-item">
          <div class="content">
            <div class="title">新款彩色平纹纳帕牛皮革</div>
            <div class="parameter">
              <div class="param-list left">
                <div class="param-item">
                  <span class="value">黄牛皮</span>
                  <span class="param">品种</span>
                </div>
                <div class="param-item">
                  <span class="value">A级</span>
                  <span class="param">皮胚</span>
                </div>
                <div class="param-item">
                  <span class="value">1.2mm</span>
                  <span class="param">厚度</span>
                </div>
              </div>
              <div class="price right">
                <span>¥19.50</span>
              </div>
            </div>
            <footer class="clear">
              <span class="left">鼎茂皮革</span>
              <span class="right">广东 广州</span>
            </footer>
          </div>
          <!-- <div class="mark">企业认证</div> -->
        </li>
      </ul>
    </section>
    
  </div>
</template>

<script>
  
</script>

<style lang="scss">

$wrap: 4%;

.left {
  float: left;
}
.right {
  float: right;
}
.clear {
  clear: both;
  overflow: auto;
}

.app-header {
  position: fixed;
  top: 0;
  padding: 0 $wrap;
  width: 100%;
  height: 55px;
  box-sizing: border-box;
  z-index: 999;
}

.logo {
  float: left;
  margin-top: 12px;
  width: 30px;
  height: 30px;
  background: url('../../../assets/logo-white.png') no-repeat center;
  background-size: 100%;
}

nav {
  float: right;
  height: 100%;
  text-align: center;
}

.nav-item {
  padding: 6px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  line-height: 58px;
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
      font-size: 14px;
      color: #333;
      font-weight: normal;
      line-height: 38px;
    }
  }
}

.info-item {
  position: relative;
  padding: 10px $wrap;
  border-bottom: 1px solid #ECEEF3;
  .content {
    color: #333;
    .title {
      padding-right: 80px;
      font-size: 15px;
      font-weight: 500;
    }
    .parameter {
      margin: 10px 0;
      height: 32px;
    }
    footer {
      font-size: 13px;
      color: #878A92;
    }
  }
  .mark {
    position: absolute;
    top: 10px;
    right: 0;
    width: 62px;
    padding: 1px 0 1px 4px;
    font-size: 13px;
    color: #fff;
    text-align: center;
    background-color: #747DCF;
    border-radius: 12px 0 0 12px;
  }
}

.parameter {
  .param-list {
    display: flex;
    width: 60%;
    .param-item {
      flex: 1;
      text-align: center;
      border-right: 1px solid #ECEEF3;
      &:last-child {
        border-right: 0;
      }
      span {
        display: block;
        line-height: 1;
        &:first-child {
          margin-bottom: 3px;
        }
      }
      .value {
        font-size: 14px;
        font-weight: 500;
      }
      .param {
        font-size: 13px;
        color: #878A92;
      }
    }
  }
  .price {
    line-height: 1.6;
    text-align: right;
    span {
      font-size: 16px;
      font-weight: 500;
      color: #FF683E;
    }
  }
}
</style>
