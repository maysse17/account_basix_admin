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
            formatDate: function (date) {
                return moment(date).format('DD-MM-YYYY HH:mm:ss');
            }
        },
        data () {
            return {
                apiUrl: 'https://api.github.com/users/matfish2/repos',
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
                    responseAdapter({data}) {
                        return {
                            data,
                            count: data.length
                        }
                    },
                    filterable: true,
                    sortIcon:{
                        base:'fa fa-sort',
                        up: 'fa fa-sort-up',
                        down: 'fa fa-sort-down'
                    },

                },
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
                columns: ['name', 'created_at', 'updated_at', 'pushed_at'],
            }
        }
    }
</script>

<style scoped>
    h3 {
        text-align: center;
    }
    .pagination {
        margin-top: 0;
    }
    .btn.btn-border {
        border: 1px solid;
        margin-right: 2px;
    }
    .vuetable-pagination-info {
        margin-top: 8px !important;
    }
    span.sort-icon {
        float: right;
        color: #ff9100;
    }
</style>