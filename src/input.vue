<template>
  <div class="wrapper" v-bind:class="{'error':error}">
    <input v-bind:value="value" type="text" v-bind:disabled="disabled" v-bind:readonly="readonly"
    @change="$emit('change',$event.target.value)"
    @input="$emit('input',$event.target.value)"
    @focus="$emit('focus',$event.target.value)"
    @blur="$emit('blur',$event.target.value)"
    :placeholder="tip"
    >
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
    
  </div>
</template>
<script>
import Icon from './icon'
export default {
  components: {
    'g-icon':Icon
  },
  name: 'franko-input',
  props:{
    value:{
      type: String
    },
    tip:{
      type:String
    },
    disabled:{
      type: Boolean,
      default: false
    },
    readonly:{
      type: Boolean,
      default: false
    },
    error:{
      type:String
    }
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #f1453d;
.wrapper{
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child){
    margin-right: .5em;
  }
  &.error{
    > input{
      border-color: $red;
    }
  }
  .icon-error{
    fill: $red;
  }
  .errorMessage{
    color: $red;
  }
  > input{
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled]{
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
    &[readonly]{
      border-color: #aaa;
      color: #aaa;
    }
  }
}
</style>
