import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import { index } from './components/index'
import axios from 'axios'

// Table
import Vuetable from 'vuetable-2'
Vue.use(Vuetable)

// Tabs
import VueTabs from 'vue-nav-tabs'
Vue.use(VueTabs)

// Form Wizard
import VueFormWizard from 'vue-form-wizard'
Vue.use(VueFormWizard)

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'hash'
});

const axiosConfig = {
    baseUrl: 'http://127.0.0.1:8000/',
    timeout: 3000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
};
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const HTTP = axios.create(axiosConfig);

const token = localStorage.getItem('jwtToken')
if (token) {
    HTTP.defaults.headers.common['Authorization'] = 'JWT_ACCOUNT ' + token
}

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    components: { App }
})


