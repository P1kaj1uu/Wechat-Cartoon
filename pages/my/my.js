// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarStart: 'avatar',
    userInfo: '',
    ipList: ''
  },
  // 授权登录
  login() {
    wx.getUserProfile({
      desc: '获取用户的信息',
      success: res => {
        let user = res.userInfo
        wx.setStorageSync('users', user)
        console.log("获取用户的信息成功", res)
        this.setData({
          userInfo: user
        })
        wx.showToast({
          title: '登录成功',
          icon: "success"
        })
      },
      fail: err => {
        console.log("获取用户的信息失败", err)
      }
    })
  },
  // 退出登录
  quitLogin() {
    this.setData({
      userInfo: '',
      ipList: ''
    })
    wx.setStorageSync('users', null)
    wx.setStorageSync('ips', null)
    wx.showToast({
      title: '退出成功',
      icon: "success"
    })
  },
  // 获取登录信息
  getIpInfo() {
    // 获取当前ip及大致坐标
    wx.request({
      url: 'https://ip.useragentinfo.com' + '/json',
      method: 'GET',
      success: res => {
        console.log(res)
        let ip = res.data
        wx.setStorageSync('ips', ip)
        this.setData({
          ipList: ip
        })
      }
    })
    // 跳转查看登录信息详情页面
    wx.navigateTo({
      url: '../../packageA/pages/location/location',
    })
  },
  // 跳转使用说明页面
  ToUsageFn() {
    wx.navigateTo({
      url: '../../packageA/pages/usage/usage',
    })
  },
  // 跳转版本说明页面
  ToVersionFn() {
    wx.navigateTo({
      url: '../../packageA/pages/version/version',
    })
  },
  // 附加功能
  ToExtraMenuFn() {
    // 当未登录时
    if (wx.getStorageSync('users') === null) {
      wx.showToast({
        title: '请先登录！',
        icon: 'none'
      })
      return false
    }
    // 跳转到菜谱页面
    wx.navigateTo({
      url: '../../packageA/pages/menu/menu',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let users = wx.getStorageSync('users')
    this.setData({
      userInfo: users
    })
    // 分享
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
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