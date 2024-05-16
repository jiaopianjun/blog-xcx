Component({
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../cell/index": {
            type: "descendant",
            linked: function(e) {
                this.setCellBorder(), (this.data.indentDistance || this.data.indent) && this.setCellIndent();
            },
            linkChanged: function() {
                this.setCellBorder(), (this.data.indentDistance || this.data.indent) && this.setCellIndent();
            },
            unlinked: function() {
                this.setCellBorder(), (this.data.indentDistance || this.data.indent) && this.setCellIndent();
            }
        },
        "../input/index": {
            type: "descendant",
            linked: function(e) {
                this.setCellBorder(), (this.data.indentDistance || this.data.indent) && this.setCellIndent();
            },
            linkChanged: function() {
                this.setCellBorder(), (this.data.indentDistance || this.data.indent) && this.setCellIndent();
            },
            unlinked: function() {
                this.setCellBorder(), (this.data.indentDistance || this.data.indent) && this.setCellIndent();
            }
        }
    },
    properties: {
        border: {
            type: Boolean,
            value: !0
        },
        indent: {
            type: Boolean,
            value: !0
        },
        indentDistance: {
            type: String,
            value: ""
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
        headerRightIcon: {
            type: String,
            value: ""
        }
    },
    methods: {
        setCellBorder: function() {
            var e = this.getRelationNodes("../cell/index");
            if (!(e.length <= 0 && (e = this.getRelationNodes("../input/index")).length <= 0)) for (var t = 0; t < e.length; t++) t != e.length - 1 && this.data.border ? e[t].setData({
                border: !0
            }) : e[t].setData({
                border: !1
            });
        },
        setCellIndent: function() {
            var e = this.getRelationNodes("../cell/index");
            if (!(e.length <= 0 && (e = this.getRelationNodes("../input/index")).length <= 0)) for (var t = 0; t < e.length; t++) e[t].setData({
                indentDistance: this.data.indentDistance,
                indent: this.data.indent
            });
        }
    }
});