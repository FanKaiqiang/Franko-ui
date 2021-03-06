<template>
  <div class="popover" ref="popover">
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
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener(this.openEvent, this.open);
      this.$refs.popover.addEventListener(this.closeEvent, this.close);
    }
  },
  destroyed() {
    let popover = document.querySelector('.content-wrapper')
    popover.parentNode.removeChild(popover);
    if (this.$refs.popover) {
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.onClick);
      } else {
        this.$refs.popover.removeEventListener(this.openEvent, this.open);
        this.$refs.popover.removeEventListener(this.closeEvent, this.close);
      }
    }
  },
  methods: {
    positionContent() {
      let { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { height: height2 } = contentWrapper.getBoundingClientRect();
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect();
      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY
        },
        left: {
          left: left + window.scrollX,
          top: top + (height - height2) + window.scrollY
        },
        right: {
          left: left + width + window.scrollX,
          top: top + (height - height2) + window.scrollY
        }
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return;
      }
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
      console.log('展示')
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener(this.openEvent, this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      console.log('关闭')
      document.removeEventListener(this.closeEvent, this.onClickDocument);
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
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top: 10px solid white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom: 10px solid $popover-color;
      border-top: none;
      bottom: 100%;
    }
    &::after {
      border-bottom: 10px solid white;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before {
      border-left: 10px solid $popover-color;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left: 10px solid white;
      border-right: none;
      top: calc(50% - 10px);
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right: 10px solid $popover-color;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right: 10px solid white;
      border-left: none;
      top: calc(50% - 10px);
      right: calc(100% - 1px);
    }
  }
}
</style>