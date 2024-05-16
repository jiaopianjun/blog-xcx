Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../grid-item/index": {
            type: "descendant",
            linked: function() {
                this.setStyle();
            },
            linkChanged: function() {
                this.setStyle();
            },
            unlinked: function() {
                this.setStyle();
            }
        }
    },
    properties: {
        column: {
            type: Number,
            value: 3
        },
        border: {
            type: Boolean,
            value: !0
        },
        lastRowBorderBottom: {
            type: Boolean,
            value: !1
        },
        firstRowBorderTop: {
            type: Boolean,
            value: !1
        },
        header: {
            type: Boolean,
            value: !1
        },
        headerTitle: {
            type: String,
            value: ""
        },
        headerSubtitle: {
            type: String,
            value: ""
        },
        headerRightIcon: {
            type: String,
            value: ""
        },
        headerAlign: {
            type: String,
            value: "left"
        },
        headerBorder: {
            type: Boolean,
            value: !0
        },
        headerRightText: {
            type: String,
            value: ""
        },
        headerIndent: {
            type: Boolean,
            value: !0
        },
        headerIndentDistance: {
            type: Number,
            value: 0
        }
    },
    ready: function() {
        this.setStyle();
    },
    methods: {
        setStyle: function() {
            for (var e = this.getRelationNodes("../grid-item/index"), t = 0; t < e.length; t++) e[t].setStyle(this.data.column), 
            (t + 1) % this.data.column != 0 && e[t].setBorderRight(), this.data.firstRowBorderTop ? e[t].setBorderTop() : this.data.lastRowBorderBottom ? e[t].setBorderBottom() : (t <= this.data.column - 1 && e.length > this.data.column && e[t].setBorderBottom(), 
            t < e.length - this.data.column && e[t].setBorderBottom());
        }
    }
});