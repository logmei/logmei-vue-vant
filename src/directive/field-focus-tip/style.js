export function originPosition() {
  this.style.position = 'absolute'
  this.style.fontSize = '0rem'
  this.style.opacity = '0'
  this.style.transform = 'translateY(0px)'
  this.style.transition = 'all 1s'
  return this
}

export function upPosition() {
  this.style.fontSize = '0.2rem'
  this.style.opacity = '1'
  this.style.transform = 'translateY(-28px)'
  return this
}
