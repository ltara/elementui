import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import Input from './components/input/index.vue'
import InputBasic from './components/input/basic.vue'
import AutoComplete from './components/input/auto-complete.vue'

import Cascader from './components/cascader/index.vue'
import CascaderBasic from './components/cascader/basic.vue'
import CascaderLazyload from './components/cascader/lazyload.vue'

import './mock/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  {
    path: '/input',
    component: Input,
    children: [
      { path: '/input/basic', component: InputBasic },
      { path: '/input/auto-complete', component: AutoComplete },
    ],
  },
  {
    path: '/cascader',
    component: Cascader,
    children: [
      { path: '/cascader/basic', component: CascaderBasic },
      { path: '/cascader/lazyload', component: CascaderLazyload },
    ],
  },
]

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
