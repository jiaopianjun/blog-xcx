function n(n) {
    return function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(e, r) {
            t.success = function(n) {
                e(n);
            }, t.fail = function(n) {
                r(n);
            }, n(t);
        });
    };
}

function t(t, r, u, o) {
    return t = t.toUpperCase(), n(wx.request)({
        url: e.default.caiyunApiHost + e.default.caiyunApiVersion + e.default.caiyunApiToken + u + "," + o + r,
        method: t
    });
}

var e = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("5F2DD984B0A7888C394BB183C0A60087.js"));

Promise.prototype.finally = function(n) {
    var t = this.constructor;
    return this.then(function(e) {
        return t.resolve(n()).then(function() {
            return e;
        });
    }, function(e) {
        return t.resolve(n()).then(function() {
            throw e;
        });
    });
}, module.exports = {
    getWeather: function(n, e, r) {
        return t("GET", n, e, r);
    }
};