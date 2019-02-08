import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/components/Main').default
    },
    {
      path: '/test-info',
      name: 'test-info',
      component: require('@/components/TestInfo').default
    },
    {
      path: '/passing-test/:numberQuestion',
      name: 'passing-test',
      component: require('@/components/PassingTest').default,
      props: true
    },
    {
      path: '/result-test',
      name: 'result-test',
      component: require('@/components/ResultTest').default,
      props: true
    }
  ]
})
