// pages/ads/ads.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 判断用户是否登录
    userInfo: null,
    books: []
  },
  // 前往登录
  ToLoginFn() {
    wx.switchTab({
      url: '../../pages/my/my',
    })
  },
  // 数组去重
  deteleObject(obj) {
    var uniques = [];
    var stringify = {};
    for (var i = 0; i < obj.length; i++) {
      var keys = Object.keys(obj[i]);
      keys.sort(function (a, b) {
        return Number(a) - Number(b);
      });
      var str = "";
      for (var j = 0; j < keys.length; j++) {
        str += JSON.stringify(keys[j]);
        str += JSON.stringify(obj[i][keys[j]]);
      }
      if (!stringify.hasOwnProperty(str)) {
        uniques.push(obj[i]);
        stringify[str] = true;
      }
    }
    uniques = uniques;
    return uniques;
  },
  // 删除
  deteleBooksFn(e) {
    // 删除项的id
    let index = e.currentTarget.dataset.id
    let arr = this.data.books
    // 返回删除项的索引值
    let ids = arr.findIndex(item => {
      return item.id === index
    })
    arr.splice(ids, 1)
    this.setData({
      books: arr
    })
    wx.setStorageSync('books', this.data.books)
    wx.showToast({
      title: '删除成功',
      icon: 'none'
    })
  },
  // 前往详情页面
  toDetailFn(e) {
    wx.showLoading({
      title: "拼命加载中...",
      mask: true, //是否显示触摸蒙版，禁止穿透
      success: () => {}
    })
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/' + `${e.currentTarget.dataset.idx}`,
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
    let arr = this.deteleObject(wx.getStorageSync('books'))
    this.setData({
      userInfo: wx.getStorageSync('users'),
      books: arr
    })
    // 保存去重后的书架数据
    wx.setStorageSync('books', this.data.books)
    console.log(this.data.books)
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
    // 局部刷新页面
    this.onLoad()
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