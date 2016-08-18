import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './route'

Vue.config.debug = true
Vue.use(VueRouter)

const router = new VueRouter()
RouterConfig(router)

router.start(Vue.extend({}), '#app')
