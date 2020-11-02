"use strict";
Component({
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        size: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onShow: function () {
            var _that = this;
            _that.setData({ visible: true });
            _that.triggerEvent('onShow');
        },
        onClose: function () {
            var _that = this;
            _that.setData({ visible: false });
            _that.triggerEvent('onClose');
        }
    }
});
