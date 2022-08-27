// packageA/pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 菜名
    menuName: '',
    // 保存提交正确的菜名
    menuFirstName: '',
    // 用于存储菜谱列表数据
    menuList: []
  },
  // 搜索输入框中值变化
  inputChangeFn(e) { 
    this.setData({
      menuName: e.detail.value.trim()
    })
  },
  // 查询菜谱
  ToSearchMenuFn() {
    // 当输入框为空时
    if (this.data.menuName === '') {
      wx.showToast({
        title: '请输入菜名！',
        icon: 'none'
      })
      return false
    }
    wx.request({
      url: 'https://api.tianapi.com/caipu/index',
      method: 'POST',
      data: {
        key: '60767f62a196a04518e0cb08cb9a6bb2',
        word: this.data.menuName
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        console.log(res);
        if (res.data.code === 200) {
          wx.showToast({
            title: '查询成功！',
            icon: 'success'
          })
          let list = res.data.newslist
          this.setData({
            menuList: list,
            // 保存最后的提交的菜名
            menuFirstName: this.data.menuName
          })
        }
        if (res.data.code === 250) {
          wx.showToast({
            title: '暂无该菜谱！',
            icon: 'error'
          })
        }
        if (res.data.code === 260) {
          wx.showToast({
            title: '请输入菜名！',
            icon: 'error'
          })
        }
      },
      fail: err => {
        console.log(err);
        wx.showToast({
          title: '查询失败！',
          icon: 'error'
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