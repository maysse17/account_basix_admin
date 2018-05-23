<template>
    <div class="table-responsive">
        <div class="row">
        <div class="col-md-12">
            <filter-bar @filter="onFilterSet"></filter-bar>
            <rows-per-page
                    @items-per-page="onItemsPerPage"
            >
            </rows-per-page>
        </div>
        </div>
        <div class="table-responsive">
        <vuetable ref="vuetable"
                  :apiUrl="apiUrl"
                  :apiMode="apiMode"
                  :fields="tableFields"
                  :data="tableData"
                  :dataTotal="dataCount"
                  :dataManager="dataManager"
                  :css="css.table"
                  :dataPath="dataPath"
                  v-bind:paginationPath="paginationPath"
                  :appendParams="moreParams"
                  :perPage="perPage"
                  :httpOptions="httpOptions"
                  @vuetable:pagination-data="onPaginationData"
        >
        </vuetable>
        </div>
        <div class="d-flex justify-content-center pagination mb-4">
            <vuetable-pagination ref="pagination"
                                 :css="css.pagination"
                                 :onEachSide="onEachSide"
                                 @vuetable-pagination:change-page="onChangePage">

            </vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
    import FilterBar from './datatable-components/FilterBar.vue';
    import ItemsPerPage from './datatable-components/ItemsPerPage.vue';
    import Vue from 'vue';
    import LocalData from './data/local-data';
    import DataTableStyles from './data/data-table-styles';
    import RowsPerPage from './datatable-components/RowsPerPage.vue'

    const originalData = LocalData.data

    export default {
        name: 'basix-data-table',
        components: {
            FilterBar,
            Vuetable,
            VuetablePagination,
            ItemsPerPage,
            RowsPerPage
        },
        props: {
            apiUrl: {
                type: String
            },
            tableFields: {
                type: Array,
                required: true
            },
            itemsPerPage: {
                type: Array,
                required: true
            },
            onEachSide: {
                type: Number,
                default () {
                    return 2
                }
            },
            apiMode: {
                type: Boolean,
                default () {
                    return true
                }
            },
            data: {
                type: Array
            },
            sortFunctions: {
                type: Object
            },
            paginationPath: {
                type: String,
                default () {
                    return ''
                }
            },
            httpOptions: {
                type: Object,
                default () {
                    return {}
                }
            },
            dataPath: {
                type: String,
                default: 'results'
            }
        },
        data () {
            return {
                tableData: LocalData,
                perPage: 6,
                colorClasses: {},
                moreParams: {},
                dataCount: 0,
                css: DataTableStyles,
            }
        },
        methods: {
            onFilterSet (filterText) {
                if (this.apiMode) {
                    this.moreParams = {
                        'filter': filterText
                    }
                } else {
                    const txt = new RegExp(filterText, 'i')
                    this.tableData.data = originalData.filter(function (item) {
                        return item.name.search(txt) >= 0 || item.email.search(txt) >= 0
                    })
                }
                Vue.nextTick(() => this.$refs.vuetable.refresh())
            },
            onItemsPerPage (itemsPerPageValue) {
                this.perPage = itemsPerPageValue
                Vue.nextTick(() => this.$refs.vuetable.refresh())
            },
            onPaginationData (paginationData) {
                this.$refs.pagination.setPaginationData(paginationData)
            },
            onChangePage (page) {
                this.$refs.vuetable.changePage(page)
            },
            dataManager (sortOrder, pagination) {
                let data = this.tableData.data
                let sortFunctions = this.sortFunctions

                if (sortOrder.length > 0) {
                    data.sort(function (item1, item2) {
                        const sortField = sortOrder[0].sortField
                        let fn = sortFunctions[sortField]
                        if (fn) {
                            return fn(item1[sortField], item2[sortField])
                        }
                    })

                    if (sortOrder[0].direction === 'desc') {
                        data.reverse()
                    }
                }

                pagination = this.$refs.vuetable.makePagination(data.length)

                return {
                    pagination: pagination,
                    data: data.slice(pagination.from - 1, pagination.to)
                }
            }
        }
    }
</script>

<style lang="scss">
    .pagination a{
        color: #fff !important;
    }
    .dropdown-item{
        cursor: pointer;
    }
    @media (max-width: 1258px) {
        .pagination-link-btn:first-child, .pagination-link-btn:last-child {
            display: none;
        }

        .pagination-link-btn:nth-child(2) {
            border-top-left-radius: 5px !important;
            border-bottom-left-radius: 5px !important;
        }

        .pagination-link-btn:nth-last-child(2) {
            border-top-right-radius: 5px !important;
            border-bottom-right-radius: 5px !important;
        }
    }

    @media (max-width: 576px) {
        .hide-not-focused-btn:not(.focus) {
            display: none;
        }
    }
    .form-inline input[type="text"] {
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0.25rem;
        color: #495057;
        font-size: 1rem;;
    }

</style>
