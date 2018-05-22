<template>
    <div>
        <h3>
            Vue Tables 2 - Server Side Demo
        </h3>
        <div class="col-md-8 col-md-offset-2">
            <div id="people">
                <v-server-table :url="apiUrl"
                                :columns="columns"
                                :options="options"
                >
                </v-server-table>
            </div>
        </div>
    </div>
</template>

<script>
    import ServerTable from 'vue-tables-2'

    export default {
        name: 'Banks',
        components: {
            ServerTable
        },
        methods: {
            formatDate(date) {
                return moment(date).format('DD-MM-YYYY HH:mm:ss');
            }
        },
        data () {
            return {
                apiUrl: '/api/banks',
                tableData: [],
                options: {
                    perPage: 10,
                    perPageValues: [10, 20, 50, 100],
                    requestAdapter(data) {
                        return {
                            sort: data.orderBy ? data.orderBy : 'name',
                            direction: data.ascending ? 'asc' : 'desc'

                        }
                    },
                    filterable: true,
                    templates: {
                        created_at(h, row) {
                            return this.formatDate(row.created_at);
                        },
                        updated_at(h, row) {
                            return this.formatDate(row.updated_at);
                        },
                        pushed_at(h, row) {
                            return this.formatDate(row.pushed_at);
                        }
                    },
                    params : {
                        headers: { 'Authorization': 'JWT_ACCOUNT ' + this.$store.getters.token }
                    }
                },
                columns: ['name', 'address', 'phone', 'country'],
            }
        }
    }
</script>

<style scoped>
    h3 {
        text-align: center;
    }
</style>