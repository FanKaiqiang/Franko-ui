<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "franko-tabs-head",
  inject:['eventBus']
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
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
