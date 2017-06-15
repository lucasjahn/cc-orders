import Vue from 'vue';
import Router from 'vue-router';
import AppWrapper from '@/components/AppWrapper';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppWrapper',
      component: AppWrapper
    }
  ]
})
