var e = getApp();

Component({
    externalClasses: [ "content-class", "container-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        position: {
            type: String,
            value: "center"
        },
        inDirection: {
            type: String,
            value: "center"
        },
        coverNavigation: {
            type: Boolean,
            value: !1
        },
        coverTabbar: {
            type: Boolean,
            value: !1
        },
        header: {
            type: Boolean,
            value: !1
        },
        headerIndent: {
            type: Boolean,
            value: !0
        },
        headerTitle: {
            type: String,
            value: ""
        },
        headerSubtitle: {
            type: String,
            value: ""
        },
        headerCloseButton: {
            type: Boolean,
            value: !1
        },
        headerAlign: {
            type: String,
            value: "left"
        },
        headerBorder: {
            type: Boolean,
            value: !0
        },
        closeButton: {
            type: Boolean,
            value: !1
        },
        mask: {
            type: Boolean,
            value: !0
        },
        disabledMaskClose: {
            type: Boolean,
            value: !1
        },
        keepScrollPosition: {
            type: Boolean,
            value: !1
        },
        useHeaderSlot: {
            type: Boolean,
            value: !1
        },
        useFooterSlot: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        maxContentHeight: "",
        realContentHeight: "",
        realMainHeight: "",
        popupHeight: "",
        top: 0
    },
    observers: {
        show: function(e) {
            e && this.init();
        }
    },
    methods: {
        init: function() {
            var t = this, o = t.data.coverNavigation ? 0 : e.globalData.navigationHeight, a = t.data.coverTabbar ? 0 : e.globalData.tabbarHeight, n = t.data.header && !t.data.useHeaderSlot ? t.data.subtitle ? 60 : 50 : 0, i = t.data.footer && !t.data.useFooterSlot ? 50 : 0, l = t.data.closeButton ? 60 : 0;
            if (t.data.useHeaderSlot) this.createSelectorQuery().select(".li-popup > .-container > .-header").fields({
                size: !0
            }, function(s) {
                if (n = s.height, t.data.useFooterSlot) t.createSelectorQuery().select(".li-popup > .-container > .-footer").fields({
                    size: !0
                }, function(s) {
                    i = s.height;
                    var r = e.globalData.systemInfo.screenHeight - o - a, c = e.globalData.systemInfo.screenHeight - o - a - n - i - l - 150;
                    t.setData({
                        maxContentHeight: c,
                        popupHeight: r
                    });
                    var u = setTimeout(function() {
                        t.getContentInfo(), clearTimeout(u);
                    }, 350);
                }).exec(); else {
                    var r = e.globalData.systemInfo.screenHeight - o - a, c = e.globalData.systemInfo.screenHeight - o - a - n - i - l - 150;
                    t.setData({
                        maxContentHeight: c,
                        popupHeight: r
                    });
                    var u = setTimeout(function() {
                        t.getContentInfo(), clearTimeout(u);
                    }, 350);
                }
            }).exec(); else if (t.data.useFooterSlot) this.createSelectorQuery().select(".li-popup > .-container > .-footer").fields({
                size: !0
            }, function(s) {
                i = s.height;
                var r = e.globalData.systemInfo.screenHeight - o - a, c = e.globalData.systemInfo.screenHeight - o - a - n - i - l - 150;
                t.setData({
                    maxContentHeight: c,
                    popupHeight: r
                });
                var u = setTimeout(function() {
                    t.getContentInfo(), clearTimeout(u);
                }, 350);
            }).exec(); else {
                var s = e.globalData.systemInfo.screenHeight - o - a, r = e.globalData.systemInfo.screenHeight - o - a - n - i - l - 150;
                t.setData({
                    maxContentHeight: r,
                    popupHeight: s
                });
                var c = setTimeout(function() {
                    t.getContentInfo(), clearTimeout(c);
                }, 350);
            }
        },
        close: function() {
            var e = this;
            e.setData({
                show: !1
            }), e.triggerEvent("close");
            var t = setTimeout(function() {
                e.data.keepScrollPosition || e.setData({
                    top: 0
                }), e.triggerEvent("closeanimationfinish"), clearTimeout(t);
            }, 300);
        },
        open: function() {
            var e = this;
            e.setData({
                show: !0
            }), e.triggerEvent("open");
            var t = setTimeout(function() {
                e.triggerEvent("openanimationfinish"), clearTimeout(t);
            }, 300);
        },
        getContentInfo: function() {
            var e = this, t = this.createSelectorQuery(), o = this.createSelectorQuery();
            t.select(".li-popup > .-container > .-content").fields({
                size: !0,
                computedStyle: [ "padding-top", "padding-bottom" ]
            }, function(t) {
                console.log(t);
                var o = Number(t["padding-top"].replace(/[^0-9]/gi, "")), a = Number(t["padding-bottom"].replace(/[^0-9]/gi, ""));
                e.setData({
                    realContentHeight: t.height - o - a
                });
            }).exec(), o.select(".li-popup > .-container > .-content > .-main").fields({
                size: !0
            }, function(t) {
                console.log(t), e.setData({
                    realMainHeight: t.height
                });
            }).exec();
        },
        toTop: function() {
            this.setData({
                top: 0
            });
        }
    }
});