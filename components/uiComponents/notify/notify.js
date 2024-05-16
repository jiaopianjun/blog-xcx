function e(e) {
    return "string" == typeof e ? {
        message: e
    } : e;
}

function t() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

function o(o) {
    var r = ((o = Object.assign(Object.assign({}, n), e(o))).context || t()).selectComponent(o.selector);
    if (delete o.context, delete o.selector, r) return r.setData(o), r.open(), r;
    console.warn("未找到 li-notify 节点，请确认 selector 及 context 是否正确");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = o;

var n = {
    selector: "#li-notify",
    type: "theme",
    duration: 2e3,
    content: "",
    background: "",
    color: "",
    icon: "",
    shadow: !0,
    shadowColor: "",
    borderWidth: "0px",
    borderColor: "",
    closeButton: !1,
    onClick: function() {},
    onOpened: function() {},
    onClose: function() {}
};

o.clear = function(o) {
    var r = ((o = Object.assign(Object.assign({}, n), e(o))).context || t()).selectComponent(o.selector);
    r && r.close();
};