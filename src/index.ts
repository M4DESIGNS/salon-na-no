import './styles/style.scss'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { initLoading } from './scripts/loading'
import { initMainvisual, initMenuSlider } from './scripts/swiper'
import { scrollHeader } from './scripts/scrollheader'
import { spToggle, initSPToggle } from './scripts/spToggle'
import { modal } from './scripts/modal'
import { initAccordion } from './scripts/accordion'
import { scroll } from './scripts/smoothScroll'
import { scrollTrigger } from './scripts/scrollTrigger'

let currentWidth = window.innerWidth

window.addEventListener('DOMContentLoaded', () => {})

window.addEventListener('load', () => {
  // Loadingスライド
  // initLoading()

  scrollHeader()

  initMainvisual()

  spToggle()

  modal()

  initAccordion()

  initMenuSlider()

  scroll

  scrollTrigger()
})

window.addEventListener('resize', () => {
  if (currentWidth == window.innerWidth) {
    return
  } else {
    initMainvisual()

    initSPToggle()
  }
})
