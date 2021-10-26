export const scrollHeader = () => {
  const target = document.getElementById('header') as HTMLElement
  const clsTp = 'js_isTop'
  const clsSd = 'js_isScrolldown'
  let lastPosition = 0
  let currentPosition = 0
  let ticking = false as boolean

  const onScroll = () => {
    if (currentPosition > lastPosition && currentPosition != 0) {
      if (!target.classList.contains(clsSd)) {
        target.classList.add(clsSd)
      }
    } else {
      if (target.classList.contains(clsSd)) {
        target.classList.remove(clsSd)
      }
    }
    if (currentPosition == 0) {
      if (!target.classList.contains(clsTp)) {
        target.classList.add(clsTp)
      }
    } else {
      if (target.classList.contains(clsTp)) {
        target.classList.remove(clsTp)
      }
    }
    lastPosition = currentPosition
  }

  window.addEventListener('scroll', () => {
    currentPosition = window.scrollY
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll()
        ticking = false
      })
      ticking = true
    }
  })
}
