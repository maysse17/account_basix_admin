<template>
    <header id="header" class="header">

        <div class="header-menu">

            <div class="col-sm-7">
                <sidebar-collapse></sidebar-collapse>
                <select class="form-control" id="language-select">
                    <option value="">EN</option>
                    <option value="france">FR</option>
                    <option value="Español">ES </option>
                    <option value="Deutsch">DU </option>
                    <option value="Italiano">IT</option>
                </select>

            </div>

            <div class="col-sm-3">
                <div class="header-right">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa fa-search"></i></button>
                    </form>
                </div>
            </div>

            <div class="col-sm-2">
                <div class="user-area">
                    <a href="#">
                        <img class="user-avatar rounded-circle" src="../images/admin.jpg" alt="User Avatar">
                    </a>

                    <ul class="user-menu">

                        <li @click.prevent="logout" v-if="isAuthenticated">
                            <a class="" href="#">
                                <i class="fa fa-sign-out"></i>
                                Logout
                            </a>
                        </li>
                        <template v-else>
                            <router-link tag="li" :to="{name: 'Login'}" exact>
                                <a class="" href="">
                                    <i class="fa fa-sign-in"></i>
                                    Login
                                </a>
                            </router-link>

                            <router-link tag="li" :to="{name: 'Register'}" exact>
                                <a class="" href="">
                                    <i class="fa fa-user-plus"></i>
                                    Sign Up
                                </a>
                            </router-link>
                        </template>
                    </ul>
                </div>
            </div>
        </div>

    </header><!-- /header -->

</template>


<script>
    import {HTTP} from "../main";

    export default {
        methods: {
            logout: function (e) {
                console.log('logout called')
                this.$store.dispatch('removeToken').then((response) => {
                    delete HTTP.defaults.headers.common['Authorization']
                    this.$router.push('/auth/login')
                })
            }
        },
        computed: {
            isAuthenticated: function () {
                return this.$store.getters.isAuthenticated
            }
        }
    }

</script>

<style lang="scss">
</style>