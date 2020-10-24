"use strict";
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        shape: {
            type: String,
            value: 'normal'
        },
        mode: {
            type: String,
            value: 'fixed'
        },
        width: {
            type: String,
            value: ''
        },
        height: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: ''
        },
        bgColor: {
            type: String,
            value: ''
        },
        ghost: Boolean,
        iconPath: String,
        disabled: Boolean,
        loading: Boolean
    }
});
