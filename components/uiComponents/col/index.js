Component({
    externalClasses: [ "content-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../row/index": {
            type: "ancestor"
        }
    },
    properties: {
        span: {
            type: Number,
            value: 24
        },
        offset: {
            type: Number,
            value: 0
        }
    },
    data: {
        style: ""
    },
    methods: {
        setStyle: function(t) {
            var e = t / 2 + "px", s = t ? "padding-left: " + e + "; padding-right: " + e + ";" : "";
            s !== this.data.style && this.setData({
                style: s
            });
        }
    }
});