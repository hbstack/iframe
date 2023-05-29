(() => {
  document.querySelectorAll('.hb-iframe-load-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement as HTMLElement
      const iframe = parent.nextElementSibling as HTMLIFrameElement
      const btnFullscreen = parent.querySelector('.hb-iframe-fullscreen') as HTMLButtonElement
      const loadInfo = parent.querySelector('.hb-iframe-load-info') as HTMLElement
      iframe.setAttribute('src', iframe.getAttribute('data-src') ?? '')
      iframe.removeAttribute('data-src')
      iframe.addEventListener('load', () => {
        // show the fullscreen button if present.
        if (btnFullscreen != null) {
          btnFullscreen.classList.remove('d-none')
        }
      })
      // hide the load button.
      btn.classList.add('d-none')
      // hide the load information.
      loadInfo.classList.add('d-none')
    })
  })

  document.querySelectorAll('.hb-iframe-fullscreen').forEach((btn) => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.hb-iframe-wrapper') as HTMLElement
      const iframe = wrapper.querySelector('.hb-iframe') as HTMLIFrameElement
      iframe.requestFullscreen().catch((err: Error) => {
        throw new Error('unable to fullscreen: ' + err.message)
      })
    })
  })
})()
