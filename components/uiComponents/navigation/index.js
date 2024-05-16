var t = getApp();

Component({
    externalClasses: [ "image-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../container-basic/index": {
            type: "ancestor"
        }
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        subtitle: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: ""
        },
        image: {
            type: String,
            value: ""
        },
        titleRightIcon: {
            type: String,
            value: ""
        },
        useSlot: {
            type: Boolean,
            value: !1
        },
        haveHeight: {
            type: Boolean,
            value: !0
        },
        background: {
            type: String,
            value: ""
        },
        color: {
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
            type: String,
            value: ""
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
            type: String,
            value: ""
        },
        blur: {
            type: Boolean,
            value: !0
        },
        back: {
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