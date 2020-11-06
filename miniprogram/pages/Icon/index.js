"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../components/Icon/rest/data");
var normal_icons = [];
var more_icons = [];
for (var i in data_1.default) {
    if (!i)
        break;
    if (!data_1.default[i].filled) {
        normal_icons.push(i);
    }
    else {
        more_icons.push(i);
    }
}
Page({
    data: {
        filled: false,
        normal_icons: normal_icons,
        more_icons: more_icons
    },
    onChangeType: function () {
        this.setData({ filled: !this.data.filled });
    }
});
