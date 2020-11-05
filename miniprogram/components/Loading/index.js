"use strict";
Component({
    options: {
        pureDataPattern: /^visible|delay|timeout|timer_show|timer_hide$/
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
        },
        timeout: {
            type: Number,
            value: 0
        }
    },
    data: {
        _visible: false,
        timer_show: 0,
        timer_hide: 0
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            var _a = _that.data, delay = _a.delay, timeout = _a.timeout, timer_show = _a.timer_show, timer_hide = _a.timer_hide;
            clearTimeout(timer_show);
            clearTimeout(timer_hide);
            if (new_val) {
                var timer_show_1 = setTimeout(function () {
                    _that.setData({ _visible: true });
                }, delay);
                _that.setData({ timer_show: timer_show_1 });
            }
            else {
                var timer_hide_1 = setTimeout(function () {
                    _that.setData({ _visible: false });
                }, timeout);
                _that.setData({ timer_hide: timer_hide_1 });
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
