function t(t, i, e) {
    return i in t ? Object.defineProperty(t, i, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = e, t;
}

var i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../common/util")), e = [ "second", "minute", "hour" ];

Component({
    properties: {
        type: {
            type: String,
            value: "second"
        },
        title: {
            type: String,
            value: ""
        },
        rows: {
            type: Number,
            value: 5
        },
        haveEndTime: {
            type: Boolean,
            value: !1
        },
        startMinTime: {
            type: String,
            value: "00:00:00"
        },
        startMaxTime: {
            type: String,
            value: "23:59:59"
        },
        endMinTime: {
            type: String,
            value: "00:00:00"
        },
        endMaxTime: {
            type: String,
            value: "23:59:59"
        },
        startTime: {
            type: String,
            value: "00:00:00"
        },
        endTime: {
            type: String,
            value: "23:59:59"
        }
    },
    data: {
        startDateOptions: {},
        endDateOptions: {},
        changing: !1
    },
    ready: function() {
        this.init();
    },
    methods: {
        init: function() {
            var t = 3 - e.indexOf(this.data.type);
            this.setStartTimeOptions(), this.setEndTimeOptions(), t >= 1 && this.getHours(!0, this.data.haveEndTime), 
            t >= 2 && this.getMinutes(!0, this.data.haveEndTime), t >= 3 && this.getSeconds(!0, this.data.haveEndTime), 
            console.log(this.data);
        },
        setStartTimeOptions: function() {
            var t = {};
            console.log(this.data);
            var a = 3 - e.indexOf(this.data.type), n = i.default.formatTime(this.data.startTime);
            t.minTime = i.default.formatTime(this.data.startMinTime), t.maxTime = i.default.formatTime(this.data.startMaxTime), 
            t.time = {
                hour: 0,
                minute: 0,
                second: 0
            }, a >= 1 && (t.time.hour = n.hour), a >= 2 && (t.time.minute = n.minute), a >= 3 && (t.time.second = n.second), 
            this.setData({
                startTime: t.time.hour + ":" + t.time.minute + ":" + t.time.second
            }), console.log(t), this.data.startTimeOptions = t;
        },
        setEndTimeOptions: function() {
            var t = {}, a = 3 - e.indexOf(this.data.type), n = i.default.formatTime(this.data.endTime);
            t.minTime = i.default.formatTime(this.data.endMinTime), t.maxTime = i.default.formatTime(this.data.endMaxTime), 
            t.time = {
                hour: 0,
                minute: 0,
                second: 0
            }, a >= 1 && (t.time.hour = n.hour), a >= 2 && (t.time.minute = n.minute), a >= 3 && (t.time.second = n.second), 
            this.setData({
                endTime: t.time.hour + ":" + t.time.minute + ":" + t.time.second
            }), this.data.endTimeOptions = t;
        },
        getHours: function(e, a) {
            if (e) {
                var n, s = Number(this.data.startTimeOptions.minTime.hour), m = Number(this.data.startTimeOptions.maxTime.hour), o = [];
                console.log(s, m);
                for (var r = s; r <= m; r++) o.push(i.default.formatNumber(r));
                this.data.startTimeOptions.isMinHour = o.indexOf(this.data.startTimeOptions.time.hour) <= 0, 
                this.data.startTimeOptions.isMaxHour = o.indexOf(this.data.startTimeOptions.time.hour) >= Number(this.data.startTimeOptions.maxTime.hour), 
                this.setData((n = {}, t(n, "startTimeValue[0]", o.indexOf(this.data.startTimeOptions.time.hour) < 0 ? 0 : o.indexOf(this.data.startTimeOptions.time.hour)), 
                t(n, "startTimeData[0]", o), n));
            }
            if (a) {
                for (var d, u = Number(this.data.endTimeOptions.minTime.hour), h = Number(this.data.endTimeOptions.maxTime.hour), T = [], l = u; l <= h; l++) T.push(i.default.formatNumber(l));
                this.data.endTimeOptions.isMinHour = T.indexOf(this.data.endTimeOptions.time.hour) <= 0, 
                this.data.endTimeOptions.isMaxHour = T.indexOf(this.data.endTimeOptions.time.hour) >= Number(this.data.endTimeOptions.maxTime.hour), 
                this.setData((d = {}, t(d, "endTimeValue[0]", T.indexOf(this.data.endTimeOptions.time.hour) < 0 ? 0 : T.indexOf(this.data.endTimeOptions.time.hour)), 
                t(d, "endTimeData[0]", T), d));
            }
            console.log(this.data);
        },
        getMinutes: function(e, a) {
            var n = 0, s = 59;
            if (e) {
                var m, o = this.data.startTimeOptions;
                o.isMinHour && (n = Number(o.minTime.minute)), o.isMaxHour && (s = Number(o.maxTime.minute)), 
                console.log(n, s);
                for (var r = [], d = n; d <= s; d++) r.push(i.default.formatNumber(d));
                this.data.startTimeOptions.isMinMinute = this.data.startTimeOptions.isMinHour && r.indexOf(o.time.minute) <= 0, 
                this.data.startTimeOptions.isMaxMinute = this.data.startTimeOptions.isMaxHour && r.indexOf(o.time.minute) >= Number(o.maxTime.minute), 
                console.log(o.time.minute), console.log(r.indexOf(o.time.minute)), this.setData((m = {}, 
                t(m, "startTimeValue[1]", r.indexOf(o.time.minute) < 0 ? o.isMaxHour ? r.length - 1 : 0 : r.indexOf(o.time.minute)), 
                t(m, "startTimeData[1]", r), m));
            }
            if (a) {
                var u, h = this.data.endTimeOptions;
                h.isMinHour && (n = Number(h.minTime.minute)), h.isMaxHour && (s = Number(h.maxTime.minute));
                for (var T = [], l = n; l <= s; l++) T.push(i.default.formatNumber(l));
                this.data.endTimeOptions.isMinMinute = this.data.endTimeOptions.isMinHour && T.indexOf(h.time.minute) <= 0, 
                this.data.endTimeOptions.isMaxMinute = this.data.endTimeOptions.isMaxHour && T.indexOf(h.time.minute) >= Number(h.maxTime.minute), 
                this.setData((u = {}, t(u, "endTimeValue[1]", T.indexOf(h.time.minute) < 0 ? h.isMaxHour ? T.length - 1 : 0 : T.indexOf(h.time.minute)), 
                t(u, "endTimeData[1]", T), u));
            }
            console.log(this.data);
        },
        getSeconds: function(e, a) {
            var n = 0, s = 59;
            if (e) {
                var m, o = this.data.startTimeOptions;
                o.isMinMinute && (n = Number(o.minTime.second)), o.isMaxMinute && (s = Number(o.maxTime.second));
                for (var r = [], d = n; d <= s; d++) r.push(i.default.formatNumber(d));
                this.data.startTimeOptions.isMinSecond = this.data.startTimeOptions.isMinMinute && r.indexOf(o.time.second) <= 0, 
                this.data.startTimeOptions.isMaxSecond = this.data.startTimeOptions.isMaxMinute && r.indexOf(o.time.second) >= Number(o.maxTime.second), 
                this.setData((m = {}, t(m, "startTimeValue[2]", r.indexOf(o.time.second) < 0 ? o.isMaxMinute ? r.length - 1 : 0 : r.indexOf(o.time.second)), 
                t(m, "startTimeData[2]", r), m));
            }
            if (a) {
                var u, h = this.data.endTimeOptions;
                h.isMinMinute && (n = Number(h.minTime.second)), h.isMaxMinute && (s = Number(h.maxTime.second)), 
                this.data.endTimeOptions.isMinSecond = this.data.endTimeOptions.isMinMinute && T.indexOf(h.time.second) <= 0, 
                this.data.endTimeOptions.isMaxSecond = this.data.endTimeOptions.isMaxMinute && T.indexOf(h.time.second) >= Number(h.maxTime.second);
                for (var T = [], l = n; l <= s; l++) T.push(i.default.formatNumber(l));
                this.setData((u = {}, t(u, "endTimeValue[2]", T.indexOf(h.time.second) < 0 ? h.isMaxMinute ? T.length - 1 : 0 : T.indexOf(h.time.second)), 
                t(u, "endTimeData[2]", T), u));
            }
            console.log(this.data);
        },
        change: function(t) {
            var i = t.currentTarget.dataset.type, a = t.detail, n = "start" == i ? this.data.startTimeData : this.data.endTimeData, s = "start" == i ? this.data.startTimeValue : this.data.endTimeValue, m = e.indexOf(this.data.type) + 1, o = "start" == i ? this.data.startTimeOptions : this.data.endTimeOptions, r = o.minTime, d = o.maxTime, u = a[0] != s[0];
            this.data.startTimeOptions.isMinHour = 0 == a[0], "start" == i ? this.data.startTimeOptions.isMaxHour = a[0] == n[0].length - 1 : this.data.endTimeOptions.isMaxHour = a[0] == n[0].length - 1;
            var h = (o = "start" == i ? this.data.startTimeOptions : this.data.endTimeOptions).isMinHour || o.isMaxHour || 0 == s[0] || s[0] == n[0].length - 1;
            if (console.log(s), console.log(a), console.log(n), console.log(o), m <= 2) {
                var T = a[1] != s[1];
                "start" == i ? this.data.startTimeOptions.isMinMinute = o.isMinHour && a[1] <= Number(r.minute) : this.data.endTimeOptions.isMinMinute = o.isMinHour && a[1] + 1 <= Number(r.minute), 
                "start" == i ? this.data.startTimeOptions.isMaxMinute = o.isMaxHour && a[1] >= Number(d.minute) : this.data.endTimeOptions.isMaxMinute = o.isMaxHour && a[1] + 1 >= Number(d.minute);
                var l = (o = "start" == i ? this.data.startTimeOptions : this.data.endTimeOptions).isMinMinute || o.isMaxMinute || 0 == s[1] || s[1] == n[1].length - 1;
            }
            for (var O = [ "00", "00", "00" ], p = 0; p < a.length; p++) O.splice(p, 1, n[p][a[p]]);
            var c = O[0], f = O[1];
            m <= 2 && (u && o.isMinHour && f < r.minute && (f = r.minute), u && o.isMaxHour && f > d.minute && (f = d.minute));
            var M = O[2];
            m <= 2 && (T && o.isMinMinute && M < r.second && (M = r.second), T && o.isMaxMinute && M > d.second && (M = d.second)), 
            console.log(this.data.startTimeOptions);
            var x = {
                hour: m <= 3 ? c : "00",
                minute: m <= 2 ? f : "00",
                second: m <= 1 ? M : "00"
            };
            "start" == i ? this.data.startTimeOptions.time = x : this.data.endTimeOptions.time = x, 
            "start" == i && this.setData({
                startTime: x,
                startTimeValue: a
            }), "end" == i && this.setData({
                endTime: x,
                startTimeValue: a
            }), console.log(u, h, T, l), m <= 2 && u && h && (console.log("更新时"), this.getMinutes("start" == i, "end" == i)), 
            (m <= 1 && u || T && h && l) && (console.log("更新秒"), this.getSeconds("start" == i, "end" == i));
        },
        start: function(t) {
            this.setData({
                changing: !0
            });
        },
        end: function(t) {
            this.setData({
                changing: !1
            });
        },
        confirm: function() {
            console.log(this.data), this.data.haveEndTime ? this.triggerEvent("confirm", {
                startTime: this.data.startTime,
                endTime: this.data.endTime
            }) : this.triggerEvent("confirm", {
                startTime: this.data.startTime
            });
        },
        cancel: function() {
            this.triggerEvent("cancel");
        }
    }
});