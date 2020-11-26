import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/index.vue'
import index from '@/components/mycontent.vue'
import DetailPage from '@/components/DetailPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/index',
        name: 'index',
        component: index
      }, {
        path: '/DetailPage',
        name: 'DetailPage',
        component: DetailPage
      }],
      redirect: '/index'
    }
  ]
})
