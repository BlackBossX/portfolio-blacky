import styles from './UI.module.css'

export default function ScrollIndicator() {
  return (
    <div className={styles.scrollIndicator}>
      <span className={styles.scrollText}>SCROLL</span>
      <div className={styles.scrollLine}>
        <div className={styles.scrollDot} />
      </div>
      <span className={styles.scrollArrow}>↓</span>
    </div>
  )
}
