import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)
const index = resolve => require(['@/components/index'], resolve)
const rules = resolve => require(['@/components/components/rules'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/rules',
      name: 'rules',
      component: rules
    }
  ]
})
