<template>
  <div class="box">
    <g-row align="left">
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
    </g-row>
    <g-row align="center">
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
    </g-row>
    <g-row align="right">
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
      <g-col span="6"></g-col>
    </g-row>
  </div>
</template>
<script>
import Row from "../../../src/row";
import Column from "../../../src/column";
export default {
  components: {
    "g-row": Row,
    "g-col": Column
  }
};
</script>
<style lang="scss" scoped>
</style>
