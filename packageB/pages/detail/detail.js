// packageB/pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailList: [],
    // 判断用户是否登录
    userInfo: null,
    // 加入书架的图漫
    booksList: []
  },
  // 加入书架
  joinBooksFn() {
    // 判断是否登录
    if (this.data.userInfo === null) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
      return false
    } else {
      let arr = wx.getStorageSync('books') === '' ? this.data.booksList : wx.getStorageSync('books')
      this.setData({
        booksList: arr.concat(this.data.detailList)
      })
      wx.setStorageSync('books', this.data.booksList)
      wx.showToast({
        title: '加入书架成功',
        icon: 'none'
      })
      console.log(this.data.booksList)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  ToDetailFn(e) {
    console.log(e.currentTarget.dataset.ids)
    wx.showLoading({
      title: "拼命加载中...",
      mask: true, //是否显示触摸蒙版，禁止穿透
      success: () => {}
    })
    wx.request({
      url: 'https://www.kuaikanmanhua.com//v2/pweb/comic/' + `${e.currentTarget.dataset.ids}`,
      method: 'GET',
      success: res => {
        // 当前集的图片漫画
        let figures = res.data.data.comic_info.comic_images
        // 当前集的图片漫画标题
        let title = res.data.data.comic_info.title
        // 上一集Id
        // let prevId = res.data.data.previous_comic_info.id
        // 下一集Id
        // let nextId = res.data.data.next_comic_info.id
        wx.setStorageSync('figures', figures)
        wx.setStorageSync('title', title)
        // wx.setStorageSync('prevId', prevId)
        // wx.setStorageSync('nextId', nextId)
        if (figures) {
          wx.navigateTo({
            url: '../chapter/chapter',
          })
        } else {
          wx.hideLoading()
          wx.showToast({
            title: '暂无更多...',
            icon: 'none'
          })
        }
        console.log(res)
      },
      fail: err => {
        console.log(err)
        wx.showToast({
          title: '出错啦...',
          icon: 'none'
        })
      },
      complete: () => {
        // wx.hideLoading({
        //   success: () => {},
        // })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 接收路由传递过来的参数
    this.setData({
      detailList: JSON.parse(JSON.stringify(wx.getStorageSync('detailInfo'))),
      userInfo: wx.getStorageSync('users')
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