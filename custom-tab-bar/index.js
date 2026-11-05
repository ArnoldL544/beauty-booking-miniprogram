Component({
  data: {
    selected: 0,
    tabs: [
      { pagePath: '/pages/index/index', label: '首页', icon: 'home' },
      { pagePath: '/pages/products/products', label: '护肤品', icon: 'bag' },
      { pagePath: '/pages/category/category', label: '美容预约', icon: '' },
      { pagePath: '/pages/records/records', label: '预约详情', icon: 'list' },
      { pagePath: '/pages/mine/mine', label: '我的', icon: 'user' }
    ]
  },
  methods: {
    switchTab(e) {
      const path = e.currentTarget.dataset.path
      wx.switchTab({ url: path })
    }
  }
})
