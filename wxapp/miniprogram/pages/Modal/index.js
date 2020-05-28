"use strict";
Page({
    data: {
        visible: false,
        maskVisible: true
    },
    onOption: function (e) {
        var _a;
        var _that = this;
        var _b = e.mark, maskVisible = _b.maskVisible, position = _b.position;
        if (!position)
            return;
        if (maskVisible !== false) {
            _that.setData((_a = {},
                _a["visible_" + position] = true,
                _a));
        }
        else {
            _that.setData({
                visible_nomask: true
            });
        }
    },
    onClose: function () {
        var _that = this;
        _that.setData({ maskVisible: true });
    }
});
