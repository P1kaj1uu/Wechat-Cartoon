// packageB/pages/chapter/chapter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 章节图漫列表数据
    chapterList: [],
    // 当前章节标题
    title: '',
    // 上一集Id
    prevId: '',
    // 下一集Id
    nextId: ''
  },
  // 前往上一集
  // ToprevFn() {
  //   wx.showLoading({
  //     title: "拼命加载中...",
  //     mask: true, //是否显示触摸蒙版，禁止穿透
  //     success: () => {}
  //   })
  //   wx.request({
  //     url: 'https://www.kuaikanmanhua.com//v2/pweb/comic/' + `${this.data.prevId}`,
  //     method: 'GET',
  //     success: res => {
  //       // 当前集的图片漫画
  //       let figures = res.data.data.comic_info.comic_images
  //       // 当前集的图片漫画标题
  //       let title = res.data.data.comic_info.title
  //       // 上一集Id
  //       let prevId = res.data.data.previous_comic_info.id
  //       // 下一集Id
  //       let nextId = res.data.data.next_comic_info.id
  //       wx.setStorageSync('figures', figures)
  //       wx.setStorageSync('title', title)
  //       wx.setStorageSync('prevId', prevId)
  //       wx.setStorageSync('nextId', nextId)
  //       wx.redirectTo({
  //         url: '../chapter/chapter',
  //       })
  //       console.log(res)
  //     },
  //     fail: err => {
  //       console.log(err)
  //       wx.showToast({
  //         title: '出错啦...',
  //         icon: 'none'
  //       })
  //     },
  //     complete: () => {
  //       wx.hideLoading({
  //         success: () => {},
  //       })
  //     }
  //   })
  // },
  // 前往下一集
  // TonextFn() {
  //   wx.showLoading({
  //     title: "拼命加载中...",
  //     mask: true, //是否显示触摸蒙版，禁止穿透
  //     success: () => {}
  //   })
  //   wx.request({
  //     url: 'https://www.kuaikanmanhua.com//v2/pweb/comic/' + `${this.data.nextId}`,
  //     method: 'GET',
  //     success: res => {
  //       // 当前集的图片漫画
  //       let figures = res.data.data.comic_info.comic_images
  //       // 当前集的图片漫画标题
  //       let title = res.data.data.comic_info.title
  //       // 上一集Id
  //       let prevId = res.data.data.previous_comic_info.id
  //       // 下一集Id
  //       let nextId = res.data.data.next_comic_info.id
  //       wx.setStorageSync('figures', figures)
  //       wx.setStorageSync('title', title)
  //       wx.setStorageSync('prevId', prevId)
  //       wx.setStorageSync('nextId', nextId)
  //       wx.redirectTo({
  //         url: '../chapter/chapter',
  //       })
  //       console.log(res)
  //     },
  //     fail: err => {
  //       console.log(err)
  //       wx.showToast({
  //         title: '出错啦...',
  //         icon: 'none'
  //       })
  //     },
  //     complete: () => {
  //       wx.hideLoading({
  //         success: () => {},
  //       })
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 接收路由传递过来的参数
    this.setData({
      chapterList: JSON.parse(JSON.stringify(wx.getStorageSync('figures'))),
      title: wx.getStorageSync('title'),
      prevId: wx.getStorageSync('prevId'),
      nextId: wx.getStorageSync('nextId')
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})