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


const app = getApp();
const util = require('../../utils/date.js')

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
    title: "春节倒计时",
    back: true,
    eventRadio: "event",
    haveHeight: 1,
    subtitle: "",
    icon: "icon-arrow-ios-back-outline",
    image: "",
    titleRightIcon: "",
    blur: !0,
    backgroundRadio: "default",
    background: "linear-gradient(to right, #D34841, #ECE4B9)",
    colorRadio: "default",
    color: "#fff",
    border: !1,
    loading: !1,
    loadingColor: "",
    borderColor: "",
    borderWidth: "",
    useSlot: !1,
    leftContent: "icon",
    nextDate: '',
    nextWeek: '',
    nextNongli: '',
    nowNongli: ''
  },
  back: function () {
    // 返回
    wx.switchTab({
      url: '../../index/index'
    })
  },
  start: function () {
    var t = this,
      i = new Date(),
      l = i.getFullYear(),
      n = i.getMonth() + 1,
      s = i.getDate(),
      o = e.default.li.trans(l, n, s);
    console.log(o, '23')
    t.setData({
      darkMode: a.globalData.darkMode,
      iphoneX: a.globalData.iphoneX,
      li: o,
      nowNongli: `农历${o.nongli.date.zh.month}${o.nongli.date.zh.day}`
    })
  },
  onLoad() {
    const _this = this
    _this.start()
    _this.setData({
      load: false,
      time: util.getNowTime('notime')
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#374646',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })

    let endTime = '';
    this.countDown(endTime, (year, day, hour, minute, second, nextDate, nextWeek, nextNongli) => {
      _this.setData({
        hour: hour,
        minute: minute,
        second: second,
        year: year,
        nextDate: nextDate,
        nextWeek: nextWeek,
        nextNongli: nextNongli,
        day: day,
        subtitle: `距离${year}春节还有${day}天`,
      })
    });
  },
  countDown(endTime, callback) {
    let timerId = setInterval(() => {
      let now = new Date().getTime(); // 当前时间戳
      const dates = [{
          year: 2024,
          time: '2024-02-10 00:00:00',
          date: '2024年2月10日',
          week: '星期六',
          nongli: '农历甲辰年（龙年）'
        },
        {
          year: 2025,
          time: '2025-01-29 00:00:00',
          date: '2025年1月29日',
          week: '星期三',
          nongli: '农历乙巳年（蛇年）'
        },
        {
          year: 2026,
          time: '2026-02-17 00:00:00',
          date: '2026年2月17日',
          week: '星期二',
          nongli: '农历丙午年（马年）'
        },
        {
          year: 2027,
          time: '2027-02-06 00:00:00',
          date: '2027年2月6日',
          week: '星期六',
          nongli: '农历丁未年（羊年）'
        }
      ]
      let timeDiff = 0,
        year = 2024,
        nextDate = '',
        nextWeek = '',
        nextNongli = '';
      for (let i = 0; i < dates.length; i++) {
        if (new Date(dates[i].time.replace(/-/g, "/").replace("T", " ")).getTime() > now) {
          timeDiff = new Date(dates[i].time.replace(/-/g, "/").replace("T", " ")).getTime() - now;
          year = dates[i].year
          nextDate = dates[i].date
          nextWeek = dates[i].week
          nextNongli = dates[i].nongli
          break
        }
      }
      if (timeDiff <= 0) {
        clearInterval(timerId);
        if (callback) {
          callback();
        }
        return;
      }
      let day = Math.floor(timeDiff / (24 * 60 * 60 * 1000)); // 天数
      let hour = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)); // 小时数
      let minute = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000)); // 分钟数
      let second = Math.floor((timeDiff % (60 * 1000)) / 1000); // 秒数
      if (day < 10) {
        day = '0' + day;
      }
      if (hour < 10) {
        hour = '0' + hour;
      }
      if (minute < 10) {
        minute = '0' + minute;
      }
      if (second < 10) {
        second = '0' + second;
      }
      if (callback) {
        callback(year, day, hour, minute, second, nextDate, nextWeek, nextNongli);
      }
    }, 1000);
  },
  onShareAppMessage: function () {
    return {
      title: `距离${this.data.year}春节只剩${this.data.day}天La~`,
      path: 'packageA/tool/FestivalCountdown/FestivalCountdown',
      imageUrl: 'https://blogimg.lieme.cn/2023/04/2023042605351296.jpeg'
    }
  },
  onShareTimeline() {
    return {
      title: `距离${this.data.year}春节只剩${this.data.day}天La~`,
      imageUrl: 'https://blogimg.lieme.cn/2023/04/2023042605351296.jpeg',
      query: ''
    };
  },
})