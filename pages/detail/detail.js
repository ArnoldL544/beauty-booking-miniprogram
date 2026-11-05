const { getService } = require('../../data/beauty')
const {
  getStyle,
  getPrice,
  priceNotes,
  getPriceText,
  formatPrice,
  getTierName,
  parseNailExtraSelection
} = require('../../data/price-list.js')
const { isFavorite, toggleFavorite } = require('../../utils/favorites')
Page({
  data: {
    serviceId: '',
    name: '',
    cover: '',
    needsStyle: false,
    action: 'booking',
    isReadyForBooking: false,
    styleId: '',
    styleName: '',
    priceOptions: [],
    selectedTier: '',
    selectedPrice: null,
    priceLabel: '',
    extraNote: '',
    favoritable: false,
    isFavorite: false,
    awaitsStyle: false,
    selectedNailExtras: [],
    extrasQuery: ''
  },
  onLoad(query) {
    const item = getService(query.serviceId)
    if (!item) {
      wx.showToast({ title: '未找到项目', icon: 'none' })
      return
    }
    const style = query.styleId ? getStyle(item.id, query.styleId) : null
    const hasTwoTiers = !!(style && style.imported !== undefined)
    const options = hasTwoTiers
      ? [
          {
            tier: 'domestic',
            name: '国产',
            price: style.domestic,
            label: formatPrice(style.domestic)
          },
          {
            tier: 'imported',
            name: '进口',
            price: style.imported,
            label: formatPrice(style.imported)
          }
        ]
      : []
    const flatPrice = style && style.price !== undefined ? style.price : null
    const selectedNailExtras = item.id === 'manicure' ? parseNailExtraSelection(query.extras) : []
    const displayPrice = style ? getPriceText(style) : item.priceText || ''
    this.setData({
      favoritable:
        !(item.id === 'manicure' || item.id === 'lashes') && (!item.needsStyle || !!style),
      isFavorite: false,
      serviceId: item.id,
      name: item.name,
      cover: item.id === 'manicure' ? '' : item.cover,
      isMedical: item.action === 'contact',
      needsStyle: !!item.needsStyle,
      awaitsStyle: !!item.needsStyle && !style,
      action: item.action,
      styleId: style ? style.id : '',
      styleName: style ? style.name : '',
      priceOptions: options,
      selectedTier: '',
      selectedPrice: flatPrice,
      priceLabel: displayPrice,
      extraNote: priceNotes[item.id] || '',
      selectedNailExtras,
      extrasQuery: selectedNailExtras.length
        ? encodeURIComponent(
            JSON.stringify(selectedNailExtras.map((x) => ({ id: x.id, quantity: x.quantity })))
          )
        : '',
      isReadyForBooking: !item.needsStyle || !!style
    })
    wx.setNavigationBarTitle({ title: style ? style.name : item.name })
    this.syncFavorite()
  },
  selectTier(e) {
    const tier = e.currentTarget.dataset.tier
    const price = getPrice(this.data.serviceId, this.data.styleId, tier)
    this.setData({
      selectedTier: tier,
      selectedPrice: price,
      priceLabel: price !== null ? formatPrice(price) : ''
    })
    this.syncFavorite()
  },
  getFavoriteKey() {
    const d = this.data
    return ['service', d.serviceId, d.styleId || 'standard', d.selectedTier || ''].join(':')
  },
  syncFavorite() {
    this.setData({ isFavorite: isFavorite(this.getFavoriteKey()) })
  },
  onShow() {
    if (this.data.serviceId) this.syncFavorite()
  },
  toggleFavorite() {
    const d = this.data
    if (!d.favoritable) return
    if (d.priceOptions.length && !d.selectedTier) {
      wx.showToast({ title: '请先选择进口或国产', icon: 'none' })
      return
    }
    const url =
      '/pages/detail/detail?serviceId=' +
      encodeURIComponent(d.serviceId) +
      (d.styleId ? '&styleId=' + encodeURIComponent(d.styleId) : '')
    const saved = toggleFavorite({
      key: this.getFavoriteKey(),
      type: 'service',
      title: d.styleName || d.name,
      subtitle: [d.name, getTierName(d.selectedTier)].filter(Boolean).join(' · '),
      image: d.cover || '',
      url
    })
    this.setData({ isFavorite: saved })
    wx.showToast({ title: saved ? '已加入收藏' : '已取消收藏', icon: 'none' })
  },
  contactClinic() {
    wx.showModal({
      title: '联系美容院',
      content:
        '商家微信联系方式暂未配置。后续将展示经确认的微信二维码或其他合规联系方式，当前无法直接打开个人微信名片。',
      showCancel: false,
      confirmText: '知道了'
    })
  },
  goBooking() {
    if (this.data.needsStyle && !this.data.styleId) {
      wx.showToast({ title: '请先选择具体款式', icon: 'none' })
      return
    }
    if (this.data.priceOptions.length && !this.data.selectedTier) {
      wx.showToast({ title: '请选择进口或国产', icon: 'none' })
      return
    }
    const parts = ['serviceId=' + encodeURIComponent(this.data.serviceId)]
    if (this.data.styleId) parts.push('styleId=' + encodeURIComponent(this.data.styleId))
    if (this.data.selectedTier) parts.push('tier=' + encodeURIComponent(this.data.selectedTier))
    if (this.data.extrasQuery) parts.push('extras=' + this.data.extrasQuery)
    wx.navigateTo({ url: '/pages/booking/booking?' + parts.join('&') })
  }
})
