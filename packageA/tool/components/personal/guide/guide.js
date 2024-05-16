!function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    t.default = e;
}(require("../../../C467E907B0A7888CA2018100BBD60087.js"));

var e = require("../../../BABEAA27B0A7888CDCD8C2206B240087.js");

getApp();

(0, e.MyComponent)({
    props: {
        show: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        list: [ {
            image: "../../../images/hourly.svg",
            title: "逐时天气模块",
            description: "可通过点击「逐时天气项」获取该时的详细天气详情"
        }, {
            image: "../../../images/daily.svg",
            title: "逐日天气模块",
            description: "可通过点击「逐日天气项」获取该日的详细天气详情"
        }, {
            image: "../../../images/index-number.svg",
            title: "指数模块优化",
            description: "指数模块中点击「空气质量」可获得详细的空气数据，点击「天气评测」可获得详细的天气分析"
        }, {
            image: "../../../images/grade.svg",
            title: "天气评测回归",
            description: "可点击指数模块的「天气评测」项进入，也可点击「底部tab」进入"
        }, {
            image: "../../../images/new.svg",
            title: "全新6.0感谢有你",
            description: "更多细节待你发现"
        } ],
        activeIndex: 0
    },
    mounted: function() {
        var e = this;
        wx.getStorage({
            key: "guideVersion",
            success: function(t) {
                "1.0" !== t.data && e.set({
                    show: !0
                });
            },
            fail: function(t) {
                e.set({
                    show: !0
                });
            }
        });
    },
    pageLifetimes: {
        show: function() {}
    },
    methods: {
        cancle: function(e) {
            console.log(e), this.setStorage();
        },
        swipe: function(e) {
            console.log(e), this.set({
                activeIndex: e.detail.current
            });
        },
        setStorage: function() {
            wx.setStorage({
                key: "guideVersion",
                data: "1.0"
            });
        }
    }
});