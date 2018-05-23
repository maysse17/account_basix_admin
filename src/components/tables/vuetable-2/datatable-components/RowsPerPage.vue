<template>
    <div class="form-horizontal">
        <template>
            <div class="form-group float-right pagination-rpp col-xs-2">
                <select class="form-control select2" v-on:change="onRowchanged()" id="rowPerPageId" v-model="selectedValue">
                    <option v-for="value in options"> {{value}}</option>
                </select>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'row-per-page',
        props: {
            label: {
                type: String,
                default: 'Row Per Page'
            },
            rowPerPageId: {
                type: String,
                default: 'row-per-page-id'
            },
            options: {
                type: Array,
                default: () => [10, 20, 50],

                validator: function (values) {
                    if (values.length === 0) {
                        return false
                    }
                    for (let value in values) {
                        if (!Number.isInteger(values[value])) return false
                    }
                    return true
                }
            }
        },

        data () {
            return {
                selectedValue: 10
            }
        },

        methods: {
            onRowchanged: function () {
                this.$emit('items-per-page', this.selectedValue)
            }
        },

        mounted: function () {
            this.selectedValue = this.options[0]
        }
    }
</script>

<style scoped>

    .pagination-rpp select {
        width: auto;
    }

</style>