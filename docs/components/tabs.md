---
title: Tabs - 标签页
---
# Tabs 标签页
Tabs 组件被用于分隔内容上有关联但属于不同类别的数据集合。在使用 Tabs 组件前首先要往页面引入以下组件，具体方法参考[快速上手](../get-started/)：

* Tabs 组件：整个标签页的外层容器。
* TabsHead 组件：标签页的顶栏容器。
* TabsItem 组件：标签页的选项卡。
* TabsBody 组件：标签栏的主要区域容器。
* TabsPane 组件：标签页的信息。

其中，Tabs 组件为整个标签页的根元素，TabsHead 组件为所有 TabsItem 组件的父组件，TabsBody 组件为所有 TabsPane 组件的父组件。本篇教程中统一将这几种组件分别命名为 `f-tabs`、`f-tabs-head`、`f-tabs-item`、`f-tabs-body`、`f-tabs-pane`。

### 基础用法
使用 Tabs 组件可以方便地构建一个基础的、简洁的标签页。Tabs 组件的 `selected` 属性用于设定初始状态下选中的选项卡，与TabsItem 组件与 TabsPane 的 `name` 属性对应。同一个选项卡的 TabsItem 组件与 TabsPane 的 `name` 属性必须相等，组件才能正常显示。`selected` 属性与 `name` 属性都是必须设定的。

<ClientOnly><tabs-demo1></tabs-demo1></ClientOnly>

``` html
  <div class="box">
    <f-tabs selected="two">
      <f-tabs-head>
        <f-tabs-item name="one">第一</f-tabs-item>
        <f-tabs-item name="two">第二</f-tabs-item>
        <f-tabs-item name="three">第三</f-tabs-item>
        <f-tabs-item name="four">第四</f-tabs-item>
      </f-tabs-head>
      <f-tabs-body>
        <f-tabs-pane name="one">床前明月光</f-tabs-pane>
        <f-tabs-pane name="two">疑是地上霜</f-tabs-pane>
        <f-tabs-pane name="three">举头望明月</f-tabs-pane>
        <f-tabs-pane name="four">低头思故乡</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
  </div>
```
### 禁用效果
TabsItem 组件的 `disabled` 属性可以设置禁用效果。接受布尔值或字符串，字符串取值为 "true" 或 "false"，默认值为 false。

<ClientOnly><tabs-demo2></tabs-demo2></ClientOnly>

``` html
  <div class="box">
    <f-tabs selected="one">
      <f-tabs-head>
        <f-tabs-item name="one">第一</f-tabs-item>
        <f-tabs-item name="two" disabled="true">第二</f-tabs-item>
        <f-tabs-item name="three">第三</f-tabs-item>
      </f-tabs-head>
      <f-tabs-body>
        <f-tabs-pane name="one">看得见我</f-tabs-pane>
        <f-tabs-pane name="two" >看不见我</f-tabs-pane>
        <f-tabs-pane name="three">看得见我</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
  </div>
```

### 插槽
TabsHead 组件接受一个插槽作为子组件，插槽名为 `actions`。可以使用这个插槽在选项卡栏右侧添加内容。下面是此插槽的使用示例。

<ClientOnly><tabs-demo3></tabs-demo3></ClientOnly>

``` html
  <div class="box">
    <f-tabs selected="two">
      <f-tabs-head>
        <template slot="actions"> <f-button>右边的按钮</f-button></template>
        <f-tabs-item name="one">点我</f-tabs-item>
        <f-tabs-item name="two">点他</f-tabs-item>
      </f-tabs-head>
      <f-tabs-body>
        <f-tabs-pane name="one">看右边的按钮</f-tabs-pane>
        <f-tabs-pane name="two">右边的按钮是通过插槽添加的</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
  </div>
```