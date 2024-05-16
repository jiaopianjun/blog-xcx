var t = getApp();

Component({
    externalClasses: [ "custom-class", "right-text-class", "right-icon-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        titleRightIcon: {
            type: String,
            value: ""
        },
        subtitle: {
            type: String,
            value: ""
        },
        rightIcon: {
            type: String,
            value: ""
        },
        align: {
            type: String,
            value: "left"
        },
        border: {
            type: Boolean,
            value: !0
        },
        rightText: {
            type: String,
            value: ""
        },
        indent: {
            type: Boolean,
            value: !1
        },
        indentDistance: {
            type: String,
            value: ""
        },
        useRightSlot: {
            type: Boolean,
            value: !1
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
        rightWidth: 0
    },
    attached: function() {
        (this.data.rightText || this.data.useRightSlot || this.data.rightIcon) && this.getRightQuery();
    },
    methods: {
        titleEvent: function() {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.header.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.header.type
            }), this.triggerEvent("titleevent");
        },
        rightEvent: function() {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.header.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.header.type
            }), this.triggerEvent("rightevent");
        },
        getRightQuery: function() {
            var t = this;
            this.createSelectorQuery().select(".li-header > .-right").fields({
                size: !0
            }, function(e) {
                t.setData({
                    rightWidth: e.width
                });
            }).exec();
        }
    }
});