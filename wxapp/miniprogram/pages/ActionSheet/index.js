"use strict";
Page({
    data: {
        visible_default: false,
        list: [
            {
                name: '朋友圈',
                icon: '/images/logo_pengyouquan.svg'
            },
            {
                name: '微信好友',
                icon: '/images/logo_wechat.svg'
            },
            {
                name: 'QQ空间',
                icon: '/images/logo_qzone.svg'
            },
            {
                name: 'QQ好友',
                icon: '/images/logo_qq.svg'
            },
            {
                name: '微博',
                icon: '/images/logo_weibo.svg'
            },
            {
                name: '钉钉',
                icon: '/images/logo_dingding.svg'
            },
            {
                name: '知乎',
                icon: '/images/logo_zhihu.svg'
            },
            {
                name: '易信',
                icon: '/images/logo_yixin.svg'
            },
            {
                name: 'instagram',
                icon: '/images/logo_instagram.svg'
            }
        ]
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
    },
    onAction: function (e) {
        console.log(e);
    }
});
