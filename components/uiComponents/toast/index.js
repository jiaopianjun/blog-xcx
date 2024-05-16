var t = getApp();

Component({
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    data: {
        show: !1,
        toastHeight: "",
        toastWidth: ""
    },
    methods: {
        init: function() {
            var i = this, e = t.globalData.navigationHeight;
            wx.getSystemInfo({
                success: function(t) {
                    if (i.data.native) {
                        var s = t.windowHeight;
                        i.setData({
                            toastHeight: s
                        });
                    } else i.setData({
                        toastHeight: t.windowHeight - e
                    });
                }
            });
        },
        open: function() {
            var t = this, i = this.data, e = i.duration, s = i.onOpened;
            clearTimeout(this.timer), console.log(this.data), this.setData({
                show: !0
            }), this.init(), this.triggerEvent("open"), wx.nextTick(s), e > 0 && e !== 1 / 0 && (this.timer = setTimeout(function() {
                t.close();
            }, e));
        },
        close: function() {
            var t = this.data.onClose;
            clearTimeout(this.timer), this.setData({
                show: !1
            }), this.triggerEvent("close"), wx.nextTick(t);
        }
    }
});