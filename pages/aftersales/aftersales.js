Page({
  data: {
    type: 'beauty',
    description: '',
    images: [],
    typeOptions: [
      { id: 'beauty', label: '美容服务' },
      { id: 'product', label: '护肤品订单' }
    ]
  },
  chooseType(e) {
    this.setData({ type: e.currentTarget.dataset.id })
  },
  input(e) {
    this.setData({ description: e.detail.value })
  },
  addImages() {
    wx.chooseMedia({
      count: 3,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const images = (res.tempFiles || []).map((x) => x.tempFilePath).filter(Boolean)
        this.setData({ images: images.slice(0, 3) })
      }
    })
  },
  preview(e) {
    wx.previewImage({ urls: this.data.images, current: e.currentTarget.dataset.src })
  },
  submit() {
    wx.showModal({
      title: '售后功能尚未接入',
      content:
        '目前未连接订单数据库和管理员系统。表单和图片不会上传，也不会产生售后申请。正式上线后需要先选择对应的真实订单。',
      showCancel: false
    })
  }
})
