const { getCategory, getService } = require('../../data/beauty')
Page({
  data: { categoryName: '', items: [] },
  onLoad(query) {
    const category = getCategory(query.categoryId)
    if (!category) {
      wx.showToast({ title: '分类不存在', icon: 'none' })
      return
    }
    this.setData({
      categoryName: category.name,
      items: category.items.map((id) => getService(id)).filter(Boolean)
    })
    wx.setNavigationBarTitle({ title: category.name })
  },
  openService(e) {
    const item = getService(e.currentTarget.dataset.id)
    if (!item) return
    const path = item.needsStyle ? '/pages/styles/styles' : '/pages/detail/detail'
    wx.navigateTo({ url: path + '?serviceId=' + encodeURIComponent(item.id) })
  }
})
