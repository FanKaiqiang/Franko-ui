<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">设置</g-button>
    <g-button icon="praise">点赞</g-button>
    <g-button icon="download">按钮</g-button>
    <g-button icon="left">向左</g-button>
    <g-button icon="right">向右</g-button>
    <g-button icon="down">向下</g-button>
    <g-button icon="download">下载</g-button>
    <g-button icon="error">错误</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button"
export default {
  components: {
    "g-button": Button
  }
};
</script>
<style lang="scss" scoped>
</style>
