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
        iconPath: String,
        disabled: Boolean,
        loading: Boolean
    }
});
