<template>
  <div class="f-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"franko-content"
}
</script>
<style lang="scss" scoped>
.f-content{
  flex-grow: 1;
}
</style>
