import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
//  import FormsDemo from '@/components/FormsDemo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lazy',
      name: 'LazyRoute',
      component: () => import('@/components/LazyRoute')
    },
    {
      path: '/simple-syntax',
      name: 'SimpleSyntax',
      component: () => import('@/components/SimpleSyntax')
    },
    {
      path: '/dynamic-form',
      name: 'DynamicForm',
      component: () => import('@/components/DynamicForm')
    },
    {
      path: '/simple-dynamic',
      name: 'SimpleDynamic',
      component: () => import('@/components/SimpleDynamic')
    }
  ]
});
/*
    {
      path: '/forms',
      name: 'Forms',
      component: FormsDemo
    }
  ]
}); */
