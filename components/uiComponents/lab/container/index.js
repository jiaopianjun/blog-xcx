var t = getApp();

Component({
    externalClasses: [ "custom-class" ],
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
        "../content/index": {
            type: "descendant"
        }
    },
    properties: {
        refresh: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        darkMode: t.globalData.darkMmode,
        theme: t.globalData.setting.theme,
        refresh: !1
    },
    observers: {
        refresh: function(t) {
            t && this.init();
        }
    },
    ready: function() {
        console.log("component.ready"), console.log("component.ready");
        var e = this;
        wx.onThemeChange(function(a) {
            t.globalData.systemDarkMode = a.theme, console.log("watch container set darkmode", t.globalData.systemDarkMode), 
            "system" == t.globalData.setting.darkMode && e.setData({
                darkMode: a.theme
            });
        }), this.init();
    },
    methods: {
        init: function() {
            var e = this.getRelationNodes("../navigation/index"), a = this.getRelationNodes("../tabbar/index"), n = 0, o = 0;
            e.length > 0 && (n = e[0].data.haveHeight ? t.globalData.navigationHeight : 0), 
            a.length > 0 && (o = a[0].data.haveHeight ? t.globalData.tabbarHeight : 0);
            var i = t.globalData.systemInfo.windowHeight - n - o;
            this.setData({
                theme: t.globalData.setting.theme,
                darkMode: "system" == t.globalData.setting.darkMode ? t.globalData.systemDarkMode : t.globalData.setting.darkMode,
                tabbarHeight: t.globalData.tabbarHeight,
                navigationHeight: t.globalData.navigationHeight,
                systemInfo: t.globalData.systemInfo,
                menuInfo: t.globalData.menuInfo,
                contentHeight: i
            }), this.triggerEvent("ready"), this.setContent();
        },
        setContent: function() {
            var t = this.getRelationNodes("../navigation/index"), e = this.getRelationNodes("../tabbar/index"), a = this.getRelationNodes("../content/index");
            a.length <= 0 || a[0].init({
                haveNavigation: 1 == t.length,
                haveTabbar: 1 == e.length
            });
        },
        start: function() {},
        move: function() {},
        end: function() {}
    }
});