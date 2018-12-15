# 付坤奇的UI组件
[![Build Status](https://www.travis-ci.org/FanKaiqiang/Franko-ui.svg?branch=master)](https://www.travis-ci.org/FanKaiqiang/Franko-ui)

## 介绍
这是我在学习 Vue 的过程中制作的一个 UI 框架，希望对你有用。

## 开始使用
1. 添加CSS样式
    安装本框架前，请在CSS中开启border-box：
    ``` css
    *,*::before,*::after{
        box-sizing: border-box;
    }
    ```
    IE 8 及以上浏览器都支持此样式.

    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）：
    ``` CSS
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #dadada;
    }
    ```
    IE 15 及以上浏览器都支持此样式.

2. 安装 franko-ui
``` 
npm i --save franko-ui
```

3. 引入 franko-ui
``` javascript
import {
    Button,
    ButtonGroup,
    Icon
} from 'franko-ui'
import 'franko-ui/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-button-group': ButtonGroup,
        'g-icon': Icon
    }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
