!function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    e.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var t = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"), e = getApp();

(0, t.MyComponent)({
    props: {
        icon: String,
        title: String,
        buttonText: String
    },
    data: {
        darkMode: null
    },
    watch: {
        change: function() {
            console.log(this.data.change), this.data.change && this.set({
                darkMode: e.globalData.darkMode,
                change: !1
            });
        }
    },
    mounted: function() {
        console.log(e.globalData), this.set({
            darkMode: e.globalData.darkMode
        });
    },
    pageLifetimes: {
        show: function() {
            this.set({
                darkMode: e.globalData.darkMode
            });
        }
    },
    methods: {
        event: function() {
            this.triggerEvent("event");
        }
    }
});