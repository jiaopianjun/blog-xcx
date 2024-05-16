const app = getApp();
const util = require('../../../utils/date.js')
Page({
  data: {
    newsList: [],
    calendar: [],
    historyList: [],
    weather: [],
    time: '',
    qrcode: '',
    lunar: '',
    load: true,
    loadError: false,
    hotnews: false,
    title: "每日一句",
    back: true,
    eventRadio: "event",
    haveHeight: 1,
    subtitle: "",
    icon: "icon-arrow-ios-back-outline",
    image: "",
    titleRightIcon: "",
    blur: !0,
    backgroundRadio: "default",
    background: "linear-gradient(to right, #FFA726, #29B6F6)",
    colorRadio: "default",
    color: "#fff",
    border: !1,
    loading: !1,
    loadingColor: "",
    borderColor: "",
    borderWidth: "",
    useSlot: !1,
    leftContent: "icon"
  },
  getInfo: function () {
    const that = this.data
    let _this = this
    wx.request({
      url: 'https://news.topurl.cn/api?count=20',
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      dataType: 'jsonp',
      jsonp: 'callback',
      success: function (res) {
        var res = res.data
        res = JSON.parse(res)
        if (res.code === 200) {
          let list = res.data
          _this.setData({
            newsList: list.newsList,
            calendar: list.calendar,
            historyList: list.historyList,
            weather: list.weather,
            subtitle: list.sentence.sentence
          })
          setTimeout(() => {
            _this.setData({
              load: false
            })
          }, 1500)
        }
      },
      error: (res) => {
        _this.setData({
          loadError: true
        })
      }
    })
  },
  getNewsList: function () {
    const that = this.data
    let _this = this
    wx.request({
      url: 'https://api.vvhan.com/api/60s?type=json',
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      dataType: 'jsonp',
      jsonp: 'callback',
      success: function (res) {
        var res = res.data
        res = JSON.parse(res)
        console.log(res)
        // _this.setData({
        //   lunar: res?.time[1],
        //   newsList: that?.newsList.concat(res.data)
        // })
      },
      error: (res) => {
        _this.setData({
          loadError: true
        })
      }
    })
  },
  back: function () {
    console.log(23)
    // 返回
    wx.switchTab({
      url: '../../index/index'
    })
  },
  onLoad() {
    const _this = this
    _this.getNewsList()
    _this.getInfo()
    _this.setData({
      time: util.getNowTime('notime')
    })
    wx.setNavigationBarTitle({
      title: `${util.getNowTime('notime')} - 新闻简报`,
    })
    _this.setData({
      subtitle: `${util.getNowTime('notime')} - 新闻简报`,
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#374646',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  copyUrl(e) {
    wx.setClipboardData({
      data: e.target.dataset.url,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制链接成功！',
            })
          }
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: `${util.getNowTime('notime')} - 新闻简报`,
      path: 'packageA/tool/hotNews/hotNews',
      imageUrl: 'https://blogimg.lieme.cn/FruMcZlqMxb53qURUilFPwZ3RnFQ'
    }
  },
  onShareTimeline() {
    return {
      title: `${util.getNowTime('notime')} - 新闻简报`,
      imageUrl: 'https://blogimg.lieme.cn/FruMcZlqMxb53qURUilFPwZ3RnFQ',
      query: ''
    };
  },
})