import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from "../views/auth/login.vue";
import register from "../views/auth/register.vue";



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
      component: () => import('../views/AboutView.vue')
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
