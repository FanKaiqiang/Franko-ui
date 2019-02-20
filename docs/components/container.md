---
title: Container - 布局容器
---
# Container 布局容器
Container 布局容器用于布局的容器组件，方便快速搭建页面的基本结构。在使用 Container 布局容器前首先要往页面引入以下组件，具体方法参考[快速上手](../get-started/)：

* Layout 组件：外层容器。
* Header 组件：顶栏容器。
* Sider 组件：侧边栏容器。
* Content 组件：主要区域容器。
* Footer 组件：底栏容器。

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，Layout 组件的子元素只能是其余四者，其余四者的父元素也只能是 Layout 组件。Layout 组件允许嵌套，借助这个特性可以使得布局方式更加灵活。

需要提到的是，这里的 Layout 组件与上一节提到的 Layout 布局是不同的两个概念。本篇教程中统一将 这几种组件分别命名为 `f-layout`、`f-header`、`f-sider`、`f-content`、`f-footer`。

### 常见页面布局
上下布局

<ClientOnly><container-demo1></container-demo1></ClientOnly>

``` html
  <div class="box">
    <f-layout>
      <f-header>Header</f-header>
      <f-content>Content</f-content>
    </f-layout>
  </div>
```
上中下布局

<ClientOnly><container-demo2></container-demo2></ClientOnly>

``` html
  <div class="box">
    <f-layout>
      <f-header>Header</f-header>
      <f-content>Content</f-content>
      <f-footer>Footer</f-footer>
    </f-layout>
  </div>
```
左右布局

<ClientOnly><container-demo3></container-demo3></ClientOnly>

``` html
  <div class="box">
    <f-layout>
      <f-sider>Sider</f-sider>
      <f-content>Content</f-content>
    </f-layout>
  </div>
```
上左右布局

<ClientOnly><container-demo4></container-demo4></ClientOnly>

``` html
  <div class="box">
    <f-layout>
      <f-header>Header</f-header>
      <f-layout>
        <f-sider>Sider</f-sider>
        <f-content>Content</f-content>
      </f-layout>
    </f-layout>
  </div>
```
上左中下布局

<ClientOnly><container-demo5></container-demo5></ClientOnly>

``` html
  <div class="box">
    <f-layout>
      <f-header>Header</f-header>
      <f-layout>
        <f-sider>Sider</f-sider>
        <f-layout>
          <f-content>Content</f-content>
          <f-footer>Footer</f-footer>
        </f-layout>
      </f-layout>
    </f-layout>
  </div>
```
左上中布局

<ClientOnly><container-demo6></container-demo6></ClientOnly>

``` html
  <div class="box">
    <f-layout>
        <f-sider>Sider</f-sider>
        <f-layout>
          <f-header>Header</f-header>
          <f-content>Content</f-content>
        </f-layout>
    </f-layout>
  </div>
```
左上中下布局

<ClientOnly><container-demo7></container-demo7></ClientOnly>

``` html
  <div class="box">
    <f-layout>
        <f-sider>Sider</f-sider>
        <f-layout>
          <f-header>Header</f-header>
          <f-content>Content</f-content>
          <f-footer>Footer</f-footer>
        </f-layout>
    </f-layout>
  </div>
```