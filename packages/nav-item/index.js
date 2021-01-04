import VwNavItem from './src/nav-item.vue'

VwNavItem.install = Vue => {
Vue.component(VwNavItem.name, VwNavItem)
}

export default VwNavItem