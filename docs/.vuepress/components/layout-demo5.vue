<template>
  <div class="box">
    <g-row>
      <g-col :wide-pc="{span:8}" :pc="{span:6}" :narrow-pc="{span:4}" :ipad="{span:3}" span="6"></g-col>
      <g-col
        :wide-pc="{span:4}"
        :pc="{span:5,offset:1}"
        :narrow-pc="{span:8}"
        :ipad="{span:8,offset:1}"
        span="6"
      ></g-col>
      <g-col
        :wide-pc="{span:4}"
        :pc="{span:5,offset:1}"
        :narrow-pc="{span:8}"
        :ipad="{span:8,offset:1}"
        span="6"
      ></g-col>
      <g-col
        :wide-pc="{span:8}"
        :pc="{span:5,offset:1}"
        :narrow-pc="{span:4}"
        :ipad="{span:2,offset:1}"
        span="6"
      ></g-col>
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
