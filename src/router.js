import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import About from './views/About.vue';
import HowWorks from './views/How-works.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/how-it-works',
      name: 'Works',
      component: HowWorks
    },
  ]
})
