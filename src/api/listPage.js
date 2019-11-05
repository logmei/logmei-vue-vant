
export function searchList(params) {
  console.log('searchlist', params)
  return new Promise(resolve => {
    resolve({
      code: 0,
      msg: 'success',
      result: [
        '中国',
        '斯利康中国laksdjf',
        '涉及到了反馈中国',
        '上课了好到底',
        '聊聊好'
      ]
    })
  })
}

export function searchListObj(params) {
  console.log('searchListObj', params)
  return new Promise(resolve => {
    resolve({
      code: 0,
      msg: 'success',
      result: {
        pageNum: 1,
        pageSize: 10,
        pages: 1,
        total: 13,
        list: [
          {
            actiontype: '任务1',
            name: '安徽牛肉拉面',
            type: '微辣',
            danhao: 'SS2019091100001',
            date: 1572331173000

          },
          {
            actiontype: '维护2',
            name: '大盘鸡鸡蛋面',
            type: '不辣',
            danhao: 'SS2018091100001',
            date: 1572331100000

          },
          {
            actiontype: '任务3',
            name: '大盘鸡鸡蛋面3',
            type: '不辣',
            danhao: 'SS2019091100001',
            date: 1572331173000

          },
          {
            actiontype: '维护4',
            name: '大盘鸡鸡蛋面4',
            type: '微辣',
            danhao: 'SS2018091100001',
            date: 1572331100000

          },
          {
            actiontype: '任务5',
            name: '大盘鸡鸡蛋面5',
            type: '不辣',
            danhao: 'SS2019091100001',
            date: 1572331173000

          },
          {
            actiontype: '维护6',
            name: '大盘鸡鸡蛋面6',
            type: '微辣',
            danhao: 'SS2018091100001',
            date: 1572331100000

          },
          {
            actiontype: '任务7',
            name: '大盘鸡鸡蛋面7',
            type: '不辣',
            danhao: 'SS2019091100001',
            date: 1572331173000

          },
          {
            actiontype: '维护8',
            name: '大盘鸡鸡蛋面8',
            type: '微辣',
            danhao: 'SS2018091100001',
            date: 1572331100000

          },
          {
            actiontype: '任务9',
            name: '大盘鸡鸡蛋面9',
            type: '不辣',
            danhao: 'SS2019091100001',
            date: 1572331173000

          },
          {
            actiontype: '维护10',
            name: '大盘鸡鸡蛋面10',
            type: '微辣',
            danhao: 'SS2018091100001',
            date: 1572331100000

          }
        ]
      }
    })
  })
}
