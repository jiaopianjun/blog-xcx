var e = getApp();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../cell/index": {
            type: "ancestor"
        }
    },
    properties: {
        type: {
            type: String,
            value: "normal"
        },
        checked: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        },
        border: {
            type: Boolean,
            value: !0
        },
        round: {
            type: Boolean,
            value: !0
        },
        block: {
            type: Boolean,
            value: !1
        },
        width: {
            type: String,
            value: ""
        },
        height: {
            type: String,
            value: ""
        },
        checkedColor: {
            type: String,
            value: ""
        },
        uncheckedColor: {
            type: String,
            value: ""
        },
        checkedBackgroundColor: {
            type: String,
            value: ""
        },
        uncheckedBackgroundColor: {
            type: String,
            value: ""
        },
        checkedDotColor: {
            type: String,
            value: ""
        },
        uncheckedDotColor: {
            type: String,
            value: ""
        },
        checkedBorderColor: {
            type: String,
            value: ""
        },
        uncheckedBorderColor: {
            type: String,
            value: ""
        },
        checkedTextColor: {
            type: String,
            value: ""
        },
        uncheckedTextColor: {
            type: String,
            value: ""
        },
        checkedIcon: {
            type: String,
            value: ""
        },
        uncheckedIcon: {
            type: String,
            value: ""
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
    methods: {
        event: function() {
            (this.data.vibrateShot || !e.globalData.vibrateShotDisabled && e.globalData.vibrateShotOptions.switch.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : e.globalData.vibrateShotOptions.switch.type
            }), this.change();
        },
        change: function() {
            this.data.checked ? this.setData({
                checked: !1
            }) : this.setData({
                checked: !0
            }), this.triggerEvent("change", {
                checked: this.data.checked
            });
        }
    }
});