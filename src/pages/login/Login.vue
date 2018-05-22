<template>
    <div class="login">

        <card header-text="Welcome !">
            <div class="card-body card-block">
                <form @submit.prevent="submitLogin">
                    <basix-alert type="danger" :withCloseBtn="true" class="mt-4" v-if="!isErrorsEmpty">
                        <template v-for="values, key in errors">
                            <span class="badge badge-pill badge-danger">{{key}}</span>
                            <ul v-for="value in values">
                                <li>{{value}}</li>
                            </ul>
                        </template>
                    </basix-alert>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                            <input type="text"
                                   id="username"
                                   name="username"
                                   placeholder="Username"
                                   class="form-control"
                                   v-model="username"
                            >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                            <input type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   class="form-control"
                                   v-model="password"
                            >
                        </div>
                    </div>
                    <div class="form-actions form-group">
                        <button type="submit" class="btn btn-success btn-md">Log In</button>
                        <button type="submit" class="btn btn-primary btn-md float-right">
                            <router-link class='link text-light float-right' :to="{name: 'Register'}">Create Account</router-link>
                        </button>
                    </div>
                </form>
            </div>
        </card>

    </div>
</template>

<script>
    import {HTTP} from "../../main";

    export default {
        name: 'Login',
        data () {
            return {
                username: '',
                password: '',
                errors: {}
            }
        },
        methods: {
            submitLogin: function () {
                this.errors = {}
                let url = Urls["account:signup"]()
                let data = {
                    username: this.username,
                    password: this.password
                }
                let self = this
                const { username, password } = data
                this.$store.dispatch('obtainToken', { username, password }).then((response) => {
                    self.$router.push('/')
                }).catch((error) => {
                    console.log(error)
                    if (error.response != undefined && error.response.data != undefined) {
                        self.errors = error.response.data
                    }
                })
            }
        },
        computed: {
           isErrorsEmpty: function () {
              return Object.keys(this.errors).length === 0
           }
        }
    }
</script>

<style lang="scss" scoped>
    .card-title{
        padding-left: 20px;
    }
</style>