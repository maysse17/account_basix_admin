import {HTTP} from "../../main"

export default {
    state: {
        token: localStorage.getItem('jwtToken'),
        status: ''
    },
    
    getters: {
        token: (state) => state.token,
        authStatus: (state) => state.status,
        isAuthenticated: (state) => !!state.token,
    },
    
    mutations: {
        updateToken: function (state, newToken) {
            state.token = newToken
            localStorage.setItem('jwtToken', newToken)
        },
        
        removeToken: function (state) {
            state.token = null
            localStorage.removeItem('jwtToken')
            state.status = ''
        },
        authRequestStart: (state) => {
            state.status = 'loading'
        },
        authRequestSuccess: (state) => {
            state.status = 'success'
        },
        authRequestFailed: (state) => {
            state.status = 'error'
        },
    },
    
    actions: {
        obtainToken: function ({commit}, payload) {
            const url = Urls['jwt_obtain_token']()
            console.log('obtainToken called')
            commit('authRequestStart')
            HTTP.post(url, payload).then((response) => {
                commit('updateToken', response.data.token)
                commit('authRequestSuccess')
            }).catch((error) => {
                console.log('error to get token')
                console.log(error)
                commit('removeToken')
                commit('authRequestFailed')
            })
        },
        
        refreshToken: function ({commit}, oldToken) {
            const url = Urls['jwt_refresh_token']()
            const payload = {
                token: oldToken
            }
            HTTP.post(url, payload).then((response) => {
                commit('updateToken', response.data.token)
            }).catch((error) => {
                console.log('error to update token')
                console.log(error)
                commit('removeToken')
            })
        },
        
        removeToken: function ({commit}) {
            commit('removeToken')
        }
    }
}