const tabs = [
  { label: '全部', status: 'all' },
  { label: '待审核', status: 'pending' },
  { label: '待支付', status: 'payment_due' },
  { label: '已确认', status: 'confirmed' },
  { label: '已完成', status: 'completed' },
  { label: '已取消', status: 'cancelled' }
]
Page({
  data: { tabs, active: 'all', allRecords: [], visibleRecords: [], selectedText: '全部' },
  onShow() {
    const tabBar = this.getTabBar && this.getTabBar()
    if (tabBar) tabBar.setData({ selected: 3 })
    // TODO: once the backend exists, load the current user's bookings from the database.
    this.setData({ allRecords: [] })
    this.refreshList()
  },
  chooseTab(e) {
    const id = e.currentTarget.dataset.status
    const t = this.data.tabs.find((x) => x.status === id)
    this.setData({ active: id, selectedText: t ? t.label : '全部' })
    this.refreshList()
  },
  refreshList() {
    const { active, allRecords } = this.data
    this.setData({
      visibleRecords: allRecords.filter((x) => active === 'all' || x.status === active)
    })
  },
  toBooking() {
    wx.switchTab({ url: '/pages/category/category' })
  },
  toGuide() {
    wx.navigateTo({ url: '/pages/guide/guide' })
  }
})
