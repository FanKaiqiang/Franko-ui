<template>
  <div class="tabs-item" @click="xxx" :v-bind:class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "franko-tabs-item",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: String | Number,
      default: true
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return { active: this.active };
    }
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name
      if (name === this.name) {
        console.log(`我${this.name}被选中了`);
      } else {
        console.log(`我${this.name}没被选中`);
      }
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active{
    background: red;
  }
}
</style>
