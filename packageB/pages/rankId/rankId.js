// packageB/pages/rankId/rankId.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 排行榜对应小说列表
    rankIdList: [],
    hotList: []
  },
  // 跳转图漫详情页面
  ToDetailFn(e) {
    console.log(e.currentTarget.dataset.ids)
    wx.showLoading({
      title: "拼命加载中...",
      mask: true, //是否显示触摸蒙版，禁止穿透
      success: () => {}
    })
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/' + `${e.currentTarget.dataset.ids}`,
      method: 'GET',
      success: res => {
        console.log(res)
        let detailInfo = res.data.data.topic_info
        wx.setStorageSync('detailInfo', detailInfo)
        wx.navigateTo({
          url: '../../../packageB/pages/detail/detail',
        })
      },
      fail: err => {
        console.log(err)
        wx.showToast({
          title: '出错啦...',
          icon: 'none'
        })
      },
      complete: () => {
        wx.hideLoading({
          success: () => {},
        })
      }
    })
  },
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
      rankIdList: JSON.parse(JSON.stringify(wx.getStorageSync('rankIdList'))),
      hotList: JSON.parse(JSON.stringify(wx.getStorageSync('hotList')))
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