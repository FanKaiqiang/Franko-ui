<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'franko-button-group',
  mounted(){
    for(let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if(node.nodeName.toLowerCase() !=='button'){
        console.warn(`g-button-group 的子元素应为 g-button，但你写的是${name}`)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.g-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .g-button{
    border-radius: 0;
    margin-left: -1px;
    &:hover{
      position: relative;
      z-index: 1;
    }
    
    &:first-child{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      margin-left: 0px;
    }
    &:last-child{
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>