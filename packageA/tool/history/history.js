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
    title: "历史上的今天",
    back: !1,
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
            newsList: list.historyList.map((item)=> {return item.event}),
            calendar: list.calendar,
            historyList: list.historyList,
            weather: list.weather,
            subtitle: `${list.calendar.cYear}年${list.calendar.cMonth}月${list.calendar.cDay}日(${list.calendar.yearCn}${list.calendar.monthCn}${list.calendar.dayCn})`,
            lunar: `${list.calendar.yearCn}${list.calendar.monthCn}${list.calendar.dayCn}`
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
      url: 'https://www.ipip5.com/today/api.php?type=json',
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
        _this.setData({
          // lunar: res.time[1],
          newsList: that.newsList.concat(res.result.slice(0, -1))
        })
      },
      error: (res) => {
        _this.setData({
          loadError: true
        })
      }
    })
  },
  iconEvent: function () {
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
      title: `历史上的-${util.getNowTime('notime')}`,
    })
    _this.setData({
      subtitle: `历史上的-${util.getNowTime('notime')}`,
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
      title: `历史上的${util.getNowTime('notime')}`,
      path: 'packageA/tool/history/history',
      imageUrl: 'https://blogimg.lieme.cn/2023/02/20230201101646784.jpeg'
    }
  },
  onShareTimeline() {
    return {
      title: `历史上的${util.getNowTime('notime')}`,
      imageUrl: 'https://blogimg.lieme.cn/2023/02/20230201101646784.jpeg',
      query: ''
    };
  },
})