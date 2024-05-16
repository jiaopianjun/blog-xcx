!function(t) {
    if (t && t.__esModule) return t;
    var o = {};
    if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    o.default = t;
}(require("../../common/dataJs/C467E907B0A7888CA2018100BBD60087.js"));

(0, require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js").MyComponent)({
    relation: {
        name: "cell",
        type: "descendant",
        unlinked: function() {}
    },
    props: {
        correction: Boolean,
        length: Number
    },
    data: {},
    mounted: function() {
        this.data.correction ? this.setClass() : this.noBorderBottom();
    },
    methods: {
        setClass: function() {
            var t = this.getRelationNodes("../cell/cell");
            console.log(t.length);
            for (var o = 0; o < t.length; o++) t[o].setIndex(o), 0 == o && o == t.length - 1 ? (t[o].first(), 
            t[o].last(), t[o].noBorderBottom()) : 0 == o ? t[o].first() : o == t.length - 1 && (t[o].last(), 
            t[o].noBorderBottom());
        },
        noBorderBottom: function() {
            for (var t = this.getRelationNodes("../cell/cell"), o = 0; o < t.length; o++) t[o].setIndex(o), 
            0 == o && o == t.length - 1 ? t[o].noBorderBottom() : o == t.length - 1 && t[o].noBorderBottom();
        }
    }
});