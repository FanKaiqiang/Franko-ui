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
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods: {
    createClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      if (!obj.offset) {
        obj.offset = 0;
      }
      return [
        obj.span && `col-${str}-${obj.span}`,
        `offset-${str}-${obj.offset}`
      ];
    }
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClasses = this.createClasses;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...createClasses(ipad, "ipad"),
        ...createClasses(narrowPc, "narrow-pc"),
        ...createClasses(pc, "pc"),
        ...createClasses(widePc, "wide-pc")
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
    @for $n from 0 through 24 {
      &.#{$offset}-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @include screen(col, offset);
  @media (min-width: 576px) {
    @include screen(col-ipad, offset-ipad);
  }
  @media (min-width: 768px) {
    @include screen(col-narrow-pc, offset-narrow-pc);
  }
  @media (min-width: 992px) {
    @include screen(col-pc, offset-pc);
  }
  @media (min-width: 1200px) {
    @include screen(col-wide-pc, offset-wide-pc);
  }
}
</style>
