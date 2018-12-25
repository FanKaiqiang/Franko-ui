<template>
<div class="popover" @click.stop="onClick">
  <div ref="content" class="content-wrapper" v-if="visible">
    <slot name="content"></slot>
  </div>
  <span ref="trigger">
      <slot></slot>
    </span>
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
          document.body.appendChild(this.$refs.content)
          let {
            width,
            height,
            top,
            left
          } = this.$refs.trigger.getBoundingClientRect()
          this.$refs.content.style.left = left + window.scrollX + 'px'
          this.$refs.content.style.top = top + window.scrollY + 'px'
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
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
}

.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>
