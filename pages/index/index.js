// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swperList: [
      {
        swperSrc: 'https://tn1-f2.kkmh.com/image/220816/kdKUuLwkG-t.w750.webp.h',
        swperId: 1
      },
      {
        swperSrc: 'https://tn1-f2.kkmh.com/image/220816/WwZewQarv-t.w750.webp.h',
        swperId: 2
      },
      {
        swperSrc: 'https://tn1-f2.kkmh.com/image/220815/TNOPnxJVs-t.w750.webp.h',
        swperId: 3
      },
      {
        swperSrc: 'https://tn1-f2.kkmh.com/image/220816/iZMXuMcaZ-t.w750.webp.h',
        swperId: 4
      },
      {
        swperSrc: 'https://tn1-f2.kkmh.com/image/220808/yKEIJbxGR-t.w750.webp.h',
        swperId: 5
      }
    ],
    // 排行榜类型列表数据
    hotList: [],
    epubList: [],
    femaleList: [],
    maleList: [],
    // 自定义的颜色
    colorArr: ['#FFC0CB', '#DB7093', '#DA70D6', '#D8BFD8', '#DDA0DD', '#9370DB', '#E6E6FA',
    '#B0C4DE', '#87CEFA', '#B0E0E6', '#F0FFFF', '#E1FFFF', '#AFEEEE', '#D4F2E7', '#EEE8AA'],
    color: ''
  },
  // 跳转搜索页面
  ToSearch() {
    wx.navigateTo({
      url: '../../packageB/pages/search/search',
    })
  },
  // 随机数
  getRandom() {
    return Math.floor(Math.random() * 15)
  },
  // 跳转排行榜对应小说页面
  ToRankById(e) {
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/' + `${e.target.dataset.id}`,
      method: 'GET',
      success: res => {
        let list = res.data.ranking.books
        console.log(res)
        if (res.data.ranking.total === 0) {
          wx.showToast({
            title: '换一个...',
            icon: 'none'
          })
        } else {
          wx.setStorageSync('rankIdList', list)
          wx.showToast({
            title: '换一个...',
            icon: 'none'
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  ToHotRankById(e) {
    wx.showLoading({
      title: "拼命加载中...",
      mask: true, //是否显示触摸蒙版，禁止穿透
      success: ()=>{}
    })
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/rank/topics?rank_id=' + `${e.target.dataset.id}`,
      method: 'GET',
      success: res => {
        let hot = res.data.data.rank_info.topics
        console.log(res)
        wx.setStorageSync('hotList', hot)
        wx.navigateTo({
          url: '../../packageB/pages/rankId/rankId',
        })
      },
      fail: err => {
        console.log(err)
      },
      complete: () => {
        wx.hideLoading({
          success: () => {},
        })
      }
    })
  },
  // 跳转图漫详情页面
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
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/rank_type_list',
      method: 'GET',
      success: res => {
        console.log(res)
        this.setData({
          hotList: res.data.data.rank_types
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/gender',
      method: 'GET',
      success: res => {
        let key = this.getRandom()
        console.log(res)
        this.setData({
          femaleList: res.data.female,
          maleList: res.data.male,
          color: this.data.colorArr[key]
        })
      },
      fail: err => {
        console.log(err)
      }
    })
    wx.request({
      url: 'https://m.kuaikanmanhua.com/search/mini/hot_word?&page=1&size=12',
      method: 'GET',
      success: res => {
        console.log(res)
        this.setData({
          epubList: res.data.hits.hot_word
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