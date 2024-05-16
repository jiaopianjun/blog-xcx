!function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    r.default = e;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

(0, require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js").MyComponent)({
    props: {
        tip: String,
        error: {
            type: Boolean,
            value: !1
        },
        errorText: String,
        errorIcon: String
    },
    data: {},
    methods: {
        event: function() {
            this.triggerEvent("event");
        }
    }
});