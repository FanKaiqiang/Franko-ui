---
title: Layout - 布局
---
# Layout 布局
使用 Layout 布局前首先要往页面引入 Row 组件与 Column 组件，具体方法参考[快速上手](../get-started/)。本篇教程中统一将 Row 组件命名为 `f-row`，将 Column 组件命名为 `f-col`。

### 基础布局
使用 Layout 布局可以通过基础的 24 分栏，迅速简便地创建布局。通过 Row 和 Column 组件，并通过 Column 组件的 `span` 属性我们就可以自由地组合布局。如果 `span` 的总和大于 24，多出的分栏则会被换到下一行。

<ClientOnly><layout-demo1></layout-demo1></ClientOnly>

``` html
  <div class="box">
    <f-row>
      <f-col span="24"></f-col>
    </f-row>
    <f-row>
      <f-col span="12"></f-col> <f-col span="12"></f-col>
    </f-row>
    <f-row>
      <f-col span="8"></f-col> <f-col span="8"></f-col> <f-col span="8"></f-col>
    </f-row>
    <f-row>
      <f-col span="6"></f-col>  <f-col span="6"></f-col>
      <f-col span="6"></f-col>  <f-col span="6"></f-col>
    </f-row>
    <f-row>
      <f-col span="4"></f-col> <f-col span="4"></f-col> <f-col span="4"></f-col>
      <f-col span="4"></f-col> <f-col span="4"></f-col> <f-col span="4"></f-col>
    </f-row>
  </div>
```

### 分栏间隔
通过为 Row 组件设置 `gutter` 属性来设置分栏之间存在间隔。`gutter` 属性接受数字作为属性值，假设 `gutter = "20"`，那么该行的分栏间隔即为 20px。

<ClientOnly><layout-demo2></layout-demo2></ClientOnly>

``` html
  <div class="box">
    <f-row gutter="20">
      <f-col span="6"></f-col>
      <f-col span="6"></f-col>
      <f-col span="6"></f-col>
      <f-col span="6"></f-col>
    </f-row>
  </div>
```

### 分栏偏移
为 Column 组件设置 `offset` 属性可以指定分栏向右偏移的栏数。如果 `span` 与 `offset` 的总和大于 24，多出的分栏则会被换到下一行。

<ClientOnly><layout-demo3></layout-demo3></ClientOnly>

``` html
  <div class="box">
    <f-row>
      <f-col span="6"></f-col>
      <f-col span="6" offset="6"></f-col>
    </f-row>
    <f-row>
      <f-col span="6" offset="6"></f-col>
      <f-col span="6" offset="6"></f-col>
    </f-row>
    <f-row>
      <f-col span="12" offset="6"></f-col>
    </f-row>
  </div>
```

### 对齐方式
通过为 Row 组件设置的 `align` 属性来对分栏进行灵活的对齐，`align` 属性接受三种值：`left`、`right`、`center`，默认值为 `left`。

<ClientOnly><layout-demo4></layout-demo4></ClientOnly>

``` html
  <div class="box">
    <f-row align="left">
      <f-col span="6"></f-col> <f-col span="6"></f-col> <f-col span="6"></f-col>
    </f-row>
    <f-row align="center">
      <f-col span="6"></f-col> <f-col span="6"></f-col> <f-col span="6"></f-col>
    </f-row>
    <f-row align="right">
      <f-col span="6"></f-col> <f-col span="6"></f-col> <f-col span="6"></f-col>
    </f-row>
  </div>
```

### 响应式布局
Layout 布局预设了四种响应式尺寸：ipad、narrow-pc、pc、wide-pc，四种尺寸对应的屏幕宽度最小值分别是：576px、768px、992px、1200px。您可以为 Column 组件设置 `ipad`、`narrow-pc`、`pc`、`wide-pc` 属性来设定其在相应尺寸下的状态。这些属性接受一个含有 `span`、`offset`两个属性的对象作为值，因此需要使用 Vue 的绑定语法设置这些属性值。

<ClientOnly><layout-demo5></layout-demo5></ClientOnly>

``` html
  <div class="box">
    <f-row>
      <f-col :wide-pc="{span:8}" :pc="{span:6}" :narrow-pc="{span:4}" :ipad="{span:3}" span="6"></f-col>
      <f-col :wide-pc="{span:4}" :pc="{span:5,offset:1}" :narrow-pc="{span:8}" :ipad="{span:8,offset:1}" span="6"></f-col>
      <f-col :wide-pc="{span:4}" :pc="{span:5,offset:1}" :narrow-pc="{span:8}" :ipad="{span:8,offset:1}" span="6"></f-col>
      <f-col :wide-pc="{span:8}" :pc="{span:5,offset:1}" :narrow-pc="{span:4}" :ipad="{span:2,offset:1}" span="6"></f-col>
    </f-row>
  </div>
```