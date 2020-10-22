"use strict";
Page({
    data: {
        visible_default: false
    },
    onOption: function (_a) {
        var _b;
        var type = _a.mark.type;
        var _that = this;
        if (!type)
            return;
        _that.setData((_b = {},
            _b["visible_" + type] = true,
            _b));
    },
    hide: function (_a) {
        var _b;
        var type = _a.mark.type;
        var _that = this;
        if (!type)
            return;
        _that.setData((_b = {},
            _b["visible_" + type] = false,
            _b));
    }
});
