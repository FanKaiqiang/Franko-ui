import Vue from 'vue'
// import Button from './button'
// import Icon from './icon'
// import ButtonGroup from './button-group'
// import Input from './input'
// import Row from './row'
// import Column from './column'
// import Layout from './layout'
// import Header from './header'
// import Sider from './sider'
// import Footer from './footer'
// import Content from './content'
// import Toast from './toast'
// import plugin from './plugin'
// import Tabs from './tabs'
// import TabsHead from './tabs-head'
// import TabsItem from './tabs-item'
// import TabsBody from './tabs-body'
// import TabsPane from './tabs-pane'
import Popover from './popover'

// Vue.component('g-button', Button)
// Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
// Vue.component('g-input', Input)
// Vue.component('g-row', Row)
// Vue.component('g-col', Column)
// Vue.component('g-layout', Layout)
// Vue.component('g-header', Header)
// Vue.component('g-sider', Sider)
// Vue.component('g-footer', Footer)
// Vue.component('g-content', Content)
// Vue.component('g-toast', Toast)
// Vue.use(plugin)
// Vue.component('g-tabs',Tabs)
// Vue.component('g-tabs-head',TabsHead)
// Vue.component('g-tabs-item',TabsItem)
// Vue.component('g-tabs-body',TabsBody)
// Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)


new Vue({
  el: '#app',
  data: {
    // loading1: false,
    // loading2: true,
    // selectedTab: 'three'
  },
  created() {

  },
  methods: {
    // inputChange(e) {
    //   console.log(e)
    // },
    // showToast1(){
    //   this.showToast('top')
    // },
    // showToast2(){
    //   this.showToast('middle')
    // },
    // showToast3(){
    //   this.showToast('bottom')
    // },
    // showToast(position) {
    //   this.$toast('<p>我是 message</p>', {
    //     closeButton: {
    //       text: '关掉我',
    //       callback() {
    //         console.log('关掉我了')
    //       }
    //     },
    //     autoClose: 5,
    //     enableHTML: true,
    //     position
    //   })
    // }

  }
})