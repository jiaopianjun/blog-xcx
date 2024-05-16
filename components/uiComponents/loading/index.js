Component({
    externalClasses: [ "custom-class", "text-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        type: {
            type: String,
            value: "circle"
        },
        size: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: ""
        },
        text: {
            type: String,
            value: ""
        },
        textColor: {
            type: String,
            value: ""
        },
        textSize: {
            type: String,
            value: ""
        },
        vertical: {
            type: Boolean,
            value: !0
        },
        block: {
            type: Boolean,
            value: !1
        },
        weight: {
            type: String,
            value: ""
        }
    }
});