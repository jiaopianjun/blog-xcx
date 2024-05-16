!function(a) {
    if (a && a.__esModule) return a;
    var t = {};
    if (null != a) for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    t.default = a;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var a = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"), t = getApp();

(0, a.MyComponent)({
    data: {
        ad: !1,
        windowWidth: t.globalData.windowWidth,
        scale: 1,
        darkMode: t.globalData.darkMode
    },
    methods: {
        adError: function() {
            this.set({
                ad: !1
            });
        },
        adLoad: function() {
            this.set({
                ad: !0
            });
        }
    },
    mounted: function() {
        var a = t.globalData.systemInfo.windowWidth, o = (a - 30) / a;
        this.setData({
            darkMode: t.globalData.darkMode,
            scale: o
        });
    }
});