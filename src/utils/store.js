export default {
  prefix: '58pige_',
  set (name, value) {
    value instanceof Object ? value = JSON.stringify(value) : ''
    localStorage.setItem(this.prefix + name, value)
  },
  get (name, json) {
    const value = localStorage.getItem(this.prefix + name)
    return json ? JSON.parse(value) : value
  },
  update (name, newVal) {
    let value = localStorage.getItem(this.prefix + name)
    value = JSON.parse(value)
    const data = Object.assign(value, newVal)
    this.set(name, data)
  },
  remove (name) {
    localStorage.removeItem(this.prefix + name)
  }
}
