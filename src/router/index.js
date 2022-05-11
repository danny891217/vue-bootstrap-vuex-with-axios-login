import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  /*
   * Login authentication for pages which need auth check.
   * If user auth failed, redirect to login page.
   */
  console.log(to)
  if (to.meta && to.meta.requireAuth) {
    next({ name: 'Login', replace: true })
    // if (false) {
    //   next();
    // } else {
    //   next({ name: 'Login', replace: true });
    // }
  } else {
    next();
  }
});

export default router
