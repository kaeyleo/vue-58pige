import ToastComponent from './toast'

const Toast = {}

/**
 * @method 注册插件
 * @param {Function} Vue构造器
 */
Toast.install = (Vue) => {
  const ToastConstructor = Vue.extend(ToastComponent)
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  /**
   * @method 提示框
   * @param {String} msg 内容
   * @param {Number} duration 显示时间, 默认2000
   */
  Vue.prototype.$toast = (msg, duration = 2000) => {
    instance.show = true
    instance.message = msg
    setTimeout(() => {
      instance.show = false
    }, duration)
  }
}

export default Toast
