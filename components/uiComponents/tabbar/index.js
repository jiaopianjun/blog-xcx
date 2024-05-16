var t = getApp();

Component({
    relations: {
        "../container-basic/index": {
            type: "ancestor"
        }
    },
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        haveHeight: {
            type: Boolean,
            value: !0
        },
        vibrateShot: {
            type: Boolean,
            value: !1
        },
        vibrateShotType: {
            type: String,
            value: ""
        }
    },
    data: {
        tabbar: t.globalData.tabbar,
        activeIndex: -1,
        iphoneX: t.globalData.iphoneX,
        systemInfo: t.globalData.systemInfo
    },
    ready: function() {
        this.setData({
            tabbar: t.globalData.tabbar,
            iphoneX: t.globalData.iphoneX,
            systemInfo: t.globalData.systemInfo
        });
    },
    methods: {
        event: function(a) {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.switch.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.switch.type
            }), this.change(a);
        },
        change: function(t) {
            var a = this, e = this.data.tabbar.list, i = t.currentTarget.dataset.index;
            i != this.data.activeIndex && (this.setData({
                activeIndex: -1
            }), wx.switchTab({
                url: e[i].path,
                success: function(t) {
                    a.triggerEvent("success", t);
                },
                fail: function(t) {
                    a.triggerEvent("fail", t);
                }
            }));
        },
        open: function() {
            this.setData({
                show: !0
            });
        },
        close: function() {
            this.setData({
                show: !1
            });
        }
    }
});