!function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    e.default = t;
}(require("../../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../common/dataJs/460E2383B0A7888C20684B8430C60087.js")), e = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

getApp();

(0, e.MyComponent)({
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
        li: null
    },
    mounted: function() {
        this.getData();
    },
    watch: {
        refresh: function() {
            var t = this;
            this.data.refresh && t.getData();
        }
    },
    methods: {
        getData: function() {
            var e = this, a = "" == e.data.date ? new Date() : new Date(e.data.date), r = a.getFullYear(), n = a.getMonth() + 1, i = a.getDate(), u = t.default.li.trans(r, n, i);
            e.setData({
                li: u,
                refresh: !1
            });
        }
    }
});