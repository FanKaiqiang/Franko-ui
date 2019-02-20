<template>
  <div class="box">
    <g-layout>
        <g-sider>Sider</g-sider>
        <g-layout>
          <g-header>Header</g-header>
          <g-content>Content</g-content>
          <g-footer>Footer</g-footer>
        </g-layout>
    </g-layout>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Footer from "../../../src/footer";
import Content from "../../../src/content";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-sider": Sider,
    "g-footer": Footer,
    "g-content": Content
  }
};
</script>
<style lang="scss" scoped>
.header,
.footer {
  background: #b3c0d1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: bold;
}
.f-content {
  background: #e9eef3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  font-weight: bold;
}
.sider {
  width: 100px;
  background: #d3dce6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
