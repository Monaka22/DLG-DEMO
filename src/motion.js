const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let revealObserver
let videoObserver
let userPaused = false

export function initMotion(preserveScroll = false) {
  revealObserver?.disconnect()
  videoObserver?.disconnect()
  const root = document.querySelector('#app main')
  if (!root) return
  const matches = new Set(root.querySelectorAll('h1, h2, h3, p:not(.form-message):not(.prototype-note), .kicker, .light-kicker, .hero-photo-caption, .editorial-photo, .trust-photo, .clinic-location-banner > div, .hub-hero-photo, .shop-hero-image, .page-banner > div, .detail-hero > div, .eco-inner-hero > div, .section-lead h2, .section-lead p, .section-lead .kicker, .page-heading > *, .catalog-heading > *, .eco-mission > *, .eco-featured > *, .eco-cover-copy > *, .clinic-hero-content > *, .clinic-site h1, .clinic-site h2, .clinic-site h3, .clinic-site p, .clinic-site .kicker, .clinic-quick > b, .trust-content > *, .shop-home-copy > *, .hub-hero-copy > *, .prototype-card, .doctor-card, .doctor-teaser, .center-card, .center-list-card, .package-card, .article-tile, .article-teaser, .story-card, .product-card, .eco-matrix-grid > a, .eco-portfolio-row, .eco-story-block > *, .sustainability-panel > *, .eco-value-grid > *, .eco-partner-cta > div, .shop-editorial > *, .article-detail > h1, .article-detail > p, .journal-section, .journal-next'))
  const candidates = [...matches].filter(element => {
    for (let parent = element.parentElement; parent && parent !== root; parent = parent.parentElement) {
      if (matches.has(parent)) return false
    }
    return true
  })
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        revealObserver.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
    candidates.forEach((element, index) => {
      if (element.hidden) return
      const bounds = element.getBoundingClientRect()
      if (preserveScroll && bounds.top < innerHeight && bounds.bottom > 0) return
      element.classList.add('motion-reveal')
      if (element.parentElement.matches('.eco-featured, .shop-editorial, .sustainability-panel')) {
        element.dataset.motion = element === element.parentElement.firstElementChild ? 'left' : 'right'
      }
      const siblings = [...element.parentElement.children].filter(child => child.matches('.prototype-card, .doctor-card, .package-card, .story-card, .product-card, .eco-matrix-grid > a'))
      const delay = siblings.length ? Math.min(siblings.indexOf(element) % 4, 3) * 85 : index < 5 ? index * 65 : 0
      element.style.setProperty('--reveal-delay', `${delay}ms`)
      // Paint the starting opacity before observing above-the-fold text.
      const observer = revealObserver
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (element.isConnected && observer === revealObserver) observer.observe(element)
      }))
    })
    root.addEventListener('focusin', event => {
      event.target.closest('.motion-reveal')?.classList.add('is-revealed')
    })
  }
  setupHeroVideo(root)
}

function setupHeroVideo(root) {
  const video = root.querySelector('.eco-hero-video')
  const control = root.querySelector('[data-video-toggle]')
  if (!video || !control) return
  video.muted = true
  video.defaultMuted = true
  video.playsInline = true
  const syncLabel = () => {
    const playing = !video.paused
    const thai = document.documentElement.lang === 'th'
    control.textContent = playing ? (thai ? 'Ⅱ หยุดวิดีโอ' : 'Ⅱ Pause video') : (thai ? '▷ เล่นวิดีโอ' : '▷ Play video')
    control.setAttribute('aria-label', control.textContent.slice(2))
    control.setAttribute('aria-pressed', String(playing))
  }
  const play = () => {
    if (userPaused || reducedMotion.matches || document.hidden || !video.isConnected) return
    video.play().catch(() => { control.hidden = false; syncLabel() })
  }
  video.addEventListener('playing', () => {
    video.classList.add('is-playing')
    control.hidden = false
    syncLabel()
  })
  video.addEventListener('pause', syncLabel)
  video.addEventListener('error', () => {
    video.classList.remove('is-playing')
    control.hidden = true
  })
  control.addEventListener('click', () => {
    if (video.paused) {
      userPaused = false
      video.play().catch(syncLabel)
    } else {
      userPaused = true
      video.pause()
    }
  })
  control.hidden = false
  syncLabel()
  if (reducedMotion.matches) { video.pause(); return }
  if ('IntersectionObserver' in window) {
    videoObserver = new IntersectionObserver(entries => {
      entries[0].isIntersecting ? play() : video.pause()
    }, { threshold: 0.1 })
    videoObserver.observe(video)
  } else play()
}

document.addEventListener('visibilitychange', () => {
  const video = document.querySelector('.eco-hero-video')
  if (!video) return
  if (document.hidden) video.pause()
  else if (!userPaused && !reducedMotion.matches && video.getBoundingClientRect().bottom > 0) video.play().catch(() => {})
})
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) {
    revealObserver?.disconnect()
    document.querySelectorAll('.motion-reveal').forEach(element => element.classList.add('is-revealed'))
    document.querySelector('.eco-hero-video')?.pause()
  }
})
