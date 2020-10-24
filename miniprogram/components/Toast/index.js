"use strict";
Component({
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        position: {
            type: String,
            value: 'bottom'
        },
        type: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: ''
        },
        bgColor: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 100
        }
    },
    data: {
        _visible: false,
        style: '',
        timer_duration: 0,
        timer_close: 0
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            var _a = _that.data, position = _a.position, duration = _a.duration;
            var position_style = _that.getPositionStyle();
            clearTimeout(_that.data.timer_duration);
            clearTimeout(_that.data.timer_close);
            if (new_val) {
                _that.setData({
                    _visible: true,
                    _duration: 0
                }, function () {
                    _that.setData({ style: position_style[position].show });
                });
                var timer_duration = setTimeout(function () {
                }, duration);
                _that.setData({ timer_duration: timer_duration });
            }
            else {
                _that.setData({ style: position_style[position].hide });
                var timer_close = setTimeout(function () {
                    _that.setData({ _visible: false });
                }, 300);
                _that.setData({ timer_close: timer_close });
            }
        }
    },
    methods: {
        catchtouchmove: function () { },
        getPositionStyle: function () {
            return {
                top: {
                    show: "opacity:1;transform:translateY(0);top:15vh;",
                    hide: "opacity:0;transform:translateY(-120%);top:15vh;"
                },
                bottom: {
                    show: "opacity:1;transform:translateY(0);bottom:15vh;",
                    hide: "opacity:0;transform:translateY(120%);bottom:15vh;"
                }
            };
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
