<template>
  <div class="popover" @click="onClick" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{[`position-${position}`]:true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "franko-popover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === "top") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          top + height + window.scrollY + "px";
      } else if (this.position === "left") {
        let {
          height: height2
        } = this.$refs.contentWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          top + (height - height2) + window.scrollY + "px";
      } else if (this.position === "right") {
        let {
          height: height2
        } = this.$refs.contentWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left =
          left + width + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          top + (height - height2) + window.scrollY + "px";
      }
    },
    onClickDocument(e) {
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$popover-color: #ddd;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  border: 1px solid $popover-color;
  border-radius: 4px;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  background: white;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }

  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before {
      border-top: 10px solid $popover-color;
      top: 100%;
    }
    &::after {
      border-top: 10px solid white;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom: 10px solid $popover-color;
      bottom: 100%;
    }
    &::after {
      border-bottom: 10px solid white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before {
      border-left: 10px solid $popover-color;
      left: 100%;
    }
    &::after {
      border-left: 10px solid white;
      top: calc(50% - 10px);
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;
    &::before {
      border-right: 10px solid $popover-color;
      right: 100%;
    }
    &::after {
      border-right: 10px solid white;
      top: calc(50% - 10px);
      right: calc(100% - 1px);
    }
  }
}
</style>
