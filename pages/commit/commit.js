// pages/commit/commit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "xinxi": ""
  },

  area_tap: function (e) {
    this.setData(
      {
        "xinxi": e.detail.value
      }
    )
  },

  send_event: function (e) {

    wx: wx.request({
      url: 'https://www.qingdaohunlicehua.com/publish_tree_hole',
      complete: (res) => { },
      data: {
        "user_id": getApp().globalData.user_id,
        "content": this.data.xinxi,
        "likes": 1,
      },
      dataType: "json",
      fail: (res) => {
        wx.showToast({
          title: '发布失败',
        })
      },
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      method: "POST",
      responseType: "text",
      success: (res) => {
        var code = res.data.code
        if (code == 1) {
          wx.showToast({
            title: '发布成功',
          })
          wx.redirectTo({
            url: '/pages/square/square',
          })
        } else {
          wx.showToast({
            title: res.data.message,
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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