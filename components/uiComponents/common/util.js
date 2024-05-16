var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    isLeap: function(e) {
        return e % 4 == 0 ? e % 100 != 0 ? 1 : e % 400 == 0 ? 1 : 0 : 0;
    },
    formatDate: function(t) {
        var r = new Date(t.replace(/-/g, "/")), n = r.getFullYear(), o = r.getMonth() + 1, a = r.getDate(), u = r.getHours(), g = r.getMinutes(), i = r.getSeconds();
        return {
            year: n,
            month: e(o),
            day: e(a),
            hour: e(u),
            minute: e(g),
            second: e(i),
            date: t
        };
    },
    formatTime: function(t) {
        var r = new Date("1900/01/01 " + t), n = r.getHours(), o = r.getMinutes(), a = r.getSeconds();
        return {
            hour: e(n),
            minute: e(o),
            second: e(a)
        };
    },
    compareDate: function(e, t) {
        var e = new Date(e.toString().replace(/\-/g, "/")), t = new Date(t.toString().replace(/\-/g, "/"));
        return e.getTime() > t.getTime();
    },
    formatNumber: e
};