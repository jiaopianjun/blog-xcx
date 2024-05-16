Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        name: {
            type: String,
            value: ""
        },
        value: {
            type: String,
            value: "0"
        },
        digit: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    methods: {
        click: function(e) {
            var t = e.currentTarget.dataset.value;
            if (-1 == t || void 0 === t) return !1;
            switch (String(t)) {
              case ".":
                this.point();
                break;

              case "delete":
                this.delete();
                break;

              case "confirm":
                this.keyboardConfirm();
                break;

              default:
                this.number(String(t));
            }
            this.triggerEvent("event", String(t));
        },
        point: function() {
            var e = String(this.data.value);
            Number(0 == e) ? e = "0." : e.indexOf(".") <= 0 && (e += "."), this.setData({
                value: e
            }), this.triggerEvent("change", {
                value: e
            }), console.log(e);
        },
        delete: function() {
            var e = String(this.data.value);
            e = e.length <= 1 ? 0 : e.substring(0, e.length - 1), this.setData({
                value: e
            }), this.triggerEvent("change", {
                value: e
            }), console.log(e);
        },
        number: function(e) {
            var t = this.data.value, a = t.indexOf(".");
            1 == t.length && 0 == t ? t = e : 0 == e && a < 0 && 0 == t ? t = 0 : t += e, this.setData({
                value: t
            }), this.triggerEvent("change", {
                value: t
            });
        },
        clear: function(e) {
            this.setData({
                value: "0"
            }), this.triggerEvent("change", {
                value: "0"
            });
        },
        keyboardConfirm: function() {
            this.triggerEvent("confirm", {
                value: this.data.value
            });
        }
    }
});