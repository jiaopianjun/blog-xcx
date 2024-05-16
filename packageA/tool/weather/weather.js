const app = getApp();
const util = require('../../../utils/date.js')
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.min.js')
var qqmapsdk = new QQMapWX({
  key: '6FVBZ-2N7KQ-6IB5N-GJDNL-UQZPS-RHB3E'
})
Page({
  data: {
    newsList: [],
    calendar: [],
    historyList: [],
    weather: [],
    time: '',
    qrcode: '',
    lunar: '',
    load: true,
    loadError: false,
    hotnews: false,
    title: "每日一句",
    back: true,
    eventRadio: "event",
    haveHeight: 1,
    subtitle: "",
    icon: "icon-arrow-ios-back-outline",
    image: "",
    titleRightIcon: "",
    blur: !0,
    backgroundRadio: "default",
    background: "linear-gradient(to right, #FFA726, #29B6F6)",
    colorRadio: "default",
    color: "#fff",
    border: !1,
    loading: !1,
    loadingColor: "",
    borderColor: "",
    borderWidth: "",
    useSlot: !1,
    leftContent: "icon",


    api: 'https://web.lieme.cn/api/w.php',
    path: 'cloud://suinizan-900565.7375-suinizan-900565-1253895640',
    userInfo: {},
    hdimg: '',
    hdname: '',
    homePage: true,
    detailPage: false,
    selectArea: false,
    onDetail: false,
    aqiDetail: false,
    lifeDetail: false,
    dailyDetail: false,
    alldata: [],
    hotArea: ['上海', '北京', '无锡', '西安', '广州', '南京', '武汉', '苏州', '陕西'],
    lifeIndex: {
      "空调指数": "cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/ktzs.png",
      "运动指数": "cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/ydzs.png",
      "紫外线指数": "cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/zwxzs.png",
      "感冒指数": "cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/gmzs.png",
      "洗车指数": "cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/xczs.png",
      "空气污染扩散指数": "cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/kqzs.png",
      "穿衣指数": "cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/cyzs.png",
    },
    historyArea: [],
    inpuText: '',
    realdata: [],
    life: [],
    aqi: [],
    daily: [],
    hourly: [],
    quality: '',
    getLotion: 'null',
    getSuccess: 'false',
    isGetLotion: false,
    aqiMsg: '',
    airPredict: '',
    clock: 0,
    pageHeight: 0,
    msgText: '位置获取中.....',
    loadingBtn: false,
    scroll: 0,
    canvasPic: false,
    painting: {},
    shareImage: '',
    shareText: "保存图片",
    loading: true
  },

  // 搜索新地区
  goSelectArea: function () {
    var _this = this.data
    if (_this.getLotion === '' || _this.getLotion === 'null') {
      this.setData({
        getLotion: ''
      })
    }
    this.setData({
      homePage: false,
      selectArea: true,
      getSuccess: 'true'
    })
  },
  // 七日天气
  lookMore: function () {
    this.setData({
      homePage: false,
      detailPage: true,
      dailyDetail: true,
      scroll: 600
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })

    wx.setNavigationBarTitle({
      title: this.data.getLotion + '• 七日天气详情'
    })
  },
  //详细生活指数
  lookDetailLife: function () {
    this.setData({
      homePage: false,
      detailPage: true,
      lifeDetail: true
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
    wx.setNavigationBarTitle({
      title: this.data.getLotion + '• 生活指数详情'
    })
  },
  //详细aqi指数
  lookAqi: function () {
    this.setData({
      homePage: false,
      detailPage: true,
      lifeDetail: false,
      onDetail: true,
      aqiDetail: true
    })
    wx.setNavigationBarTitle({
      title: this.data.getLotion + '• 空气指数详情'
    })
  },
  //返回
  back: function () {
    this.setData({
      homePage: true,
      detailPage: false,
      lifeDetail: false,
      onDetail: false,
      aqiDetail: false,
      dailyDetail: false,
      selectArea: false
    })
    wx.setNavigationBarTitle({
      title: this.data.getLotion
    })
  },
  goWeather: function (e) {
    this.getWeatherData(e.currentTarget.dataset.city)
  },
  inputGoWeather: function () {
    var _this = this.data
    if (_this.inpuText === '') {
      alert('请输入要查询的城市！！')
    } else {
      this.getWeatherData(_this.inpuText)
    }
  },
  writeArea: function (e) {
    this.setData({
      inpuText: e.detail.value
    })
  },
  clearInpuText: function (e) {
    this.setData({
      inpuText: ' '
    })
  },
  getWeatherData: function (city) {
    var _this = this,
      thisdata = this.data,
      historyArea = thisdata.historyArea;
    wx.request({
      url: _this.data.api,
      data: {
        "city": city
      },
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      dataType: 'jsonp',
      jsonp: 'callback',
      success: function (res) {
        var res = res.data
        res = JSON.parse(res)
        if (res.status === 0) {
          var data = res['result']
          data.img = 'cloud://suinizan-900565.7375-suinizan-900565-1253895640/images/condicon/' + data.img + 'b.png'
          _this.setData({
            getSuccess: 'true',
            getLotion: city,
            realdata: data,
            clock: data.updatetime,
            aqi: data['aqi'],
            aqiMsg: data.aqi.aqiinfo.affect + '，' + data.aqi.aqiinfo.measure,
            life: data['index'],
            daily: data['daily'],
            hourly: data['hourly'],
            airPredict: '两小时之后天气' + data.hourly[2].weather + ' ，温度 ' + data.hourly[2].temp + '°',
            quality: data['aqi'].quality
          })
          // 搜索返回成功后 清除 输入框，将搜索结果放入历史记录
          // _this.$refs.clearText.value = ''
          if (thisdata.inpuText !== '') {
            if (thisdata.historyArea.indexOf(thisdata.inpuText) === -1) {
              historyArea.push(thisdata.inpuText)
              _this.setData({
                historyArea: historyArea
              })
            }
          }
          _this.back()
        } else {
          wx.showModal({
            title: '提示',
            content: res.msg,
            success: function (res) {
              if (res.confirm) {
                _this.setData({
                  msgText: '位置获取失败！！！请手动选择',
                  loadingBtn: true
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      },
      error: function (res) {
        wx.showModal({
          title: '提示',
          content: '天气获取失败，请稍后再试！！',
          success: function (res) {
            if (res.confirm) {
              _this.setData({
                msgText: '位置获取失败！！！请手动选择',
                loadingBtn: true
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  copy: function () {
    wx.setClipboardData({
      data: '小夭同学',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  // 定位获取
  selectLocation: function () {
    let _this = this
    _this.getlocation();
  },
  getlocation() {
    var _this = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            console.log(res)
            _this.setData({
              getLotion: res.result.address_component.district ? res.result.address_component.district : res.result.address_component.city
            })
            wx.setNavigationBarTitle({
              title: res.result.address_component.district
            })
            _this.getWeatherData(res.result.address_component.district)
          }
        })
      },
      fail: function (res) {
        _this.setData({
          msgText: '位置获取失败！！！请手动选择',
          loadingBtn: true
        })
      }
    })
  },
  closesaveimage: function () {
    this.setData({
      homePage: true,
      canvasPic: false,
      loading: true
    })
  },
  generate: function () {
    this.setData({
      homePage: false,
      canvasPic: true
    })
    var p = {
      width: 680, //这里的宽度 指的是 分享海报 的宽
      height: 900,
      clear: true,
      views: [{
          type: 'rect',
          background: '#fff',
          top: 0,
          left: 0,
          width: 680,
          height: 900
        },
        {
          type: 'rect',
          background: '#C1D1D8',
          top: 65,
          left: 65,
          width: 550,
          height: 550
        },
        {
          type: 'image',
          url: '../../pages/images/picl.png',
          top: 105,
          left: 95,
          width: 48,
          height: 48
        },
        {
          type: 'text',
          content: this.data.getLotion,
          fontSize: 28,
          color: '#fff',
          textAlign: 'left',
          top: 110,
          left: 155,
        },
        {
          type: 'text',
          content: this.data.realdata.week,
          fontSize: 28,
          color: '#fff',
          textAlign: 'left',
          top: 110,
          left: 495,
        },
        {
          type: 'text',
          content: this.data.realdata.temp + '°',
          fontSize: 80,
          color: '#fff',
          textAlign: 'center',
          top: 180,
          left: 355,
          width: 100,
        },
        {
          type: 'text',
          content: this.data.realdata.weather,
          fontSize: 60,
          color: '#fff',
          textAlign: 'center',
          top: 310,
          left: 350,
          width: 100,
        },
        {
          type: 'text',
          content: this.data.realdata.templow + '° / ' + this.data.realdata.temphigh + '°',
          fontSize: 40,
          color: '#fff',
          textAlign: 'center',
          top: 420,
          left: 355,
          width: 100,
        },
        {
          type: 'text',
          content: this.data.realdata.winddirect + ' ' + this.data.realdata.windpower + '  •  ' + '空气质量 ' + this.data.quality,
          fontSize: 30,
          color: '#fff',
          textAlign: 'center',
          top: 520,
          left: 355,
          width: 100,
        },
        {
          type: 'image',
          url: '../../pages/images/ma.jpg',
          top: 660,
          left: 420,
          width: 195,
          height: 195
        },
        {
          type: 'text',
          content: this.data.hdname + '邀你查看天气 ☞☞☞',
          fontSize: 30,
          color: '#3C5F81',
          textAlign: 'left',
          top: 710,
          left: 65,
          width: 100,
        },
        {
          type: 'text',
          content: '微信搜索 【随你赞】',
          fontSize: 30,
          color: '#3C5F81',
          textAlign: 'left',
          top: 780,
          left: 65,
          width: 100,
        },
      ]
    }
    this.setData({
      isShow: false,
      painting: p,
    })
    wx.showLoading({
      title: '卖力生成中',
      mask: true
    })
    this.eventGetImage()
  },
  eventGetImage: function (event) {
    var that = this
    if (event !== undefined) {
      setTimeout(function () {
        const {
          tempFilePath
        } = event.detail;
        that.setData({
          shareImage: tempFilePath
        })
        wx.hideLoading();
        that.setData({
          loading: false
        })
      }, 1000)
    }
  },
  //保存相册
  eventSave: function () {
    //查看授权状态；
    var that = this
    if (wx.getSetting) { //判断是否存在函数wx.getSetting在版本库1.2以上才能用
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success(res) {
                wx.saveImageToPhotosAlbum({
                  filePath: that.data.shareImage,
                  success: function (res) {
                    that.setData({
                      isShow: true
                    })
                    wx.showToast({
                      title: '图片保存成功',
                    });
                  },
                  fail: function (res) {
                    wx.showToast({
                      title: '图片保存失败',
                      icon: 'none',
                    });
                  }
                })

              },
              fail: function (res) {
                //拒绝授权时会弹出提示框，提醒用户需要授权
                wx.showModal({
                  title: '提示',
                  content: '保存图片需要授权，是否去授权',
                  success: function (res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success: function (res) {}
                      })
                    }
                  }
                })
              }
            })
          } else {
            console.log("已经授权过了");
            wx.saveImageToPhotosAlbum({
              filePath: that.data.shareImage,
              success: function (res) {
                that.setData({
                  isShow: true
                })
                wx.showToast({
                  title: '图片保存成功',
                });
              },
              fail: function (res) {
                wx.showToast({
                  title: '图片保存失败',
                  icon: 'none',
                });
              }
            })

          }
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '因当前微信版本过低导致无法下载，请更新至最新版本',
        showCancel: false,
        complete: function () {}
      })
    }
  },
  bindGetUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      hdimg: e.detail.userInfo.avatarUrl,
      hdname: e.detail.userInfo.nickName,
    })
  },
  back: function () {
    console.log(23)
    // 返回
    wx.switchTab({
      url: '../../index/index'
    })
  },
  onLoad(options) {
    const _this = this
    _this.setData({
      time: util.getNowTime('notime')
    })
    wx.setNavigationBarTitle({
      title: `${util.getNowTime('notime')} - 新闻简报`,
    })
    _this.setData({
      subtitle: `${util.getNowTime('notime')} - 新闻简报`,
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#374646',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })

    _this.getlocation();
    if (options.city) {
      this.setData({
        getLotion: options.city
      })
    }
    //实例化腾讯地图
    qqmapsdk = new QQMapWX({
      key: '6FVBZ-2N7KQ-6IB5N-GJDNL-UQZPS-RHB3E'
    });
    _this.setData({
      pageHeight: wx.getSystemInfoSync().windowHeight
    })
  },
  onShareAppMessage: function () {
    return {
      title: `${util.getNowTime('notime')} - 新闻简报`,
      path: 'packageA/tool/hotNews/hotNews',
      imageUrl: 'https://blogimg.lieme.cn/FruMcZlqMxb53qURUilFPwZ3RnFQ'
    }
  },
  onShareTimeline() {
    return {
      title: `${util.getNowTime('notime')} - 新闻简报`,
      imageUrl: 'https://blogimg.lieme.cn/FruMcZlqMxb53qURUilFPwZ3RnFQ',
      query: ''
    };
  },
})