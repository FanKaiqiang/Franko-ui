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
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.onClick);
    } else {
      this.$refs.popover.removeEventListener(this.openEvent, this.open);
      this.$refs.popover.removeEventListener(this.closeEvent, this.close);
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
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener(this.openEvent, this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
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

  @mixin row($row, $top, $Y) {
    &.position-#{$row} {
      margin-top: $top;
      transform: translateY($Y);

      &::before {
        border-#{$row}: 10px solid $popover-color;
        #{$row}: 100%;
      }

      &::after {
        border-#{$row}: 10px solid white;
        #{$row}: calc(100% - 1px);
      }
    }
  }

  @mixin column($column, $left, $X) {
    &.position-#{$column} {
      margin-left: $left;
      transform: translateX($X);

      &::before {
        border-#{$column}: 10px solid $popover-color;
        #{$column}: 100%;
      }

      &::after {
        border-#{$column}: 10px solid white;
        top: calc(50% - 10px);
        #{$column}: calc(100% - 1px);
      }
    }
  }

  @include row(top, -10px, -100%);
  @include row(bottom, 10px, 0%);
  @include column(left, -10px, -100%);
  @include column(right, 10px, 0%);
}
</style>
