export const spToggle = () => {
  const trigger = document.getElementById('spNavBtn') as HTMLButtonElement
  const target = document.getElementById('header') as HTMLElement
  const cls = 'js_isOpen'
  const targetFixed = document.getElementsByTagName(
    'body'
  )[0] as HTMLBodyElement
  const clsFixed = 'js_isFixed'

  const switchCls = () => {
    if (
      target.classList.contains(cls) ||
      targetFixed.classList.contains(clsFixed)
    ) {
      target.classList.remove(cls)
      targetFixed.classList.remove(clsFixed)
    } else {
      target.classList.add(cls)
      targetFixed.classList.add(clsFixed)
    }
  }

  trigger.addEventListener('click', switchCls)

  const item = document.getElementsByClassName('js_spMenuItem')
  const itemLen = item.length

  for (let index = 0; index < itemLen; index++) {
    item[index].addEventListener('click', () => {
      if (target.classList.contains(cls)) {
        target.classList.remove(cls)
      }
      if (targetFixed.classList.contains(clsFixed)) {
        targetFixed.classList.remove(clsFixed)
      }
    })
  }
}

export const initSPToggle = () => {
  const target = document.getElementById('header') as HTMLElement
  const cls = 'js_isOpen'
  const targetFixed = document.getElementsByTagName(
    'body'
  )[0] as HTMLBodyElement
  const clsFixed = 'js_isFixed'

  if (target.classList.contains(cls)) {
    target.classList.remove(cls)
  }
  if (targetFixed.classList.contains(clsFixed)) {
    targetFixed.classList.remove(clsFixed)
  }
}
