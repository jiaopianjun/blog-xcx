getApp();

Component({
    externalClasses: [ "custom-class" ],
    options: {
        multipleSlots: !0,
        addGlobalClass: !0
    },
    properties: {
        icon: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        cancelButton: {
            type: Boolean,
            value: !1
        },
        confirmButton: {
            type: Boolean,
            value: !1
        },
        cancelButtonText: {
            type: String,
            value: ""
        },
        confirmButtonText: {
            type: String,
            value: ""
        },
        cancelButtonOpenType: {
            type: String,
            value: ""
        },
        confirmButtonOpenType: {
            type: String,
            value: ""
        },
        cancelButtonColor: {
            type: String,
            value: ""
        },
        confirmButtonColor: {
            type: String,
            value: ""
        },
        cancelButtonBackground: {
            type: String,
            value: ""
        },
        confirmButtonBackground: {
            type: String,
            value: ""
        }
    },
    data: {},
    ready: function() {},
    methods: {
        cancel: function(t) {
            this.triggerEvent("cancel", t);
        },
        confirm: function(t) {
            this.triggerEvent("confirm", t);
        }
    }
});