//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bans:[
      {
        "name":"你好1",
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/toutu0.jpg"
      },
      {
        "name":"你好2",
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/toutu1.jpg"
      },
      {
        "name":"你好3",
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/toutu2.jpg"
      },
      {
        "name":"你好4",
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/toutu3.jpg"
      }
    ],

    cases:[
      {
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/case%200%20%200.jpg"
      },
      {
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/case%200%20%200.jpg"
      },
      {
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/case%200%20%200.jpg"
      },
      {
        imagePath:"http://q7wolxz6h.bkt.clouddn.com/case%200%20%200.jpg"
      }
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //测试request请求
  test_request:function(){
     wx:wx.request({
       url: 'https://www.qingdaohunlicehua.com',
       method: "GET",
       success:function(res){console.log(res)}
     })
  },
})
