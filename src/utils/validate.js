/**
 * 表单验证
 */

export default {
  // 手机号验证
  phoneNumber (value) {
    return /^1[34578]\d{9}$/.test(value)
  },
  // 密码验证
  password (value) {
    return /^[a-zA-Z0-9]{6,12}$/.test(value)
  },
  // 短信验证码验证
  code (value) {
    return /^\d{6}$/.test(value)
  }
}
