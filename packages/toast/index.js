import VwToast from './src/toast.vue'

VwToast.install = Vue => {
Vue.component(VwToast.name, VwToast)
}

export default VwToast