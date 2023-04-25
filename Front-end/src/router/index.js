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
import contact from '@/views/contactUs.vue'
import about from '@/views/aboutUs.vue'
import listcommand from '@/views/listcommand.vue'
import commandDashboard from '@/components/dashboard/commandDashboard.vue'
import listclient from '@/components/dashboard/ListClient.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta:{
      //   requiresAuth: true
      // }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/listclient',
      name: 'listclient',
      component: listclient,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
    {
      path: '/commandDashboard',
      name: 'commandDashboard',
      component: commandDashboard,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    // {
    //   path: '/sell',
    //   name: 'sell',
    //   component: addRealstate,
    // },
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
      path: '/listcommand',
      name: 'listcommand',
      component: listcommand
    },
    {
      path: '/show/:id',
      name: 'show',
      component: showRealstate,
      meta:{
        requiresAuth: true
      }
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
      path: '/sell',
      name: 'sell',
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
