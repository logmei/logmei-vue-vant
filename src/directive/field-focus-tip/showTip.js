import { originPosition, upPosition } from './style.js'

// 显示提示信息
export function showTheTip(el, binding) {
  console.log('showTip', el)
  const span = createTitle(el, binding.value)
  const input = el.querySelector('input')
  // 获取光标
  input.onfocus = (e) => {
    e.stopPropagation()
    upPosition.call(span)
  }

  input.onblur = e => {
    el.querySelector('input').value.trim() === '' && originPosition.call(span)
  }
}
// 删除提示信息
export function deleteTheTip(el, binding) {
  const tip = el.querySelector('span[name=fieldTip]')
  el.removeChild(tip)
}

function createTitle(ele, title) {
  let span = document.createElement('span')
  span.name = 'fieldTip'
  span.innerText = title
  span = originPosition.call(span)
  ele.append(span)
  return span
}

