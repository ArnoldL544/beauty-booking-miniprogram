Page({
  data: {
    entries: [
      {
        name: '我的收藏',
        tip: '美容款式、搭配与护肤品',
        icon: '♡',
        url: '/pages/favorites/favorites'
      },
      { name: '收货地址', tip: '管理快递收货信息', icon: '⌖', url: '/pages/address/address' },
      { name: '联系商家', tip: '咨询商品和美容服务', icon: '☏', url: '/pages/contact/contact' },
      {
        name: '售后服务',
        tip: '提交申请、查看处理说明',
        icon: '✧',
        url: '/pages/aftersales/aftersales'
      },
      { name: '预约须知', tip: '营业时间、定金与改期规则', icon: '▤', url: '/pages/guide/guide' },
      { name: '关于我们', tip: '了解服务与商家', icon: 'ⓘ', url: '/pages/about/about' }
    ],
    orderShortcuts: [
      { name: '待确认', status: 'pending', icon: '/assets/icons/order-clock.png' },
      { name: '待发货', status: 'to_ship', icon: '/assets/icons/order-package.png' },
      { name: '待收货', status: 'shipping', icon: '/assets/icons/order-truck.png' },
      { name: '已完成', status: 'completed', icon: '/assets/icons/order-check.png' }
    ]
  },
  onShow() {
    const tabBar = this.getTabBar && this.getTabBar()
    if (tabBar) tabBar.setData({ selected: 4 })
  },
  goProfile() {
    wx.navigateTo({ url: '/pages/profile/profile' })
  },
  goOrders(e) {
    const status = e.currentTarget.dataset.status || 'all'
    wx.navigateTo({ url: '/pages/orders/orders?status=' + status })
  },
  openEntry(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url })
  }
})
