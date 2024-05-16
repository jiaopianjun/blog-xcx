!function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    e.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var t = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

getApp();

(0, t.MyComponent)({
    props: {
        show: Boolean,
        showCancle: Boolean,
        customClose: Boolean,
        scroll: {
            type: Boolean,
            value: !1
        },
        maskCancle: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        popupHeight: "",
        disableTouch: !0
    },
    mounted: function() {
        this.getContentInfo();
    },
    watch: {
        show: function() {
            this.data.show && this.getContentInfo();
        }
    },
    methods: {
        close: function() {
            var t = this;
            t.set({
                show: !1
            }), setTimeout(function() {
                t.triggerEvent("cancleEvent");
            }, 300);
        },
        customClose: function() {
            this.triggerEvent("cancleEvent");
        },
        move: function() {
            var t = this;
            this.createSelectorQuery().select(".popup > .-content").fields({
                dataset: !0,
                size: !0,
                scrollOffset: !0,
                properties: [ "scrollX", "scrollY" ]
            }, function(e) {
                e.dataset, e.width, e.height, e.scrollLeft, e.scrollTop, e.scrollX, e.scrollY, t.data.popupHeight - e.height === e.scrollTop ? t.setData({
                    disableTouch: !0
                }) : 0 === e.scrollTop && t.setData({
                    disableTouch: !0
                });
            }).exec();
        },
        touch: function(t) {},
        disableTouch: function() {
            wx.showToast({
                title: "已经到头啦",
                mask: !0,
                icon: "none",
                duration: 500
            });
        },
        getContentInfo: function() {
            var t = this;
            this.createSelectorQuery().select(".popup > .-content > .-main").fields({
                dataset: !0,
                size: !0,
                scrollOffset: !0,
                properties: [ "scrollX", "scrollY" ]
            }, function(e) {
                e.dataset, e.width, e.height, e.scrollLeft, e.scrollTop, t.setData({
                    popupHeight: e.height
                }), e.height <= 320 && t.setData({
                    disableTouch: !0
                });
            }).exec();
        }
    }
});