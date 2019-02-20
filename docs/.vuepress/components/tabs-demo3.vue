<template>
  <div class="box">
    <g-tabs selected="two">
      <g-tabs-head>
        <template slot="actions"> <g-button>右边的按钮</g-button></template>
        <g-tabs-item name="one">点我</g-tabs-item>
        <g-tabs-item name="two">点他</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="one">看右边的按钮</g-tabs-pane>
        <g-tabs-pane name="two">右边的按钮是通过插槽添加的</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
import Tabs from "../../../src/tabs";
import Button from "../../../src/button";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsBody from "../../../src/tabs-body";
import TabsPane from "../../../src/tabs-pane";
export default {
  components: {
    "g-tabs": Tabs,
    "g-button": Button,
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
