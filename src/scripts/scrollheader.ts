export const scrollHeader = () => {
  const target = document.getElementById('header') as HTMLElement
  const clsTp = 'js_isTop'
  const clsSd = 'js_isScrolldown'
  let offset = 0
  let lastPosition = 0
  let ticking = false as boolean

  const onScroll = () => {
    if (lastPosition > offset) {
      if (!target.classList.contains(clsSd)) {
        target.classList.add(clsSd)
      }
    } else {
      if (target.classList.contains(clsSd)) {
        target.classList.remove(clsSd)
      }
    }
    if (lastPosition == 0) {
      if (!target.classList.contains(clsTp)) {
        target.classList.add(clsTp)
      }
    } else {
      if (target.classList.contains(clsTp)) {
        target.classList.remove(clsTp)
      }
    }
    offset = lastPosition
  }

  window.addEventListener('scroll', () => {
    lastPosition = window.scrollY
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll()
        ticking = false
      })
      ticking = true
    }
  })
}
