// Dynamic Loading Modules

// Views
const Dashboard = resolve => { require.ensure(['../layouts/Dashboard.vue'], ()=>{ resolve(require('../layouts/Dashboard.vue')); }); };

// UI Components
const Buttons = resolve => { require.ensure(['../components/Buttons.vue'], ()=>{ resolve(require('../components/Buttons.vue')); }); };
const Badges = resolve => { require.ensure(['../components/Badges.vue'], ()=>{ resolve(require('../components/Badges.vue')); }); };
const Cards = resolve => { require.ensure(['../components/Cards.vue'], ()=>{ resolve(require('../components/Cards.vue')); }); };
const Alerts = resolve => { require.ensure(['../components/Alerts.vue'], ()=>{ resolve(require('../components/Alerts.vue')); }); };
const ProgressBars = resolve => { require.ensure(['../components/ProgressBars.vue'], ()=>{ resolve(require('../components/ProgressBars.vue')); }); };
const Modals = resolve => { require.ensure(['../components/Modals.vue'], ()=>{ resolve(require('../components/Modals.vue')); }); };
const Switches = resolve => { require.ensure(['../views/Switches.vue'], ()=>{ resolve(require('../views/Switches.vue')); }); };


const BasicForms = resolve => { require.ensure(['../components/forms/BasicForms.vue'], ()=>{ resolve(require('../components/forms/BasicForms.vue')); }); };
const AdvancedForms = resolve => { require.ensure(['../components/forms/AdvancedForms.vue'], ()=>{ resolve(require('../components/forms/AdvancedForms.vue')); }); };
const FormWizard = resolve => { require.ensure(['../components/forms/FormWizard.vue'], ()=>{ resolve(require('../components/forms/FormWizard.vue')); }); };
const Grids = resolve => { require.ensure(['../components/Grids.vue'], ()=>{ resolve(require('../components/Grids.vue')); }); };
const Widgets = resolve => { require.ensure(['../components/Widgets.vue'], ()=>{ resolve(require('../components/Widgets.vue')); }); };
const Tables = resolve => { require.ensure(['../components/tables/Tables.vue'], ()=>{ resolve(require('../components/tables/Tables.vue')); }); };
const Banks = resolve => { require.ensure(['../components/tables/Banks.vue'], ()=>{ resolve(require('../components/tables/Banks.vue')); }); };

//Charts
const BarChart = resolve => { require.ensure(['../components/charts/chartlists/BarChart.vue'], ()=>{ resolve(require('../components/charts/chartlists/BarChart.vue')); }); };
const LineChart = resolve => { require.ensure(['../components/charts/chartlists/LineChart.vue'], ()=>{ resolve(require('../components/charts/chartlists/LineChart.vue')); }); };
const Doughnut = resolve => { require.ensure(['../components/charts/chartlists/Doughnut.vue'], ()=>{ resolve(require('../components/charts/chartlists/Doughnut.vue')); }); };
const Radar = resolve => { require.ensure(['../components/charts/chartlists/Radar.vue'], ()=>{ resolve(require('../components/charts/chartlists/Radar.vue')); }); };
const Pie = resolve => { require.ensure(['../components/charts/chartlists/Pie.vue'], ()=>{ resolve(require('../components/charts/chartlists/Pie.vue')); }); };
const PolarArea = resolve => { require.ensure(['../components/charts/chartlists/PolarArea.vue'], ()=>{ resolve(require('../components/charts/chartlists/PolarArea.vue')); }); };

//Maps
const GoogleMapsPage = resolve => { require.ensure(['../components/maps/google-maps/GoogleMapsPage.vue'], ()=>{ resolve(require('../components/maps/google-maps/GoogleMapsPage.vue')); }); };
const LeafletMapsPage = resolve => { require.ensure(['../components/maps/leaflet-maps/LeafletMapsPage.vue'], ()=>{ resolve(require('../components/maps/leaflet-maps/LeafletMapsPage.vue')); }); };
const BubbleMapsPage = resolve => { require.ensure(['../components/maps/bubble-maps/BubbleMapsPage.vue'], ()=>{ resolve(require('../components/maps/bubble-maps/BubbleMapsPage.vue')); }); };
const LineMapsPage = resolve => { require.ensure(['../components/maps/line-maps/LineMapsPage.vue'], ()=>{ resolve(require('../components/maps/line-maps/LineMapsPage.vue')); }); };

// User Info
const User = resolve => { require.ensure(['../layouts/User.vue'], ()=>{ resolve(require('../layouts/User.vue')); }); };

//Pages
const Login = resolve => { require.ensure(['../pages/login/Login.vue'], ()=>{ resolve(require('../pages/login/Login.vue')); }); };
const Register = resolve => { require.ensure(['../pages/register/Register.vue'], ()=>{ resolve(require('../pages/register/Register.vue')); }); };
const Page404 = resolve => { require.ensure(['../pages/Page404.vue'], ()=>{ resolve(require('../pages/Page404.vue')); }); };
const Page500 = resolve => { require.ensure(['../pages/Page500.vue'], ()=>{ resolve(require('../pages/Page500.vue')); }); };




import store from '../store'

const isNotAutenticated = (to, from, next) => {
    if(!store.getters.isAuthenticated) {
        next()
        return
    }
    next('/')
}

const isAutenticated = (to, from, next) => {
    if(store.getters.isAuthenticated) {
        next()
        return
    }
    next('/auth/login')
}


export const routes = [
    {
        path : '',
        name: 'Home',
        component: Dashboard,
        beforeEnter: isAutenticated
    },
    {
        path: '/auth/register',
        component: Register,
        name: 'Register',
        beforeEnter: isNotAutenticated
    },
    {
        path: '/auth/login',
        component: Login,
        name: 'Login',
        beforeEnter: isNotAutenticated
    },
    {
        path: '/api/banks',
        component: Banks,
        name: 'Banks'
    },
    {
        path : '/components/tables',
        name: 'tables',
        component: Tables
    },
];