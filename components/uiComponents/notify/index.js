getApp();

Component({
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        position: {
            type: "String",
            value: "top"
        }
    },
    data: {
        show: !1,
        display: !1
    },
    methods: {
        init: function() {},
        open: function() {
            var t = this;
            this.init();
            var i = this.data, o = i.duration, s = i.onOpened;
            console.log(this.data), clearTimeout(this.timer), this.setData({
                show: !0
            }), wx.nextTick(s), o > 0 && o !== 1 / 0 && (this.timer = setTimeout(function() {
                t.close();
            }, o));
        },
        close: function() {
            var t = this.data.onClose;
            clearTimeout(this.timer), this.setData({
                show: !1
            }), wx.nextTick(t);
        },
        onTap: function(t) {
            var i = this.data.onClick;
            i && i(t.detail);
        }
    }
});