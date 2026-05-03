import { useRef } from 'react'
import styles from './UI.module.css'

export default function GlassCard({ children, className = '', tilt = true, glowColor }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!tilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    cardRef.current.style.setProperty('--glow-x', `${x}px`)
    cardRef.current.style.setProperty('--glow-y', `${y}px`)
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={cardRef}
      className={`${styles.glassCard} ${className}`}
      style={glowColor ? { '--card-glow': glowColor } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.glassCardGlow} />
      {children}
    </div>
  )
}
