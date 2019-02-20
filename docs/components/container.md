---
title: Container - 布局容器
---
# Container 布局容器
Container 布局容器用于布局的容器组件，方便快速搭建页面的基本结构。在使用 Container 布局容器前首先要往页面引入以下组件，具体方法参考[快速上手](../get-started/)：

* Layout 组件：外层容器。
* Header 组件：顶栏容器。
* Sider：侧边栏容器。
* Content：主要区域容器。
* Footer：底栏容器。

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，Layout 组件 的子元素只能是后四者，后四者的父元素也只能是 Layout 组件。Layout 组件允许嵌套，借助这个特性可以使得布局方式更加灵活。

需要提到的是，这里的 Layout 组件与上一节提到的 Layout 布局是不同的两个概念。本篇教程中统一将 这几种组件分别命名为 `g-layout`、`g-header`、`g-sider`、`g-content`、`g-footer`。

### 常见页面布局
上下布局

<ClientOnly><container-demo1></container-demo1></ClientOnly>

``` html
  <div class="box">
    <g-layout>
      <g-header>Header</g-header>
      <g-content>Content</g-content>
    </g-layout>
  </div>
```
上中下布局

<ClientOnly><container-demo2></container-demo2></ClientOnly>

``` html
  <div class="box">
    <g-layout>
      <g-header>Header</g-header>
      <g-content>Content</g-content>
      <g-footer>Footer</g-footer>
    </g-layout>
  </div>
```
左右布局

<ClientOnly><container-demo3></container-demo3></ClientOnly>

``` html
  <div class="box">
    <g-layout>
      <g-sider>Sider</g-sider>
      <g-content>Content</g-content>
    </g-layout>
  </div>
```
上左右布局

<ClientOnly><container-demo4></container-demo4></ClientOnly>

``` html
  <div class="box">
    <g-layout>
      <g-header>Header</g-header>
      <g-layout>
        <g-sider>Sider</g-sider>
        <g-content>Content</g-content>
      </g-layout>
    </g-layout>
  </div>
```
上左中下布局

<ClientOnly><container-demo5></container-demo5></ClientOnly>

``` html
  <div class="box">
    <g-layout>
      <g-header>Header</g-header>
      <g-layout>
        <g-sider>Sider</g-sider>
        <g-layout>
          <g-content>Content</g-content>
          <g-footer>Footer</g-footer>
        </g-layout>
      </g-layout>
    </g-layout>
  </div>
```
左上中布局

<ClientOnly><container-demo6></container-demo6></ClientOnly>

``` html
  <div class="box">
    <g-layout>
        <g-sider>Sider</g-sider>
        <g-layout>
          <g-header>Header</g-header>
          <g-content>Content</g-content>
        </g-layout>
    </g-layout>
  </div>
```
左上中下布局

<ClientOnly><container-demo7></container-demo7></ClientOnly>

``` html
  <div class="box">
    <g-layout>
        <g-sider>Sider</g-sider>
        <g-layout>
          <g-header>Header</g-header>
          <g-content>Content</g-content>
          <g-footer>Footer</g-footer>
        </g-layout>
    </g-layout>
  </div>
```