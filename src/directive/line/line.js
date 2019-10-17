export default {
  name: 'line',
  bind(el, binding) {
    // console.log('el', el)
    let position = binding.arg || 'bottom'
    position = position.charAt(0).toUpperCase() + position.slice(1)
    const value = binding.value || '1px solid #eee'
    el.style[`border` + position] = value
  }
}
