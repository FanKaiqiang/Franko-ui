<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "franko-collapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      selectedArray: this.selected
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update", this.selected);

    this.eventBus.$on("add", name => {
      if (this.single) {
        this.selectedArray = [name];
      } else {
        this.selectedArray.push(name);
      }
      this.eventBus.$emit("update", this.selectedArray);
      this.$emit("update:selected", this.selectedArray);
    });

    this.eventBus.$on("remove", name => {
      let index = this.selectedArray.indexOf(name);
      this.selectedArray.splice(index, 1);
      this.eventBus.$emit("update", this.selectedArray);
      this.$emit("update:selected", this.selectedArray);
    });
  }
};
</script>
<style lang="scss" scoped>
$color: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $color;
  border-radius: $border-radius;
}
</style>
