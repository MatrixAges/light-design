"use strict";
Page({
    data: {
        visible_bottom: false
    },
    onOption: function (e) {
        var _a;
        var _that = this;
        var type = e.mark.type;
        if (!type)
            return;
        _that.setData((_a = {},
            _a["visible_" + type] = true,
            _a));
    }
});
