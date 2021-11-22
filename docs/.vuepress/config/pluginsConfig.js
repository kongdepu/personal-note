const secret = require('./secret');
const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp) => moment(timestamp).format("LLLL")
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容",
            buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': {

    },
    '@vuepress/google-analytics': {
        'ga': secret.ga // UA-00000000-0
    },
    '@vuepress/medium-zoom': {
        selector: 'img.zoom',
    },
    "vuepress-plugin-auto-sidebar":{
        nav: true
    }

}