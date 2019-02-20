<template>
  <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <div class="g-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  name: "franko-button",
  components: {
    "g-icon": Icon
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #dadada;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    background-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .g-content {
    order: 2;
  }
  &.icon-right {
    > .g-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>