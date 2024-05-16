function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = e(require("84254960B0A7888CE24321678D140087.js")), r = e(require("DC46EEE5B0A7888CBA2086E20FC60087.js"));

exports.default = {
    weather: {
        realtime: function(e, r, a) {
            return t.default.getWeather("/realtime.json", e, r, a);
        },
        forecast: function(e, r, a) {
            return t.default.getWeather("/weather.json?alert=true&dailysteps=14", e, r, a);
        },
        yestoday: function(e, a, u) {
            var l = r.default.getDate(-1), n = r.default.toUTC(l.y, l.m, l.d);
            return t.default.getWeather("/daily.json?dailysteps=2&begin=" + n, e, a, u);
        }
    }
};