
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 注册为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
