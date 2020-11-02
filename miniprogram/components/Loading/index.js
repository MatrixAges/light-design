"use strict";
Component({
    options: {
        pureDataPattern: /^visible$/
    },
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        zIndex: {
            type: Number,
            value: 100
        },
        maskVisible: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        catchtouchmove: function () { },
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
