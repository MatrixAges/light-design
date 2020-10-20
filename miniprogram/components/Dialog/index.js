"use strict";
Component({
    properties: {
        custom: {
            type: Boolean,
            value: false
        },
        visible: {
            type: Boolean,
            value: false
        },
        footerVisible: {
            type: Boolean,
            value: true
        },
        closeVisible: {
            type: Boolean,
            value: false
        },
        bottom: {
            type: Boolean,
            value: false
        },
        zIndex: {
            type: Number,
            value: 100
        },
        title: {
            type: String,
            value: '提示'
        },
        okText: {
            type: String,
            value: '确定'
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        cancelVisible: {
            type: Boolean,
            value: true
        },
        maskVisible: {
            type: Boolean,
            value: true
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        bodyStyle: {
            type: String,
            value: ''
        }
    },
    data: {
        _visible: false,
        maskBackgroundColor: 'rgba(0,0,0,0)',
        style: ''
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            var _a = _that.data, bottom = _a.bottom, maskVisible = _a.maskVisible;
            var style_visible = bottom
                ? 'transform:translateY(0)'
                : 'opacity:1;transform:scale(1);';
            var style_unvisible = bottom
                ? 'transform:translateY(120%)'
                : 'opacity:0;transform:scale(0);';
            if (new_val) {
                _that.setData({ _visible: true });
                setTimeout(function () {
                    _that.setData({
                        maskBackgroundColor: maskVisible
                            ? 'rgba(0,0,0,0.6)'
                            : 'transparent',
                        style: style_visible
                    });
                }, 30);
            }
            else {
                _that.setData({
                    maskBackgroundColor: 'rgba(0,0,0,0)',
                    style: style_unvisible
                });
                setTimeout(function () {
                    _that.setData({ _visible: false });
                }, 300);
            }
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
        },
        onOk: function () {
            var _that = this;
            _that.setData({ visible: false });
            _that.triggerEvent('onOk');
        }
    }
});