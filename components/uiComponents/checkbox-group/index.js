Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../checkbox/index": {
            type: "descendant"
        }
    },
    properties: {},
    data: {
        checkedIndex: []
    },
    ready: function() {
        for (var e = this.getRelationNodes("../checkbox/index"), t = [], a = 0; a < e.length; a++) e[a].setData({
            index: a
        }), e[a].data.checked && t.push(a);
        this.setData({
            checkedIndex: t
        });
    },
    methods: {
        change: function(e) {
            var t = this.data.checkedIndex;
            "add" == e.type ? t.push(e.index) : t.splice(t.indexOf(e.index), 1);
            for (var a = [], d = this.getRelationNodes("../checkbox/index"), s = 0; s < t.length; s++) a.indexOf(d[t[s]].data.value) < 0 && a.push(d[t[s]].data.value);
            this.setData({
                checkedIndex: t
            }), this.triggerEvent("change", a);
        }
    }
});