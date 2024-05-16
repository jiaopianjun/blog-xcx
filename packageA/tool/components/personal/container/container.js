!function(e) {
    if (e && e.__esModule) return e;
    var a = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
    a.default = e;
}(require("../../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var e = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"), a = getApp();

(0, e.MyComponent)({
    props: {
        change: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        darkMode: a.globalData.darkMode,
        theme: a.globalData.theme,
        darkMode: "system" == a.globalData.setting.darkMode ? a.globalData.systemDarkMode : a.globalData.setting.darkMode,
        theme: a.globalData.setting.theme,
        tabbarHeight: a.globalData.iphoneX ? 74 : 50,
        navigationHeight: a.globalData.navigationHeight,
        systemInfo: a.globalData.systemInfo,
        menuInfo: a.globalData.menuInfo,
        contentHeight: 0,
        iphoneX: a.globalData.iphoneX
    },
    watch: {
        change: function() {
            this.data.change && this.set({
                darkMode: a.globalData.darkMode,
                theme: a.globalData.theme,
                change: !1
            });
        }
    },
    mounted: function() {
        this.set({
            darkMode: a.globalData.darkMode,
            theme: a.globalData.theme,
            change: !1
        });
    },
    pageLifetimes: {
        show: function() {
            this.set({
                darkMode: a.globalData.darkMode,
                theme: a.globalData.theme,
                change: !1
            });
        }
    },
    methods: {}
});