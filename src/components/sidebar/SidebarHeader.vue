<template>

	<div class="navbar-header" @click="handleSidebarToggle">

        <button @click="mainmenuToggle" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
        </button>

        <router-link to="/" class="navbar-brand invisible-xs" exact><img class="float-left" src="../../images/logo.png" alt="Logo"></router-link>
        <router-link to="/" class="navbar-brand d-md-none" ><img src="../../images/logo2.png" alt="Logo"></router-link>
    </div>
</template>
<script>

export default {
	name: 'sidebar-header',
    data(){
        return{
            clickable: true
        }
    },
	methods: {
        handleSidebarToggle(e){
            e.target.parentElement.classList.toggle('collapsed')
        },

        mainmenuToggle(){
            if( this.clickable ){
                this.clickable = false;
                document.body.classList.toggle('mobile-menu');
                //e.target.childElement.classList.toggle('collapsed')
                this.clickable = true;
            }
        }
	  }
}
</script>

<style lang="scss" scoped>
    .navbar {
        .navbar-brand{
            justify-content: flex-start;
            padding-left:10%;
        }
    }

</style>