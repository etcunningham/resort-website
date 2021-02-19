import Vue from 'vue';
import Router from 'vue-router';
import Resort from '@/components/Resort';
import Parks from '@/components/Parks';
import Park from '@/components/Park';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resort',
      component: Resort,
    },
    {
      path: '/parks',
      name: 'Parks',
      component: Parks,
    },
    {
      path: '/parks/:parkName',
      name: 'Park',
      component: Park,
      props: true,
    },
  ],
});
