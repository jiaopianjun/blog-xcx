var a = getApp();

Component({
    externalClasses: [ "custom-class", "background-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../navigation/index": {
            type: "descendant"
        },
        "../tabbar/index": {
            type: "descendant"
        },
        "../tips/index": {
            type: "descendant"
        }
    },
    data: {
        darkMode: "system" == a.globalData.setting.darkMode ? a.globalData.systemDarkMode : a.globalData.setting.darkMode,
        theme: a.globalData.setting.theme,
        tabbarHeight: a.globalData.iphoneX ? 74 : 50,
        navigationHeight: a.globalData.navigationHeight,
        systemInfo: a.globalData.systemInfo,
        menuInfo: a.globalData.menuInfo,
        contentHeight: 0,
        iphoneX: a.globalData.iphoneX
    },
    pageLifetimes: {
        show: function() {
            var t = this;
            a.isReady ? t.init() : a.appCallback = function() {
                t.init();
            };
        }
    },
    ready: function() {
        console.log(a.globalData.systemInfo), this.listenThemeChange();
    },
    methods: {
        listenThemeChange: function() {
            var t = this;
            wx.onThemeChange(function(e) {
                t.triggerEvent("systemdarkmodechange", e.theme), a.globalData.systemDarkMode = e.theme, 
                "system" == a.globalData.setting.darkMode && (t.setData({
                    darkMode: e.theme
                }), t.triggerEvent("appdarkmodechange", e.theme));
            });
        },
        init: function() {
            var t = this.getRelationNodes("../navigation/index"), e = this.getRelationNodes("../tabbar/index"), n = 0, o = 0;
            t.length > 0 && (n = t[0].data.haveHeight ? a.globalData.navigationHeight : 0), 
            e.length > 0 && (o = e[0].data.haveHeight ? a.globalData.tabbarHeight : 0);
            var i = a.globalData.systemInfo.windowHeight - n - o;
            this.setData({
                theme: a.globalData.setting.theme,
                darkMode: "system" == a.globalData.setting.darkMode ? a.globalData.systemDarkMode : a.globalData.setting.darkMode,
                tabbarHeight: a.globalData.tabbarHeight,
                navigationHeight: a.globalData.navigationHeight,
                systemInfo: a.globalData.systemInfo,
                menuInfo: a.globalData.menuInfo,
                contentHeight: i
            }), this.triggerEvent("ready");
        },
        touchStart: function() {
            var a = this.getRelationNodes("../tips/index");
            if (a.length > 0) for (var t = 0; t < a.length; t++) a[t].data.show && a[t].close();
        }
    }
});