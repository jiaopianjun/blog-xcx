Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../radio/index": {
            type: "descendant",
            linked: function(e) {},
            linkChanged: function(e) {},
            unlinked: function(e) {}
        }
    },
    properties: {},
    data: {
        checkedIndex: -1
    },
    ready: function() {
        for (var e = this.getRelationNodes("../radio/index"), t = e.length - 1, n = 0; n < e.length; n++) e[n].setData({
            index: n
        }), e[n].data.checked && t == e.length - 1 && (t = n, this.setData({
            checkedIndex: n
        })), n > t && e[n].setData({
            checked: !1
        });
    },
    methods: {
        change: function(e) {
            this.triggerEvent("change", e);
            var t = this.getRelationNodes("../radio/index");
            this.data.checkedIndex >= 0 && t[this.data.checkedIndex].setData({
                checked: !1
            }), this.setData({
                checkedIndex: e.index
            });
        }
    }
});