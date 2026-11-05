Page({
  data: {
    status: 'all',
    statusName: '全部',
    orders: [],
    visible: [],
    tabs: [
      { id: 'all', name: '全部' },
      { id: 'pending', name: '待确认' },
      { id: 'to_pay', name: '待付款' },
      { id: 'to_ship', name: '待发货' },
      { id: 'shipping', name: '待收货' },
      { id: 'completed', name: '已完成' },
      { id: 'cancelled', name: '已取消' }
    ]
  },
  onLoad(options) {
    const found = this.data.tabs.find((x) => x.id === options.status)
    if (found) this.setData({ status: found.id, statusName: found.name })
    this.update()
  },
  select(e) {
    const status = e.currentTarget.dataset.status
    const found = this.data.tabs.find((x) => x.id === status)
    this.setData({ status, statusName: found ? found.name : '全部' })
    this.update()
  },
  update() {
    this.setData({
      visible: this.data.orders.filter(
        (o) => this.data.status === 'all' || o.status === this.data.status
      )
    })
  },
  shopping() {
    wx.switchTab({ url: '/pages/products/products' })
  }
})
