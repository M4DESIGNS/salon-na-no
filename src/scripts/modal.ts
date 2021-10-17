export const modal = () => {
  const modalOpen = () => {
    const trigger = document.querySelectorAll('.js_modal_open')
    const target = document.querySelectorAll('.js_modal')
    const cls = 'js_isOpen'
    const triggerLen = trigger.length

    for (let index = 0; index < triggerLen; index++) {
      trigger[index].addEventListener('click', (e) => {
        e.preventDefault()
        target[index].classList.add(cls)
      })
    }
  }

  const modalClose = () => {
    const trigger = document.querySelectorAll('.js_modal_close')
    const target = document.querySelectorAll('.js_modal')
    const cls = 'js_isOpen'
    const triggerLen = trigger.length
    const targetLen = target.length

    for (let index = 0; index < triggerLen; index++) {
      trigger[index].addEventListener('click', (e) => {
        e.preventDefault()

        for (let i = 0; i < targetLen; i++) {
          if (target[i].classList.contains(cls)) {
            target[i].classList.remove(cls)
          }
        }
      })
    }
  }

  modalOpen()
  modalClose()
}
