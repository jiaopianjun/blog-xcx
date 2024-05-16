(0, require("../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js").MyComponent)({
    relation: {
        name: "row",
        type: "ancestor"
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ""
    },
    methods: {
        setStyle: function(t) {
            var e = t / 2 + "px", s = t ? "padding-left: " + e + "; padding-right: " + e + ";" : "";
            s !== this.data.style && this.set({
                style: s
            });
        }
    }
});