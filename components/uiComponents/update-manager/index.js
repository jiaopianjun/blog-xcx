getApp();

Component({
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        disabledMaskClose: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    ready: function() {
        this.updateManager();
    },
    methods: {
        confirm: function() {
            wx.getUpdateManager().applyUpdate();
        },
        updateManager: function() {
            var e = this, t = wx.getUpdateManager();
            t.onCheckForUpdate(function(t) {
                e.triggerEvent("hasupdate", t.hasUpdate);
            }), t.onUpdateReady(function() {
                e.open();
            });
        },
        open: function() {
            this.selectComponent("#update-manager").open();
        }
    }
});