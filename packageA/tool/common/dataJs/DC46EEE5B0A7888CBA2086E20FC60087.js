function e(e, t, n, r) {
    var a = new Date(e, t, n).getTime() + 24e3 * r * 3600, o = new Date();
    return o.setTime(a), {
        year: o.getFullYear(),
        month: o.getMonth(),
        day: o.getDate()
    };
}

var t = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(e) {
        var n = (e = new Date(e)).getFullYear(), r = e.getMonth() + 1, a = e.getDate(), o = e.getHours(), u = e.getMinutes(), i = e.getSeconds();
        return [ n, r, a ].map(t).join("/") + " " + [ o, u, i ].map(t).join(":");
    },
    formatTimeHM: function(e) {
        (e = new Date(e)).getFullYear(), e.getMonth(), e.getDate();
        var n = e.getHours(), r = e.getMinutes();
        e.getSeconds();
        return [ n, r ].map(t).join(":");
    },
    getDate: function(e) {
        var t = new Date();
        return t.setDate(t.getDate() + e), {
            y: t.getFullYear(),
            m: t.getMonth(),
            d: t.getDate()
        };
    },
    toUTC: function(e, t, n) {
        return Date.UTC(e, t, n) / 1e3;
    },
    calcDays: function(e, t) {
        var n = t - e;
        return parseInt(n / 864e5);
    },
    calcDate: e,
    roundRect: function(e, t, n, r, a, o, u) {
        e.save(), e.beginPath(), e.setFillStyle(u), e.arc(t + o, n + o, o, Math.PI, 1.5 * Math.PI), 
        e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.lineTo(t + r, n + o), e.arc(t + r - o, n + o, o, 1.5 * Math.PI, 2 * Math.PI), 
        e.lineTo(t + r, n + a - o), e.lineTo(t + r - o, n + a), e.arc(t + r - o, n + a - o, o, 0, .5 * Math.PI), 
        e.lineTo(t + o, n + a), e.lineTo(t, n + a - o), e.arc(t + o, n + a - o, o, .5 * Math.PI, Math.PI), 
        e.lineTo(t, n + o), e.lineTo(t + o, n), e.fill(), e.closePath(), e.clip(), e.restore();
    },
    getHour: function(e) {
        var t = e.substr(11, 2);
        e.substr(15, 2);
        return (t = (t = new Date(e).getHours()).toString()) >= 10 ? t + ":00" : "0" + t + ":00";
    },
    formatHour: function(e) {
        return (e = e.toString())[1] ? e : "0" + e;
    },
    formatDay: function(e) {
        return [ e.substr(8, 2) ].map(t).join("");
    },
    formatMonth: function(e) {
        return [ e.substr(5, 2) ].map(t).join("");
    },
    formatWeek: function(e) {
        var t, n = new Date(e).getDay();
        return 0 == n ? t = "日" : 1 == n ? t = "一" : 2 == n ? t = "二" : 3 == n ? t = "三" : 4 == n ? t = "四" : 5 == n ? t = "五" : 6 == n && (t = "六"), 
        t;
    },
    formatYear: function(e) {
        return [ e.substr(0, 4) ].map(t).join("");
    },
    formatNumber: t,
    isToday: function(e) {
        var e = new Date(e).getFullYear() + "-" + (new Date(e).getMonth() + 1) + "-" + new Date(e).getDate();
        console.log(e);
        var t = new Date();
        return e == t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (t = t.getDate());
    },
    isYestoday: function(e) {
        var e = new Date(e), t = new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(), r = new Date(n - 864e5).getTime();
        return e.getTime() < n && r <= e.getTime();
    },
    currentMonthFirstDay: function(e, t) {
        return console.log(new Date(e, t - 1, 1)), Number(new Date(e, t - 1, 1));
    },
    nextMonthFirstDay: function(e, t) {
        return console.log(new Date(12 == t ? e + 1 : e, 12 == t ? 1 : t, 1)), Number(new Date(12 == t ? e + 1 : e, 12 == t ? 1 : t, 1));
    },
    tomorrow: function() {
        var t = e(1);
        return Number(new Date(t.y, t.m, t.d));
    },
    dateMinus: function(e, t) {
        var n = t - e;
        return parseInt(n / 864e5);
    },
    compareDate: function(e, t) {
        var n = new Date(e.replace(/\-/g, "/")), r = new Date(t.replace(/\-/g, "/"));
        return n.getTime() > r.getTime();
    }
};