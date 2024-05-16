// pages/toy/air/air.js
Page({
  data: {
    switch: false,
    value: 20,
    isHot: false
  },
  onLoad: function (options) {

  },
  cold() {
    if (!this.data.switch) return
    this.setData({
      isHot: false
    })
  },
  hot() {
    if (!this.data.switch) return
    this.setData({
      isHot: true
    })
  },
  switch () {
    let _this = this;
    _this.setData({
      switch: !_this.data.switch
    })
  },
  add() {
    let _this = this
    if (!this.data.switch) return
    if (_this.data.value < 31) {
      this.setData({
        value: ++_this.data.value
      })
    }
  },
  sub() {
    let _this = this
    if (!this.data.switch) return
    if (_this.data.value > 16) {
      this.setData({
        value: --_this.data.value
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      path: 'packageA/tool/air/air',
      title: '送你一台便携式空调~',
    };
  },
  onShareTimeline() {
    return {
      title: '送你一台便携式空调~',
      imageUrl: './air/sharexh.jpg'
    };
  },
})