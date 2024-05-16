function e(e) {
    return "string" == typeof e ? {
        message: e
    } : e;
}

function t() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

function n(n) {
    var c = ((n = Object.assign(Object.assign({}, o), e(n))).context || t()).selectComponent(n.selector);
    if (delete n.context, delete n.selector, c) return c.setData(n), c.open(), c;
    console.warn("未找到 li-toast 节点，请确认 selector 及 context 是否正确");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = n;

var o = {
    selector: "#li-toast",
    duration: 1500,
    title: "",
    background: "",
    backgroundOpacity: "",
    color: "",
    icon: "",
    mask: !1,
    onClick: function() {},
    onOpened: function() {},
    onClose: function() {}
};

n.clear = function(n) {
    var c = ((n = Object.assign(Object.assign({}, o), e(n))).context || t()).selectComponent(n.selector);
    c && c.close();
};