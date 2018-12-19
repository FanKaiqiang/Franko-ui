<template>
  <div class="layout" v-bind:class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"franko-layout",
  data(){
    return{
      layoutClass:{
        hasSider:false
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'franko-sider'){
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.layout{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.layout.hasSider{
  flex-direction: row;
}
</style>
