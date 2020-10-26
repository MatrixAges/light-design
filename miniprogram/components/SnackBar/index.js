"use strict";
Component({
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        type: {
            type: String,
            value: ''
        },
        position: {
            type: String,
            value: 'bottom'
        },
        top: {
            type: Number,
            value: 0
        },
        bottom: {
            type: Number,
            value: 0
        },
        cover: {
            type: Boolean,
            value: false
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
        description: {
            type: String,
            value: ''
        },
        okText: {
            type: String,
            value: 'OK'
        },
        autoClose: {
            type: Boolean,
            value: false
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 100
        },
        mini: {
            type: Boolean,
            value: false
        },
        custom: {
            type: Boolean,
            value: false
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
            var _a = _that.data, position = _a.position, autoClose = _a.autoClose, duration = _a.duration;
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
                if (autoClose) {
                    var timer_duration = setTimeout(function () {
                        _that.setData({ visible: false });
                    }, duration + 30);
                    _that.setData({ timer_duration: timer_duration });
                }
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
            var _that = this;
            var _a = _that.data, top = _a.top, bottom = _a.bottom;
            return {
                top: {
                    show: "opacity:1;transform:translateY(0);top:" + top + "rpx;",
                    hide: "opacity:0;transform:translateY(-120%);top:" + top + "rpx;"
                },
                bottom: {
                    show: "opacity:1;transform:translateY(0);bottom:" + bottom + "rpx;",
                    hide: "opacity:0;transform:translateY(120%);bottom:" + bottom + "rpx;"
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
        },
        onOk: function () {
            var _that = this;
            _that.setData({ visible: false });
            _that.triggerEvent('onOk');
        }
    }
});
