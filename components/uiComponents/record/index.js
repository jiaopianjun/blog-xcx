getApp();

var e = requirePlugin("WechatSI").getRecordRecognitionManager();

Component({
    externalClasses: [ "content-class", "container-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        lang: {
            type: String,
            value: "zh_CN"
        },
        duration: {
            type: Number,
            value: 6e4
        },
        disableSymbols: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        recording: !1,
        result: "",
        showResult: "按住说话",
        recordScope: "none",
        recordManagerStatus: "end"
    },
    ready: function() {
        this.getRecordSope();
    },
    methods: {
        getRecordSope: function() {
            var e = this;
            wx.getSetting({
                success: function(t) {
                    console.log(t), "scope.record" in t.authSetting ? t.authSetting["scope.record"] ? (e.setData({
                        recordScope: "yes",
                        showResult: "按住说话"
                    }), e.initRecord()) : e.setData({
                        recordScope: "no",
                        showResult: "拒绝授权麦克风，点击按钮授权"
                    }) : (e.setData({
                        recordScope: "none",
                        showResult: "按住说话"
                    }), e.initRecord());
                }
            });
        },
        authRecord: function(e) {
            console.log(e), e.detail.detail.authSetting["scope.record"] ? this.setData({
                recordScope: "yes",
                showResult: "按住说话"
            }) : this.setData({
                recordScope: "no",
                showResult: "拒绝授权麦克风，点击按钮授权"
            });
        },
        streamRecord: function(t) {
            console.log(t), console.log(this.data.recording, this.data.recordManagerStatus), 
            e.start({
                lang: "zh_CN",
                duration: 6e4
            }), "yes" == this.data.recordScope ? this.setData({
                showResult: "正在聆听...",
                recording: !0,
                recordManagerStatus: "start"
            }) : this.getRecordSope();
        },
        endStreamRecord: function(t) {
            console.log(t), console.log(this.data.recording, this.data.recordManagerStatus), 
            this.data.recording && (e.stop(), this.setData({
                recordManagerStatus: "stop"
            }));
        },
        initRecord: function() {
            var t = this, o = this.data.disableSymbols, r = /[\-,\/,\|,\$,\+,\%,\&,\',\(,\),\*,\x20-\x2f,\x3a-\x40,\x5b-\x60,\x7b-\x7e,\x80-\xff,\u3000-\u3002,\u300a,\u300b,\u300e-\u3011,\u2014,\u2018,\u2019,\u201c,\u201d,\u2026,\u203b,\u25ce,\uff01-\uff5e,\uffe5]/g;
            e.onStart = function(e) {
                console.log("begin", e), t.setData({
                    recordManagerStatus: "begin"
                });
            }, e.onRecognize = function(e) {
                console.log("recogize", e);
                var s = o ? e.result.replace(r, "") : e.result;
                t.triggerEvent("recogize", {
                    result: s
                }), t.setData({
                    result: s,
                    showResult: s
                });
            }, e.onStop = function(e) {
                console.log("end", e);
                var s = o ? e.result.replace(r, "") : e.result;
                "" == s ? (t.setData({
                    result: "",
                    showResult: "未识别到语音，请重试",
                    recording: !1,
                    recordManagerStatus: "end"
                }), t.triggerEvent("end", {
                    result: ""
                })) : (t.setData({
                    result: s,
                    showResult: s,
                    recording: !1,
                    recordManagerStatus: "end"
                }), t.triggerEvent("end", {
                    result: s
                }));
            }, e.onError = function(e) {
                console.log("error", e), -30001 == e.retcode ? t.setData({
                    result: "",
                    recording: !1,
                    recordScope: "no",
                    showResult: "拒绝授权麦克风，点击按钮授权",
                    recordManagerStatus: "end"
                }) : t.setData({
                    result: "",
                    recording: !1,
                    showResult: "发生错误，请重试",
                    recordManagerStatus: "end"
                }), t.triggerEvent("error", e);
            };
        }
    }
});