export const setFullScreen = (className: string) => {
  const elList = document.getElementsByClassName(className)
  const elLen = elList.length
  const windowW = window.innerWidth
  let windowH = window.innerHeight

  // min-height
  if (windowH < 500) {
    windowH = 500
  }

  for (let i = 0; i < elLen; i++) {
    const target = elList[i] as HTMLElement

    target.style.width = windowW + 'px'
    target.style.height = windowH + 'px'
  }
}
