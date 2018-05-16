<template>
    <div class="dashboard-content">
        <basix-alert type="success" :withCloseBtn="true" class="mt-4">
            <span class="badge badge-pill badge-success">Success</span>
            You successfully read this important alert message.
        </basix-alert>
        <info></info>
        <social-networks></social-networks>
        <traffic-chart></traffic-chart>
    </div>
</template>

<script>
    import Info from '../dashboard/Info.vue';
    import Traffic from '../dashboard/Traffic.vue';
    import Socials from '../dashboard/Socials.vue';

    export default {
        components: {
            Info,
            SocialNetworks: Socials,
            TrafficChart: Traffic
        }
    }
</script>
