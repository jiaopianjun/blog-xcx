
Page({
  data: {
    url: ''
  },

  onLoad: function (options) {
    if (options) {
      this.setData({
        url: options.url
      })
    }
  },
  onShareAppMessage: function () {

  }
})