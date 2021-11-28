import './styles/style.scss'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { initLoading } from './scripts/loading'
import { initConceptSlider, initEfficacySlider } from './scripts/swiper'
import { spToggle, initSPToggle } from './scripts/spToggle'
import { scroll } from './scripts/smoothScroll'
import { initAOS } from './scripts/initAOS'

let currentWidth = window.innerWidth

window.addEventListener('DOMContentLoaded', () => {})

window.addEventListener('load', () => {
  initConceptSlider()

  spToggle()

  initEfficacySlider()

  scroll

  initAOS()
})

window.addEventListener('resize', () => {
  if (currentWidth == window.innerWidth) {
    return
  } else {
    initConceptSlider()

    initSPToggle()
  }
})
