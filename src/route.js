export default function (router) {
  router.map({
    '/': {
      component: require('./components/Index.vue')
    },
    '/app': {
      component: require('./components/App.vue')
    },
    '/chart': {
      component: require('./components/chart.vue')
    }
  })
}
