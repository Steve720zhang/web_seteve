import Vue from 'vue'
import VueRouter from 'vue-router'
import fastclick from 'fastclick'
import RouterConfig from './route'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.debug = true
Vue.use(VueRouter)

const router = new VueRouter()
RouterConfig(router)

router.start(Vue.extend({}), '#app')

fastclick.attach(document.body)
