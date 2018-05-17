import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import auth from './modules/auth'

import * as getters from './getters';

Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    strict: strict,
    getters,
    modules: {
        app,
        auth
    },
    state: {},
    mutations: {}
})

export default store