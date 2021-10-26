export const initLoading = () => {
  const loadingEl = document.getElementById('loading') as HTMLElement
  const cls = 'js_loaded'

  const addCls = () => {
    loadingEl.classList.add(cls)
  }

  window.setTimeout(addCls, 3000)
}
