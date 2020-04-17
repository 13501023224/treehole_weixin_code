// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.login({
      success(res) {
        if (res.code) {
          wx.getSetting({
            success(res) {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success: function (res) {
                    // getApp.globalData.userInfo = res.userInfo,
                    getApp().globalData.userInfo = res.userInfo,
                      console.log(getApp().globalData.userInfo),
                      wx.navigateTo({
                        url: '/pages/login/login',
                      })
                  }
                })
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },

  //点击授权的时候，如果授权完成，那么直接跳转到登录的页面。
  bindGetUserInfo(e) {
    if (e.detail.userInfo != null) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  },

  getPhoneNumber: function (e) {
    wx.login({
      success(res) {
        if (res.code) {
          
            // console.log(e.detail.errMsg),
            // console.log(e.detail.iv),
            // console.log(e.detail.encryptedData)
          
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
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