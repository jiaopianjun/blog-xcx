Component({
    externalClasses: [ "custom-class" ],
    relations: {
        "../magic-text-group/index": {
            type: "ancestor"
        }
    },
    properties: {
        type: {
            type: String,
            value: "blink"
        },
        text: {
            type: String,
            value: ""
        },
        blinkStartColor: {
            type: String,
            value: ""
        },
        blinkEndColor: {
            type: String,
            value: ""
        }
    },
    data: {
        in: []
    },
    ready: function() {},
    methods: {
        play: function() {
            if (this.data.in.indexOf(!1) < 0 || 0 == this.data.in.length) {
                this.setData({
                    in: []
                });
                for (var t = this.data.text, n = [], e = [], i = 0; i < t.length; i++) n.push(!1), 
                e.push(i);
                this.random(n, e);
            }
        },
        stop: function() {},
        complete: function() {},
        random: function(t, n) {
            var e = this, i = n.map(function(t, n, e) {
                var i = n + Math.floor(Math.random() * (e.length - n)), a = e[i];
                return e[i] = t, a;
            }).slice(0, n.length);
            for (var a in i) !function(n) {
                setTimeout(function() {
                    t[i[n]] = !0, e.setData({
                        in: t
                    });
                }, 300 * n);
            }(a);
        },
        start: function() {},
        end: function() {}
    }
});