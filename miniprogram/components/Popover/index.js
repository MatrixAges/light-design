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
        position: {
            type: Array,
            value: ['', '', '', '']
        },
        mark: {
            type: Array,
            value: ['-8rpx', '', '', '30rpx']
        },
        transformOrigin: {
            type: String,
            value: 'top right'
        },
        list: {
            type: Array,
            value: []
        },
        bgColor: {
            type: String,
            value: 'black'
        },
        color: {
            type: String,
            value: 'white'
        },
        divideColor: {
            type: String,
            value: 'rgba(255, 255, 255, 0.15)'
        },
        zIndex: {
            type: Number,
            value: 100
        }
    },
    data: {
        _visible_dialog_wrap: false,
        _visible_dialog: false,
        timer_close: 0
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            clearTimeout(_that.data.timer_close);
            if (new_val) {
                _that.setData({ _visible_dialog_wrap: true }, function () {
                    _that.setData({ _visible_dialog: true });
                });
            }
            else {
                _that.setData({ _visible_dialog: false });
                var timer_close = setTimeout(function () {
                    _that.setData({ _visible_dialog_wrap: false });
                }, 300);
                _that.setData({ timer_close: timer_close });
            }
        }
    },
    methods: {
        catchtouchmove: function () { },
        onActionItem: function (e) {
            var _that = this;
            var index = e.mark.index;
            if (index === undefined)
                return;
            _that.setData({ visible: false });
            _that.triggerEvent('onOption', { index: index });
        },
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
