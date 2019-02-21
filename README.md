# Franko UI
[![Build Status](https://www.travis-ci.org/FanKaiqiang/Franko-ui.svg?branch=master)](https://www.travis-ci.org/FanKaiqiang/Franko-ui)

## 介绍
**Franko UI** 是一个基于 **Vue 2** 实现的 UI 框架，使用这套框架可以帮助工程师快速搭建页面，提升产品设计效率。

此框架包括许多开发页面时常用的组件，包括按钮、输入框、布局、布局容器、弹窗、标签页、弹出框、折叠面板等，用户可以各取所需。

这个框架是我学习 Vue 的一个练手作品。虽然这个 UI 框架的组件不多，功能上也比较简单，但是每个组件都使用了 Travis CI 进行持续集成、Karma + Mocha 做单元测试，保证了所有组件都是确实可用的。在样式及功能上仿照了 Element UI、Ant Design 等常见 UI 组件库。用到的技术包括：

* Vue、SCSS、parcel、ES6、Travis CI、Karma、Mocha

## 开始使用
您可以使用 npm 或 yarn 的方式安装，它们能更好地和 webpack 打包工具配合使用。
``` bash
npm install franko-ui
```
或
``` bash
yarn add franko-ui
```

只需简单两步，您就可以在页面中使用 Franko UI 提供的组件了。

本框架是基于 Vue 的，因此您需要在 Vue 项目中使用它。假设您需要使用到 Button 组件，您可以在 `app.js` 中写入以下内容，引入需要的组件。需要指出的是，您需要引入 import 'franko-ui/dist/index.css'，组件才会显示正常样式。
``` js
import {Button} from 'franko-ui'
import 'franko-ui/dist/index.css'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```
然后在页面中引入 `app.js`，您就可以在 `#app` 中使用 Button 组件了：

# 版本记录
* 1.0.1：正式版本 - 2019-2-21 15:28:08
* 1.0.0：测试版本 - 2019-2-21 14:30:13
## 文档
开发文档：[http://franko.top/Franko-ui](http://franko.top/Franko-ui)。

## 提问
* 为什么按照上面的方法直接在页面中引入没用？

    本框架是基于 Vue 的，因此您需要在 Vue 项目中使用它。

* 为什么组件引入到页面中却没有样式？

    您需要引入 `franko-ui/dist/index.css`

## 变更记录
* 正式提交：2019-2-21 15:45:53

## 联系方式
樊凯强 南昌大学 2019本科应届毕业生 正在寻求一份前端开发的工作

邮箱：1574989439@qq.com、fankaiqiang001@gmail.com

博客：[http://franko.top/](http://franko.top/)

## 贡献代码
[樊凯强](https://github.com/FanKaiqiang) 贡献了代码