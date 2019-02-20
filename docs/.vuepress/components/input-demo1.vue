<template>
  <div>
    <div class="box">
      <g-input></g-input>
      <g-input value="张三"></g-input>
      <g-input tip="请输入姓名"></g-input>
    </div>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  }
};
</script>
<style lang="scss" scoped>
</style>
