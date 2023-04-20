import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from "../views/auth/login.vue";
import register from "../views/auth/register.vue";
import showRealstate from '../components/HomeViews/realstateShow.vue'
import listHome from '../views/listHome.vue'
import dashboard from '../views/dashboard/dashboard.vue'
import clientTable from '../components/dashboard/clientTable.vue'
import socialTraffic from '../components/dashboard/socialTraffic.vue'
import updateRealstate from '@/components/SellView/realstateUpdate.vue'
import addRealstate from '@/components/SellView/sell.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/sell',
      name: 'sell',
      component: addRealstate,
    },
    {
      path: '/clientTable',
      name: 'clientTable',
      component: clientTable
    },
    {
      path: '/update/:id',
      name: 'updateRealstate',
      component: updateRealstate,
    },
    {
      path: '/socialtraffic',
      name: 'socialtraffic',
      component: socialTraffic
    },
    {
      path: '/listhome',
      name: 'listHome',
      component: listHome
    },
    {
      path: '/show/:id',
      name: 'show',
      component: showRealstate
    },
    //login route
    {
      path: '/login',
      name: 'Login',
      component: login,
      // meta:{
      //   requiresAuth: true
      // }
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        requiresAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SellView.vue')
    },
    
  ]
})
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

router.beforeEach((to, from) => {
  if(to.meta.requiresAuth && !localStorage.getItem('token')){
    return {
      name: 'Login'
    }
  }

  if(to.meta.requiresAuth == false && localStorage.getItem('token')){
    return {
      name:'home'
    }
  }
})



export default router
