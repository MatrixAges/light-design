"use strict";
Component({
    options: {
        pureDataPattern: /^(visible|timer_show|timer_close)$/
    },
    properties: {
        list: {
            type: Array,
            value: []
        },
        visible: {
            type: Boolean,
            value: false
        },
        zIndex: {
            type: Number,
            value: 100
        }
    },
    data: {
        _visible: false,
        _list: [],
        maskBackgroundColor: '',
        style: '',
        current: 0,
        indicatorDots: true,
        timer_show: 0,
        timer_close: 0
    },
    observers: {
        visible: function (new_val) {
            var _that = this;
            clearTimeout(_that.data.timer_show);
            clearTimeout(_that.data.timer_close);
            if (new_val) {
                _that.setData({
                    current: 0,
                    _visible: true
                });
                var timer_show = setTimeout(function () {
                    _that.setData({
                        maskBackgroundColor: 'rgba(0,0,0,0.6)',
                        style: 'opacity:1;transform:scale(1);transform-origin:center'
                    });
                }, 30);
                _that.setData({ timer_show: timer_show });
            }
            else {
                _that.setData({
                    maskBackgroundColor: 'transparent',
                    style: 'opacity:0;transform:scale(0);transform-origin:center'
                });
                var timer_close = setTimeout(function () {
                    _that.setData({ _visible: false });
                }, 300);
                _that.setData({ timer_close: timer_close });
            }
        }
    },
    lifetimes: {
        attached: function () {
            var _that = this;
            var list = _that.data.list;
            var target_list = [];
            if (Array.isArray(list) && list.length) {
                list.map(function (item) {
                    if (!item.durations.length)
                        return;
                    var show_time = wx.getStorageSync("has_shown_" + item.title);
                    item.durations.map(function (it) {
                        if (item.daily) {
                            var now = new Date();
                            var now_start = new Date();
                            var now_end = new Date();
                            var start = it.startTime.split(':');
                            var end = it.endTime.split(':');
                            now_start.setHours(start[0]);
                            now_start.setMinutes(start[1]);
                            now_start.setSeconds(start[2]);
                            now_end.setHours(end[0]);
                            now_end.setMinutes(end[1]);
                            now_end.setSeconds(end[2]);
                            if (show_time) {
                                if (show_time > now_start.valueOf() &&
                                    show_time < now_end.valueOf()) {
                                    return;
                                }
                            }
                            if (now.valueOf() > now_start.valueOf() &&
                                now.valueOf() < now_end.valueOf()) {
                                target_list.push(item);
                                if (show_time) {
                                    wx.removeStorageSync("has_shown_" + item.title);
                                }
                            }
                        }
                        else {
                            var now = new Date().valueOf();
                            var start = new Date(it.startTime).valueOf();
                            var end = new Date(it.endTime).valueOf();
                            if (show_time) {
                                if (show_time > start && show_time < end) {
                                    return;
                                }
                            }
                            if (now.valueOf() > start && now.valueOf() < end) {
                                target_list.push(item);
                                if (show_time) {
                                    wx.removeStorageSync("has_shown_" + item.title);
                                }
                            }
                        }
                    });
                });
                if (target_list.length === 0) {
                    _that.setData({ _visible: false });
                    return;
                }
                if (target_list.length === 1) {
                    _that.setData({ indicatorDots: false });
                }
                if (target_list.length > 1) {
                    target_list.sort(function (a, b) { return b.rank - a.rank; });
                }
                _that.setData({ _list: target_list });
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
            var _list = _that.data._list;
            _that.setData({ visible: false });
            _that.triggerEvent('onClose');
            var item = _list[_list.length - 1];
            if (!wx.getStorageSync("has_shown_" + item.title)) {
                wx.setStorageSync("has_shown_" + item.title, new Date().valueOf());
            }
        },
        onChange: function (e) {
            var _that = this;
            var _list = _that.data._list;
            var current = e.detail.current;
            _that.setData({ current: current });
            if (current === 0)
                return;
            var item = _list[current - 1];
            if (!wx.getStorageSync("has_shown_" + item.title)) {
                wx.setStorageSync("has_shown_" + item.title, new Date().valueOf());
            }
        },
        onPrev: function () {
            var _that = this;
            var current = _that.data.current;
            _that.setData({ current: current - 1 });
        },
        onNext: function () {
            var _that = this;
            var _a = _that.data, current = _a.current, _list = _a._list;
            _that.setData({ current: current + 1 });
            _that.triggerEvent('onNext', { current: _list[current] });
        },
        getDateStamp: function (date) {
            return new Date(date).valueOf();
        }
    }
});
