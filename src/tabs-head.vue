<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "franko-tabs-head",
  inject:['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',(item,vm)=>{
      let {width,height,top,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head{
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  position: relative;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #4A90E2;
    transition: all 350ms;
  }
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
