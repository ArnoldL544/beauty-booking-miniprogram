// Home: results carousel + promotions (shows a placeholder when there are none).
Page({
  data: {
    comparisonImages: [
      { id: 'effect-01', src: '/assets/comparisons/effect-01.jpg' },
      { id: 'effect-02', src: '/assets/comparisons/effect-02.jpg' },
      { id: 'effect-03', src: '/assets/comparisons/effect-03.jpg' }
    ],
    promotions: [] // Example shape: { id: 'promo-1', title: '...', image: '', description: '' }
  },
  onShow() {
    const tabBar = this.getTabBar && this.getTabBar()
    if (tabBar) tabBar.setData({ selected: 0 })
  }
})
