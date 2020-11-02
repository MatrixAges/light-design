"use strict";
var target = '#sticky';
Component({
    options: {
        pureDataPattern: /^_/
    },
    properties: {
        offsetTop: {
            type: Number,
            value: 0
        },
        zIndex: {
            type: Number,
            value: 100
        },
        container: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        }
    },
    data: {
        fixed: false,
        width: 0,
        height: 0,
        _attached: false,
        _relativeTop: 0,
        _containerHeight: 0,
        _container: null,
        _contentObserver: null,
        _containerObserver: null
    },
    lifetimes: {
        attached: function () {
            var _this = this;
            if (this.data.container) {
                this.data._container = function () {
                    return wx.createSelectorQuery().select(_this.data.container);
                };
                this.observerContainer();
            }
            this.data._attached = true;
            this.initObserver();
        },
        detached: function () {
            this.data._attached = false;
            this.disconnectObserver();
        }
    },
    methods: {
        getRect: function () {
            var _that = this;
            return new Promise(function (resolve) {
                _that
                    .createSelectorQuery()
                    .select(target)
                    .boundingClientRect(resolve)
                    .exec();
            });
        },
        getContainerRect: function () {
            var _that = this;
            var ref = _that.data._container && _that.data._container();
            return new Promise(function (resolve) { return ref && ref.boundingClientRect(resolve).exec(); });
        },
        initObserver: function () {
            var _that = this;
            _that.disconnectObserver();
            _that
                .getRect()
                .then(function (_a) {
                var width = _a.width, height = _a.height;
                _that.setData({ width: width, height: height });
                _that.observerContent();
                _that.observerContainer();
            })
                .catch(function (err) {
                console.log(err);
            });
        },
        observerContent: function () {
            var _that = this;
            var offsetTop = _that.data.offsetTop;
            _that.disconnectObserver('_contentObserver');
            var _contentObserver = _that.createIntersectionObserver({
                thresholds: [1],
                initialRatio: 1
            });
            _contentObserver.relativeToViewport({ top: -offsetTop });
            _contentObserver.observe(target, function (res) {
                return _that.setFixed(res.boundingClientRect.top);
            });
            _that.data._contentObserver = _contentObserver;
        },
        observerContainer: function () {
            var _that = this;
            var _a = _that.data, container = _a.container, height = _a.height, offsetTop = _a.offsetTop;
            if (!container)
                return;
            _that.disconnectObserver('_containerObserver');
            _that.getContainerRect().then(function (rect) {
                _that.getRect(target).then(function (contentRect) {
                    var _contentTop = contentRect.top;
                    var _containerTop = rect.top;
                    var _containerHeight = rect.height;
                    var _relativeTop = _contentTop - _containerTop;
                    var _containerObserver = _that.createIntersectionObserver({
                        thresholds: [1],
                        initialRatio: 1
                    });
                    _containerObserver.relativeToViewport({
                        top: _containerHeight - height - offsetTop - _relativeTop
                    });
                    _containerObserver.observe(target, function (res) {
                        _that.setFixed(res.boundingClientRect.top);
                    });
                    _that.data._relativeTop = _relativeTop;
                    _that.data._containerHeight = _containerHeight;
                    _that.data._containerObserver = _containerObserver;
                });
            });
        },
        setFixed: function (top) {
            var _that = this;
            var _a = _that.data, height = _a.height, offsetTop = _a.offsetTop, _relativeTop = _a._relativeTop, _containerHeight = _a._containerHeight;
            var getFixed = function () {
                if (height && _containerHeight) {
                    var calc_top = height + offsetTop + _relativeTop - _containerHeight;
                    var case_a = top < offsetTop;
                    var case_b = top >= calc_top;
                    return case_a && case_b;
                }
                else {
                    return top < offsetTop;
                }
            };
            var fixed = getFixed();
            _that.setData({ fixed: fixed });
            _that.triggerEvent('scroll', { scrollTop: top, isFixed: fixed });
        },
        disconnectObserver: function (observerName) {
            var _that = this;
            if (observerName) {
                var observer = _that.data[observerName];
                observer && observer.disconnect();
            }
            else {
                _that.data._contentObserver && _that.data._contentObserver.disconnect();
                _that.data._containerObserver && _that.data._containerObserver.disconnect();
            }
        }
    }
});
