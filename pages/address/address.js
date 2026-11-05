Page({
  onAdd() {
    wx.showModal({
      title: '收货地址管理待接入',
      content:
        '当前还没有连接用户账户和订单数据库。为避免收货信息意外丢失，暂不保存真实收货地址。后端完成后将支持多地址和默认地址。',
      showCancel: false
    })
  }
})
