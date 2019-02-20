<template>
  <div class="box">
    <g-row gutter="20">
      <g-col span="6"></g-col>
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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
