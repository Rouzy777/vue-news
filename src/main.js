import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
