function e(e, s, a) {
    return s in e ? Object.defineProperty(e, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[s] = a, e;
}

function s(e, s, a) {
    Object.keys(a).forEach(function(t) {
        e[t] && (s[a[t]] = e[t]);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MyComponent = void 0;

var a = require("29533074B0A7888C4F35587324440087.js"), t = require("6A396221B0A7888C0C5F0A26C2640087.js");

exports.MyComponent = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = {};
    s(r, o, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses",
        pageLifetimes: "pageLifetimes"
    });
    var i = r.relation;
    i && (o.relations = Object.assign(o.relations || {}, e({}, "../" + i.name + "/" + i.name, i))), 
    o.externalClasses = o.externalClasses || [], o.externalClasses.push("custom-class"), 
    o.behaviors = o.behaviors || [], o.behaviors.push(a.basic), r.field && o.behaviors.push("wx://form-field"), 
    o.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, (0, t.observe)(r, o), Component(o);
};