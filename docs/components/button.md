---
title: Button - 按钮
---
# Button 按钮
使用 Button 组件前首先要往页面引入 Button 组件，具体方法参见[快速上手](../get-started/)。本篇教程中将 Button 组件统一命名为` f-button`。

Button 组件的默认样式为常用的操作按钮。除了传统的按钮样式之外，我们还提供下二外的功能：

### 按钮图标
您可以设置 Button 组件的 `icon` 属性，在按键添加对应的图标。在这里我们为您提供了九种图标：

<ClientOnly><button-demo1></button-demo1></ClientOnly>

``` html
  <div class="box">
    <f-button>默认按钮</f-button>
    <f-button icon="setting">设置</f-button>
    <f-button icon="praise">点赞</f-button>
    <f-button icon="download">下载</f-button>
    <f-button icon="left">向左</f-button>
    <f-button icon="right">向右</f-button>
    <f-button icon="down">向下</f-button>
    <f-button icon="download">下载</f-button>
    <f-button icon="error">错误</f-button>
  <div>
```

### 图标方向
Button 组件的 `icon-position` 属性用于控制图标在按键中的位置，有 `left`、`right` 两个可选值，默认为 `left`：

<ClientOnly><button-demo2></button-demo2></ClientOnly>

``` html
  <div class="box">
    <f-button icon="setting" icon-position="left">左边</f-button>
    <f-button icon="setting" icon-position="right">右边</f-button>
  </div>
```

### 加载动画
通过给 Button 设置 `loading` 属性可以给按钮添加加载动画，有 `true`、`false` 两个可选值，默认为 `false`。您可以用下面的「点击加载」的方法给按钮绑定点击事件，从而实现点击按钮切换 `loading` 属性的值：

<ClientOnly><button-demo3></button-demo3></ClientOnly>

``` html
<div id="app">
  <f-button loading="true" >左边</f-button>
  <f-button loading="true" icon-position="right">右边</f-button>
  <f-button :loading="loading" @click="loading = !loading">点击加载</f-button>
</div>
<script>
import {Button} from 'franko-ui'
import Vue from 'vue'
new Vue( {
  el: '#app',
  components: {
    "f-button": Button
  },
  data(){
    return{
      loading:false
    }
  }
};
</script>
```

### 按钮组
有时我们需要将多个按钮合并成一个组合按钮，这是就需要引入 ButtonGroup 组件，此处将 ButtonGroup 组件命名为` f-button-group`。。被 ButtonGroup 组件包含的 Button 组件会合并为一个按键：

<ClientOnly><button-demo4></button-demo4></ClientOnly>

``` html
<div class="box">
  <f-button-group>
    <f-button icon="left">左边</f-button>
    <f-button icon="right" icon-position="right">右边</f-button>
  </f-button-group>
  <f-button-group>
    <f-button icon="left">上一页</f-button>
    <f-button>更多</f-button>
    <f-button icon="right" icon-position="right">下一页</f-button>
  </f-button-group>
</div>

```