<template>
  <div class="page bg-gray">
    <header class="app-header header-fill">
      <div class="back" @click="goback"><span>取消</span></div>
      <div class="page-title">发布</div>
      <div class="link" @click="submit">
        <div>提交</div>
      </div>
    </header>
    <section class="edit-card">
      <div class="edit-item">
        <span class="edit-label">标题</span>
        <input class="edit-input" type="text" placeholder="请输入" v-model="title">
      </div>
      <div class="edit-item">
        <span class="edit-label">价格</span>
        <input class="edit-input" type="number" placeholder="请输入" v-model="price">
      </div>
      <div class="edit-item">
        <textarea class="edit-textarea" rows="3" placeholder="详细信息（选填）" v-model="intro"></textarea>
      </div>
    </section>
    <section>
      <div class="content">
        <ul class="parameter">
          <li v-for="item in parameter">
            <input class="name" type="text" readonly :value="item.name">
            <input class="value" type="text" :placeholder="item.placeholder" v-model="item.value">
          </li>
          <li v-for="(item, index) in customParam" class="custom">
            <input class="name" type="text" placeholder="请填写参数名" v-model="item.name">
            <input class="value" type="text" placeholder="请填写参数信息" v-model="item.value">
            <i class="iconfont icon-guanbi" @click="remove(index)"></i>
          </li>
        </ul>
        <div class="add-button" v-show="customParam.length < 3" @click="addParam">添加参数</div>
      </div>
    </section>
    <transition name="slide">
      <success :successData="successData" v-if="isSuccess"></success>
    </transition>
  </div>
</template>

<script>
import store from '@/utils/store.js'
import success from '@/components/common/success'

export default {
  data () {
    return {
      title: '',
      price: '',
      intro: '',
      parameter: [
        {name: '品种', value: '', placeholder: '例：牛皮、羊皮'},
        {name: '皮层', value: '', placeholder: '例：头层'},
        {name: '厚度', value: '', placeholder: '例：1.3mm'}
      ],
      customParam: [],
      successData: {
        title: '发布成功',
        button: {
          text: '立即查看',
          path: '/detail',
          query: {
            infoId: '',
            backhome: true
          }
        }
      },
      isSuccess: false
    }
  },
  components: {
    success
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    addParam () {
      this.customParam.push({name: '', value: ''})
    },
    remove (index) {
      this.customParam.splice(index, 1)
    },
    check (handler) {
      let flag = true
      // 固定参数验证
      for (let i = 0; i < this.parameter.length; i++) {
        const row = this.parameter[i]
        if (row.value === '') {
          this.$toast('参数信息不为空')
          flag = false
        }
      }
      // 自定义参数验证
      for (let i = 0; i < this.customParam.length; i++) {
        const row = this.customParam[i]
        if (row.name === '') {
          this.$toast('自定义参数名缺失')
          flag = false
        }
        if (row.value === '') {
          this.$toast('自定义参数信息不为空')
          flag = false
        }
      }
      if (!/^\+?(?!0+(\d|(\.00?)?$))\d+(\.\d\d?)?$/.test(this.price)) {
        this.$toast('请填写正确的价格')
        flag = false
      }
      if (this.title === '' || this.title.length < 4) {
        this.$toast('标题至少4个字')
        flag = false
      }
      return flag
    },
    mergeParam () {
      // 拷贝参数对象，删除placeholder属性
      const param = JSON.parse(JSON.stringify(this.parameter))
      for (let i = 0; i < param.length; i++) {
        delete param[i].placeholder
      }
      // 合并参数对象，打包成对象字符串
      const data = param.concat(this.customParam)
      console.log(data)
      return JSON.stringify(data)
    },
    submit () {
      // 表单验证
      if (this.check()) {
        // 整合请求数据
        const params = new URLSearchParams()
        params.append('uid', store.get('user', true).uid)
        params.append('title', this.title)
        params.append('price', this.price)
        params.append('intro', this.intro)
        params.append('param', this.mergeParam())
        // 发送请求
        this.$http.post('http://localhost/58pige/server/api/publish/', params)
          .then(res => {
            if (res.data.code === 200) {
              this.successData.button.query.infoId = res.data.data.info_id
              this.isSuccess = true
            } else if (res.data.code === 401) {
              this.$toast(res.data.msg)
              // 登录会话过期，跳转到登录页面...
              store.update('user', {
                login: false
              })
              this.$router.push('/login')
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
      width: 40%;
      color: #333;
    }
    .value {
      width: 60%;
    }
    
  }
  .custom {
    .value {
      width: 52%;
    }
    .icon-guanbi {
      width: 8%;
      font-size: 4.6vw;
      color: #ccc;
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

.slide-enter-active, .slide-leave-active {
  transition: .4s ease-in-out;
}
.slide-enter, .slide-leave-active {
  transform: translate(100%, 0);
}
</style>
