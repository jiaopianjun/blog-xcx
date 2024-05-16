var e = require("../../../@babel/runtime/helpers/interopRequireDefault"),
  t = e(require("../../../@babel/runtime/helpers/slicedToArray")),
  a = e(require("../../../@babel/runtime/regenerator")),
  n = e(require("../../../@babel/runtime/helpers/asyncToGenerator")),
  s = getApp(),
  o = require("../../../utils/event"),
  r = require("../../../utils/wxReg");

Page({
  data: {
    screenHeight: s.globalData.screenHeight,
    screenWidth: s.globalData.screenWidth,
    statusBarHeight: s.globalData.statusBarHeight,
    navBarHeight: s.globalData.navBarHeight,
    navBarFontSize: s.globalData.navBarFontSize,
    btnScopeSize: s.globalData.btnScopeSize,
    btnSize: s.globalData.btnSize,
    isFullScreen: s.globalData.isFullScreen,
    language: s.globalData.language,
    appid: s.globalData.appid,
    i18n: {
      shareMessage: {
        zh: "送你一只国王的风扇，吹吹看～",
        zh_CN: "送你一只国王的风扇，吹吹看～",
        en: "Here is a fan, try it!"
      },
      appTitle: {
        zh: "一只风扇",
        zh_CN: "一只风扇",
        en: "AFAN"
      },
      controlBtnOff: {
        zh: "关闭",
        zh_CN: "关闭",
        en: "OFF"
      },
      controlBtnLow: {
        zh: "一档",
        zh_CN: "一档",
        en: "LOW"
      },
      controlBtnMed: {
        zh: "二档",
        zh_CN: "二档",
        en: "MED"
      },
      controlBtnHigh: {
        zh: "三档",
        zh_CN: "三档",
        en: "HIGH"
      }
    },
    shopInfo: {
      enabled: !1,
      introduce: "本小程序具有清热凉爽、减压助眠之功效，实乃居家旅行之良品。只需轻点开关，即刻驱逐炎热透心凉。",
      title: "",
      subtitle: "",
      icon_url: "",
      mina_url: ""
    },
    minaData: [],
    swing: !1,
    slidedown: !1,
    shuttersReady: !1,
    guide_shop_tips: "意犹未尽？点点我",
    guide_share: !1,
    guide_shop_show: !1,
    guide_1_showed: !0,
    guide_2_showed: !0,
    show_doll: !1,
    shareActionsheetVisibility: !1,
    gear: 0,
    deg: 0,
    level: 0,
    tap_count: 0
  },
  rpm: 0,
  guide_shop_fadein_at: 0,
  guide_shop_fadeout_at: 0,
  guide_collection_fadein_at: 0,
  guide_collection_fadeout_at: 0,
  drawHandle: null,
  guideShareHandle: null,
  transitionHandle: null,
  swingHandle: null,
  guideCollectionHandle: null,
  guideToShopHandle: null,
  sound_1: "https://pics.tide.moreless.io/fan/fan-level-1.mp3",
  sound_2: "https://pics.tide.moreless.io/fan/fan-level-2.mp3",
  sound_3: "https://pics.tide.moreless.io/fan/fan-level-3.mp3",
  onReady: function () {
    var e = this;
    setTimeout(function () {
        e.setData({
          shuttersReady: !0
        });
      }, 500), this.tick_0 = wx.createInnerAudioContext(), this.tick_0.src = "/sounds/tick.mp3",
      this.tick_1 = wx.createInnerAudioContext(), this.tick_1.src = "/sounds/tick.mp3",
      this.sound = wx.getBackgroundAudioManager(), this.sound.title = "一只风扇", this.sound.onTimeUpdate(function () {
        if (e.duration_at) {
          var t = new Date(),
            a = t - e.duration_at;
          if (a > 3e3) {
            e.duration_at = t;
            var i = wx.getStorageSync("total_duration") || 0;
            i += a, wx.setStorageSync("total_duration", i);
          }
        }
      }), this.sound.onPause(function () {
        e.changeLevel(0);
      }), this.sound.onStop(function () {
        e.changeLevel(0);
      }), this.sound.onEnded(function () {
        var t = e.data.level;
        t && (e.sound.title = "一只风扇", e.sound.coverImgUrl = "https://pics.tide.moreless.io/fan/fan-logo.png",
          e.sound.seek = 0, e.sound.src = e["sound_".concat(t)], e.sound.play());
      }), this.sound.coverImgUrl = "https://pics.tide.moreless.io/fan/fan-logo.png", o.on("stopGuide", this, function () {
        e.stopGuide();
      }), this.drawHandle = setInterval(function () {
        e.draw();
      }, 6e4);
  },
  onShare: function () {
    wx.setStorage({
      key: "shared",
      data: "true"
    }), clearInterval(this.guideShareHandle), this.guideShareHandle = null, this.setData({
      shareActionsheetVisibility: !0
    });
  },
  gotoShop: function () {
    this.data.shopInfo.enabled ? wx.navigateToMiniProgram({
      appId: this.data.shopInfo.mina_app_id,
      path: this.data.shopInfo.mina_path
    }) : this.onTapDoll();
  },
  hideShareActionSheet: function () {
    this.setData({
      shareActionsheetVisibility: !1
    });
  },
  initGuide: function () {
    var e = (0, n.default)(a.default.mark(function e() {
      var t, i, n, s = this;
      return a.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = r.wxGetStorage(), i = 0, e.prev = 2, e.next = 5, t({
              key: "guide_shop_show_count"
            });

          case 5:
            n = e.sent, isNaN(n.data) || (i = n.data), e.next = 11;
            break;

          case 9:
            e.prev = 9, e.t0 = e.catch(2);

          case 11:
            i < 2 && this.guide_shop_fadein_at && !this.guideToShopHandle && (this.guideToShopHandle = setTimeout(function () {
              s.setData({
                guide_shop_show: !0
              }), s.guide_collection_fadein_at && s.guide_shop_fadein_at < s.guide_collection_fadein_at && wx.setStorage({
                key: "guide_shop_show_count",
                data: i + 1
              });
            }, this.guide_shop_fadein_at), setTimeout(function () {
              s.setData({
                guide_shop_show: !1
              });
            }, this.guide_shop_fadeout_at || this.guide_shop_fadein_at + 5e3)), i < 1 && this.guide_collection_fadein_at && !this.guideCollectionHandle && (this.guideCollectionHandle = setTimeout(function () {
              o.emit("showCollectionGuide"), s.guide_shop_fadein_at && s.guide_collection_fadein_at < s.guide_shop_fadein_at && wx.setStorage({
                key: "guide_shop_show_count",
                data: i + 1
              });
            }, this.guide_collection_fadein_at), setTimeout(function () {
              o.emit("closeCollectionGuide");
            }, this.guide_collection_fadeout_at || this.guide_collection_fadein_at + 5e3));

          case 13:
          case "end":
            return e.stop();
        }
      }, e, this, [
        [2, 9]
      ]);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(),
  stopGuide: function () {
    clearTimeout(this.guideCollectionHandle), clearTimeout(this.guideToShopHandle),
      this.guideCollectionHandle = null, this.guideToShopHandle = null;
  },
  closeAboutGuide: function () {
    this.setData({
      guide_shop_show: !1
    });
  },
  initGuideShare: function () {
    var e = (0, n.default)(a.default.mark(function e() {
      var t, i = this;
      return a.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = r.wxGetStorage(), e.prev = 1, e.next = 4, t({
              key: "shared"
            });

          case 4:
            e.next = 9;
            break;

          case 6:
            e.prev = 6, e.t0 = e.catch(1), this.guideShareHandle || (this.guideShareHandle = setInterval(function () {
              i.setData({
                guide_share: !0
              });
            }, 6e3));

          case 9:
          case "end":
            return e.stop();
        }
      }, e, this, [
        [1, 6]
      ]);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(),
  onShareBtnAnimatitonEnd: function () {
    this.setData({
      guide_share: !1
    });
  },
  onSpeedUp: function (e, a) {
    var i = this;
    this.initGuide(), this.initGuideShare(), clearTimeout(this.transitionHandle);
    var n = this.data.speedDirection,
      s = 6e4;
    if (n) {
      var o = n.split("-"),
        r = (0, t.default)(o, 2),
        d = r[0],
        u = r[1];
      s = "up" === d ? 2e3 : 1e3 * u - 100;
    }
    var l, h = this.rpm / 60,
      c = this.start_at,
      p = +new Date();
    this.start_at = p, 0 === this.rpm ? (0, l = 0) : l = s - (p - c);
    var _ = l / 1e3 * 360 * h;
    this.rpm = e, this.setData({
      deg: this.data.deg - _ + e / 60 * 360,
      speedDirection: "up-".concat(a)
    }), this.transitionHandle = setTimeout(function () {
      i.start_at = +new Date(), i.setData({
        speedDirection: ""
      }), i.draw();
    }, 900);
  },
  onSpeedDown: function (e, a) {
    var i = this;
    clearTimeout(this.transitionHandle);
    var n = this.data.speedDirection,
      s = 6e4;
    if (n) {
      var o = n.split("-"),
        r = (0, t.default)(o, 2),
        d = r[0],
        u = r[1];
      s = "up" === d ? 2e3 : 1e3 * u - 100;
    }
    var l, h = this.rpm / 60,
      c = this.start_at,
      p = +new Date();
    this.start_at = p, 0 === this.rpm ? (0, l = 0) : l = s - (p - c);
    var _ = l / 1e3 * 360 * h;
    this.rpm = e, this.setData({
      deg: this.data.deg - _ + 360 * h,
      speedDirection: "down-".concat(a)
    }), this.transitionHandle = setTimeout(function () {
      i.start_at = +new Date(), i.setData({
        speedDirection: ""
      }), i.draw();
    }, 1e3 * a - 100);
  },
  onTapDoll: function (e) {
    var t = this;
    this.setData({
      swing: !0,
      slidedown: !this.data.slidedown,
      guide_shop_show: !1
    }), clearTimeout(this.guideToShopHandle), clearTimeout(this.swingHandle), this.swingHandle = setTimeout(function () {
      t.setData({
        swing: !t.data.swing
      });
    }, 300);
  },
  onTapTips: function (e) {
    this.data.shopInfo.enabled ? wx.navigateToMiniProgram({
      appId: this.data.shopInfo.mina_app_id,
      path: this.data.shopInfo.mina_path
    }) : this.onTapDoll();
  },
  closeChutters: function () {
    this.setData({
      swing: !0,
      slidedown: !this.data.slidedown,
      guide_shop_show: !1
    });
  },
  tapBtn: function (e) {
    var t = e.currentTarget.dataset.level;
    this.changeLevel(t);
  },
  changeLevel: function () {
    var e = (0, n.default)(a.default.mark(function e(t) {
      var i;
      return a.default.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (0 === (t = parseInt(t)) || t !== this.data.level) {
              e.next = 3;
              break;
            }
            return e.abrupt("return");

          case 3:
            t !== this.data.level && (wx.vibrateShort(), this.tick ? (this.tick = 0, this.tick_0.play()) : (this.tick = 1,
              this.tick_1.play())), i = 0, e.t0 = t, e.next = 1 === e.t0 ? 8 : 2 === e.t0 ? 10 : 3 === e.t0 ? 12 : 14;
            break;

          case 8:
            return i = 300, e.abrupt("break", 14);

          case 10:
            return i = 700, e.abrupt("break", 14);

          case 12:
            return i = 1e3, e.abrupt("break", 14);

          case 14:
            t ? (this.duration_at = +new Date(), this["sound_".concat(t)] && (this.sound.title = "一只风扇",
                this.sound.coverImgUrl = "https://pics.tide.moreless.io/fan/fan-logo.png", this.sound.src = this["sound_".concat(t)],
                wx.setKeepScreenOn({
                  keepScreenOn: !0
                }))) : (this.sound.stop(), this.duration_at = null, wx.setKeepScreenOn({
                keepScreenOn: !1
              })), t < this.data.level ? this.onSpeedDown(i, this.data.level - t) : t > this.data.level && this.onSpeedUp(i, t - this.data.level),
              this.setData({
                level: t
              });

          case 17:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(),
  draw: function () {
    if (this.start_at = +new Date(), this.rpm) {
      var e = 360 * this.rpm;
      this.setData({
        deg: this.data.deg + e
      });
    }
  },
  onShareAppMessage: function () {
    return {
      title: '夏天了，送你一台小风扇',
      path: 'packageA/tool/fengshan/fengshan',
      imageUrl: ''
    }
  },
  onShareTimeline() {
    return {
      title: '夏天了，送你一台小风扇',
      imageUrl: '',
      query: ''
    };
  },
});