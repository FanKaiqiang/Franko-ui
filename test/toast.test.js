const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  it('接受autoClose选项', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: 1
      }
    }).$mount(div)
    const element = vm.$el
    vm.$on('close', () => {
      expect(document.body.contains(vm.$el)).to.equal(false)
      done()
      div.remove()
      vm.$destroy()
    })
  })

  it('接受closeButton选项', () => {
    const Constructor = Vue.extend(Toast)
    const callback = sinon.fake();
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: '关闭吧',
          callback
        }
      }
    }).$mount()
    let closeButton = vm.$el.querySelector('.close')
    expect(closeButton.textContent.trim()).to.equal('关闭吧')
    closeButton.click()
    expect(callback).to.have.been.called
    vm.$destroy()
  })

  it('接受enableHTML选项', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        enableHTML: true
      }
    })
    vm.$slots.default=['<strong id="hello">fighting</strong>']
    vm.$mount()
    let strong = vm.$el.querySelector('#hello')
    expect(strong).to.exist
    vm.$destroy()
  })

  it('接受position选项', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        position: 'middle'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-middle')).to.eq(true)
    vm.$destroy()
  })
})