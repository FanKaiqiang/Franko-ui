<template>
  <div class="tabs-item" @click="onClick" v-bind:class="classes" :data-name="name">
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
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &.active {
    color: #4a90e2;
    font-weight: bold;
    border-bottom: 1px solid #4a90e2;
  }
  &.disabled {
    color: grey;
    cursor: not-allowed;
  }
}
</style>
