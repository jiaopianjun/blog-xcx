var t = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"),
  e = (getApp(),
    wx.cloud.database());

(0, t.MyComponent)({
  props: {
    refresh: {
      type: Boolean,
      value: !0
    },
    limit: Number,
    date: {
      type: String,
      value: ""
    },
    showChange: Boolean
  },
  data: {
    data: null,
    active: 0,
    loading: !0
  },
  mounted: function () {
    this.getData();
  },
  watch: {
    refresh: function () {
      this.data.refresh && this.getData();
    }
  },
  methods: {
    getData: function () {
      var t = this,
        a = "" == t.data.date ? new Date() : new Date(t.data.date),
        n = (a.getFullYear(),
          a.getMonth() + 1),
        o = a.getDate();
      e.collection("history").limit(1).where({
        month: n,
        day: o
      }).get().then(function (e) {
        t.setData({
          data: e.data[0].res,
          loading: !1,
          refresh: !1
        });
      });
    },
    showChange: function () {
      this.setData({
        showChange: !0
      });
    },
    change: function (t) {
      var e = this,
        a = t.detail.index;
      e.setData({
        active: a,
        showChange: !1
      });
    },
    toHistory: function () {
      var t = this,
        e = getCurrentPages();
      e[e.length - 1].route.indexOf("month") > 0 ? wx.navigateTo({
        url: "../../pages/history/history?parent=month&date=" + t.data.date
      }) : wx.navigateTo({
        url: "../../pages/history/history?parent=index"
      });
    }
  }
});