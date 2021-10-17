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

export const initMainvisual = () => {
  const swiper = new Swiper('.js_mvSlider', swiperParams1)
  initAOS()
}

export const initMenuSlider = () => {
  const swiper = new Swiper('.js_menuSlider', swiperParams2)
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
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
}

const swiperParams2: SwiperOptions = {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 100,
  navigation: {
    nextEl: '.bl_menuSlider_next',
    prevEl: '.bl_menuSlider_prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2.5,
    },
  },
}
