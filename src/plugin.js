import Toast from './toast'
function createToast({Vue,message,propsData}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
      propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',()=>{
      currentToast = null
    })
    document.body.appendChild(toast.$el)
    return toast
}

let currentToast = null

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message,toastOptions) {
      if(currentToast){
        currentToast.close()
      }
      console.log(currentToast)
      currentToast = createToast({Vue,message,propsData:toastOptions})
    }
  }
}