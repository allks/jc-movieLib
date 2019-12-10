import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Task from '@/components/Task.vue';
import Login from '@/components/auth/Login.vue';
import Registration from '@/components/auth/Registration.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/task',
      name: 'task',
      component: Task,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
  ],
});
