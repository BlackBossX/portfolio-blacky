import { useEffect, useRef, useState } from 'react'
import styles from './UI.module.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Skip on mobile
    if (window.matchMedia('(max-width: 768px)').matches) return

    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0
    let ringX = 0, ringY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth follow with easing
      dotX += (mouseX - dotX) * 0.25
      dotY += (mouseY - dotY) * 0.25
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      }
      requestAnimationFrame(animate)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'pointer'
      ) {
        setHovering(true)
      }
    }

    const handleMouseOut = () => setHovering(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null
  }

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${hovering ? styles.cursorHover : ''}`}
      />
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${hovering ? styles.cursorHover : ''}`}
      />
    </>
  )
}
