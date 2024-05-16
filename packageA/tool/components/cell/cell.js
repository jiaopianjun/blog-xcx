function t(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

!function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    e.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

var e, n = require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js");

require("../../common/dataJs/E9975237B0A7888C8FF13A309C740087.js");

(0, n.MyComponent)({
    relation: {
        name: "cell-group",
        type: "ancestor"
    },
    props: (e = {
        mode: String,
        openType: String,
        description: String,
        icon: String,
        name: String,
        state: Boolean
    }, t(e, "openType", String), t(e, "index", String), t(e, "rightIcon", String), e),
    data: {
        first: !1,
        last: !1,
        noBorderBottom: !1,
        index: ""
    },
    pageLifetimes: {
        show: function() {}
    },
    methods: {
        event: function(t) {
            "switch" === this.data.mode ? this.triggerEvent("event", {
                data: t.detail
            }) : "openType" === this.data.mode ? this.triggerEvent("event", {
                data: t.detail
            }) : (console.log(t), this.triggerEvent("event", t.currentTarget.dataset));
        },
        first: function() {
            this.set({
                first: !0
            });
        },
        last: function() {
            this.set({
                last: !0
            });
        },
        noBorderBottom: function() {
            this.set({
                noBorderBottom: !0
            });
        },
        setIndex: function(t) {
            this.set({
                index: t
            });
        }
    }
});