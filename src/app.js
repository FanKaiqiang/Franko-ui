import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Column from './column'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Column)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-toast', Toast)
Vue.use(plugin)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true
  },
  created() {

  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    showToast() {
      this.$toast('来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯来咯', {
        closeButton: {
          text: '关掉我',
          callback() {
            console.log('关掉我了')
          }
        },
        autoClose: true,
        autoCloseDelay: 1
      })
    }
  }
})