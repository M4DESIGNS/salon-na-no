export const initAccordion = () => {
  const trigger = document.querySelectorAll('.js_accordionTrigger')
  const triggerLen = trigger.length
  let i = 0

  while (i < triggerLen) {
    trigger[i].addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement

      target.classList.toggle('js_isOpen')
      target.nextElementSibling?.classList.toggle('js_isOpen')
    })
    i++
  }
}
