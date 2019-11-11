
// card
const cardLabel = [
  { name: 'actiontype', alias: 'tip', className: 'tip1' },
  { name: 'name', alias: 'title' },
  { name: 'type', alias: 'subtitle', className: 'subtitle1' },
  { alias: 'list',
    list: [
      { label: '单号', name: 'actiontype' },
      { label: '日期', name: 'date' }
    ]
  },
  { alias: 'buttons',
    list: [
      { label: '去美容',
        callback(params) {
          console.log('去美容', this, params)
          this.$router.push({ path: '/HelloWorld', params: params })
        }
      },
      { label: '去图书馆',
        callback(params) {
          console.log('去图书馆', this, params)
          this.$router.push({ path: '/HelloWorld', params: params })
        }
      }
    ] }
]

export default {
  cardLabel
}

export {
  cardLabel
}
