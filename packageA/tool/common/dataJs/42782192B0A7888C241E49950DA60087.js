function e(e) {
    return e[d[1]](/_/g, d[0]);
}

function r(r, a) {
    var t = {};
    t[d[41]] = [];
    for (var n = 0; n < a; n++) {
        var s = {
            temperature: {
                max: Math[d[8]](r[d[3]][n][d[2]]),
                avg: Math[d[8]](r[d[3]][n][d[5]]),
                min: Math[d[8]](r[d[3]][n][d[6]])
            },
            skyconNight: {
                zh: o(r[d[43]][n][d[42]]),
                en: e(r[d[43]][n][d[42]]),
                icon: r[d[43]][n][d[42]]
            },
            skyconDay: {
                zh: o(r[d[44]][n][d[42]]),
                en: e(r[d[44]][n][d[42]]),
                icon: r[d[44]][n][d[42]]
            },
            air: {
                aqi: {
                    max: r[d[14]][d[19]][n][d[2]],
                    avg: Math[d[8]](r[d[14]][d[19]][n][d[5]][d[17]]),
                    min: r[d[14]][d[19]][n][d[6]],
                    desc: c(r[d[14]][d[19]][n][d[5]][d[17]])
                },
                pm25: {
                    min: r[d[14]][d[21]][n][d[5]],
                    avg: r[d[14]][d[21]][n][d[5]],
                    max: r[d[14]][d[21]][n][d[5]]
                }
            },
            wind: u(r[d[10]][n][d[5]][d[9]], r[d[10]][n][d[5]][d[11]]),
            astro: {
                sunset: r[d[46]][n][d[45]],
                sunrise: r[d[46]][n][d[47]]
            },
            life: {
                carwashing: r[d[25]][d[49]][n][d[48]],
                dressing: r[d[25]][d[50]][n][d[48]],
                ultraviolet: r[d[25]][d[26]][n][d[48]],
                coldrisk: r[d[25]][d[51]][n][d[48]]
            },
            precipitation: r[d[32]][n],
            humidity: r[d[29]][n],
            date: {
                day: f.default[d[53]](r[d[14]][d[21]][n][d[52]]),
                month: f.default[d[54]](r[d[14]][d[21]][n][d[52]]),
                year: f.default[d[55]](r[d[14]][d[21]][n][d[52]]),
                date: r[d[14]][d[21]][n][d[52]],
                week: f.default[d[56]](r[d[14]][d[21]][n][d[52]])
            }
        };
        t[d[41]][d[4]](s);
    }
    return t[d[48]] = i(t[d[41]]), t;
}

function a(r) {
    var a = new Object();
    a[d[41]] = [];
    for (var t = 0; t < 48; t++) {
        var n = {
            temperature: Math[d[8]](r[d[3]][t][d[42]]),
            skycon: {
                zh: o(r[d[7]][t][d[42]], r[d[32]][t][d[42]]),
                en: e(r[d[7]][t][d[42]]),
                icon: r[d[7]][t][d[42]]
            },
            air: {
                aqi: {
                    value: r[d[14]][d[19]][t][d[42]],
                    des: c(r[d[14]][d[19]][t][d[42]][d[17]])
                },
                pm25: r[d[14]][d[21]][t][d[42]]
            },
            wind: u(r[d[10]][t][d[9]], r[d[10]][t][d[11]]),
            precipitation: r[d[32]][t],
            humidity: r[d[29]][t],
            time: f.default[d[58]](r[d[14]][d[19]][t][d[57]])
        };
        if (f.default[d[58]](r[d[3]][t][d[57]]) == d[59]) {
            var i = {
                day: f.default[d[53]](r[d[3]][t][d[57]]) + d[60]
            };
            a[d[41]][d[4]](i);
        }
        a[d[41]][d[4]](n);
    }
    return a[d[48]] = r[d[16]], a;
}

function t(e) {
    var r = new Object();
    r[d[41]] = [], r[d[61]] = !1;
    for (var a = 0; a < 120; a++) {
        var t = {
            x: a,
            y: e[d[62]][a]
        };
        r[d[41]][d[4]](t), e[d[62]][a] >= .03 && (r[d[61]] = !0);
    }
    return r[d[48]] = e[d[16]], r;
}

function n(e) {
    for (var r = [], a = 0; a < e[d[63]]; a++) {
        var t = s(e[a][d[64]]);
        t[d[40]] = e[a][d[16]], r[d[4]](t);
    }
    return r;
}

function i(e) {
    for (var r = [], a = 0; a < e[d[63]]; a++) r[d[4]](e[a][d[66]][d[65]]);
    for (var t = {}, a = 0, n = r[d[63]]; a < n; a++) t[o = r[a]] = t[o] + 1 || 1;
    var i = [];
    for (var a in t) {
        var o = {
            weather: a,
            count: t[a]
        };
        i[d[4]](o);
    }
    return i;
}

