---
title: Collapse - 折叠面板
---
# Collapse 折叠面板
Collapse 组件用于创建可以收纳内容区域的折叠面板。使用 Collapse 组件前首先要往页面引入 Collapse 组件与 CollapseItem 组件，具体方法参见[快速上手](../get-started/)。本篇教程中将 Collapse 与 CollapseItem 组件分别命名为` f-collapse` 与 `f-collapse-item`。

### 基础用法
Collapse 组件的默认效果即可同时展开多个面板，且面板之间不影响。其中 CollapseItem 组件的 `title` 属性与 `name` 属性分别用于设置面板标题与面板名。Collapse 组件的 `selected` 属性用于设定默认展开哪些面板，接受一个数组，用于存放展开面板的 `name` 属性值。因为 `selected` 属性值只支持数组，因此需要用到 Vue 的绑定语法设置此属性。

<ClientOnly><collapse-demo1></collapse-demo1></ClientOnly>

``` html
  <div class="box">
    <g-collapse :selected="['one','two','three']">
      <g-collapse-item title="标题1" name="one">内容文字1</g-collapse-item>
      <g-collapse-item title="标题2" name="two">内容文字2</g-collapse-item>
      <g-collapse-item title="标题3" name="three">内容文字3</g-collapse-item>
    </g-collapse>
  </div>
```
### 手风琴效果
Collapse 组件的 `single` 属性用于设定面板是否每次只能展开一个面板，接受布尔值，默认为 false。

<ClientOnly><collapse-demo2></collapse-demo2></ClientOnly>

``` html
  <div class="box">
    <g-collapse :selected="['two']" single>
      <g-collapse-item title="标题1" name="one">内容文字1</g-collapse-item>
      <g-collapse-item title="标题2" name="two">内容文字2</g-collapse-item>
      <g-collapse-item title="标题3" name="three">内容文字3</g-collapse-item>
    </g-collapse>
  </div>
```