import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
