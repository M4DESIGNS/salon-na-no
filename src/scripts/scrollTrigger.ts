import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// export const scrollTrigger = ScrollTrigger.create({
//   trigger: '.js_aboutImg',
//   start: 'top center',
//   toggleClass: 'js_isScrolled',
// })
gsap.registerPlugin(ScrollTrigger)

export const scrollTrigger = () => {
  ScrollTrigger.batch('.js_aboutImg', {
    onEnter: (batch) => gsap.to(batch, {}),
    toggleClass: 'js_isScrolled',
    start: 'top center',
    once: true,
  })
}
