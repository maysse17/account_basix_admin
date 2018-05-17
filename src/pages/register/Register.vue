<template>
    <div class="register">
        <div class="card">
            <div class="card-header">
                <strong>Create New Account</strong>
            </div>
            <div class="card-body card-block">
                <form @submit.prevent="submitRegister">
                    <basix-alert type="danger" :withCloseBtn="true" class="mt-4" v-if="!isErrorsEmpty">
                        <template v-for="values, key in errors">
                            <span class="badge badge-pill badge-danger">{{key}}</span>
                            <ul v-for="value in values">
                                <li>{{value}}</li>
                            </ul>
                        </template>
                    </basix-alert>
                    <div class="row form-group" :class="{'has-danger': $v.username.$error || errors.username}">
                        <div class="col col-md-3">
                            <label for="username" class=" form-control-label">Username</label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="text" id="username" name="username"
                                   placeholder="Enter Username..."
                                   class="form-control"
                                   :class="{'form-control-danger': $v.username.$error }"
                                   v-model="username"
                                   @blur="$v.username.$touch()"
                            >
                            <ul v-if="$v.username.$error">
                                <li class="form-control-feedback" v-if="!$v.username.required">Field is required</li>
                                <li class="form-control-feedback" v-if="!$v.username.minLength">Username must have at least {{$v.username.$params.minLength.min}} letters.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row form-group" :class="{'has-danger': $v.firstName.$error }">
                        <div class="col col-md-3">
                            <label for="firstName" class=" form-control-label">First Name</label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="text" id="firstName"
                                   name="firstName"
                                   placeholder="Enter Your First Name..."
                                   class="form-control"
                                   :class="{'form-control-danger': $v.firstName.$error }"
                                   v-model="firstName"
                                   @blur="$v.firstName.$touch()"
                            >
                            <ul v-if="$v.firstName.$error">
                                <li class="form-control-feedback" v-if="!$v.firstName.required">Field is required</li>
                                <li class="form-control-feedback" v-if="!$v.firstName.minLength">First Name must have at least {{$v.firstName.$params.minLength.min}} letters.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row form-group" :class="{'has-danger': $v.lastName.$error }">
                        <div class="col col-md-3">
                            <label for="lastName" class=" form-control-label">Last Name</label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="text" id="lastName"
                                   name="lastName"
                                   placeholder="Enter Your Last Name..."
                                   class="form-control"
                                   :class="{'form-control-danger': $v.lastName.$error }"
                                   v-model="lastName"
                                   @blur="$v.lastName.$touch()"
                            >
                            <ul v-if="$v.lastName.$error">
                                <li class="form-control-feedback" v-if="!$v.lastName.required">Field is required</li>
                                <li class="form-control-feedback" v-if="!$v.lastName.minLength">Last Name must have at least {{$v.lastName.$params.minLength.min}} letters.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row form-group" :class="{'has-danger': $v.email.$error }">
                        <div class="col col-md-3">
                            <label for="lastName" class=" form-control-label">Email</label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="email" id="email"
                                   name="email"
                                   placeholder="Enter Your Email..."
                                   class="form-control"
                                   :class="{'form-control-danger': $v.email.$error }"
                                   v-model="email"
                                   @blur="$v.email.$touch()"
                            >
                            <ul v-if="$v.email.$error">
                                <li class="form-control-feedback" v-if="!$v.email.required">Field is required</li>
                                <li class="form-control-feedback" v-if="!$v.email.email">Not a valid email addresse.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row form-group" :class="{'has-danger': $v.password1.$error || errors.password}">
                        <div class="col col-md-3">
                            <label for="password1" class=" form-control-label">Password</label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="password" id="password1"
                                   name="password1"
                                   placeholder="Enter Password..."
                                   class="form-control"
                                   :class="{'form-control-danger': $v.password1.$error }"
                                   v-model="password1"
                                   @blur="$v.password1.$touch()"
                            >
                            <ul v-if="$v.password1.$error">
                                <li class="form-control-feedback" v-if="!$v.password1.required">Field is required</li>
                                <li class="form-control-feedback" v-if="!$v.password1.minLength">Password must have at least {{$v.password1.$params.minLength.min}} letters.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row form-group" :class="{'has-danger': $v.password2.$error }">
                        <div class="col col-md-3">
                            <label for="password1" class=" form-control-label">Password Confirmation</label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="password" id="password2"
                                   name="password2"
                                   placeholder="Enter Same Password..."
                                   class="form-control"
                                   :class="{'form-control-danger': $v.password2.$error }"
                                   v-model="password2"
                                   @blur="$v.password2.$touch()"
                            >
                            <ul v-if="$v.password2.$error">
                                <li class="form-control-feedback" v-if="!$v.password2.sameAsPassword">Passwords must be identical</li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
                        <button class="btn btn-primary" type="submit"  @click="$v.$touch">
                            Sign Up
                        </button>
                        <button type="submit" class="btn btn-primary btn-md float-right">
                            <router-link class='link text-light float-right' :to="{name: 'Login'}">Already joined?</router-link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, minLength, email, sameAs} from 'vuelidate/lib/validators'
    import { validationMixin } from "vuelidate"
    import {HTTP} from "../../main"

    export default {
        name: 'Register',
        data () {
            return {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password1: '',
                password2: '',
                errors: {},
                allErrors: []
            }
        },
        methods: {
            submitRegister: function () {
                this.errors = {}
                let url = Urls["account:signup"]()
                let data = {
                    username: this.username,
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    password: this.password1
                }
                let self = this
                const { username, password } = data
                HTTP.post(url, data).then((response) => {
                    console.log('account created')
                    this.$store.dispatch('obtainToken', { username, password })
                }).catch((error) => {
                    console.log(error)
                });
            }
        },
        mixins: [
            validationMixin
        ],
        validations: {
            username: {
                required,
                minLength: minLength(4)
            },
            firstName: {
                required,
                minLength: minLength(4)
            },
            lastName: {
                required,
                minLength: minLength(4)
            },
            email: {
                email,
                required
            },
            password1: {
                required,
                minLength: minLength(6)
            },
            password2: {
                sameAsPassword: sameAs('password1')
            }
        },
        computed: {
           isErrorsEmpty: function () {
              return Object.keys(this.errors).length === 0
           }
        }
    }
</script>

<style lang="scss">
    .register {

        h2 {
            text-align: center;
        }
        width: 50rem;

        .down-container {
            margin-top: 2.6875rem;
        }

        .has-danger .form-control {
            border-color: #d9534f;
        }

        .has-danger .col-form-label,
        .has-danger .custom-control,
        .has-danger .form-check-label,
        .has-danger .form-control-feedback,
        .has-danger .form-control-label {
            color: #d9534f;
        }
    }
</style>
