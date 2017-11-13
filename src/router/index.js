import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/pages/Intro'
import blogHome from '@/pages/blogHome'
import blogContent from '@/pages/blogContent'
import blogCatalog from '@/pages/blogCatalog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/blogHome',
      component: blogHome,
      children: [
        {
          path: '/',
          redirect:'/blogCatalog'
        },
        {
          path: '/blogContent',
          component: blogContent
        },
        {
          path: '/blogCatalog',
          component: blogCatalog
        }
      ]
    }
  ]
})
