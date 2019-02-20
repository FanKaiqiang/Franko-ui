import Vue from 'vue'

import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)

new Vue({
  el: '#app',
})