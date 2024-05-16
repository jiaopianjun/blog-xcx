getApp();

Component({
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        text: {
            type: String,
            value: ""
        },
        background: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        },
        vibrateShot: {
            type: Boolean,
            value: !0
        },
        vibrateShotType: {
            type: String,
            value: "heavy"
        }
    },
    data: {
        show: !1
    },
    ready: function() {
        this.getStorage();
    },
    methods: {
        getStorage: function() {
            var t = this, e = this;
            wx.getStorage({
                key: "star",
                success: function(a) {
                    a.data ? t.setData({
                        show: !1
                    }) : (t.setData({
                        show: !0
                    }), e.triggerEvent("open"));
                },
                fail: function(a) {
                    t.setData({
                        show: !0
                    }), e.triggerEvent("open");
                }
            });
        },
        setStorage: function() {
            var t = this;
            this.data.vibrateShot && wx.vibrateShort({
                type: this.data.vibrateShotType
            }), wx.setStorage({
                data: !0,
                key: "star",
                success: function(e) {
                    t.setData({
                        show: !1
                    }), t.triggerEvent("close");
                }
            });
        }
    }
});