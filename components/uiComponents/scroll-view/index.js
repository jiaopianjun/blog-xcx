getApp();

var e = "";

Component({
    externalClasses: [ "custom-class" ],
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
        refresherEnabled: {
            type: Boolean,
            value: !1
        },
        scrollbar: {
            type: Boolean,
            value: !0
        },
        refresherTriggered: {
            type: Boolean,
            value: !1
        },
        refresherThreshold: {
            type: Number,
            value: 80
        },
        useLoadingSlot: {
            type: Boolean,
            value: !1
        },
        maxHeight: {
            type: Number,
            value: -1
        }
    },
    data: {
        scrollbarHeight: "",
        refresherRestore: !1,
        scrollTop: "",
        scrolling: !1,
        scrollViewHeight: -1
    },
    observers: {
        refresherTriggered: function(e) {
            e && this.setData({
                scrollTop: 0
            });
        }
    },
    ready: function() {},
    methods: {
        onRestore: function(e) {
            this.setData({
                refresherStyle: "opacity:0;transform:scale(0)"
            }), this.triggerEvent("refresherrestore");
        },
        onPulling: function(e) {
            console.log("onPulling:", e);
            var t = Math.min(e.detail.dy / 80, 1), r = "opacity:" + t + ";transform:scale(" + t + ")";
            this.setData({
                scrolling: !1,
                refresherStyle: r
            }), console.log(this.data.refresherRestore), this.triggerEvent("refresherpulling");
        },
        onRefresh: function() {
            this.triggerEvent("refresherrefresh");
        },
        onAbort: function(e) {
            console.log("onAbort", e);
            this.setData({
                refresherStyle: "opacity:0;transform:scale(0)"
            }), this.triggerEvent("refresherabort");
        },
        scroll: function(t) {
            if (this.data.scrollbar) {
                this.data.scrollViewHeight < 0 && this.createSelectorQuery().select(".li-scroll-view").fields({
                    size: !0
                }, function(e) {
                    console.log(e), r.setData({
                        scrollViewHeight: e.height
                    });
                }).exec();
                var r = this;
                this.setData({
                    scrolling: !0
                }), console.log(e), e && clearTimeout(e), e = setTimeout(function() {
                    console.log("chufa"), r.setData({
                        scrolling: !1
                    });
                }, 1500);
                var s = t.detail.scrollTop, l = t.detail.scrollHeight, o = this.data.maxHeight > this.data.scrollViewHeight ? this.data.scrollViewHeight : this.data.maxHeight;
                console.log(o);
                var a = o / l, i = a * o - 6, n = s * a + 3;
                s + o >= l ? this.setData({
                    scrollbarTop: o - (i - (s + o - l) * a) - 3,
                    scrollbarHeight: i - (s + o - l) * a
                }) : s <= 0 ? this.setData({
                    scrollbarTop: 3,
                    scrollbarHeight: i + s * a
                }) : (this.setData({
                    scrollbarHeight: i,
                    scrollbarTop: n
                }), console.log(i, n, o, l));
            } else this.triggerEvent("scroll", t);
        }
    }
});