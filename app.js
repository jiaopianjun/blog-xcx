import {
  colorUI
} from './utils/uiconfig';

var t = function (t) {
  return t && t.__esModule ? t : {
    default: t
  };
}(require("utils/comConfig.js"));

App({
  colorUI,
  onLaunch: function () {
    this.updateManager();
    wx.cloud.init({
      env: "cloud1-7g2xy47k81673554"
    }), wx.cloud ? wx.cloud.init({
      traceUser: !0
    }) : console.error("请使用 2.2.3 或以上的基础库以使用云能力"), this.init();
    var t = this;
    wx.getSystemInfo({
      success: function (e) {
        console.log(e);
        var a = RegExp("^.*iPhone X.*$");
        e.model.match(a) ? t.globalData.iphoneX = !0 : t.globalData.iphoneX = !1, t.globalData.barHeight = e.statusBarHeight,
          t.globalData.windowWidth = e.windowWidth, t.globalData.systemInfo = e, t.storageManager(),
          t.isReady = !0, t.readyCallback && t.readyCallback();
      },
      fail: function (e) {
        t.isError = !0, wx.showModal({
          title: "错误",
          content: "获取系统信息出错",
          showCancel: !1
        });
      }
    });
  },
  // 小程序更新
  updateManager() {
    if (!wx.canIUse('getUpdateManager')) {
      return false;
    }
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {});
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '有新版本',
        content: '新版本已经准备好，即将重启',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      });
    });
    updateManager.onUpdateFailed(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本下载失败',
        showCancel: false
      })
    });
  },
  onShow: function () {
    var t = this;
    console.log("app.onshow"), t.globalData.systemInfo ? t.getMenuInfo() : t.getSystemInfoCallback = function () {
      t.getMenuInfo();
    };
    var e = this;
    wx.getSystemInfo({
        success: function(a) {
            var o = a.screenHeight, t = a.screenWidth, n = a.statusBarHeight, l = a.language;
            e.globalData.isFullScreen = parseInt(t / o * 100) < parseInt(9 / 17 * 100), e.globalData.isBiggerScreen = o > 667, 
            e.globalData.statusBarHeight = n, e.globalData.navBarHeight = 44, e.globalData.navBarFontSize = 18.5, 
            e.globalData.btnScopeSize = 40, e.globalData.btnSize = 32, e.globalData.screenHeight = o, 
            e.globalData.screenWidth = t, e.globalData.language = l;
        }
    });
  },


  init: function () {
    var t = this;
    wx.getSystemInfo({
      success: function (e) {
        "IOS" === e.platform.toUpperCase() && e.screenHeight >= 812 ? t.globalData.iphoneX = !0 : t.globalData.iphoneX = !1,
          t.globalData.tabbarHeight = t.globalData.iphoneX ? 74 : 50, t.globalData.systemDarkMode = e.theme || "light",
          t.globalData.systemInfo = e, t.getSystemInfoCallback && t.getSystemInfoCallback(),
          t.storageManager();
      },
      fail: function (t) {
        wx.showModal({
          title: "错误",
          content: "获取系统信息出错，请重新进入小程序",
          showCancel: !1
        });
      }
    });
  },
  getMenuInfo: function () {
    var t = this;
    try {
      if (null === (e = wx.getMenuButtonBoundingClientRect() ? wx.getMenuButtonBoundingClientRect() : null)) throw "getMenuButtonBoundingClientRect error";
      if (!(e.width && e.top && e.left && e.height)) throw "getMenuButtonBoundingClientRect error";
    } catch (a) {
      var e = {
        bottom: 58,
        height: 32,
        left: 278,
        right: 365,
        top: t.globalData.iphoneX || t.globalData.systemInfo.statusBarHeight > 40 ? 50 : 26,
        width: 87
      };
    }
    t.globalData.navigationHeight = 2 * (e.top - t.globalData.systemInfo.statusBarHeight) + t.globalData.systemInfo.statusBarHeight + e.height + 4,
      t.globalData.menuInfo = e;
  },
  storageManager: function () {
    var e = this;
    wx.getStorage({
      key: "storageVersion",
      success: function (a) {
        console.log(a), a.data != t.default.storageVersion ? e.removeStorage() : e.getStorage();
      },
      fail: function () {
        e.removeStorage();
      }
    });
  },
  setStorage: function () {
    var t = this;
    wx.setStorage({
      data: t.globalData.storageVersion,
      key: "storageVersion",
      success: function (e) {
        wx.setStorage({
          data: t.globalData.setting,
          key: "setting",
          success: function () {
            t.isReady = !0, t.appCallback && t.appCallback();
          }
        });
      }
    });
  },
  removeStorage: function () {
    var t = this;
    wx.clearStorage({
      success: function () {
        t.setStorage();
      }
    });
  },
  getStorage: function () {
    var t = this;
    wx.getStorage({
      key: "setting",
      success: function (e) {
        t.globalData.setting = e.data, t.isReady = !0, t.appCallback && t.appCallback();
      }
    });
  },
  globalData: {
    theme: "CLASSIC",
    darkMode: "light",
    userInfo: null,
    openid: '',
    isGetUserInfo: false,
    isGetOpenid: false,
    storageVersion: t.default.storageVersion,
    setting: {
      "darkMode": "system"
    },
    systemInfo: null,
    menuInfo: null,
    navigationHeight: 0,
    tabbarHeight: 50,
    iphoneX: !1,
    systemDarkMode: "light",
    tabbar: {
      list: [{
        icon: "icon-layers-outline",
        name: "Components",
        path: "../../pages/index/index"
      }, {
        icon: "icon-cube-outline",
        name: "Lab",
        path: "../../pages/lab/index"
      }, {
        icon: "icon-person-outline",
        name: "Setting",
        path: "../../pages/setting/index"
      }],
      background: "",
      border: !1,
      color: "var(--text-color-2)",
      selectedColor: "var(--text-color-1)"
    },
    vibrateShotDisabled: !0,
    vibrateShotOptions: {
      button: {
        status: !0,
        type: "heavy"
      },
      cell: {
        status: !0,
        type: "heavy"
      },
      grid: {
        status: !0,
        type: "heavy"
      },
      checkbox: {
        status: !0,
        type: "heavy"
      },
      radio: {
        status: !0,
        type: "heavy"
      },
      switch: {
        status: !0,
        type: "heavy"
      },
      pickerHeader: {
        status: !0,
        type: "heavy"
      },
      header: {
        status: !0,
        type: "heavy"
      },
      navigation: {
        status: !0,
        type: "heavy"
      },
      tabbar: {
        status: !0,
        type: "heavy"
      }
    },
    user: '',
    StatusBar: '',
    CustomBar: ''
  }
})