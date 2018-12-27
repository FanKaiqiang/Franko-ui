<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  name: "franko-collapse",
  // data(){
  //   return{
  //     eventBus : new Vue()
  //   }
  // },
  // provide(){
  //   return{
  //     eventBus:this.eventBus
  //   }
  // }
};
</script>
<style lang="scss" scoped>
$color:#ddd;
$border-radius:4px;
.collapse {
  border: 1px solid $color;
  border-radius: $border-radius;
}
</style>
