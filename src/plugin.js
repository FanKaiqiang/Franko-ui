import Vue from 'vue'
import Toast from './toast'
export default {
  install(vue, options) {
    Vue.prototype.$toast = function (message,toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:{
          autoClose:toastOptions.autoClose,
          autoCloseDelay:toastOptions.autoCloseDelay,
          closeButton:toastOptions.closeButton
        }
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}