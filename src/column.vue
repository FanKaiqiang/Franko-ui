<template>
  <div class="column" :class="colClass" :style="colStyle">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "franko-column",
  props: {
    span: [Number, String],
    offset: [Number, String],
    phone: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone
          ? [`phone-col-${phone.span}`, `phone-offset-${phone.offset}`]
          : [])
      ];
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

   @mixin screen($span, $offset) {
    @for $n from 1 through 24 {
      &.#{$span}-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$offset}-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @include screen(col, offset);
  @media (max-width: 576px) {
    @include screen(phone-col, phone-offset);
  }
  
}
</style>
