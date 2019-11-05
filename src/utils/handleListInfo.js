
/**
 * 初始化其他keys
 * @param {Object} Data
 * @param {Object} info
 * @param {String} key
 */
function initOtherKeys(Data, info, key) {
  const ignore = ['list', 'buttons', 'name', 'alias']
  // 赋值其他属性
  Object.keys(info).forEach(v => {
    if (ignore.indexOf(v) === -1) {
      Data[key] ? Data[key][v] = info[v] : Data[key] = { [v]: info[v] }
    }
  })
}
/**
 * 初始化列表数据
 * LabelArray：模板数据结构  DTO：后端返回数据, old:是否使用原来labelArray对象
 * @param {Array} LabelArray
 * @param {object} DTO
 * @param {boolean} old
 */
export function InitCardInfo(LabelArray, DTO, old) {
  const Data = {}
  LabelArray.forEach(info => {
    // 如果是list
    if (info.alias === 'list' || info.alias === 'buttons') {
      Data[info.alias] = InitCardInfo(info.list, DTO, true)
      initOtherKeys(Data, info, info.alias)
    } else {
      // 若存在别名，使用别名，否则使用name
      const columnName = info.alias ? info.alias : info.name
      if (!old) {
        const value = info.formater ? info.formater(DTO[info.name], DTO) : DTO[info.name]
        Data[columnName] ? Data[columnName].value = value : Data[columnName] = { value }
      } else {
        info.value = info.formater ? info.formater(DTO[info.name], DTO) : DTO[info.name]
      }
      initOtherKeys(Data, info, columnName)
    }
  })
  return old ? LabelArray : Data
}

