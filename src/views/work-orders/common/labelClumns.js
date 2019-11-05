
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
      { label: '去预约',
        callback: (context) => {
          context.$router.push({ path: '/HelloWorld', params: { id: 123 }})
        }
      },
      { label: '重新派单',
        callback: (context) => {
          context.$router.push({ path: '/HelloWorld', params: { id: 555 }})
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
