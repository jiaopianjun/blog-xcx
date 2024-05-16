function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

!function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    e.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var e = t(require("../../common/dataJs/6172FB91B0A7888C07149396C1140087.js")), a = t(require("../../common/dataJs/42782192B0A7888C241E49950DA60087.js")), r = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

getApp().globalData;

(0, r.MyComponent)({
    props: {
        refresh: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        auth: !1,
        date: null,
        loading: !0,
        error: !1
    },
    mounted: function() {
        this.getWeather();
    },
    pageLifetimes: {
        show: function() {
            var t = this;
            wx.getSetting({
                success: function(e) {
                    void 0 !== e.authSetting["scope.userLocation"] && e.authSetting["scope.userLocation"] && !t.data.auth && t.getWeather();
                }
            });
        }
    },
    watch: {
        refresh: function() {
            if (this.data.refresh) {
                var t = this;
                t.setData({
                    auth: !1,
                    date: null,
                    loading: !0,
                    error: !1
                }), t.getWeather();
            }
        }
    },
    methods: {
        getWeather: function() {
            var t = this;
            wx.getLocation({
                success: function(r) {
                    void 0 === r.latitude ? t.setData({
                        auth: !1,
                        loading: !1,
                        error: !1,
                        refresh: !1
                    }) : (t.setData({
                        auth: !0
                    }), e.default.weather.realtime(r.longitude, r.latitude).then(function(e) {
                        var r = a.default.realtime(e.data.result.realtime);
                        t.setData({
                            data: r,
                            error: !1,
                            loading: !1,
                            refresh: !1
                        });
                    }).catch(function(e) {
                        t.setData({
                            data: realtime,
                            loading: !1,
                            error: !0,
                            refresh: !1
                        });
                    }));
                },
                fail: function(e) {
                    t.setData({
                        auth: !1,
                        error: !1,
                        loading: !1,
                        refresh: !1
                    });
                }
            });
        }
    }
});