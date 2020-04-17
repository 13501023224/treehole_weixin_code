// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (e) {
    //  console.log('form发生了submit事件，携带数据为：', e.detail.value.user_name)
    var user_name = e.detail.value.user_name
    var phone_number = e.detail.value.phone_number
    var password = e.detail.value.password
    var passwrod_two = e.detail.value.password_two
    var test_phone_number = new RegExp("0?(13|14|15|17|18|19)[0-9]{9}")
    if (user_name == "") {
      wx.showToast({
        title: '用户名不能为空',
      })
    } else if (!test_phone_number.test(phone_number)) {
      wx.showToast({
        title: '手机号必须是11位数字',
      })
    } else if (password == "") {
      wx.showToast({
        title: '密码不能为空',
      })
    } else if (passwrod_two == "") {
      wx.showToast({
        title: '确认密码不能为空字',
      })
    } else if (password != passwrod_two) {
      wx.showToast({
        title: '两次输入的密码不一致',
      })
    } else {

      console.log("来了")
      wx: wx.request({
        url: 'https://www.qingdaohunlicehua.com/sign',
        complete: (res) => { },
        data: {
          "username": user_name,
          "password": password,
          "phone": phone_number,
          "face_url": getApp().globalData.userInfo.avatarUrl,
        },
        dataType: "json",
        fail: (res) => {
          wx.showToast({
            title: '注册失败',
          })
        },
        header: {
          'content-type': "application/x-www-form-urlencoded"
        },
        method: "POST",
        responseType: "text",
        success: (res) => {
          var code = res.data.code
          if (code == 2) {
            wx.showToast({
              title: '注册成功',
            })
          } else {
            wx.showToast({
              title: '手机号已经注册',
            })
          }


        },
      })
    }

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  go_login: function (params) {
    wx.navigateTo({
      url: '/pages/login/login',
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