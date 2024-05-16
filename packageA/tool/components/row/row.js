(0, require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js").MyComponent)({
    relation: {
        name: "col",
        type: "descendant",
        linked: function(t) {
            this.setStyle();
        }
    },
    props: {
        gutter: Number,
        margin: String,
        padding: String
    },
    watch: {
        style: "setStyle"
    },
    mounted: function() {
        this.data.margin || this.data.padding || this.data.gutter ? this.setStyle() : this.set({
            style: ""
        });
    },
    methods: {
        setStyle: function() {
            var t = this, e = this.data.gutter, i = this.data.padding, n = this.data.margin, s = [], a = [];
            if (-1 == n.toString().indexOf(",")) for (var r = 0; r < 4; r++) s.push(n); else s = n.split(",");
            if (-1 == i.toString().indexOf(",")) for (var p = 0; p < 4; p++) a.push(i); else a = i.split(",");
            var o = (n ? "margin: " + s[0] + "px " + (s[1] - e / 2) + "px " + s[2] + "px " + (s[3] - e / 2) + "px;" : "margin: 0px " + -e / 2 + "px 0px " + -e / 2 + "px;") + (i ? "padding: " + a[0] + "px " + a[1] + "px " + a[2] + "px " + a[3] + "px;" : "");
            this.set({
                style: o
            }), this.getRelationNodes("../col/col").forEach(function(e) {
                e.setStyle(t.data.gutter);
            });
        }
    }
});