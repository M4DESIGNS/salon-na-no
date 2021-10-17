import AOS from 'aos'

export const initAOS = () => {
  AOS.init({
    duration: 1000,
    easing: 'linear',
    once: true,
  })
}
