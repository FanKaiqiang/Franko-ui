<template>
  <div class="tabs" >
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name:'franko-tabs',
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      this.$emit('update:selected',name)
    })
  },
  mounted() {
    if(this.$children.length === 0){
      console && console &&
      console.warn('tabs 的自组件应该是 tabs-head 和 tabs-body，请正确设置')
    }
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'franko-tabs-head'){
        vm.$children.forEach((childVm)=>{
          if(childVm.$options.name === 'franko-tabs-item' &&
          childVm.name === this.selected){
            this.eventBus.$emit('update:selected',this.selected,childVm)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
