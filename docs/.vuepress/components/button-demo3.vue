<template>
  <div>
    <g-button loading="true" >左边</g-button>
    <g-button loading="true" icon-position="right">右边</g-button>
    <g-button :loading="loading" @click="loading = !loading">点击加载</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
  data(){
    return{
      loading:false
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
