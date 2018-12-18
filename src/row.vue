<template>
  <div class="row" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "franko-row",
  props: {
    gutter: [Number, String]
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(vm => {
      console.log(this.gutter);
      vm.gutter = this.gutter;
    });
  },
  computed: {
    colStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
