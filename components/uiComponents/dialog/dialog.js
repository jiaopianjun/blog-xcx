function e() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = [], o = function o(n) {
    return n = Object.assign(Object.assign({}, o.currentOptions), n), new Promise(function(o, c) {
        var r = (n.context || e()).selectComponent(n.selector);
        delete n.context, delete n.selector, r ? (console.log(n), r.setData(Object.assign({
            cancel: c,
            confirm: o
        }, n)), t.push(r)) : console.warn("未找到 dialog 节点，请确认 selector 及 context 是否正确");
    });
};

o.defaultOptions = {
    selector: "#li-dialog",
    title: "",
    subtitle: "",
    headerAlign: "center",
    headerBorder: !0,
    content: "",
    contentAlign: "center",
    footerBorder: !0,
    coverNavigation: !1,
    coverTabbar: !1,
    disabledMaskClose: !0,
    closeButton: !1,
    cancelText: "取消",
    confirmText: "确定",
    cancelTextColor: "var(--text-color-2)",
    confirmTextColor: "var(--primary-color)",
    cancelIcon: "",
    confirmIcon: "",
    showCancel: !0,
    confirmOpenType: "",
    useSlot: !1,
    show: !0
}, o.alert = o, o.close = function() {
    t.forEach(function(e) {
        e.close();
    }), t = [];
}, o.setDefaultOptions = function(e) {
    Object.assign(o.currentOptions, e);
}, o.resetDefaultOptions = function() {
    o.currentOptions = Object.assign({}, o.defaultOptions);
}, o.resetDefaultOptions(), exports.default = o;