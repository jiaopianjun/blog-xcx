var e = getApp();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../checkbox-group/index": {
            type: "ancestor"
        },
        "../cell/index": {
            type: "ancestor"
        }
    },
    properties: {
        type: {
            type: String,
            value: "normal"
        },
        circle: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        value: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        checked: {
            type: Boolean,
            value: !1
        },
        checkedIcon: {
            type: String,
            value: ""
        },
        uncheckedIcon: {
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
        index: ""
    },
    methods: {
        setIndex: function(e) {
            this.setData({
                index: e
            });
        },
        event: function() {
            (this.data.vibrateShot || !e.globalData.vibrateShotDisabled && e.globalData.vibrateShotOptions.checkbox.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : e.globalData.vibrateShotOptions.checkbox.type
            }), this.change();
        },
        change: function() {
            var e = this.getRelationNodes("../checkbox-group/index");
            this.data.checked ? (this.setData({
                checked: !1
            }), e[0].change({
                index: this.data.index,
                type: "remove"
            })) : (this.setData({
                checked: !0
            }), e[0].change({
                index: this.data.index,
                type: "add"
            }));
        }
    }
});