const { getFavorites, removeFavorite } = require('../../utils/favorites')
Page({
  data: {
    tabs: [
      { id: 'all', name: '全部' },
      { id: 'service', name: '美容项目' },
      { id: 'product', name: '护肤品' }
    ],
    active: 'all',
    all: [],
    visible: []
  },
  onShow() {
    this.setData({ all: getFavorites() })
    this.filter()
  },
  setTab(e) {
    this.setData({ active: e.currentTarget.dataset.id })
    this.filter()
  },
  filter() {
    const { all, active } = this.data
    this.setData({ visible: all.filter((x) => active === 'all' || x.type === active) })
  },
  open(e) {
    const item = this.data.visible[e.currentTarget.dataset.index]
    if (item && item.url) wx.navigateTo({ url: item.url })
  },
  remove(e) {
    const key = e.currentTarget.dataset.key
    this.setData({ all: removeFavorite(key) })
    this.filter()
  }
})
