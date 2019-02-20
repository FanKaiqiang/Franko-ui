<template>
  <div>
    <div class="box">
      <g-input value="张三"></g-input>
      <g-input value="李四" disabled></g-input>
      <g-input value="王五" readonly></g-input>
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
