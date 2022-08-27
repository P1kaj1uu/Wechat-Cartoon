// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 每日推荐列表数据
    classifyList: [],
    // 当前星期几
    day: new Date().getDay()
  },
  // 跳转详情页面
  ToDetailFn(e) {
    console.log(e.currentTarget.dataset.ids)
    wx.showLoading({
      title: "拼命加载中...",
      mask: true, //是否显示触摸蒙版，禁止穿透
      success: ()=>{}
    })
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/' + `${e.currentTarget.dataset.ids}`,
      method: 'GET',
      success: res => {
        console.log(res)
        let detailInfo = res.data.data.topic_info
        wx.setStorageSync('detailInfo', detailInfo)
        wx.navigateTo({
          url: '../../packageB/pages/detail/detail',
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
    console.log(this.data.day)
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/daily/topics?pos=' + `${this.data.day}`,
      method: 'GET',
      success: res => {
        console.log(res)
        this.setData({
          classifyList: res.data.data.topics
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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