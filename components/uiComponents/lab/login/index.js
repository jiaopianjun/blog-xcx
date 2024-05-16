var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../components/uiComponents/notify/notify")), e = getApp();

wx.cloud.database();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {},
    data: {
        showLogin: !1,
        login: !0,
        logining: !1,
        error: !1
    },
    ready: function() {
        this.getUser();
    },
    methods: {
        getUser: function() {
            var t = this;
            wx.getStorage({
                key: "userInfo",
                success: function(n) {
                    t.setData({
                        login: !0,
                        showLogin: !1
                    }), e.globalData.userInfo = n.data, t.triggerEvent("login", {
                        status: "success",
                        data: n.data
                    });
                },
                fail: function() {
                    wx.cloud.callFunction({
                        name: "getUser"
                    }).then(function(n) {
                        200 == n.result.status ? (t.setData({
                            login: !0,
                            showLogin: !1,
                            error: !1
                        }), wx.setStorage({
                            key: "userInfo",
                            data: n.result.data
                        }), e.globalData.userInfo = n.result.data, t.triggerEvent("login", {
                            status: "success",
                            data: n.result.data
                        })) : (t.setData({
                            login: !1,
                            showLogin: !0,
                            error: !1
                        }), t.triggerEvent("login", {
                            status: "fail",
                            data: ""
                        }));
                    }).catch(function() {
                        t.setData({
                            login: !1,
                            showLogin: !0,
                            error: !0
                        }), t.triggerEvent("login", {
                            status: "fail",
                            data: ""
                        });
                    });
                }
            });
        },
        saveUser: function(n) {
            var o = this, a = this, s = n.detail.detail.userInfo;
            void 0 !== s ? (this.setData({
                logining: !0
            }), wx.cloud.callFunction({
                name: "saveUser",
                data: s
            }).then(function(n) {
                if (console.log(n), 200 == n.result.status) {
                    s._openid = n.result.data, a.setData({
                        login: !0,
                        logining: !1,
                        showLogin: !1,
                        userInfo: s
                    }), wx.setStorage({
                        key: "userInfo",
                        data: s
                    }), e.globalData.userInfo = s, a.triggerEvent("login", {
                        status: "success",
                        data: s
                    });
                    var i = setTimeout(function() {
                        (0, t.default)({
                            content: "授权成功",
                            type: "primary",
                            icon: "icon-bell-outline",
                            closeButton: !0,
                            context: o
                        }), clearTimeout(i);
                    }, 300);
                } else a.setData({
                    logining: !1
                }), a.triggerEvent("login", {
                    status: "fail",
                    data: ""
                }), (0, t.default)({
                    content: "登录失败，请重试一下~",
                    type: "warning",
                    icon: "icon-bell-outline",
                    closeButton: !0,
                    context: o
                });
            }).catch(function(e) {
                a.setData({
                    logining: !1
                }), a.triggerEvent("login", {
                    status: "fail",
                    data: ""
                }), (0, t.default)({
                    content: "登录失败，请重试一下~",
                    type: "warning",
                    icon: "icon-bell-outline",
                    closeButton: !0,
                    context: o
                });
            })) : (a.triggerEvent("login", {
                status: "fail",
                data: ""
            }), (0, t.default)({
                content: "未授权可能导致部分功能不可用",
                type: "warning",
                icon: "icon-bell-outline",
                closeButton: !0,
                context: this
            }));
        },
        reGetSaveUser: function(n) {
            var o = this, a = this;
            wx.cloud.callFunction({
                name: "getUser"
            }).then(function(t) {
                200 == t.result.status ? (a.setData({
                    login: !0,
                    showLogin: !1,
                    error: !1
                }), wx.setStorage({
                    key: "userInfo",
                    data: t.result.data
                }), e.globalData.userInfo = t.result.data, a.triggerEvent("login", {
                    status: "success",
                    data: t.result.data
                })) : (a.setData({
                    error: !1
                }), a.saveUser(n));
            }).catch(function() {
                a.setData({
                    login: !1,
                    showLogin: !0,
                    error: !0
                }), (0, t.default)({
                    content: "获取登录状态失败，请重试一下~",
                    type: "warning",
                    icon: "icon-bell-outline",
                    closeButton: !0,
                    context: o
                });
            });
        },
        close: function() {
            var e = this;
            this.setData({
                showLogin: !1,
                logining: !1
            });
            var n = setTimeout(function() {
                (0, t.default)({
                    content: "未授权可能导致部分功能不可用",
                    type: "warning",
                    icon: "icon-bell-outline",
                    closeButton: !0,
                    context: e
                }), clearTimeout(n);
            }, 300);
        },
        open: function() {
            this.setData({
                showLogin: !0
            });
        }
    }
});