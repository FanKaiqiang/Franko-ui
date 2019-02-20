---
title: Input - 输入框
---
# Input 输入框
使用 Input 组件前首先要往页面引入 Input 组件，具体方法参考[快速上手](../get-started/)。本篇教程中将 Input 组件统一命名为` f-input`。

### 基础用法
Input 组件可以让用户通过鼠标或键盘输入字符。为输入框设置 value 属性可以给输入框设定初始值，设置 tip 属性可以给输入框设置输入建议：

<ClientOnly><input-demo1></input-demo1></ClientOnly>

``` html
  <div class="box">
    <f-input></f-input>
    <f-input value="张三"></f-input>
    <f-input tip="请输入姓名"></f-input>
  </div>
```

### 禁用与只读
为 Input 组件添加 `disable` 属性可以禁用输入框， 添加`readonly` 属性可以将输入框设为只读：

<ClientOnly><input-demo2></input-demo2></ClientOnly>

``` html
  <div class="box">
    <f-input value="张三"></f-input>
    <f-input value="李四" disabled></f-input>
    <f-input value="王五" readonly></f-input>
  </div>
```

### 警告消息
通过给 Input 组件添加 `error` 属性可以为输入框添加警告效果，`error` 属性接受字符串作为其显示的警告信息，如果 `error` 属性为空，就不会显示警告效果。借助这个特性，您可以通过为输入框绑定事件控制 Input 组件的警告效果：

<ClientOnly><input-demo3></input-demo3></ClientOnly>

``` html
<div id="app">
  <div class="box">
    <f-input value="默认效果" error></f-input>
    <f-input value="警告效果" error="警告信息"></f-input>
  </div>
  <f-input tip="请输入数字" :value="text" :error="errorText" @input="inputChange">
  </f-input>
</div>
<script>
import {Input} from 'franko-ui'
import Vue from 'vue'
new Vue({
  el: '#app',
  components: {
    "f-input": Input
  },
  data(){
    return{
      text:'',
      errorText:''
    }
  },
  methods:{
    inputChange(e){
      if(!/^[0-9]+$/.test(e)){
        this.errorText = '请输入数字'
      }else{
        this.errorText = ''
      }
    }
  }
};
</script>
```

### 绑定事件
您可以通过下面的方法为输入框绑定事件，可以绑定的事件有四种，分别是：change（内容改变）、input（正在输入）、focus（获得焦点）、blur（失去焦点）：

<ClientOnly><input-demo4></input-demo4></ClientOnly>
``` html
<div id="app">
  <div class="box">
    <f-input tip="change事件与input事件" @change="change" @input="input"></f-input>
    {{text1}}
  </div>
  <div class="box">
    <f-input tip="focus事件与blur事件" @focus="focus" @blur="blur"></f-input>
    {{text2}}
  </div>
</div>
<script>
import {Input} from 'franko-ui'
import Vue from 'vue'
new Vue({
  el: '#app',
  components: {
    "f-input": Input
  },
  data() {
    return {
      text1: "",
      text2: ""
    };
  },
  methods: {
    change(){ this.text1 = "输入框内容改变！"; },
    input() { this.text1 = "输入框正在输入！"; },
    focus() { this.text2 = "输入框获得焦点！"; },
    blur()  { this.text2 = "输入框失去焦点！"; }
  }
};
</script>
```