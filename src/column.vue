<template>
  <div class="column" :class="colClass" :style="colStyle">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "franko-column",
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset } = this;
      return [span && `col-${span}`, offset && `offset-${offset}`];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.column {
  > .inner {
    height: 100px;
    border: 1px solid red;
  }

  $class: col;
  @for $n from 1 through 24 {
    &.#{$class}-#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class: offset;
  @for $n from 1 through 24 {
    &.#{$class}-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
