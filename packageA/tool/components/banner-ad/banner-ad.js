!function(t) {
    if (t && t.__esModule) return t;
    var o = {};
    if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (o[i] = t[i]);
    o.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var t = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"), o = getApp();

(0, t.MyComponent)({
    props: {
        id: String
    },
    data: {
        ad: !1,
        windowWidth: o.globalData.windowWidth
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
    }
});