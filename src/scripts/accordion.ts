export const initAccordion = () => {
  const trigger = document.querySelectorAll('.js_accordionTrigger')
  const triggerLen = trigger.length
  const cls = 'js_isOpen'
  let i = 0

  while (i < triggerLen) {
    trigger[i].addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement

      target.classList.toggle(cls)
      target.nextElementSibling?.classList.toggle(cls)
    })
    i++
  }
}
