---
title: Toast - 弹窗
---
# Toast 弹窗

### 引入方法
Toast 组件可以实现点击后弹窗的效果。因为是在点击后才显示在页面中的组件，因此使用方法与其他直接插入页面中的组件不同，您需要引入并使用 `plugin`，而不是直接引入 Toast 组件。具体方法如下：

``` html
<div id="#app">
  <button @click="showToast">顶部</button>
</div>
<script>
import Vue from 'vue'
import {plugin} from 'franko-ui'

Vue.use(plugin)

new Vue({
  el:"#app",
  methods: {
    showToast() {
      this.$toast('弹窗信息', { 
        closeButton: {
          text: '关闭'
        },
        autoClose: 5,
        enableHTML: false,
        position: "middle"
      })
    }
  }
};
</script>
```
插件 `plugin` 用于把能够将 Toast 组件的方法挂载到 Vue 的原型上，这个方法就是 `$toast`。`$toast` 接收两个参数，第一个参数 `text` 接收一个字符串，作为弹窗显示的信息内容；第二个参数 `option` 接受一个对象，对象具有的属性具体情况如下：
| 参数          | 说明                        | 类型      | 可选值                     | 默认值   |
|-------------|---------------------------|---------|-------------------------|-------|
| autoClose   | 弹窗自动关闭的秒数，为 0 即不会自动关闭| number  |              | 0     |
| enableHTML  | 是否需要将 text 的内容视为为 html 格式 | boolean |             | FALSE |
| position    | 弹窗显示位置 | string  | "top"、"middle"、"bottom" |       |
| closeButton | 弹窗关闭相关配置。具有 `text` 与 `callback` 两个属性，`text` 用于设置区域显示的文字内容字符串，`callback` 为窗口关闭执行的回调函数。    | object  | | {text:"关闭"}|

### 使用示例
下面是一个使用示例，点击不同的按钮，可以看到显示效果不同的弹窗。

<ClientOnly><toast-demo1></toast-demo1></ClientOnly>

``` html
<template>
  <div>
    <f-button @click="showToast1">顶部浮层</f-button>
    <f-button @click="showToast2">中部浮层</f-button>
    <f-button @click="showToast3">底部浮层</f-button>
  </div>
</template>
<script>
import Vue from 'vue'
import Button from "../../../src/button";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: {
    "f-button": Button
  },
  methods: {
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast("<p>我是 message</p>", {
        closeButton: {
          text: "关掉我",
          callback() {
            console.log("关掉我了");
          }
        },
        autoClose: 5,
        enableHTML: true,
        position
      });
    }
  }
};
</script>
```