function o(e) {
    var r = new Array();
    return r[d[67]] = d[68], r[d[69]] = d[70], r[d[71]] = d[72], r[d[73]] = d[74], r[d[75]] = d[76], 
    r[d[77]] = d[78], r[d[79]] = d[78], r[d[80]] = d[78], r[d[81]] = d[82], r[d[83]] = d[84], 
    r[d[85]] = d[86], r[d[87]] = d[88], r[d[89]] = d[90], r[d[91]] = d[92], r[d[93]] = d[94], 
    r[d[95]] = d[96], r[d[97]] = d[98], r[d[99]] = d[100], r[d[101]] = d[102], r[d[103]] = d[104], 
    e = r[e];
}

function u(e, r) {
    var a = new Object();
    switch (!0) {
      case 0 <= e && e <= 11.25 || 378.75 < e && e <= 360:
        a[d[105]] = d[106];
        break;

      case 11.25 < e && e <= 78.75:
        a[d[105]] = d[107];
        break;

      case 78.75 < e && e <= 101.25:
        a[d[105]] = d[108];
        break;

      case 101.25 < e && e <= 168.75:
        a[d[105]] = d[109];
        break;

      case 168.75 < e && e <= 191.25:
        a[d[105]] = d[110];
        break;

      case 191.25 < e && e < 258.75:
        a[d[105]] = d[111];
        break;

      case 258.75 < e && e <= 281.25:
        a[d[105]] = d[112];
        break;

      case 281.25 < e <= 348.75:
        a[d[105]] = d[113];
    }
    switch (!0) {
      case 0 <= r && r <= 1:
        a[d[48]] = d[114], a[d[33]] = 0, a[d[115]] = d[116];
        break;

      case 1 < r && r <= 5:
        a[d[48]] = d[117], a[d[33]] = 1, a[d[115]] = d[118];
        break;

      case 5 < r && r <= 11:
        a[d[48]] = d[119], a[d[33]] = 2, a[d[115]] = d[120];
        break;

      case 11 < r && r <= 19:
        a[d[48]] = d[121], a[d[33]] = 3, a[d[115]] = d[122], r = 5;
        break;

      case 19 < r && r <= 28:
        a[d[48]] = d[123], a[d[33]] = 4, a[d[115]] = d[124];
        break;

      case 28 < r && r <= 38:
        a[d[48]] = d[125], a[d[33]] = 5, a[d[115]] = d[126];
        break;

      case 38 < r && r <= 49:
        a[d[48]] = d[127], a[d[33]] = 6, a[d[115]] = d[128];
        break;

      case 49 < r && r <= 61:
        a[d[48]] = d[129], a[d[33]] = 7, a[d[115]] = d[130];
        break;

      case 61 < r && r <= 74:
        a[d[48]] = d[131], a[d[33]] = 8, a[d[115]] = d[104];
        break;

      case 74 < r && r <= 88:
        a[d[48]] = d[132], a[d[33]] = 9, a[d[115]] = d[133];
        break;

      case 88 < r && r <= 102:
        a[d[48]] = d[134], a[d[33]] = 10, a[d[115]] = d[135];
        break;

      case 102 < r && r <= 117:
        a[d[48]] = d[136], a[d[33]] = 11, a[d[115]] = d[137];
        break;

      case 117 < r && r <= 133:
        a[d[48]] = d[138], a[d[33]] = 12, a[d[115]] = d[139];
        break;

      case r > 133:
        a[d[48]] = d[140], a[d[33]] = 13 + d[141], a[d[115]] = d[142];
    }
    return a;
}

function c(e) {
    if ((e = Math[d[8]](e)) <= 50) return r = d[143];
    if (50 < e && e <= 100) return r = d[144];
    if (100 < e && e <= 150) return r = d[145];
    if (150 < e && e <= 200) return r = d[146];
    if (200 < e && e <= 300) return r = d[147];
    if (300 < e) {
        var r = d[148];
        return r;
    }
}

function s(e) {
    var r = [ d[149], d[88], d[98], d[150], d[104], d[151], d[152], d[153], d[154], d[155], d[156], d[157], d[158], d[159], d[160], d[161] ], a = [ d[162], d[163], d[164], d[165] ], t = e[d[166]](0, 2), n = e[d[166]](2, 2);
    return {
        warningTypeCode: Number(t) - 1,
        warningLvCode: Number(n) - 1,
        warningType: r[Number(t) - 1],
        warningLv: a[Number(n) - 1]
    };
}

