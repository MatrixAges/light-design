"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base64_1 = require("./base64");
var data_1 = require("./data");
var _data = data_1.default;
Component({
    options: {},
    properties: {
        type: {
            type: String,
            value: 'outline'
        },
        icon: {
            type: String,
            value: ''
        },
        size: {
            type: Number,
            value: 20
        },
        color: {
            type: String,
            value: '#000000'
        }
    },
    observers: {
        type: function (v) {
            this.getSrc(_data[this.data.icon][v]);
        },
        icon: function (v) {
            this.getSrc(_data[v][this.data.type]);
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
            console.log(base64_1.default.encode(svg));
            this.setData({ src: 'data:image/svg+xml;base64,' + base64_1.default.encode(svg) });
        }
    }
});
