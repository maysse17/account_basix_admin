<template>
    <div>
    
        <div class="row">
            <div class="col-md-12">
                <card header-text="Search & Pagination">
                    <data-table :apiUrl="apiUrl"
                                :tableFields="tableFields"
                                :itemsPerPage="itemsPerPage"
                                :sortFunctions="sortFunctions"
                                :apiMode="apiMode"
                                :paginationPath="paginationPath"></data-table>
                </card>
            </div>
        </div>

    </div>
</template>

<script>
    import DataTable from '../components/tables/vuetable-2/VuesticDataTable'
    import FieldsDef from '../components/tables/vuetable-2/data/fields-definition';
    import ItemsPerPageDef from '../components/tables/vuetable-2/data/items-per-page-definition';

    export default {
        components: {
            DataTable
        },
        name: 'Banks',
        data () {
            return {
                apiUrl: 'https://vuetable.ratiw.net/api/users',
                apiMode: true,
                tableFields: FieldsDef.tableFields,
                itemsPerPage: ItemsPerPageDef.itemsPerPage,
                sortFunctions: FieldsDef.sortFunctions,
                paginationPath: ''
            }
        }
    }
</script>

<style scoped>

</style>