function t(t) {
  return t && t.__esModule ? t : {
    default: t
  };
}

t(require("../common/dataJs/6172FB91B0A7888C07149396C1140087.js")),
  function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    e.default = t;
  }(require("../common/dataJs/C467E907B0A7888CA2018100BBD60087.js")), t(require("../common/dataJs/5F2DD984B0A7888C394BB183C0A60087.js")),
  t(require("../common/dataJs/42782192B0A7888C241E49950DA60087.js")), t(require("../common/dataJs/DC46EEE5B0A7888CBA2086E20FC60087.js"));

var e = t(require("../common/dataJs/460E2383B0A7888C20684B8430C60087.js")),
  a = getApp();

Page({
  data: {
    refresh: !0,
    showShare: !1,
    darkMode: a.globalData.darkMode,
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
  onLoad: function () {
    var e = this;
    e.start()
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#374646',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  start: function () {
    var t = this,
      i = new Date(),
      l = i.getFullYear(),
      n = i.getMonth() + 1,
      s = i.getDate(),
      o = e.default.li.trans(l, n, s);
    t.setData({
      darkMode: a.globalData.darkMode,
      iphoneX: a.globalData.iphoneX,
      li: o,
    })
  },
  onPullDownRefresh: function () {
    var t = this;
    t.setData({
      refresh: !0
    }), t.start(), wx.stopPullDownRefresh(), wx.showToast({
      title: "已刷新",
      mask: !0,
      icon: "success"
    });
  },
  onShareAppMessage: function (res) {
    return {
      title: `农历${this.data.li.nongli.date.zh.month}${this.data.li.nongli.date.zh.day}`,
      path: 'packageA/tool/calendar/calendar',
      imageUrl: 'https://blogimg.lieme.cn/2023/02/20230222023407240.jpeg'
    }
  },
  // 自定义分享朋友圈
  onShareTimeline: function () {
    let imageUrl = 'https://blogimg.lieme.cn/2023/02/20230222023407240.jpeg'
    return {
      title: `农历${this.data.li.nongli.date.zh.month}${this.data.li.nongli.date.zh.day}`,
      imageUrl
    }
  },
});