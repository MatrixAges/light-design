"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var base64_1 = require("./rest/base64");
var data_1 = require("./rest/data");
var data = data_1.default;
Component({
    properties: {
        type: {
            type: String,
            value: 'outline'
        },
        icon: {
            type: String,
            value: ''
        },
        svg: {
            type: String,
            value: ''
        },
        visibleWrap: {
            type: Boolean,
            value: false
        },
        bordered: {
            type: Boolean,
            value: false
        },
        filled: {
            type: Boolean,
            value: false
        },
        round: {
            type: Boolean,
            value: false
        },
        borderColor: {
            type: String,
            value: 'whitesmoke'
        },
        fillColor: {
            type: String,
            value: 'whitesmoke'
        },
        size: {
            type: Number,
            value: 20
        },
        color: {
            type: String,
            value: '#000000'
        },
        extend: {
            type: Object,
            value: {}
        }
    },
    observers: {
        type: function (v) {
            this.getSrc(data[this.data.icon][v]);
        },
        icon: function (v) {
            this.getSrc(data[v][this.data.type]);
        },
        svg: function (v) {
            this.getSrc(v);
        },
        extend: function (v) {
            data = __assign(__assign({}, v), data_1.default);
        }
    },
    data: {
        src: '',
        height: 20,
        width: 20
    },
    methods: {
        getSrc: function (svg) {
            if (!svg)
                return;
            this.setData({ src: 'data:image/svg+xml;base64,' + base64_1.default.encode(svg) });
        }
    }
});
