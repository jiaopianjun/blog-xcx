Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.alert = function(n) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "确定";
    return new Promise(function(t) {
        wx.showModal({
            content: n,
            showCancel: !1,
            confirmText: e,
            success: function(n) {
                t(n);
            }
        });
    });
}, exports.getStorage = function(n) {
    return new Promise(function(e, t) {
        wx.getStorage({
            key: n,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
}, exports.getStorageInfo = function() {
    return new Promise(function(n, e) {
        wx.getStorageInfo({
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}, exports.setStorage = function(n, e) {
    return new Promise(function(t, o) {
        wx.setStorage({
            key: n,
            data: e,
            success: function(n) {
                t(n);
            },
            fail: function(n) {
                o(n);
            }
        });
    });
}, exports.removeStorage = function(n) {
    return new Promise(function(e, t) {
        wx.removeStorage({
            key: n,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
}, exports.saveImageToPhotosAlbum = function(n) {
    return new Promise(function(e, t) {
        n.success = function(n) {
            e(n);
        }, n.fail = function(n) {
            t(n);
        }, wx.saveImageToPhotosAlbum(n);
    });
}, exports.getSetting = function() {
    return new Promise(function(n) {
        wx.getSetting({
            success: function(e) {
                n(e.authSetting);
            }
        });
    });
}, exports.getShareInfo = function(n) {
    return new Promise(function(e, t) {
        wx.getShareInfo({
            shareTicket: n,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                reject(n);
            }
        });
    });
}, exports.getSystemInfo = function() {
    return new Promise(function(n, e) {
        wx.getSystemInfo({
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}, exports.getLocation = function() {
    return new Promise(function(n) {
        wx.getLocation({
            success: function(e) {
                n(e);
            },
            fail: function(e) {
                n(e);
            }
        });
    });
};