Component({
    externalClasses: [ "custom-class", "content-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        useHeaderSlot: {
            type: Boolean,
            value: !1
        },
        header: {
            type: Boolean,
            value: !1
        },
        headerTitle: {
            type: String,
            value: ""
        },
        headerSubtitle: {
            type: String,
            value: ""
        },
        headerRightIcon: {
            type: String,
            value: ""
        },
        headerAlign: {
            type: String,
            value: "left"
        },
        headerBorder: {
            type: Boolean,
            value: !0
        },
        headerRightText: {
            type: String,
            value: ""
        },
        headerIndent: {
            type: Boolean,
            value: !0
        },
        headerIndentDistance: {
            type: String,
            value: ""
        },
        contentIndent: {
            type: Boolean,
            value: !1
        },
        last: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {}
});