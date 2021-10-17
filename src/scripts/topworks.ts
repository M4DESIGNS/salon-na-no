import SwiperCore, {
  Swiper,
  SwiperOptions,
  Autoplay,
  EffectFade,
} from 'swiper/core'

SwiperCore.use([Swiper, Autoplay, EffectFade])

export const initWorksSlider = () => {
  const webswiper = new Swiper('.bl_worksSlider_web', swiperParams)
  const graphicswiper = new Swiper('.bl_worksSlider_graphic', swiperParams)
}

const swiperParams: SwiperOptions = {
  allowTouchMove: false,
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
}
