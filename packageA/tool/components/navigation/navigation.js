var t = function(t) {
    if (t && t.__esModule) return t;
    var i = {};
    if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
    return i.default = t, i;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js")), i = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"), e = getApp().globalData;

(0, i.MyComponent)({
    props: {
        mode: String,
        back: Boolean,
        icon: String,
        title: String,
        subtitle: String,
        event: {
            type: Boolean,
            value: !0
        },
        transparent: Boolean,
        height: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        barHeight: e.barHeight,
        navigationHeight: e.navigationHeight,
        windowWidth: e.windowWidth,
        menuInfo: e.menuInfo
    },
    mounted: function() {},
    methods: {
        calc: function() {
            var i = this;
            t.getSystemInfo().then(function(t) {
                var e = wx.getMenuButtonBoundingClientRect();
                console.log(e), (0 == e.buttom && 0 == e.height && 0 == e.left && 0 == e.right && 0 == e.top && 0 == e.width || void 0 === e.buttom && void 0 === e.height && void 0 === e.left && void 0 === e.right && void 0 === e.top && void 0 === e.width) && (e = {
                    bottom: 58,
                    height: 32,
                    left: 278,
                    right: 365,
                    top: 26,
                    width: 87
                });
                var n = 2 * e.top + e.height - t.statusBarHeight + 3;
                i.set({
                    barHeight: t.statusBarHeight,
                    navigationHeight: n,
                    windowWidth: t.windowWidth,
                    menuInfo: e,
                    display: !0
                });
            });
        },
        back: function() {
            wx.navigateBack({
                delta: 1
            });
        },
        event: function() {
            this.data.back ? this.back() : this.triggerEvent("event");
        }
    }
});