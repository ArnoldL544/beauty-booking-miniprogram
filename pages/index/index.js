// 首页：效果展示轮播 + 促销活动（暂无活动时显示占位）。
Page({
  data: {
    comparisonImages: [
      { id: 'effect-01', src: '/assets/comparisons/effect-01.jpg' },
      { id: 'effect-02', src: '/assets/comparisons/effect-02.jpg' },
      { id: 'effect-03', src: '/assets/comparisons/effect-03.jpg' }
    ],
    promotions: [] // 示例结构：{ id: 'promo-1', title: '...', image: '', description: '' }
  },
  onShow() {
    const tabBar = this.getTabBar && this.getTabBar()
    if (tabBar) tabBar.setData({ selected: 0 })
  }
})
