function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../common/util")), e = [ "second", "minute", "hour", "day", "month", "year" ];

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
        haveEndDate: {
            type: Boolean,
            value: !1
        },
        startMinDate: {
            type: String,
            value: "1900-01-01 00:00:00"
        },
        startMaxDate: {
            type: String,
            value: "2099-12-31 23:59:59"
        },
        startDate: {
            type: String,
            value: new Date().toString()
        },
        endMinDate: {
            type: String,
            value: "1900-01-01 00:00:00"
        },
        endMaxDate: {
            type: String,
            value: "2099-12-31 23:59:59"
        },
        endDate: {
            type: String,
            value: new Date().toString()
        }
    },
    data: {
        startDateOptions: {},
        endDateOptions: {},
        changing: !1,
        loading: !0
    },
    ready: function() {
        a.default.compareDate(this.data.startMinDate, this.data.startDate) && (console.warn("开始选择器，设置的默认时间 < 设置的最小可选时间"), 
        this.setData({
            startDate: this.data.startMinDate
        })), a.default.compareDate(this.data.startDate, this.data.startMaxDate) && (console.warn("开始选择器，设置的默认时间 > 设置的最大可选时间"), 
        this.setData({
            startDate: this.data.startMaxDate
        })), this.data.haveEndDate && (a.default.compareDate(this.data.endMinDate, this.data.endDate) && (console.warn("结束选择器，设置的默认时间 < 设置的最小可选时间"), 
        this.setData({
            endDate: this.data.endMinDate
        })), a.default.compareDate(this.data.endDate, this.data.endMaxDate) && (console.warn("结束选择器，设置的默认时间 > 设置的最大可选时间"), 
        this.setData({
            endDate: this.data.endMaxDate
        }))), this.init();
    },
    methods: {
        init: function() {
            var t = 6 - e.indexOf(this.data.type);
            this.setStartDateOptions(), this.setEndDateOptions(), t >= 1 && this.getYears(!0, this.data.haveEndDate), 
            t >= 2 && this.getMonths(!0, this.data.haveEndDate), t >= 3 && this.getDays(!0, this.data.haveEndDate), 
            t >= 4 && this.getHours(!0, this.data.haveEndDate), t >= 5 && this.getMinutes(!0, this.data.haveEndDate), 
            t >= 6 && this.getSeconds(!0, this.data.haveEndDate), this.setData({
                loading: !1
            });
        },
        setStartDateOptions: function() {
            var t = {}, n = 6 - e.indexOf(this.data.type), i = a.default.formatDate(this.data.startDate);
            t.minDate = a.default.formatDate(this.data.startMinDate), t.maxDate = a.default.formatDate(this.data.startMaxDate), 
            t.date = a.default.formatDate(this.data.startDate), n >= 2 && (t.date.month = i.month), 
            n >= 3 && (t.date.day = i.day), n >= 4 && (t.date.hour = i.hour), n >= 5 && (t.date.minute = i.minute), 
            n >= 6 && (t.date.second = i.second), this.setData({
                startDate: t.date.year + "-" + t.date.month + "-" + t.date.day + " " + t.date.hour + ":" + t.date.minute + ":" + t.date.second
            }), this.data.startDateOptions = t;
        },
        setEndDateOptions: function() {
            var t = {}, n = 6 - e.indexOf(this.data.type), i = a.default.formatDate(this.data.endDate);
            t.minDate = a.default.formatDate(this.data.endMinDate), t.maxDate = a.default.formatDate(this.data.endMaxDate), 
            t.date = a.default.formatDate(this.data.endDate), n >= 2 && (t.date.month = i.month), 
            n >= 3 && (t.date.day = i.day), n >= 4 && (t.date.hour = i.hour), n >= 5 && (t.date.minute = i.minute), 
            n >= 6 && (t.date.second = i.second), this.setData({
                endDate: t.date.year + "-" + t.date.month + "-" + t.date.day + " " + t.date.hour + ":" + t.date.minute + ":" + t.date.second
            }), this.data.endDateOptions = t;
        },
        getYears: function(a, e) {
            if (a) {
                for (var n, i = this.data.startDateOptions, s = [], d = i.minDate.year; d <= i.maxDate.year; d++) s.push(d);
                this.setData((n = {}, t(n, "startDateData[0]", s), t(n, "startDateValue[0]", s.indexOf(i.date.year)), 
                n));
            }
            if (e) {
                for (var r, D = this.data.endDateOptions, h = [], u = D.minDate.year; u <= D.maxDate.year; u++) h.push(u);
                this.setData((r = {}, t(r, "endDateData[0]", h), t(r, "endDateValue[0]", h.indexOf(D.date.year)), 
                r));
            }
        },
        getMonths: function(e, n) {
            if (e) {
                for (var i, s = this.data.startDateOptions, d = [], r = 1; r <= 12; r++) d.push(a.default.formatNumber(r));
                this.setData((i = {}, t(i, "startDateData[1]", d), t(i, "startDateValue[1]", d.indexOf(s.date.month)), 
                i));
            }
            if (n) {
                for (var D, h = this.data.endDateOptions, u = [], o = 1; o <= 12; o++) u.push(a.default.formatNumber(o));
                this.setData((D = {}, t(D, "endDateData[1]", u), t(D, "endDateValue[1]", u.indexOf(h.date.month)), 
                D));
            }
        },
        getDays: function(e, n) {
            if (e) {
                for (var i, s = this.data.startDateOptions, d = [ 31, 28 + a.default.isLeap(s.date.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][Number(s.date.month) - 1], r = [], D = 1; D <= d; D++) r.push(a.default.formatNumber(D));
                this.setData((i = {}, t(i, "startDateData[2]", r), t(i, "startDateValue[2]", r.indexOf(s.date.day)), 
                i));
            }
            if (n) {
                for (var h, u = this.data.endDateOptions, o = [ 31, 28 + a.default.isLeap(u.date.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][Number(u.date.month) - 1], m = [], f = 1; f <= o; f++) m.push(a.default.formatNumber(f));
                this.setData((h = {}, t(h, "endDateData[2]", m), t(h, "endDateValue[2]", m.indexOf(u.date.day)), 
                h));
            }
        },
        getHours: function(e, n) {
            if (e) {
                for (var i, s = this.data.startDateOptions, d = [], r = 0; r <= 23; r++) d.push(a.default.formatNumber(r));
                this.setData((i = {}, t(i, "startDateData[3]", d), t(i, "startDateValue[3]", d.indexOf(s.date.hour)), 
                i));
            }
            if (n) {
                for (var D, h = this.data.endDateOptions, u = [], o = 0; o <= 23; o++) u.push(a.default.formatNumber(o));
                this.setData((D = {}, t(D, "endDateData[3]", u), t(D, "endDateValue[3]", u.indexOf(h.date.hour)), 
                D));
            }
        },
        getMinutes: function(e, n) {
            if (e) {
                for (var i, s = this.data.startDateOptions, d = [], r = 0; r <= 59; r++) d.push(a.default.formatNumber(r));
                this.setData((i = {}, t(i, "startDateData[4]", d), t(i, "startDateValue[4]", d.indexOf(s.date.minute)), 
                i));
            }
            if (n) {
                for (var D, h = this.data.endDateOptions, u = [], o = 0; o <= 59; o++) u.push(a.default.formatNumber(o));
                this.setData((D = {}, t(D, "endDateData[4]", u), t(D, "endDateValue[4]", u.indexOf(h.date.minute)), 
                D));
            }
        },
        getSeconds: function(e, n) {
            if (e) {
                for (var i, s = this.data.startDateOptions, d = [], r = 0; r <= 59; r++) d.push(a.default.formatNumber(r));
                this.setData((i = {}, t(i, "startDateValue[5]", d.indexOf(s.date.second)), t(i, "startDateData[5]", d), 
                i));
            }
            if (n) {
                for (var D, h = this.data.endDateOptions, u = [], o = 0; o <= 59; o++) u.push(a.default.formatNumber(o));
                this.setData((D = {}, t(D, "endDateData[5]", u), t(D, "endDateValue[5]", u.indexOf(h.date.second)), 
                D));
            }
        },
        change: function(n) {
            this.setData({
                startDateChanging: !0
            });
            var i = n.currentTarget.dataset.type, s = n.detail, d = "start" == i ? this.data.startDateValue : this.data.endDateValue, r = "start" == i ? this.data.startDateData : this.data.endDateData, D = "start" == i ? this.data.startDateOptions : this.data.endDateOptions, h = e.indexOf(this.data.type) + 1, u = s[0] != d[0], o = D.minDate, m = D.maxDate;
            if (h <= 5) var f = s[1] != d[1];
            var l = this.getDateString(i, s);
            if (a.default.compareDate(o.date, l) && r[0][s[0]] == D.minDate.year && h <= 5 && Number(r[1][s[1]]) <= Number(D.minDate.month) && (s[1] = r[1].indexOf(D.minDate.month), 
            l = this.getDateString(i, s), h <= 4 && Number(r[2][s[2]]) <= Number(D.minDate.day) && (s[2] = r[2].indexOf(D.minDate.day), 
            l = this.getDateString(i, s), h <= 3 && Number(r[3][s[3]]) <= Number(D.minDate.hour) && (s[3] = r[3].indexOf(D.minDate.hour), 
            l = this.getDateString(i, s), h <= 2 && Number(r[4][s[4]]) <= Number(D.minDate.minute) && (s[4] = r[4].indexOf(D.minDate.minute), 
            l = this.getDateString(i, s), h <= 1 && Number(r[5][s[5]]) <= Number(D.minDate.second) && (s[5] = r[5].indexOf(D.minDate.second), 
            l = this.getDateString(i, s)))))), a.default.compareDate(l, m.date) && r[0][s[0]] == D.maxDate.year && h <= 5 && Number(r[1][s[1]]) >= Number(D.maxDate.month) && (s[1] = r[1].indexOf(D.maxDate.month), 
            l = this.getDateString(i, s), h <= 4 && Number(r[2][s[2]]) >= Number(D.maxDate.day) && (s[2] = r[2].indexOf(D.maxDate.day), 
            l = this.getDateString(i, s), h <= 3 && Number(r[3][s[3]]) >= Number(D.maxDate.hour) && (s[3] = r[3].indexOf(D.maxDate.hour), 
            l = this.getDateString(i, s), h <= 2 && Number(r[4][s[4]]) >= Number(D.maxDate.minute) && (s[4] = r[4].indexOf(D.maxDate.minute), 
            l = this.getDateString(i, s), h <= 1 && Number(r[5][s[5]]) >= Number(D.maxDate.second) && (s[5] = r[5].indexOf(D.maxDate.second), 
            l = this.getDateString(i, s)))))), "start" == i && (this.data.startDateOptions.date = a.default.formatDate(l), 
            this.setData({
                startDate: l,
                startDateValue: s
            })), "end" == i && (this.data.endDateOptions.date = a.default.formatDate(l), this.setData({
                endDate: l,
                endDateValue: s
            })), (u || f) && h <= 4) {
                for (var g = [ 31, 28 + a.default.isLeap(Number(r[0][s[0]])), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][Number(r[1][s[1]]) - 1], p = [], c = 1; c <= g; c++) p.push(a.default.formatNumber(c));
                "start" == i && (this.setData(t({}, "startDateData[2]", p)), s[2] + 1 > p.length && this.setData(t({}, "startDateValue[2]", p.length - 1))), 
                "end" == i && (this.setData(t({}, "endDateData[2]", p)), s[2] + 1 > p.length && this.setData(t({}, "startDateValue[2]", p.length - 1)));
            }
        },
        getDateString: function(t, n) {
            for (var i = "start" == t ? this.data.startDateData : this.data.endDateData, s = e.indexOf(this.data.type) + 1, d = [ 0, 1, 1, 0, 0, 0 ], r = 0; r < n.length; r++) d.splice(r, 1, i[r][n[r]]);
            var D = d[0], h = d[1], u = [ 31, 28 + a.default.isLeap(D), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], o = d[2] > u[h - 1] ? u[h - 1] : d[2], m = d[3], f = d[4], l = d[5], g = {
                year: D,
                month: s <= 5 ? h : 1,
                day: s <= 4 ? o : 1,
                hour: s <= 3 ? m : 0,
                minute: s <= 2 ? f : 0,
                second: s <= 1 ? l : 0
            };
            return g.year + "-" + g.month + "-" + g.day + " " + g.hour + ":" + g.minute + ":" + g.second;
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
            var t = this, e = a.default.formatDate(t.data.startDate), n = a.default.formatDate(t.data.endDate);
            t.data.haveEndDate ? this.triggerEvent("confirm", {
                startDate: e,
                endDate: n
            }) : this.triggerEvent("confirm", {
                startDate: e
            });
        },
        cancel: function() {
            this.triggerEvent("cancel");
        }
    }
});