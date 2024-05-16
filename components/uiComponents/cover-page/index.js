var e = getApp();

Component({
    externalClasses: [ "custom-class", "container-class", "content-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        size: {
            type: String,
            value: "auto"
        },
        square: {
            type: Boolean,
            value: !1
        },
        coverNavigation: {
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
        disabledTouchAllClose: {
            type: Boolean,
            value: !1
        },
        disabledTouchHeaderClose: {
            type: Boolean,
            value: !1
        },
        disabledTouchContentClose: {
            type: Boolean,
            value: !1
        },
        disabledTouchFooterClose: {
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
        coverPageHeight: "",
        maxContentHeight: "",
        realContentHeight: "",
        realMainHeight: "",
        disableTouch: !0,
        top: 0,
        moveDown: !1,
        moveUp: !1,
        iphoneX: e.globalData.iphoneX
    },
    observers: {
        show: function(e) {
            e && this.init();
        }
    },
    methods: {
        init: function() {
            var t = this, a = t.data.coverNavigation ? 0 : e.globalData.navigationHeight, o = t.data.header && !t.data.useHeaderSlot ? t.data.headerSubtitle ? 60 : 50 : 0, n = t.data.iphoneX ? 34 : 0, i = t.data.closeButton && !t.data.useFooterSlot ? 50 : 0, l = t.data.coverNavigation ? e.globalData.menuInfo.height + 2 * e.globalData.menuInfo.top : 60;
            if ("fullscreen" == this.data.size && (l = 0, a = 0), "fullwindow" == this.data.size && (l = t.data.coverNavigation ? e.globalData.navigationHeight : 0), 
            t.data.useHeaderSlot) {
                var s = this.createSelectorQuery();
                s.select(".li-cover-page > .-container > .-header").fields({
                    size: !0
                }, function(s) {
                    if (o = s.height, t.data.useFooterSlot) t.createSelectorQuery().select(".li-cover-page > .-container > .-footer").fields({
                        size: !0
                    }, function(s) {
                        i = s.height;
                        var r = e.globalData.systemInfo.screenHeight - a, c = e.globalData.systemInfo.screenHeight - a - o - i - l - n;
                        t.setData({
                            maxContentHeight: c,
                            coverPageHeight: r
                        });
                        var g = setTimeout(function() {
                            t.getContentInfo(), clearTimeout(g);
                        }, 350);
                    }).exec(); else {
                        var r = e.globalData.systemInfo.screenHeight - a, c = e.globalData.systemInfo.screenHeight - a - o - i - l - n;
                        t.setData({
                            maxContentHeight: c,
                            coverPageHeight: r
                        });
                        var g = setTimeout(function() {
                            t.getContentInfo(), clearTimeout(g);
                        }, 350);
                    }
                }).exec(), console.log(s);
            } else if (t.data.useFooterSlot) this.createSelectorQuery().select(".li-cover-page > .-container > .-footer").fields({
                size: !0
            }, function(s) {
                i = s.height;
                var r = e.globalData.systemInfo.screenHeight - a, c = e.globalData.systemInfo.screenHeight - a - o - i - l - n;
                t.setData({
                    maxContentHeight: c,
                    coverPageHeight: r
                });
                var g = setTimeout(function() {
                    t.getContentInfo(), clearTimeout(g);
                }, 350);
            }).exec(); else {
                var r = e.globalData.systemInfo.screenHeight - a, c = e.globalData.systemInfo.screenHeight - a - o - i - l - n;
                t.setData({
                    maxContentHeight: c,
                    coverPageHeight: r
                });
                var g = setTimeout(function() {
                    t.getContentInfo(), clearTimeout(g);
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
            var e = this, t = this.createSelectorQuery(), a = this.createSelectorQuery();
            t.select(".li-cover-page > .-container > .-content").fields({
                size: !0,
                computedStyle: [ "padding-top", "padding-bottom" ]
            }, function(t) {
                var a = Number(t["padding-top"].replace(/[^0-9]/gi, "")), o = Number(t["padding-bottom"].replace(/[^0-9]/gi, ""));
                e.setData({
                    realContentHeight: t.height - a - o
                });
            }).exec(), a.select(".li-cover-page > .-container > .-content > .-main").fields({
                size: !0
            }, function(t) {
                e.setData({
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