function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = getApp();

Component((e = {
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../grid-group/index": {
            type: "ancestor"
        }
    }
}, t(e, "externalClasses", [ "icon-class", "label-class", "title-class" ]), t(e, "properties", {
    title: {
        type: String,
        value: ""
    },
    lable: {
        type: String,
        value: ""
    },
    icon: {
        type: String,
        value: ""
    },
    hover: {
        type: Boolean,
        value: !0
    },
    openType: {
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
        value: ""
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
    },
    vibrateShot: {
        type: Boolean,
        value: !1
    },
    vibrateShotType: {
        type: String,
        value: ""
    }
}), t(e, "data", {
    index: "",
    borderBottom: !1,
    borderRight: !1,
    style: ""
}), t(e, "methods", {
    tap: function(t) {
        (this.data.vibrateShot || !a.globalData.vibrateShotDisabled && a.globalData.vibrateShotOptions.grid.status) && wx.vibrateShort({
            type: this.data.vibrateShotType ? this.data.vibrateShotType : a.globalData.vibrateShotOptions.grid.type
        }), this.data.navigator || this.data.openType || this.event(t);
    },
    event: function(t) {
        this.triggerEvent("event", t);
    },
    longPress: function(t) {
        (this.data.vibrateShot || !a.globalData.vibrateShotDisabled && a.globalData.vibrateShotOptions.grid.status) && wx.vibrateShort({
            type: this.data.vibrateShotType ? this.data.vibrateShotType : a.globalData.vibrateShotOptions.grid.type
        }), this.triggerEvent("longpress", t);
    },
    setStyle: function(t, e) {
        var a = "width:calc(100% / " + t + ");" + "";
        this.setData({
            style: a
        });
    },
    setBorderBottom: function() {
        this.setData({
            borderBottom: !0
        });
    },
    setBorderRight: function() {
        this.setData({
            borderRight: !0
        });
    },
    setBorderTop: function() {
        this.setData({
            borderTop: !0
        });
    },
    setIndex: function(t) {
        this.setData({
            index: t
        });
    }
}), e));