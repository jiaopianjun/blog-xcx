Component({
    externalClasses: [ "custom-class", "icon-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        text: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: "mini"
        },
        tagStyle: {
            type: String,
            value: "solid"
        },
        block: {
            type: Boolean,
            value: !1
        },
        round: {
            type: Boolean,
            value: !1
        },
        square: {
            type: Boolean,
            value: !1
        },
        background: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        },
        gradientColor: {
            type: String,
            value: ""
        },
        borderWidth: {
            type: String,
            value: ""
        },
        borderColor: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: ""
        }
    },
    methods: {}
});