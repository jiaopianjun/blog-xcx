var t = getApp();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        loading: {
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
    data: {},
    methods: {
        confirm: function() {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.pickerHeader.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.pickerHeader.type
            }), this.triggerEvent("confirm");
        },
        cancel: function() {
            this.data.vibrateShot && wx.vibrateShort({
                type: this.data.vibrateShotType
            }), this.triggerEvent("cancel");
        }
    }
});