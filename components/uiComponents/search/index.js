getApp();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    relations: {
        "../container/index": {
            type: "ancestor"
        }
    },
    properties: {
        background: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        },
        record: {
            type: Boolean,
            value: !0
        },
        haveHeight: {
            type: Boolean,
            value: !0
        },
        searchType: {
            type: Array,
            value: []
        },
        border: {
            type: Boolean,
            value: !1
        },
        borderColor: {
            type: String,
            value: ""
        },
        borderWidth: {
            type: Number,
            value: 0
        }
    },
    data: {
        activeSearchTypeIndex: 0,
        value: ""
    },
    methods: {
        showSearchType: function() {
            this.selectComponent("#searchType").open();
        },
        showRecord: function() {
            this.selectComponent("#record").open();
        },
        searchTypeChange: function(e) {
            console.log(e);
            var t = e.detail.index;
            this.setData({
                activeSearchTypeIndex: t
            }), this.selectComponent("#searchType").close();
        },
        recordRecogize: function(e) {
            var t = e.detail.result;
            this.setData({
                value: t
            });
        },
        recordStop: function(e) {
            var t = e.detail.result;
            this.setData({
                value: t
            }), this.triggerEvent("search", {
                result: t
            });
        },
        clear: function() {
            this.setData({
                value: ""
            }), this.triggerEvent("clear");
        }
    }
});