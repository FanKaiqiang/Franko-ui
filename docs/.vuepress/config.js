const path = require('path')
module.exports = {
  base: '/Franko-ui/',
  title: 'Franko UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '源码', link: 'https://github.com/FanKaiqiang/Franko-ui'},
      {text: '作者', link: 'https://github.com/FanKaiqiang'},
      {text: '博客', link: 'http://franko.top/'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/',
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input' ,
          '/components/layout',
          '/components/container',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse'
        ]
      }
    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
