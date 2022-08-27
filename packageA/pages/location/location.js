// packageA/pages/location/location.js
let util = require('./utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用于存储IP信息
    ipList: '',
    // 用于存储当前时间
    time: ''
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
      ipList: JSON.parse(JSON.stringify(wx.getStorageSync('ips'))),
      time: util.formatTime(new Date())
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