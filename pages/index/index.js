//Page Object
Page({
  data: {
    background: ['小虎', '鸿世玻璃', '鸿世玻璃'],
    classify: [
      {
        name: '购物商城',
        img: '../../images/weixin.jpeg',
        router: '../shop/shop'
      },
      {
        name: '谁说的',
        img: '../../images/weixin.jpeg'
      },
      {
        name: '谁说的',
        img: '../../images/weixin.jpeg'
      },
      {
        name: '谁说的',
        img: '../../images/weixin.jpeg'
      },
    ]
  },
  handleRouter(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({
      url: url,
    });
  },
  //options(Object)
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});