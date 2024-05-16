var t = getApp();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../container/index": {
            type: "ancestor"
        }
    },
    properties: {
        background: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        subtitle: {
            type: String,
            value: ""
        },
        back: {
            type: Boolean,
            value: !1
        },
        haveHeight: {
            type: Boolean,
            value: !0
        },
        titleRightIcon: {
            type: String,
            value: ""
        },
        border: {
            type: Boolean,
            value: !1
        },
        borderColor: {
            type: String,
            value: ""
        },
        borderWidth: {
            type: Number,
            value: 0
        },
        loading: {
            type: Boolean,
            value: !1
        },
        loadingColor: {
            type: String,
            value: ""
        },
        loadingWeight: {
            type: Number,
            value: 0
        },
        blur: {
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
        home: !1
    },
    observers: {
        haveHeight: function() {
            var t = this.getRelationNodes("../container-basic/index");
            t.length <= 0 || t[0].init();
        }
    },
    ready: function() {
        1 == getCurrentPages().length ? this.setData({
            home: !0
        }) : this.setData({
            home: !1
        });
    },
    methods: {
        back: function() {
            wx.navigateBack({
                delta: 1
            });
        },
        iconEvent: function() {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.navigation.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.navigation.type
            }), this.data.back ? this.back() : (this.triggerEvent("iconevent"), this.triggerEvent("event"));
        },
        titleEvent: function() {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.navigation.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.navigation.type
            }), this.data.back ? this.back() : (this.triggerEvent("titleevent"), this.triggerEvent("event"));
        }
    }
});