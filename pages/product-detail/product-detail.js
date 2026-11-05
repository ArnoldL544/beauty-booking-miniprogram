const { getProduct } = require('../../data/products')
const { isFavorite, toggleFavorite } = require('../../utils/favorites')

Page({
  data: {
    product: null,
    isFavorite: false
  },
  onLoad(options) {
    const item = getProduct(options.id)
    if (!item) {
      wx.showToast({ title: '没有找到该商品', icon: 'none' })
      return
    }
    this.setData({ product: item, isFavorite: isFavorite('product:' + item.id) })
    wx.setNavigationBarTitle({ title: item.name })
  },
  onShow() {
    if (this.data.product)
      this.setData({ isFavorite: isFavorite('product:' + this.data.product.id) })
  },
  toggleFavorite() {
    const item = this.data.product
    if (!item) return
    const saved = toggleFavorite({
      key: 'product:' + item.id,
      type: 'product',
      title: item.name,
      subtitle: item.brand || '护肤品',
      image: item.cover || '',
      url: '/pages/product-detail/product-detail?id=' + encodeURIComponent(item.id)
    })
    this.setData({ isFavorite: saved })
    wx.showToast({ title: saved ? '已加入收藏' : '已取消收藏', icon: 'none' })
  },
  contactSeller() {
    wx.showModal({
      title: '联系商家购买',
      content: '商家联系方式尚未确认，当前无法发起购买咨询。确认联系渠道后会开通此功能。',
      showCancel: false,
      confirmText: '知道了'
    })
  },
  previewImage(e) {
    const current = e.currentTarget.dataset.src
    const images = this.data.product && this.data.product.images
    if (!current || !images || images.length === 0) return
    wx.previewImage({ current, urls: images })
  }
})
