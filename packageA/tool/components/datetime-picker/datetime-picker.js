function t(t) {
    try {
        t = t.replace(/-/g, "/");
    } catch (t) {}
    var i = (t = new Date(t)).getFullYear(), e = t.getMonth() + 1, s = t.getDate(), n = t.getHours(), d = t.getMinutes(), r = t.getSeconds();
    return {
        str: [ i, e, s ].map(a).join("-") + " " + [ n, d, r ].map(a).join(":"),
        arr: [ i, e, s, n, d, r ]
    };
}

function a(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

(0, require("../../BABEAA27B0A7888CDCD8C2206B240087.js").MyComponent)({
    props: {
        show: Boolean,
        config: Object
    },
    data: {},
    detached: function() {
        console.log("dele");
    },
    attached: function() {},
    mounted: function() {
        this.readConfig(), this.initPick(this.data.config || null), this.setData({
            startValue: this.data.startValue,
            endValue: this.data.endValue
        });
    },
    watch: {
        config: function() {
            this.readConfig(), this.initPick(this.data.config || null), this.setData({
                startValue: this.data.startValue,
                endValue: this.data.endValue
            });
        }
    },
    methods: {
        readConfig: function() {
            var a = new Date().getTime(), i = new Date().getTime() - 2592e6;
            if (this.data.config) {
                var e = this.data.config;
                "number" == typeof e.dateLimit && (i = new Date().getTime() - 864e5 * e.dateLimit), 
                e.limitStartTime && (i = new Date(e.limitStartTime.replace(/-/g, "/")).getTime()), 
                e.limitEndTime && (a = new Date(e.limitEndTime.replace(/-/g, "/")).getTime()), this.setData({
                    yearStart: e.yearStart || 2e3,
                    yearEnd: e.yearEnd || 2100,
                    endDate: e.endDate || !1,
                    dateLimit: e.dateLimit || !1,
                    hourColumn: "hour" == e.column || "minute" == e.column || "second" == e.column,
                    minColumn: "minute" == e.column || "second" == e.column,
                    secColumn: "second" == e.column
                });
            }
            var s = t(i), n = t(a);
            this.setData({
                limitStartTime: i,
                limitStartTimeArr: s,
                limitEndTime: a,
                limitEndTimeArr: n
            });
        },
        handlePickStart: function(t) {
            this.setData({
                isPicking: !0
            });
        },
        handlePickEnd: function(t) {
            this.setData({
                isPicking: !1
            });
        },
        onConfirm: function() {
            if (!this.data.isPicking) {
                var a = new Date(this.data.startPickTime.replace(/-/g, "/")), i = new Date(this.data.endPickTime.replace(/-/g, "/"));
                if (a <= i || !this.data.endDate) {
                    this.setData({
                        startTime: a,
                        endTime: i
                    });
                    var e = t(a).arr, s = t(i).arr, n = function(t) {
                        return t < 10 ? "0" + t : t;
                    }, d = {
                        startTime: e[0] + "-" + n(e[1]) + "-" + n(e[2]) + " " + (this.data.hourColumn ? n(e[3]) : "00") + ":" + (this.data.minColumn ? n(e[4]) : "00") + ":" + (this.data.secColumn ? n(e[5]) : "00"),
                        endTime: s[0] + "-" + n(s[1]) + "-" + n(s[2]) + " " + (this.data.hourColumn ? n(s[3]) : "00") + ":" + (this.data.minColumn ? n(s[4]) : "00") + ":" + (this.data.secColumn ? n(s[5]) : "00")
                    };
                    this.triggerEvent("setPickerTime", d), this.triggerEvent("hidePicker", {});
                } else wx.showToast({
                    icon: "none",
                    title: "时间不合理"
                });
            }
        },
        hideModal: function() {
            this.triggerEvent("hidePicker", {});
        },
        changeStartDateTime: function(t) {
            var a = t.detail.value;
            this.compareTime(a, "start");
        },
        changeEndDateTime: function(t) {
            var a = t.detail.value;
            this.compareTime(a, "end");
        },
        compareTime: function(a, i) {
            var e = a[3] ? this.data.HourList[a[3]] : "00", s = a[4] ? this.data.MinuteList[a[4]] : "00", n = a[5] ? this.data.SecondList[a[5]] : "00", d = this.data.YearList[a[0]] + "-" + this.data.MonthList[a[1]] + "-" + this.data.DayList[a[2]] + " " + e + ":" + s + ":" + n, r = this.data.limitStartTime, o = this.data.limitEndTime, h = new Date(d.replace(/-/g, "/")).getTime(), u = void 0, c = void 0, m = void 0, l = void 0, L = void 0, g = void 0, D = void 0;
            u = (D = this.data.dateLimit ? "start" == i && h > new Date(this.data.endPickTime.replace(/-/g, "/")) && this.data.config.endDate ? t(this.data.endPickTime).arr : "end" == i && h < new Date(this.data.startPickTime.replace(/-/g, "/")) ? t(this.data.startPickTime).arr : h < r ? this.data.limitStartTimeArr.arr : h > o ? this.data.limitEndTimeArr.arr : [ this.data.YearList[a[0]], this.data.MonthList[a[1]], this.data.DayList[a[2]], this.data.HourList[a[3]], this.data.MinuteList[a[4]], this.data.SecondList[a[5]] ] : [ this.data.YearList[a[0]], this.data.MonthList[a[1]], this.data.DayList[a[2]], this.data.HourList[a[3]], this.data.MinuteList[a[4]], this.data.SecondList[a[5]] ])[0], 
            c = D[1], m = D[2], l = D[3], L = D[4], g = D[5], "start" == i ? this.setStartDate(u, c, m, l, L, g) : "end" == i && this.setEndDate(u, c, m, l, L, g);
        },
        getDays: function(t, a) {
            var i = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
            return 2 === a ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : i[a - 1];
        },
        initPick: function(t) {
            for (var a = t.initStartTime ? new Date(t.initStartTime.replace(/-/g, "/")) : new Date(), i = t.initEndTime ? new Date(t.initEndTime.replace(/-/g, "/")) : new Date(), e = a.getFullYear(), s = a.getMonth() + 1, n = a.getDate(), d = a.getHours(), r = a.getMinutes(), o = a.getSeconds(), h = i.getFullYear(), u = i.getMonth() + 1, c = i.getDate(), m = i.getHours(), l = i.getMinutes(), L = i.getSeconds(), g = [], D = [], f = [], p = [], T = [], I = [], v = this.data.yearStart; v <= this.data.yearEnd; v++) g.push(v);
            for (var x = 1; x <= 12; x++) D.push(x);
            for (var S = 1; S <= 31; S++) f.push(S);
            for (var M = 0; M <= 23; M++) 0 <= M && M < 10 && (M = "0" + M), p.push(M);
            for (var y = 0; y <= 59; y++) 0 <= y && y < 10 && (y = "0" + y), T.push(y), I.push(y);
            this.setData({
                YearList: g,
                MonthList: D,
                DayList: f,
                HourList: p,
                MinuteList: T,
                SecondList: I
            }), this.setStartDate(e, s, n, d, r, o), this.setEndDate(h, u, c, m, l, L);
        },
        setPickerDateArr: function(t, a, i, e, s, n, d) {
            var r = 0, o = 0, h = 0, u = 0, c = 0, m = 0;
            this.data.YearList.map(function(t, i) {
                parseInt(t) === a && (r = i);
            }), this.data.MonthList.map(function(t, a) {
                parseInt(t) === i && (o = a);
            });
            for (var l = [], L = 1; L <= this.getDays(a, i); L++) l.push(L);
            return l.map(function(t, a) {
                parseInt(t) === e && (h = a);
            }), "start" == t ? this.setData({
                startDayList: l
            }) : "end" == t && this.setData({
                endDayList: l
            }), this.data.HourList.map(function(t, a) {
                parseInt(t) === parseInt(s) && (u = a);
            }), this.data.MinuteList.map(function(t, a) {
                parseInt(t) === parseInt(n) && (c = a);
            }), this.data.SecondList.map(function(t, a) {
                parseInt(t) === parseInt(d) && (m = a);
            }), {
                yearIdx: r,
                monthIdx: o,
                dayIdx: h,
                hourIdx: u,
                minuteIdx: c,
                secondIdx: m
            };
        },
        setStartDate: function(t, a, i, e, s, n) {
            var d = this.setPickerDateArr("start", t, a, i, e, s, n);
            this.setData({
                startYearList: this.data.YearList,
                startMonthList: this.data.MonthList,
                startHourList: this.data.HourList,
                startMinuteList: this.data.MinuteList,
                startSecondList: this.data.SecondList,
                startValue: [ d.yearIdx, d.monthIdx, d.dayIdx, d.hourIdx, d.minuteIdx, d.secondIdx ],
                startPickTime: this.data.YearList[d.yearIdx] + "-" + this.data.MonthList[d.monthIdx] + "-" + this.data.DayList[d.dayIdx] + " " + this.data.HourList[d.hourIdx] + ":" + this.data.MinuteList[d.minuteIdx] + ":" + this.data.SecondList[d.secondIdx]
            });
        },
        setEndDate: function(t, a, i, e, s, n) {
            var d = this.setPickerDateArr("end", t, a, i, e, s, n);
            this.setData({
                endYearList: this.data.YearList,
                endMonthList: this.data.MonthList,
                endHourList: this.data.HourList,
                endMinuteList: this.data.MinuteList,
                endSecondList: this.data.SecondList,
                endValue: [ d.yearIdx, d.monthIdx, d.dayIdx, d.hourIdx, d.minuteIdx, d.secondIdx ],
                endPickTime: this.data.YearList[d.yearIdx] + "-" + this.data.MonthList[d.monthIdx] + "-" + this.data.DayList[d.dayIdx] + " " + this.data.HourList[d.hourIdx] + ":" + this.data.MinuteList[d.minuteIdx] + ":" + this.data.SecondList[d.secondIdx]
            });
        }
    }
});