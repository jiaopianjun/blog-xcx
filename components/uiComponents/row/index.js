Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../col/index": {
            type: "descendant",
            linked: function(t) {
                t.setStyle(this.data.gutter);
            },
            linkChanged: function() {
                this.init();
            },
            unlinked: function() {
                this.init();
            }
        }
    },
    properties: {
        gutter: {
            type: Number,
            value: 0
        }
    },
    ready: function() {
        this.init();
    },
    methods: {
        init: function() {
            this.data.gutter > 0 ? this.setStyle() : this.setData({
                style: ""
            });
        },
        setStyle: function() {
            var t = this, e = this.data.gutter, i = "margin: 0px " + -e / 2 + "px 0px " + -e / 2 + "px;";
            this.setData({
                style: i
            }), this.getRelationNodes("../col/index").forEach(function(e) {
                e.setStyle(t.data.gutter);
            });
        }
    }
});