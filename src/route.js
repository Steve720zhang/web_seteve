export default function (router) {
  router.map({
    '/': {
      component: require('./components/Index.vue')
    },
    '/two': {
      component: require('./components/App.vue')
    }
  })
}