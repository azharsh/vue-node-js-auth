import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import axios from 'axios'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.use(axios)

const vuetifyOptions = {}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify: new Vuetify(vuetifyOptions),
    render: h => h(App)
}).$mount('#app')


export default new Vuetify({})