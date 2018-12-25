<template>
  <div class="popover" @click.stop="onClick">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "franko-popover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          let x = () => {
            this.visible = false;
            document.removeEventListener("click", x);
          };
          document.addEventListener("click", x);
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
