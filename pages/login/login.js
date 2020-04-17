// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (e) {
    var user_name = e.detail.value.user_name
    var password = e.detail.value.password
    if (user_name == "") {
      wx.showToast({
        title: '用户名不能为空',
      })
    } else if (password == "") {
      wx.showToast({
        title: '密码不能为空',
      })
    } else {
      wx: wx.request({
        url: 'https://www.qingdaohunlicehua.com/login',
        complete: (res) => { },
        data: {
          "username": user_name,
          "password": password
        },
        dataType: "json",
        fail: (res) => {
          wx.showToast({
            title: '登录失败',
          })
        },
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        method: "POST",
        responseType: "text",
        success: (res) => {
          var code = res.data.code
          if (code == 4) {
            wx.showToast({
              title: '登录成功',
            })
            getApp().globalData.user_id = res.data.message.id,
            wx.redirectTo({
              url: '/pages/square/square',
            })
          } else {
            wx.showToast({
              title: "登录失败"
            })
          }
        },
      })
    }
},
  formReset: function () {
    console.log('form发生了reset事件')
  },

  go_register: function (params) {
    wx.navigateTo({
      url: '/pages/register/register',
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