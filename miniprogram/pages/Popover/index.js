"use strict";
Page({
    data: {
        visible_default: false,
        list: [
            {
                name: '发起群聊',
                icon: '/image/icon_chat.svg'
            },
            {
                name: '添加朋友',
                icon: '/image/icon_add_person.svg'
            },
            {
                name: '扫一扫',
                icon: '/image/icon_scan.svg'
            },
            {
                name: '收付款',
                icon: '/image/icon_pay.svg'
            },
            {
                name: '帮助与反馈',
                icon: '/image/icon_feedback.svg'
            }
        ],
        list_black: [
            {
                name: '发起群聊',
                icon: '/image/icon_chat_black.svg'
            },
            {
                name: '添加朋友',
                icon: '/image/icon_add_person_black.svg'
            },
            {
                name: '扫一扫',
                icon: '/image/icon_scan_black.svg'
            },
            {
                name: '收付款',
                icon: '/image/icon_pay_black.svg'
            },
            {
                name: '帮助与反馈',
                icon: '/image/icon_feedback_black.svg'
            }
        ],
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
