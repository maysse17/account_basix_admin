export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center'
    },
    {
      name: 'name',
      sortField: 'name'
    },
    {
      name: 'address',
      sortField: 'address'
    },
    {
      name: 'phone',
      title: 'Phone'
    },
    {
      name: 'country',
      title: 'Country'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
