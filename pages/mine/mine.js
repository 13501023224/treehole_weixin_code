// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "content": ""
  },

  shanChuContent: function (event) {
    wx.showModal({
      title: '提示',
      content: '确认删除吗',
      success(res) {
        if (res.confirm) {
          var id = event.currentTarget.dataset.id
          var that = this
          wx: wx.request({
            url: 'https://www.qingdaohunlicehua.com/delete_hole_by_id',
            complete: (res) => { },
            data: {
                "id":id
            },
            dataType: "json",
            fail: (res) => {
              wx.showToast({
                title: '删除失败',
              })
            },
            header: {
              'content-type': "application/x-www-form-urlencoded"
            },
            method: "POST",
            responseType: "text",
            success: (res) => {
               if(res.data.code == 1){
                  wx.showToast({
                    title: '删除成功',
                  })
                  wx.reLaunch({
                    url: '/pages/mine/mine',
                  })
               }
            },
          })

        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx: wx.request({
      url: 'https://www.qingdaohunlicehua.com/find_treehole_by_userid',
      complete: (res) => { },
      data: {
        "user_id": getApp().globalData.user_id
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