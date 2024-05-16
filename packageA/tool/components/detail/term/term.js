!function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    t.default = e;
}(require("../../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../common/dataJs/460E2383B0A7888C20684B8430C60087.js")), t = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

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
        li: null
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
            var t = this, a = "" == t.data.date ? new Date() : new Date(t.data.date), r = a.getFullYear(), n = a.getMonth() + 1, i = a.getDate(), u = e.default.li.trans(r, n, i);
            t.set({
                li: u,
                refresh: !1
            });
        }
    }
});