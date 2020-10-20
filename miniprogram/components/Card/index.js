"use strict";
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        title: String,
        width: String,
        color: String,
        bgColor: String,
        bordered: Boolean,
        noPadding: Boolean,
        shadow: Boolean,
        media: Boolean,
        radius: Number
    }
});
