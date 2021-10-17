import { setFullScreen } from './util/setFullScreen'
import { gsap } from 'gsap'
import { $delay } from './util/delay'
import { initMainvisual } from './swiper'
import { initWorksSlider } from './topworks'

const loadingEl = document.getElementById('js_loading') as HTMLElement

export const initLoading = () => {
  if (loadingEl) {
    setFullScreen('js_loading_wrapper')
    handleLoading()
  }
}

const handleLoading = async () => {
  const pageEl = document.getElementById('js_page') as HTMLElement
  const loadingTL = gsap.timeline()

  loadingTL
    .to(
      '.js_loading1_1',
      {
        opacity: 1,
        ease: 'Power1.easeIn',
        duration: 1,
      },
      0
    )
    .to(
      '.js_loading1_2',
      {
        opacity: 1,
        ease: 'Power1.easeIn',
        duration: 1,
      },
      0.8
    )
    .to(
      '.js_loading1_3',
      {
        opacity: 1,
        ease: 'Power1.easeIn',
        duration: 1,
      },
      1.6
    )
    .to(
      '.js_loading1',
      {
        opacity: 0,
        ease: 'Power1.easeIn',
        duration: 1,
      },
      3.5
    )
    .to(
      '.js_loading2',
      {
        opacity: 1,
        ease: 'Power1.easeIn',
        duration: 2,
      },
      4.5
    )
    .to(
      '.js_loading3',
      {
        width: 3000,
        height: 3000,
        ease: 'Power1.easeIn',
        duration: 1,
      },
      8
    )
    .to(
      loadingEl,
      {
        opacity: 0,
        ease: 'Power1.easeIn',
        duration: 1,
      },
      8
    )
    .to(
      pageEl,
      {
        opacity: 1,
        ease: 'Power1.easeIn',
        duration: 1,
      },
      9
    )

  await $delay(9000)
  loadingEl!.style.display = 'none'
  pageEl!.style.display = 'block'

  initMainvisual()
  initWorksSlider()
}
