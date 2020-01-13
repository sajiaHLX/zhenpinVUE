import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/reset.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta === 'true'){
    if (!store.getters.getLogin) {
      store.commit('SET_SHOWTOAST', true)
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

