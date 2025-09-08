'use client'

import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Scroll reveal for modules
    const revealItems = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const delay = el.getAttribute('data-reveal-delay') || '0ms'
          el.style.transitionDelay = delay
          el.classList.remove('opacity-0', 'translate-y-4')
          el.classList.add('opacity-100', 'translate-y-0')
          io.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    
    revealItems.forEach((el) => io.observe(el))

    // Subtle parallax accent in Modules
    const modulesSection = document.getElementById('modules')
    const blob = document.getElementById('modules-parallax')
    let ticking = false
    
    function updateParallax() {
      if (!modulesSection || !blob) return
      const rect = modulesSection.getBoundingClientRect()
      const viewH = window.innerHeight || 1
      const centerOffset = (rect.top + rect.height / 2) - (viewH / 2)
      const translateY = -centerOffset * 0.08 // parallax factor
      blob.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`
      ticking = false
    }
    
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax)
        ticking = true
      }
    }
    
    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateParallax)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateParallax)
    }
  }, [])

  return null
}
