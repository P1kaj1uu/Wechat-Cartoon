// packageB/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图漫名
    searchName: '',
    // 图漫列表
    searchList: []
  },
  // 搜索输入框中值变化
  inputChangeFn(e) { 
    this.setData({
      searchName: e.detail.value.trim()
    })
  },
  // 查询图漫
  ToSearchBooksFn() {
    // 当输入框为空时
    if (this.data.searchName === '') {
      wx.showToast({
        title: '请输入关键字！',
        icon: 'none'
      })
      return false
    }
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v1/search/topic?q=' + `${this.data.searchName}` + '&f=3&size=18',
      method: 'GET',
      success: res => {
        console.log(res)
        this.setData({
          searchList: res.data.data.hit
        })
        wx.showToast({
          title: '搜索成功'
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  ToDetailFn(e) {
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
          url: '../../pages/detail/detail',
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