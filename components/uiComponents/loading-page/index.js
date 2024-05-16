getApp();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        type: {
            type: String,
            value: "cube-blink"
        },
        text: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {}
});