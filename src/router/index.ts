import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/AppView.vue'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: defineAsyncComponent(() => import('@/views/DataSourceView.vue')),
          children:[
            {
              path:':id',
              component:defineAsyncComponent(()=>import('@/views/DataDourceContent/DataDourceContent.vue'))
            },
            {
              path:'',
              redirect:'/app/dataSource/1'
            }
          ]
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('../views/PageLayoutView.vue')
        },
        {
          path: 'actions',
          name: 'actions',
          component:defineAsyncComponent( () => import('@/views/ActionsView.vue'))
        }
      ]
    },
    {
      path: '/runner',
      name: 'runner',
      component:defineAsyncComponent( () => import('@/views/RunnerView.vue'))
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:defineAsyncComponent( () => import('@/views/AboutView.vue'))
    },
    {
      path:'/',
      redirect:'/app/layout',
    }
  ]
})

export default router
