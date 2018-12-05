import Vue from 'vue'
import Router from 'vue-router'
import vueTodo from '@/components/vueTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vueTodo',
      component: vueTodo
    }
  ]
})
