getApp();

var t = [];

Component({
    externalClasses: [ "custom-class", "column-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        data: {
            type: Array,
            value: []
        },
        value: {
            type: Array,
            value: []
        },
        header: {
            type: Boolean,
            value: !0
        },
        title: {
            type: String,
            value: ""
        },
        rows: {
            type: Number,
            value: 5
        }
    },
    data: {
        activeChangeIndex: -1,
        changing: !1
    },
    methods: {
        catchtouchmove: function() {},
        cancel: function() {
            this.triggerEvent("cancel");
        },
        confirm: function() {
            this.triggerEvent("confirm", this.data.value);
        },
        change: function(e) {
            t = e.detail.value, this.setData({
                value: t
            }), this.triggerEvent("change", t);
        },
        start: function(t) {
            this.setData({
                changing: !0
            }), this.triggerEvent("start");
        },
        end: function(e) {
            this.setData({
                changing: !1
            }), this.triggerEvent("end", t);
        }
    }
});