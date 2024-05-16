var e = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../../C467E907B0A7888CA2018100BBD60087.js")), t = require("../../../BABEAA27B0A7888CDCD8C2206B240087.js"), a = getApp();

(0, t.MyComponent)({
    props: {
        show: Boolean
    },
    data: {
        theme: [ {
            name: "经典",
            id: "CLASSIC"
        }, {
            name: "金色",
            id: "GOLD"
        } ],
        activeThemeIndex: 0,
        activeTheme: null,
        darkMode: null
    },
    mounted: function() {
        for (var e = a.globalData.theme, t = 0; t < this.data.theme.length; t++) if (e === this.data.theme[t].id) return void this.set({
            activeThemeIndex: t
        });
        this.set({
            activeTheme: e,
            darkMode: a.globalData.darkMode
        });
    },
    watch: {
        show: function() {
            this.data.show && this.set({
                darkMode: a.globalData.darkMode,
                activeTheme: a.globalData.theme
            });
        }
    },
    methods: {
        cancle: function(e) {
            console.log(e), this.triggerEvent("cancleEvent", {
                data: this.data.show
            });
        },
        swipe: function(e) {
            console.log(e), this.set({
                activeThemeIndex: e.detail.current
            });
        },
        changeTheme: function(t) {
            console.log(t);
            var o = t.currentTarget.dataset.theme;
            e.setStorage("theme", o), a.globalData.theme = o, a.globalData.isChangeTheme = !0, 
            a.globalData.reDraw = {
                precipitation: !0,
                temperature: !0
            }, this.set({
                activeTheme: o
            }), this.triggerEvent("changeEvent");
        }
    }
});