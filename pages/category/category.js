const { categories } = require('../../data/beauty')
Page({
  data: { categories },
  onShow() {
    const tabBar = this.getTabBar && this.getTabBar()
    if (tabBar) tabBar.setData({ selected: 2 })
  },
  goCategory(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: '/pages/services/services?categoryId=' + id })
  }
})
