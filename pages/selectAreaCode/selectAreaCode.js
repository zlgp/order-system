// pages/selectAreaCode/selectAreaCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '中国',
        code: '+86',
        id: 1
      },
      {
        name: '安哥拉',
        code: '+244',
        id: 2
      },
      {
        name: '阿富汗',
        code: '+93',
        id: 3
      },
      {
        name: '马尔代夫',
        code: '+960',
        id: 4
      },
    ],
    params: {
      code: '',
      id: ''
    },
    // 判断是忘记密码还是注册
    type: '',

  },
  hanldeCell(e) {
    const { code, id } = e.target.dataset
    if (this.data.type === "register") {
      wx.navigateTo({
        url: `../register/register?id=${id}&code=${code}`,
      })
    } else {
      wx.navigateTo({
        url: `../forgetPwd/forgetPwd?id=${id}&code=${code}`,
      })
    }
    // 这样给data里的属性赋值才有响应式
    // this.setData({
    //   params: {
    //     code: e.target.dataset.code,
    //     id: e.target.dataset.id
    //   }
    // })
    // console.log(this.data.params.code, this.data.params.id);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
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