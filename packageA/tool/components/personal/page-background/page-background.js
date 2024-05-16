var a = require("../../../common/dataJs/BABEAA27B0A7888CDCD8C2206B240087.js"), e = getApp();

(0, a.MyComponent)({
    props: {
        change: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        darkMode: e.globalData.darkMode
    },
    watch: {
        change: function() {
            this.data.change && this.set({
                darkMode: e.globalData.darkMode,
                change: !1
            });
        }
    },
    mounted: function() {
        this.set({
            darkMode: e.globalData.darkMode,
            change: !1
        });
    },
    pageLifetimes: {
        show: function() {
            this.set({
                darkMode: e.globalData.darkMode,
                change: !1
            });
        }
    },
    methods: {}
});