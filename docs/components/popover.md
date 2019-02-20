---
title: Popover - 弹出框
---
# Popover 弹出框
Popover 组件用于展示提示信息。使用 Popover 组件前首先要往页面引入 Button 组件，具体方法参见[快速上手](../get-started/)。本篇教程中将 Popover 组件统一命名为` f-popover`。

### 基础用法
`trigger` 属性用于设置何时触发 Popover 组件，支持两种触发方式：click、hover。使用 `slot="reference"` 的具名插槽设定弹出框显示的内容。

<ClientOnly><popover-demo1></popover-demo1></ClientOnly>

``` html
  <div class="box">
    <f-popover trigger="click">
      <template slot="content">
        <div>click 触发</div>
      </template>
      <f-button>click 触发</f-button>
    </f-popover>
    <f-popover trigger="hover">
      <template slot="content">
        <div>hover 触发</div>
      </template>
      <f-button>hover 触发</f-button>
    </f-popover>
  </div>
```

### 展示方向
Popover 组件的 `position` 属性用于设置弹出框展示的方向，有四个可选方向：top、left、right、bottom，默认为 top。

<ClientOnly><popover-demo2></popover-demo2></ClientOnly>

``` html
  <div class="box">
    <f-popover position="left">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <f-button>左边</f-button>
    </f-popover>
    <f-popover>
      <template slot="content">
        <div>popover内容</div>
      </template>
      <f-button>上面</f-button>
    </f-popover>
    <f-popover position="bottom">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <f-button>下面</f-button>
    </f-popover>
    <f-popover position="right">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <f-button>右边</f-button>
    </f-popover>
  </div>
```