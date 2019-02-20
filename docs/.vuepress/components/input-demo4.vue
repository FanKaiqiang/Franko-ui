<template>
  <div>
    <div class="box">
      <g-input tip="change事件与input事件" @change="change" @input="input"></g-input>
      {{text1}}
    </div>
    <div class="box">
      <g-input tip="focus事件与blur事件" @focus="focus" @blur="blur"></g-input>
      {{text2}}
    </div>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  },
  data() {
    return {
      text1: "",
      text2: ""
    };
  },
  methods: {
    change() {
      this.text1 = "输入框内容改变！";
    },
    input() {
      this.text1 = "输入框正在输入！";
    },
    focus() {
      this.text2 = "输入框获得焦点！";
    },
    blur() {
      this.text2 = "输入框失去焦点！";
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  margin-bottom: 10px;
}
</style>
