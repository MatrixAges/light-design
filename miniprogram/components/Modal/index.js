"use strict";
Component({
    options: {
        pureDataPattern: /^visible|timer_show|timer_close$/
    },
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        position: {
            type: String,
            value: 'center'
        },
        zIndex: {
            type: Number,
            value: 100
        },
        duration: {
            type: Number,
            value: 300
        },
        maskVisible: {
            type: Boolean,
            value: true
        },
        maskClosable: {
            type: Boolean,
            value: true
        }
    },
    data: {
        _visible: false,
        maskBackgroundColor: '',
        style: '',
        timer_show: 0,
        timer_close: 0
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            var _a = _that.data, position = _a.position, duration = _a.duration, maskVisible = _a.maskVisible;
            var position_style = _that.getPositionStyle();
            clearTimeout(_that.data.timer_show);
            clearTimeout(_that.data.timer_close);
            if (new_val) {
                _that.setData({ _visible: true });
                var timer_show = setTimeout(function () {
                    _that.setData({
                        maskBackgroundColor: maskVisible
                            ? 'rgba(0,0,0,0.6)'
                            : 'transparent',
                        style: position_style[position].show
                    });
                }, 30);
                _that.setData({ timer_show: timer_show });
            }
            else {
                _that.setData({
                    maskBackgroundColor: 'transparent',
                    style: position_style[position].hide
                });
                var timer_close = setTimeout(function () {
                    _that.setData({ _visible: false });
                }, duration);
                _that.setData({ timer_close: timer_close });
            }
        }
    },
    methods: {
        catchtouchmove: function () { },
        getPositionStyle: function () {
            return {
                center: {
                    show: 'opacity:1;transform:scale(1);transform-origin:center',
                    hide: 'opacity:0;transform:scale(0.8);transform-origin:center'
                },
                top: {
                    show: 'transform:translateY(0);',
                    hide: 'transform:translateY(-120%);'
                },
                bottom: {
                    show: 'transform:translateY(0);',
                    hide: 'transform:translateY(120%);'
                },
                left: {
                    show: 'transform:translateX(0);',
                    hide: 'transform:translateX(-120%);'
                },
                right: {
                    show: 'transform:translateX(0);',
                    hide: 'transform:translateX(120%);'
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
