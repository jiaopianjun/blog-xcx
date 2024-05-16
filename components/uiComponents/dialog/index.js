getApp();

Component({
    externalClasses: [ "content-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    data: {
        show: !1
    },
    methods: {
        cancel: function(t) {
            var a = this;
            a.setData({
                show: !1
            }), a.triggerEvent("cancel", {
                dialog: a
            });
            var e = a.data.cancel;
            e && e(t.detail);
        },
        confirm: function(t) {
            var a = this;
            a.setData({
                show: !1
            }), a.triggerEvent("confirm", {
                dialog: a
            });
            var e = a.data.confirm;
            e && e(t.detail);
        }
    }
});