const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tab', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接收selector属性', (done) => {
    Vue.component('g-tabs', Tabs)
    Vue.component('g-tabs-head', TabsHead)
    Vue.component('g-tabs-item', TabsItem)
    Vue.component('g-tabs-body', TabsBody)
    Vue.component('g-tabs-pane', TabsPane)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-tabs selected="three">
    <g-tabs-head>
        <g-tabs-item name="one">第一</g-tabs-item>
        <g-tabs-item name="two">第二</g-tabs-item>
        <g-tabs-item name="three">第三</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="one">丁少在都市</g-tabs-pane>
        <g-tabs-pane name="two">家中有丽人</g-tabs-pane>
        <g-tabs-pane name="three">文兄去吃鸡</g-tabs-pane>
    </g-tabs-body>
    </g-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="three"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
})