<template>
  <div class="box">
    <g-tabs selected="one">
      <g-tabs-head>
        <g-tabs-item name="one">第一</g-tabs-item>
        <g-tabs-item name="two" disabled="true">第二</g-tabs-item>
        <g-tabs-item name="three">第三</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="one">看得见我</g-tabs-pane>
        <g-tabs-pane name="two" >看不见我</g-tabs-pane>
        <g-tabs-pane name="three">看得见我</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsBody from "../../../src/tabs-body";
import TabsPane from "../../../src/tabs-pane";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-head": TabsHead,
    "g-tabs-item": TabsItem,
    "g-tabs-body": TabsBody,
    "g-tabs-pane": TabsPane
  }
};
</script>
<style lang="scss" scoped>
.tabs{
  border: 1px solid #ccc;
  border-radius: 2px;
}
.tabs-pane{
  height: 80px;
}
</style>
