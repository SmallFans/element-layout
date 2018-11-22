import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import draggable from 'vuedraggable'
import './metadatas/index.js'
import RootBlank from './components/RootBlank.vue'
import TemplateComponent from '@/components/TemplateComponent.vue'
import './assets/common.css'

Vue.use(ElementUI)
Vue.component('draggable', draggable)
Vue.component('RootBlank', RootBlank)
Vue.component('TemplateComponent', TemplateComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
