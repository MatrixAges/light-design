"use strict";
Component({
    properties: {
        color: {
            type: String,
            value: 'rgba(0, 0, 0, 0.3)'
        }
    },
    data: {},
    lifetimes: {
        attached: function () {
            var _that = this;
            _that
                .createSelectorQuery()
                .select('#ripple')
                .boundingClientRect(function (rect) {
                var width = rect.width, height = rect.height;
                console.log(width);
                console.log(height);
            })
                .exec();
        }
    },
    methods: {
        onRipple: function () { },
        clearRipple: function () { }
    }
});
