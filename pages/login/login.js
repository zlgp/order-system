// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginWay: true
  },
  hanldeLogin() {
    this.setData({
      loginWay: !this.data.loginWay
    })
  },
  handlWeiXinLogin() {
    wx.showLoading({
      title: '正在登录',
    })
    // 查询是否授权
    wx.getSetting({
      success(res) {
        console.log(res);
        if (!res.authSetting['scope.userInfo']) {
          // 没有授权就调用起授权
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              // 获取用户信息
              wx.getUserInfo({
                success(res) {
                  console.log(res.userInfo)
                  // 再进行登录
                  wx.login({
                    success(res) {
                      console.log(res.code);
                      wx.hideLoading()
                      wx.showToast({
                        title: '登录成功',
                        icon: 'success',
                        duration: 2000
                      })
                      // if (res.code) {
                      //   //发起网络请求
                      //   wx.request({
                      //     url: 'https://test.com/onLogin',
                      //     data: {
                      //       code: res.code
                      //     }
                      //   })
                      // } else {
                      //   console.log('登录失败！' + res.errMsg)
                      // }
                    }
                  })
                }
              })
            },
            fail() {
              // 一直授权失败引导用户打开设置,来授权
              wx.openSetting({
                success(res) {
                  console.log(res.authSetting)
                  // res.authSetting = {
                  //   "scope.userInfo": true,
                  //   "scope.userLocation": true
                  // }
                }
              })
            }

          })
        } else {
          // 获取用户信息
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
              // 再进行登录
              wx.login({
                success(res) {
                  console.log(res.code);
                  wx.hideLoading()
                  wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 2000
                  })
                  // if (res.code) {
                  //   //发起网络请求
                  //   wx.request({
                  //     url: 'https://test.com/onLogin',
                  //     data: {
                  //       code: res.code
                  //     }
                  //   })
                  // } else {
                  //   console.log('登录失败！' + res.errMsg)
                  // }
                }
              })
            }
          })
        }
      }
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