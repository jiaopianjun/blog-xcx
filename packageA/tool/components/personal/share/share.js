(function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    t.default = e;
})(require("../../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js")), function(e) {
    e && e.__esModule;
}(require("../../../common/dataJs/42782192B0A7888C241E49950DA60087.js"));

var e = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

getApp();

(0, e.MyComponent)({
    props: {
        show: Boolean,
        refresh: Boolean
    },
    data: {},
    methods: {
        cancle: function(e) {
            console.log(e), this.triggerEvent("cancleEvent", {
                data: this.data.show
            });
        },
        bindGetUserInfo: function(e) {
            void 0 !== e.detail.userInfo && this.triggerEvent("poster", {
                nickName: e.detail.userInfo.nickName,
                avatarUrl: e.detail.userInfo.avatarUrl
            });
        }
    }
});