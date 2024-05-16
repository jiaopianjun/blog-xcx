var t = getApp();

Component({
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../container-basic/index": {
            type: "ancestor"
        }
    },
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        bindSelector: {
            type: "String",
            value: ""
        },
        title: {
            type: "String",
            value: ""
        },
        background: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        }
    },
    data: {
        maxContentHeight: "",
        realContentHeight: "",
        realMainHeight: "",
        popupHeight: ""
    },
    methods: {
        init: function() {
            var e = this, i = t.globalData.systemInfo.windowWidth, o = t.globalData.systemInfo.windowHeight;
            wx.createSelectorQuery().select(this.data.bindSelector).fields({
                rect: !0,
                size: !0
            }, function(n) {
                var a = Number(n.width), r = Number(n.height), l = Number(n.left), s = Number(n.right), p = Number(n.top), c = (Number(n.bottom), 
                ""), g = "";
                l + a < 160 ? (c = c + "left:" + l + "px;", g = "left:" + (a / 2 - 6) + "px;") : l + a >= 160 && l <= i - 160 ? (c = "transform: translate3d(calc(" + (l + a / 2) + "px - 50%),0,0);", 
                g = "left:50%;transform: translate3d(-50%,0,0);") : l + a >= 160 && l > i - 160 && (c = c + "right:" + (i - s) + "px;", 
                g = "right:" + (a / 2 - 6) + "px;"), p >= t.globalData.systemInfo.windowHeight / 2 ? (c = c + "bottom:" + (Math.abs(o - p) + 10) + "px;", 
                g += "bottom:-8px;transform:rotate(180deg)") : (c = c + "top:" + (p + r + 10) + "px;", 
                g += "top:-8px;"), e.setData({
                    contentStyle: c,
                    triangleStyle: g,
                    show: !0
                });
            }).exec();
        },
        close: function() {
            var t = this;
            t.setData({
                show: !1
            }), t.triggerEvent("close");
            var e = setTimeout(function() {
                t.triggerEvent("closeanimationfinish"), clearTimeout(e);
            }, 300);
        },
        open: function() {
            this.init();
        },
        getContentInfo: function() {
            var t = this, e = this.createSelectorQuery(), i = this.createSelectorQuery();
            e.select(".li-popup > .-container > .-content").fields({
                size: !0,
                computedStyle: [ "padding-top", "padding-bottom" ]
            }, function(e) {
                var i = Number(e["padding-top"].replace(/[^0-9]/gi, "")), o = Number(e["padding-bottom"].replace(/[^0-9]/gi, ""));
                t.setData({
                    realContentHeight: e.height - i - o
                });
            }).exec(), i.select(".li-popup > .-container > .-content > .-main").fields({
                size: !0
            }, function(e) {
                t.setData({
                    realMainHeight: e.height
                });
            }).exec();
        }
    }
});