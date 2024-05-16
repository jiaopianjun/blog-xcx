var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../common/reg"));

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../cell-group/index": {
            type: "ancestor"
        }
    },
    properties: {
        required: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        titleWidth: {
            type: Number,
            value: "90"
        },
        icon: {
            type: String,
            value: ""
        },
        error: {
            type: String,
            value: ""
        },
        textAlign: {
            type: String,
            value: ""
        },
        rightIcon: {
            type: String,
            value: ""
        },
        rightIconId: {
            type: String,
            value: ""
        },
        useRightSlot: {
            type: Boolean,
            value: !1
        },
        validationType: {
            type: String,
            value: ""
        },
        name: {
            type: String,
            value: ""
        },
        value: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: "text"
        },
        placeholder: {
            type: String,
            value: ""
        },
        password: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        maxlength: {
            type: Number,
            value: -1
        },
        cursorSpacing: {
            type: Number,
            value: 0
        },
        focus: {
            type: Boolean,
            value: !1
        },
        confirmType: {
            type: String,
            value: "done"
        },
        alwaysEmbed: {
            type: Boolean,
            value: !1
        },
        confirmHold: {
            type: Boolean,
            value: !1
        },
        cursor: {
            type: Number,
            value: -1
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        selectionEnd: {
            type: Number,
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: !0
        },
        holdKeyboard: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        index: "",
        rightSlotWidth: 0,
        indent: !0,
        indentDistance: 0,
        border: !0
    },
    ready: function() {
        this.data.useRightSlot && this.getSlot();
    },
    methods: {
        setIndex: function(e) {
            this.setData({
                index: e
            });
        },
        getSlot: function() {
            var e = this;
            wx.createSelectorQuery().in(this).select(".li-input > .-slot").fields({
                size: !0
            }, function(t) {
                e.setData({
                    rightSlotWidth: t.width
                });
            }).exec();
        },
        input: function(a) {
            console.log(a);
            var n = this.data.validationType, i = n ? t.default[n](a.detail.value) : {};
            this.triggerEvent("input", {
                name: this.data.name,
                value: a.detail.value,
                validate: e({
                    type: n
                }, i)
            }), n && a.detail.value.length > 0 ? this.setData({
                error: t.default[n](a.detail.value).message
            }) : this.setData({
                error: ""
            });
        },
        blur: function(e) {
            this.event(e, "blur");
        },
        focus: function(e) {
            this.event(e, "focus");
        },
        connfirm: function(e) {
            this.event(e, "confirm");
        },
        keyboardHeightChange: function(e) {
            console.log(e);
        },
        event: function(a, n) {
            var i = this.data.validationType, l = i ? t.default[i](a.detail.value) : {};
            this.triggerEvent(n, {
                name: this.data.name,
                value: a.detail.value,
                validate: e({
                    type: i
                }, l)
            });
        },
        rightIconEvent: function() {
            this.triggerEvent("righticonevent");
        }
    }
});