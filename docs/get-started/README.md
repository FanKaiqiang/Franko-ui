---
title: 快速上手
---

# 快速上手
只需简单两步，您就可以在页面中使用 Franko UI 提供的组件了。

本框架是基于 Vue 的，因此您需要引入 Vue。假设您需要使用到 Button 组件，您可以在 `app.js` 中写入以下内容，引入需要的组件：
```javascript
import {Button} from 'franko-ui'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```
然后在页面中引入 `app.js`，就可以使用 Button 组件了：
``` html
<body>
  <div id="app">
    <g-button>Hello World</g-button>
  </div>
  <script src="./src/app.js"></script>
</body>
```