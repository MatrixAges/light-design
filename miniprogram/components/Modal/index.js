"use strict";
Component({
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
        style: ''
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            var _a = _that.data, position = _a.position, duration = _a.duration, maskVisible = _a.maskVisible;
            var position_style = _that.getPositionStyle();
            if (new_val) {
                _that.setData({ _visible: true });
                setTimeout(function () {
                    _that.setData({
                        maskBackgroundColor: maskVisible
                            ? 'rgba(0,0,0,0.6)'
                            : 'transparent',
                        style: position_style[position].show
                    });
                }, 30);
            }
            else {
                _that.setData({
                    maskBackgroundColor: 'transparent',
                    style: position_style[position].hide
                });
                setTimeout(function () {
                    _that.setData({ _visible: false });
                }, duration);
            }
        }
    },
    methods: {
        catchtouchmove: function () { },
        getPositionStyle: function () {
            return {
                center: {
                    show: 'opacity:1;transform:scale(1);transform-origin:center',
                    hide: 'opacity:0;transform:scale(0);transform-origin:center'
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
