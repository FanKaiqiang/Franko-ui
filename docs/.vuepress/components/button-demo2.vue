<template>
  <div>
    <g-button icon="setting" icon-position="left">左边</g-button>
    <g-button icon="setting" icon-position="right">右边</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  }
};
</script>
<style lang="scss" scoped>
</style>
