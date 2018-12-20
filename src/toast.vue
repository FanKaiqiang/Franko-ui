<template>
  <div class="wrapper" v-bind:class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <div v-if="enableHTML" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "franko-toast",
  props: {
    autoClose: {
      type: Number,
      default: 0
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHTML: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "buttom", "middle"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoClose * 1000);
    }
    this.$nextTick(() => {
      this.$refs.line.style.height =
        this.$refs.toast.getBoundingClientRect().height + "px";
    });
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton.callback) {
        this.closeButton.callback();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes side-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes side-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    > .toast{
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      animation: side-down 1s;
    } 
  }

  &.position-bottom {
    bottom: 0;
    > .toast{
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      animation: side-up 1s;
    } 
  }

  &.position-middle {
    transform: translate(-50%,-50%);
    top: 50%;
    animation: fade 1s;
  }
}
.toast {
  font-size: $font-size;
  min-height: $toast-height;
  line-height: 1.8;

  display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  > .message {
    padding: 8px 0;
  }

  > .line {
    height: 100%;
    border-left: 1px solid white;
    margin-left: 16px;
  }

  > .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
}
</style>
