!function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    e.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var t = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

getApp();

(0, t.MyComponent)({
    props: {
        show: Boolean,
        maskCancle: Boolean,
        update: Boolean,
        icon: String,
        title: String,
        description: String,
        btnText: String,
        iconColor: String,
        btnColor: String
    },
    data: {
        state: !1
    },
    mounted: function() {
        this.data.update && this.updateManager();
    },
    methods: {
        confirm: function() {
            this.data.state ? (wx.getUpdateManager().applyUpdate(), this.set({
                state: !1,
                show: !1
            })) : this.triggerEvent("confirmEvent");
        },
        cancle: function() {
            this.triggerEvent("cancleEvent", {
                data: this.data.show
            });
        },
        updateManager: function() {
            var t = this, e = wx.getUpdateManager();
            e.onUpdateReady(function() {
                t.set({
                    state: !0,
                    show: !0
                });
            });
        },
        getUpdateInfo: function() {}
    }
});