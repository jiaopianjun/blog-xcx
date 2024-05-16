var t = function (t) {
  return t && t.__esModule ? t : {
      default: t
  };
}(require("../../../components/uiComponents/toast/toast"));

Page({
  data: {
    title: "工具箱",
    back: !0,
    eventRadio: "back",
    haveHeight: !0,
    subtitle: "",
    icon: "icon-arrow-ios-back-outline",
    image: "",
    titleRightIcon: "",
    blur: 1,
    backgroundRadio: "default",
    background: "",
    colorRadio: "default",
    color: "",
    border: !1,
    loading: !1,
    loadingColor: "",
    borderColor: "",
    borderWidth: "",
    useSlot: !1,
    leftContent: "icon"
  },
  onLoad: function (options) {

  },
  goBtn(e) {
    console.log(e)
    wx.navigateTo({
      url: '../../tool/webView/webView?url=' + e.currentTarget.dataset.url,
    })
  },
  changeBlurStatus: function (t) {
    this.setData({
      blur: t.detail.checked
    });
  },
  changeLoadingStatus: function (t) {
    this.setData({
      loading: t.detail.checked
    });
  },
  changeSlotStatus: function (t) {
    console.log(t), this.setData({
      useSlot: t.detail.checked
    });
  },
  changeLoadingSetting: function (t) {
    t.detail.indexOf("loadingcolor") > -1 ? this.setData({
      loadingColor: "var(--theme-color)"
    }) : this.setData({
      loadingColor: ""
    });
  },
  changeBackgroundSetting: function (t) {
    "default" == t.detail.value && this.setData({
      background: ""
    }), "custom" == t.detail.value && this.setData({
      background: "var(--theme-color)"
    }), "gradient" == t.detail.value && this.setData({
      background: "linear-gradient(to right, #FFA726, #29B6F6)"
    }), "transparent" == t.detail.value && this.setData({
      background: "transparent"
    });
  },
  changeColorSetting: function (t) {
    "default" == t.detail.value && this.setData({
      color: ""
    }), "custom" == t.detail.value && this.setData({
      color: "var(--highlight-color)"
    });
  },
  changeContentSetting: function (t) {
    console.log(t);
    var e = t.detail;
    e.indexOf("subtitle") > -1 ? this.setData({
      subtitle: "一枚副标题"
    }) : this.setData({
      subtitle: ""
    }), e.indexOf("titlerighticon") > -1 ? this.setData({
      titleRightIcon: "icon-arrow-ios-downward-outline"
    }) : this.setData({
      titleRightIcon: ""
    });
  },
  changeHaveHeightStatus: function (t) {
    this.setData({
      haveHeight: t.detail.checked
    });
  },
  changeBorderStatus: function (t) {
    this.setData({
      border: t.detail.checked
    });
  },
  changeBorderSetting: function (t) {
    var e = t.detail;
    e.indexOf("bordercolor") > -1 ? this.setData({
      borderColor: "var(--theme-color)"
    }) : this.setData({
      borderColor: ""
    }), e.indexOf("borderwidth") > -1 ? this.setData({
      borderWidth: "2px"
    }) : this.setData({
      borderWidth: ""
    });
  },
  changeLeftContentSetting: function (t) {
    "image" == t.detail.value && this.setData({
      icon: "",
      image: "../../images/default.svg"
    }), "icon" == t.detail.value && this.setData({
      image: "",
      icon: "icon-arrow-ios-back-outline"
    });
  },
  changeEventSetting: function (t) {
    "back" == t.detail.value && this.setData({
      back: !0,
      eventRadio: "back"
    }), "event" == t.detail.value && this.setData({
      back: !1,
      eventRadio: "event"
    });
  },
  iconEvent: function () {
    (0, t.default)({
      title: "点击icon触发自定义事件"
    });
  },
  titleEvent: function () {
    (0, t.default)({
      title: "点击标题触发自定义事件"
    });
  }
})