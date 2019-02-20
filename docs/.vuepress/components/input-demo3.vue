<template>
  <div>
    <div class="box">
      <g-input value="默认效果" error></g-input>
      <g-input value="警告效果" error="警告信息"></g-input>
    </div>
    <g-input tip="请输入数字" :value="text" :error="errorText" @input="inputChange"></g-input>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  },
  data(){
    return{
      text:'',
      errorText:''
    }
  },
  methods:{
    inputChange(e){
      if(!/^[0-9]+$/.test(e)){
        this.errorText = '请输入数字'
      }else{
        this.errorText = ''
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .box {
    margin-bottom: 10px;
  }
</style>
