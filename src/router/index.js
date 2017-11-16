import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/pages/Intro'
import blogHome from '@/pages/blogHome'
import blogContent from '@/pages/blogContent'
import blogCatalog from '@/pages/blogCatalog'
import aboutMe from '@/pages/aboutMe'
import about1 from '@/pages/about1'
import about2 from '@/pages/about2'
import about3 from '@/pages/about3'
import about4 from '@/pages/about4'
import about5 from '@/pages/about5'
import about6 from '@/pages/about6'
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
          redirect: '/blogCatalog'
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
    },
    {
      path: '/aboutMe',
      component: aboutMe,
      redirect: '/about1',
      children: [
        {
          path: '/about1',
          component: about1
        },
        {
          path: '/about2',
          component: about2
        }, {
          path: '/about3',
          component: about3
        }, {
          path: '/about4',
          component: about4
        }, {
          path: '/about5',
          component: about5
        }, {
          path: '/about6',
          component: about6
        }
      ]
    }
  ]
})
