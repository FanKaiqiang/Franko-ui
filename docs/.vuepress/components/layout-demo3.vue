<template>
  <div class="box">
    <g-row>
      <g-col span="6"></g-col>
      <g-col span="6" offset="6"></g-col>
    </g-row>
    <g-row>
      <g-col span="6" offset="6"></g-col>
      <g-col span="6" offset="6"></g-col>
    </g-row>
    <g-row>
      <g-col span="12" offset="6"></g-col>
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