var f = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("DC46EEE5B0A7888CBA2086E20FC60087.js")), d = [ " ", "replace", "max", "temperature", "push", "avg", "min", "skycon", "round", "direction", "wind", "speed", "dswrf", "co", "air_quality", "usa", "description", "chn", "pm10", "aqi", "so2", "pm25", "o3", "no2", "comfort", "life_index", "ultraviolet", "visibility", "toFixed", "humidity", "pressure", "apparent_temperature", "precipitation", "lv", "index", "grade", "daily", "hourly", "minutely", "alert", "content", "data", "value", "skycon_20h_32h", "skycon_08h_20h", "sunset", "astro", "sunrise", "desc", "carWashing", "dressing", "coldRisk", "date", "formatDay", "formatMonth", "formatYear", "formatWeek", "datetime", "getHour", "01:00", "日", "rain", "precipitation_2h", "length", "code", "zh", "skyconDay", "CLEAR_DAY", "晴天", "CLEAR_NIGHT", "晴夜", "PARTLY_CLOUDY_DAY", "多云", "PARTLY_CLOUDY_NIGHT", "云夜", "CLOUDY", "阴天", "LIGHT_HAZE", "雾霾", "MODERATE_HAZE", "HEAVY_HAZE", "LIGHT_RAIN", "小雨", "MODERATE_RAIN", "中雨", "HEAVY_RAIN", "大雨", "STORM_RAIN", "暴雨", "FOG", "雾天", "LIGHT_SNOW", "小雪", "MODERATE_SNOW", "中雪", "HEAVY_SNOW", "大雪", "STORM_SNOW", "暴雪", "DUST", "浮尘", "SAND", "沙尘", "WIND", "大风", "dir", "正北风", "东北风", "正东风", "东南风", "正南风", "西南风", "正西风", "西北风", "炊烟直上", "type", "静风", "暗香浮动", "软风", "似有还无", "轻风", "垂柳袅袅", "微风", "落花翻滚", "和风", "水波荡漾", "劲风", "电线有声", "强风", "举步难行", "疾风", "可折树枝", "小损屋宇", "烈风", "拔起树木", "狂风", "风潇雨晦", "暴风", "海浪滔天", "飓风", "毁天灭地", "+", "飓风plus", "优", "良", "轻度污染", "中度污染", "重度污染", "严重污染", "台风", "寒潮", "沙尘暴", "高温", "干旱", "雷电", "冰雹", "霜冻", "大雾", "霾", "道路结冰", "森林火灾", "雷雨大风", "蓝色", "黄色", "橙色", "红色", "substr", "exports" ];

module[d[167]] = {
    realtime: function(r) {
        return {
            skycon: {
                zh: o(r[d[7]]),
                en: e(r[d[7]]),
                icon: r[d[7]]
            },
            temperature: Math[d[8]](r[d[3]]),
            wind: u(r[d[10]][d[9]], r[d[10]][d[11]]),
            dswrf: r[d[12]],
            air: {
                co: r[d[14]][d[13]],
                description: {
                    usa: r[d[14]][d[16]][d[15]],
                    chn: r[d[14]][d[16]][d[17]]
                },
                pm10: r[d[14]][d[18]],
                aqi: {
                    usa: r[d[14]][d[19]][d[15]],
                    chn: r[d[14]][d[19]][d[17]]
                },
                so2: r[d[14]][d[20]],
                pm25: r[d[14]][d[21]],
                o3: r[d[14]][d[22]],
                no2: r[d[14]][d[23]]
            },
            life: {
                comfort: r[d[25]][d[24]],
                ultraviolet: r[d[25]][d[26]]
            },
            visibility: r[d[27]],
            humidity: (100 * r[d[29]])[d[28]](0),
            pressure: (r[d[30]] / 1e3)[d[28]](5),
            apparent_temperature: r[d[31]],
            precipitation: r[d[32]]
        };
    },
    forecast: function(e) {
        var i = new Object();
        return i[d[36]] = r(e[d[36]], 14), i[d[37]] = a(e[d[37]]), i[d[38]] = t(e[d[38]]), 
        i[d[39]] = n(e[d[39]][d[40]]), i;
    },
    skyconToZh: o,
    daily: r,
    dailyTempHigh: function(e, r, a) {
        for (var t = new Array(), n = r; n < a; n++) t[d[4]](e[n][d[3]][d[2]]);
        return t;
    },
    dailyTempLow: function(e, r, a) {
        for (var t = new Array(), n = r; n < a; n++) t[d[4]](e[n][d[3]][d[6]]);
        return t;
    },
    dailyTempAvg: function(e, r, a) {
        for (var t = new Array(), n = r; n < a; n++) t[d[4]](e[n][d[3]][d[5]]);
        return t;
    }
};