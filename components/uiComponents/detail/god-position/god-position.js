!function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    t.default = e;
}(require("../../../../pages/tool/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../../pages/tool/dataJs/460E2383B0A7888C20684B8430C60087.js")), 
t = require("../../../../pages/tool/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

getApp();

(0, t.MyComponent)({
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
            var t = this, a = "" == t.data.date ? new Date() : new Date(t.data.date), n = a.getFullYear(), u = a.getMonth() + 1, i = a.getDate(), l = e.default.li.trans(n, u, i), r = [ {
                icon: "",
                key: "福神",
                value: l.huangli.shen[0]
            }, {
                icon: "",
                key: "喜神",
                value: l.huangli.shen[1]
            }, {
                icon: "",
                key: "财神",
                value: l.huangli.shen[2]
            } ], o = [ {
                icon: "",
                key: "阳贵人",
                value: l.huangli.shen[3]
            }, {
                icon: "",
                key: "阴贵人",
                value: l.huangli.shen[4]
            } ];
            this.set({
                data: r,
                _data: o,
                refresh: !1
            });
        }
    }
});