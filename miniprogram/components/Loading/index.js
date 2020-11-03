"use strict";
Component({
    options: {
        pureDataPattern: /^visible|delay$/
    },
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: 'refresh'
        },
        size: {
            type: Number,
            value: 1
        },
        text: {
            type: String,
            value: ''
        },
        delay: {
            type: Number,
            value: 0
        }
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            var _a = _that.data, delay = _a.delay, timer_show = _a.timer_show;
            clearTimeout(timer_show);
            if (new_val) {
                var timer_show_1 = setTimeout(function () {
                    _that.setData({ _visible: true });
                }, delay);
                _that.setData({ timer_show: timer_show_1 });
            }
            else {
                _that.setData({ _visible: false });
            }
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
