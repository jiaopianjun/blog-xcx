!function(e) {
    if (e && e.__esModule) return e;
    var a = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
    a.default = e;
}(require("../../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../common/dataJs/460E2383B0A7888C20684B8430C60087.js")), a = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

getApp();

(0, a.MyComponent)({
    props: {
        refresh: {
            type: Boolean,
            value: !0
        },
        date: {
            type: String,
            value: ""
        }
    },
    data: {
        data: null,
        _data: null
    },
    mounted: function() {
        this.getData();
    },
    watch: {
        refresh: function() {
            var e = this;
            this.data.refresh && e.getData();
        }
    },
    methods: {
        getData: function() {
            var a = this, n = "" == a.data.date ? new Date() : new Date(a.data.date), i = n.getFullYear(), u = n.getMonth() + 1, t = n.getDate(), l = e.default.li.trans(i, u, t);
            console.log(l);
            var h = [ {
                icon: "WIND",
                key: "冲",
                value: l.huangli.chong
            }, {
                icon: "",
                key: "煞",
                value: l.huangli.sha
            }, {
                icon: "",
                key: "黑黄道",
                value: l.huangli.heihuangdao.heihuang
            }, {
                icon: "",
                key: "值神",
                value: l.huangli.heihuangdao.name
            }, {
                icon: "",
                key: "十二建除",
                value: l.huangli.jianchu.name
            }, {
                icon: "",
                key: "星宿",
                value: l.huangli.xingxiu
            }, {
                icon: "",
                key: "年五行",
                value: l.huangli.wuxing.year
            }, {
                icon: "",
                key: "月五行",
                value: l.huangli.wuxing.month
            }, {
                icon: "",
                key: "日五行",
                value: l.huangli.wuxing.day
            } ], o = [ {
                icon: "",
                key: "今日胎神",
                value: l.huangli.taishen
            }, {
                icon: "",
                key: "彭祖百忌",
                value: l.huangli.pengzubaiji
            }, {
                icon: "",
                key: "吉神宜趋",
                value: l.huangli.shensha.jishen ? l.huangli.shensha.jishen : "暂无"
            }, {
                icon: "",
                key: "凶神宜忌",
                value: l.huangli.shensha.xiongshen ? l.huangli.shensha.xiongshen : "暂无"
            } ];
            this.set({
                data: h,
                _data: o,
                refresh: !1
            });
        }
    }
});