function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), l = "";

Component({
    externalClasses: [ "content-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../container/index": {
            type: "ancestor"
        }
    },
    properties: {
        indent: {
            type: Boolean,
            value: !0
        },
        useLoadingSlot: {
            type: Boolean,
            value: !1
        },
        refresherEnabled: {
            type: Boolean,
            value: !1
        },
        refresherTriggered: {
            type: Boolean,
            value: !1
        },
        refresherThreshold: {
            type: Number,
            value: 80
        },
        scrollbar: {
            type: Boolean,
            value: !0
        },
        scrollbarType: {
            type: String,
            value: "top"
        },
        scrollbarAutoHide: {
            type: Boolean,
            value: !0
        },
        scrollbarPosition: {
            type: String,
            value: "pagetop"
        },
        scrollbarBackground: {
            type: String,
            value: ""
        }
    },
    data: (a = {
        scrollbarHeight: "",
        navigationHeight: e.globalData.navigationHeight,
        systemInfo: e.globalData.systemInfo,
        haveNavigation: !0,
        haveTabbar: !0,
        tabbarHeight: e.globalData.tabbarHeight,
        refresherRestore: !1,
        scrollTop: ""
    }, t(a, "scrollbarHeight", ""), t(a, "scrollbarWidth", ""), t(a, "transitionOrigin", "top"), 
    t(a, "scrolling", !1), a),
    observers: {
        refresherTriggered: function(t) {
            t && this.setData({
                scrollTop: 0
            });
        }
    },
    methods: {
        init: function(t) {
            this.setData({
                haveNavigation: t.haveNavigation,
                haveTabbar: t.haveTabbar
            });
        },
        scrolling: function() {
            var t = this;
            this.setData({
                scrolling: !0
            }), l && clearTimeout(l), l = setTimeout(function() {
                t.setData({
                    scrolling: !1
                });
            }, 1500);
        },
        onScrollWithRightScrollbar: function(t) {
            if (this.data.scrollbar) {
                this.scrolling();
                var a = this.data.haveNavigation ? e.globalData.navigationHeight : 0, l = this.data.haveTabbar ? e.globalDatata.tabbarHeight : 0, r = t.detail.scrollTop, o = t.detail.scrollHeight - a - l, i = e.globalData.systemInfo.screenHeight - a - l, s = i / o, n = s * i - 6, h = r * s + a + 3;
                r + i >= o ? this.setData({
                    scrollbarTop: i - (n - (r + i - o) * s) + a - 3,
                    scrollbarHeight: n - (r + i - o) * s
                }) : r <= 0 ? this.setData({
                    scrollbarTop: a + 3,
                    scrollbarHeight: n + r * s,
                    transitionOrigin: "top"
                }) : this.setData({
                    scrollbarHeight: n,
                    scrollbarTop: h,
                    transitionOrigin: "bottom"
                });
            } else this.triggerEvent("scroll", t);
        },
        onScrollWithTopScrollbar: function(t) {
            if (this.data.scrollbar) {
                this.scrolling();
                var a = t.detail.scrollTop, l = e.globalData.systemInfo.screenHeight, r = e.globalData.systemInfo.screenWidth, o = r / l, i = t.detail.scrollHeight - l, s = l / i, n = Math.ceil(a * o * s);
                a >= i ? this.setData({
                    scrollbarWidth: r
                }) : a <= 0 ? this.setData({
                    scrollbarWidth: 0
                }) : this.setData({
                    scrollbarWidth: n
                });
            } else this.triggerEvent("scroll", t);
        }
    }
});