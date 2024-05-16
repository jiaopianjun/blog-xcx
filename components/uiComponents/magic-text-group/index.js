Component({
    relations: {
        "../magic-text/index": {
            type: "descendant"
        }
    },
    properties: {},
    data: {
        in: []
    },
    ready: function() {
        this.play();
    },
    methods: {
        play: function() {
            for (var t = this.getRelationNodes("../magic-text/index"), e = 0; e < t.length; e++) t[e].play();
        }
    }
});