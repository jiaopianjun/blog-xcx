var t = getApp();

Component({
    relations: {
        "../container/index": {
            type: "ancestor"
        }
    },
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        show: {
            type: Boolean,
            value: !0
        },
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
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.tabbar.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.tabbar.type
            }), this.change(a);
        },
        change: function(t) {
            var a = this.data.tabbar.list;
            console.log(a);
            var e = t.currentTarget.dataset.index;
            e != this.data.activeIndex && (this.setData({
                activeIndex: -1
            }), wx.switchTab({
                url: a[e].path
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