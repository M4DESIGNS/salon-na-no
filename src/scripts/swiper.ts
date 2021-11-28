import SwiperCore, {
  Swiper,
  SwiperOptions,
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
} from 'swiper/core'
import { initAOS } from './initAOS'

SwiperCore.use([Swiper, Autoplay, EffectFade, Pagination, Navigation])

export const initConceptSlider = () => {
  const swiper = new Swiper('.js_conceptSlider', swiperParams1)
  initAOS()
}

export const initEfficacySlider = () => {
  const swiper = new Swiper('.js_effSlider', swiperParams2)
}

const swiperParams1: SwiperOptions = {
  allowTouchMove: false,
  speed: 5000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
}

const swiperParams2: SwiperOptions = {
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 8000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.bl_effSld_next',
    prevEl: '.bl_effSld_prev',
  },
}
