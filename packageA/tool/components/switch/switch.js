!function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    e.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

(0, require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js").MyComponent)({
    props: {
        state: Boolean,
        color: String
    },
    data: {},
    pageLifetimes: {
        show: function() {
            console.log(!0 === this.data.state);
        }
    },
    methods: {
        switch: function() {
            this.data.state ? this.set({
                state: !1
            }) : this.set({
                state: !0
            }), this.triggerEvent("event", {
                state: this.data.state
            });
        }
    }
});