const { getService } = require('../../data/beauty')
const { getStyles, priceNotes, getPriceText, nailExtras } = require('../../data/price-list.js')
Page({
  data: {
    serviceId: '',
    serviceName: '',
    cover: '',
    variants: [],
    slots: [1, 2, 3],
    notes: '',
    hasPrices: false,
    noImages: false,
    nailExtras: [],
    showNailExtras: false,
    selectedExtraCount: 0,
    isMedical: false
  },
  onLoad(query) {
    const item = getService(query.serviceId)
    if (!item || !item.needsStyle) {
      wx.showToast({ title: '项目不存在', icon: 'none' })
      return
    }
    const variants = getStyles(item.id).map((v) => ({ ...v, priceLabel: getPriceText(v) }))
    this.setData({
      serviceId: item.id,
      serviceName: item.name,
      cover: item.id === 'manicure' ? '' : item.cover,
      variants,
      notes: priceNotes[item.id] || '',
      hasPrices: variants.length > 0,
      noImages: item.id === 'manicure' || !item.cover,
      isMedical: item.action === 'contact',
      nailExtras:
        item.id === 'manicure' ? nailExtras.map((extra) => ({ ...extra, quantity: 0 })) : [],
      showNailExtras: item.id === 'manicure'
    })
    wx.setNavigationBarTitle({ title: item.name + ' · 选择款式' })
  },
  changeNailExtra(e) {
    if (!this.data.showNailExtras) return
    const id = e.currentTarget.dataset.id
    const delta = Number(e.currentTarget.dataset.delta)
    if (delta !== 1 && delta !== -1) return
    const extras = this.data.nailExtras.map((extra) => {
      if (extra.id !== id) return extra
      const quantity = Math.max(0, Math.min(99, extra.quantity + delta))
      return { ...extra, quantity }
    })
    this.setData({
      nailExtras: extras,
      selectedExtraCount: extras.reduce((sum, extra) => sum + extra.quantity, 0)
    })
  },
  getExtrasQuery() {
    if (!this.data.showNailExtras) return ''
    const selected = this.data.nailExtras
      .filter((extra) => extra.quantity > 0)
      .map((extra) => ({ id: extra.id, quantity: extra.quantity }))
    return selected.length ? '&extras=' + encodeURIComponent(JSON.stringify(selected)) : ''
  },
  chooseStyle(e) {
    const styleId = e.currentTarget.dataset.id
    wx.navigateTo({
      url:
        '/pages/detail/detail?serviceId=' +
        encodeURIComponent(this.data.serviceId) +
        '&styleId=' +
        encodeURIComponent(styleId) +
        this.getExtrasQuery()
    })
  },
  pendingStyle() {
    wx.showToast({ title: '款式与价格待补充', icon: 'none' })
  },
  viewOverview() {
    wx.navigateTo({
      url:
        '/pages/detail/detail?serviceId=' +
        encodeURIComponent(this.data.serviceId) +
        this.getExtrasQuery()
    })
  }
})
