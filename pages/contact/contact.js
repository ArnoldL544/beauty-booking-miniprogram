Page({
  contact() {
    wx.showModal({
      title: '联系方式待配置',
      content:
        '目前尚未确认正式联系方式。微信小程序不支持直接打开任意个人微信名片，后续会使用可用的微信客服或经确认的联系方式。',
      showCancel: false
    })
  }
})
