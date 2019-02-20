<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "franko-collapse-item",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update", names => {
        if(names.indexOf(this.name)>=0){
          this.open = true
        }else{
          this.open = false
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus.$emit('remove',this.name)
      } else {
        this.eventBus.$emit('add',this.name)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$color: #ddd;
$border-radius: 4px;
.collapse-item {
  .title {
    border: 1px solid $color;
    margin: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    font-weight: bold;
    cursor: pointer;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .content {
    padding: 8px;
  }
}
</style>
