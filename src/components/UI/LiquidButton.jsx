import { useRef, useState } from 'react'
import styles from './UI.module.css'

export default function LiquidButton({ children, variant = 'primary', onClick, className = '' }) {
  const btnRef = useRef(null)
  const [ripple, setRipple] = useState(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    btn.style.setProperty('--mx', `${x}px`)
    btn.style.setProperty('--my', `${y}px`)
  }

  const handleClick = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setRipple({ x, y, key: Date.now() })
    setTimeout(() => setRipple(null), 600)
    onClick?.(e)
  }

  return (
    <button
      ref={btnRef}
      className={`${styles.liquidBtn} ${styles[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <span className={styles.liquidBtnContent}>
        {children}
      </span>
      <span className={styles.liquidBtnShine} />
      <span className={styles.liquidBtnGlow} />
      {ripple && (
        <span
          className={styles.liquidRipple}
          style={{ left: ripple.x, top: ripple.y }}
          key={ripple.key}
        />
      )}
    </button>
  )
}
