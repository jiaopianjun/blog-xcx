var t = getApp();

Component({
    externalClasses: [ "custom-class", "hover-class", "title-class", "icon-class", "image-class", "right-text-class", "right-icon-class", "right-image-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../cell-group/index": {
            type: "ancestor"
        },
        "../radio/index": {
            type: "descendant"
        },
        "../switch/index": {
            type: "descendant"
        },
        "../checkbox/index": {
            type: "descendant"
        }
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        titleWidth: {
            type: String,
            value: ""
        },
        titleLineClamp: {
            type: Number,
            value: 1
        },
        description: {
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
        rightText: {
            type: String,
            value: ""
        },
        rightIcon: {
            type: String,
            value: ""
        },
        rightImage: {
            type: String,
            value: ""
        },
        useRightSlot: {
            type: Boolean,
            value: !1
        },
        switch: {
            type: Boolean,
            value: !1
        },
        radio: {
            type: Boolean,
            value: !1
        },
        checkbox: {
            type: Boolean,
            value: !1
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
        background: {
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
        disabled: {
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
    data: {
        index: "",
        rightWidth: "",
        border: !0,
        indent: !1,
        indentDistance: ""
    },
    observers: {
        "rightText, useRightSlot, rightImage, titleWidth": function(t, e, a, i) {
            (t || e || a) && !i && this.getRightQuery();
        }
    },
    ready: function() {
        this.data.rightText && this.data.useRightSlot || this.data.rightText && this.data.rightImage || this.data.rightImage && this.data.useRightSlot ? console.warn("cell组件的rightText、useRightSlot、rightImage只可同时指定其中一个值") : "" == this.data.icon || "" == this.data.image ? (this.data.rightText || this.data.useRightSlot || this.data.rightImage) && !this.data.titleWidth && this.getRightQuery() : console.warn("cell组件的icon、image只可同时指定其中一个值");
    },
    methods: {
        tap: function(e) {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.cell.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.cell.type
            }), this.data.navigator || this.data.openType || this.event(e);
        },
        event: function(t) {
            if (this.data.openType) this.triggerEvent("event", t); else if (this.data.radio) (e = this.getRelationNodes("../radio/index"))[0].change(); else if (this.data.checkbox) (e = this.getRelationNodes("../checkbox/index"))[0].change(); else if (this.data.switch) {
                var e = this.getRelationNodes("../switch/index");
                e[0].change();
            } else this.triggerEvent("event", t);
        },
        longPress: function(e) {
            (this.data.vibrateShot || !t.globalData.vibrateShotDisabled && t.globalData.vibrateShotOptions.cell.status) && wx.vibrateShort({
                type: this.data.vibrateShotType ? this.data.vibrateShotType : t.globalData.vibrateShotOptions.cell.type
            }), this.triggerEvent("longpress", e);
        },
        setIndex: function(t) {
            this.setData({
                index: t
            });
        },
        getRightQuery: function() {
            var t = this, e = this.data.useRightSlot ? ".li-cell > .-main > .-content > .-right-slot" : this.data.rightText ? ".li-cell > .-main > .-content > .-text" : ".li-cell > .-main > .-content > .-right-image";
            this.createSelectorQuery().select(e).fields({
                size: !0
            }, function(e) {
                e && t.setData({
                    rightWidth: e.width
                });
            }).exec();
        }
    }
});