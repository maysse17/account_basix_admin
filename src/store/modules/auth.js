import {HTTP} from "../../main"
import {isTokenExpired} from "../utils";

export default {
    state: {
        token: localStorage.getItem('jwtToken'),
    },
    
    getters: {
        token: (state) => state.token,
        isAuthenticated: (state) => !!state.token && !isTokenExpired(state.token),
    },
    
    mutations: {
        updateToken: function (state, newToken) {
            state.token = newToken
            localStorage.setItem('jwtToken', newToken)
        },
        
        removeToken: function (state) {
            state.token = null
            localStorage.removeItem('jwtToken')
        },
    },
    
    actions: {
        obtainToken: function ({commit}, payload) {
            return new Promise((resolve, reject) => {
                const url = Urls['jwt_obtain_token']()
                HTTP.post(url, payload).then((response) => {
                    HTTP.defaults.headers.common['Authorization'] = 'JWT_ACCOUNT ' + response.data.token
                    commit('updateToken', response.data.token)
                    resolve(response)
                }).catch((error) => {
                    commit('removeToken')
                    reject(error)
                })
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
                delete HTTP.defaults.headers.common['Authorization']
                commit('removeToken')
            })
        },
        
        removeToken: function ({commit}) {
            commit('removeToken')
        }
    }
}