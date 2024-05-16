var t = getApp();

Component({
    externalClasses: [ "custom-class", "icon-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        text: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: "normal"
        },
        buttonStyle: {
            type: String,
            value: "solid"
        },
        block: {
            type: Boolean,
            value: !1
        },
        round: {
            type: Boolean,
            value: !1
        },
        square: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        },
        loadingText: {
            type: String,
            value: ""
        },
        loadingColor: {
            type: String,
            value: ""
        },
        loadingWeight: {
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
        gradientColor: {
            type: String,
            value: ""
        },
        borderWidth: {
            type: String,
            value: ""
        },
        borderColor: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: ""
        },
        rightIcon: {
            type: String,
            value: ""
        },
        openType: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        hover: {
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
        },
        navigator: {
            type: Boolean,
            value: !1
        },
        navigatorTarget: {
            type: String,
            value: "self"
        },
        navigatorUrl: {
            type: String,
            value: ""
        },
        navigatorOpenType: {
            type: String,
            value: "navigate"
        },
        navigatorDelta: {
            type: Number,
            value: 0
        },
        navigatorAppId: {
            type: String,
            value: ""
        },
        navigatorPath: {
            type: String,
            value: ""
        },
        navigatorExtraData: {
            type: Object,
            value: {}
        },
        navigatorVersion: {
            type: String,
            value: ""
        }
    },
    methods: {
        tap: function(a) {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.button.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.button.type
            }), this.data.navigator || this.data.openType || this.data.disabled || this.data.loading || this.event(a);
        },
        event: function(t) {
            this.triggerEvent("event", t);
        },
        longPress: function(a) {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.button.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.button.type
            }), this.data.disabled || this.data.loading || this.triggerEvent("longpress", a);
        },
        openTypeEvent: function() {
            this.data.disabled || this.data.loading || this.triggerEvent(e.type, e.detail);
        }
    }
});