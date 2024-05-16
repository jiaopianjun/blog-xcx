!function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    t.default = e;
}(require("../../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var e = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"), t = getApp();

(0, e.MyComponent)({
    props: {
        active: Number
    },
    data: {
        tabBar: [ {
            icon: "icon-radio-button-on-outl",
            name: ""
        }, {
            icon: "icon-calendar-outline",
            name: ""
        }, {
            icon: "icon-star-outline",
            name: ""
        }, {
            icon: "icon-settings-outline",
            name: ""
        } ],
        share: !1,
        iphoneX: t.globalData.iphoneX
    },
    mounted: function() {},
    methods: {
        event: function(e) {
            var t = this, n = e.currentTarget.dataset.index;
            0 === n && n != t.data.active ? wx.switchTab({
                url: "../../pages/index/index"
            }) : 1 === n && n != t.data.active ? wx.switchTab({
                url: "../../pages/month/month"
            }) : 2 === n && n != t.data.active ? wx.switchTab({
                url: "../../pages/anniversaries/anniversaries"
            }) : 3 === n && n != t.data.active && wx.switchTab({
                url: "../../pages/more/more"
            });
        },
        openShare: function() {
            this.set({
                share: !0
            });
        },
        closeShare: function() {
            this.set({
                share: !1
            });
        },
        setIndexShareImage: function(e) {
            console.log(e);
        },
        setCheckinTipStorage: function() {
            var e = this;
            wx.setStorage({
                key: "checkinTip",
                data: !0,
                success: function() {
                    e.set({
                        showCheckinTip: !1
                    });
                }
            });
        }
    }
});