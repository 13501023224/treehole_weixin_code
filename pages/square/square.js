// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "content": "",
  },
  /**
   * 点赞
   * @param {*} params 
   */
  dianZan: function (params) {
    var message_id  = params.currentTarget.dataset.id
    console.log("message_id")
    console.log(message_id)
    wx: wx.request({
      url: 'https://www.qingdaohunlicehua.com/like_plus',
      complete: (res) => { },
      data: {
        "id": message_id
      },
      dataType: "json",
      fail: (res) => {
    
      },
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      method: "POST",
      responseType: "text",
      success: (res) => {
        if (res.data.code == 1) {
         
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx: wx.request({
      url: 'https://www.qingdaohunlicehua.com/find_all_tree_hole',
      complete: (res) => { },
      data: {

      },
      dataType: "json",
      fail: (res) => {
        wx.showToast({
          title: '获取失败',
        })
      },
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      method: "GET",
      responseType: "text",
      success: (res) => {
        that.setData({
          content: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})