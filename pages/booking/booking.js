const { getService } = require('../../data/beauty')
const {
  getStyle,
  getPriceText,
  getTierName,
  priceNotes,
  parseNailExtraSelection
} = require('../../data/price-list.js')
Page({
  data: {
    serviceName: '',
    serviceId: '',
    styleName: '',
    selectedTierName: '',
    priceText: '',
    priceNote: '',
    username: '',
    phone: '',
    date: '',
    time: '',
    medicalNotice: false,
    minDate: '',
    selectedNailExtras: []
  },
  onLoad(options) {
    const item = getService(options.serviceId)
    if (!item) {
      wx.showToast({ title: '项目不存在', icon: 'none' })
      return
    }
    const style = options.styleId ? getStyle(item.id, options.styleId) : null
    const tier = options.tier === 'imported' || options.tier === 'domestic' ? options.tier : ''
    const today = new Date()
    const y = today.getFullYear()
    const m = String(today.getMonth() + 1).padStart(2, '0')
    const d = String(today.getDate()).padStart(2, '0')
    this.setData({
      serviceName: item.name,
      serviceId: item.id,
      styleName: style ? style.name : '',
      selectedTierName: getTierName(tier),
      priceText: style ? getPriceText(style) : item.priceText || '价格待确认',
      priceNote: priceNotes[item.id] || '',
      medicalNotice: !!item.medicalNotice,
      selectedNailExtras: item.id === 'manicure' ? parseNailExtraSelection(options.extras) : [],
      minDate: `${y}-${m}-${d}`
    })
  },
  inputName(e) {
    this.setData({ username: e.detail.value })
  },
  inputPhone(e) {
    this.setData({ phone: e.detail.value })
  },
  changeDate(e) {
    this.setData({ date: e.detail.value })
  },
  changeTime(e) {
    this.setData({ time: e.detail.value })
  },
  submitBooking() {
    const d = this.data
    if (!d.username.trim() || !d.phone.trim() || !d.date || !d.time) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    wx.showModal({
      title: '预约功能尚未上线',
      content: '目前是前端演示，预约信息不会保存或发送给商家。接入数据库和审核系统后才能正式提交。',
      showCancel: false
    })
  }
})
