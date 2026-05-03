import LiquidButton from '../UI/LiquidButton'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.topGlow} />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.logoIcon}>◈</span> Portfolio
            </span>
            <p className={styles.tagline}>Crafting digital experiences that inspire.</p>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Navigate</h4>
            <a href="#hero" className={styles.footLink}>Home</a>
            <a href="#about" className={styles.footLink}>About</a>
            <a href="#projects" className={styles.footLink}>Projects</a>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Connect</h4>
            <a href="https://github.com" className={styles.footLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" className={styles.footLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hello@portfolio.dev" className={styles.footLink}>Email</a>
          </div>

          <div className={styles.backToTop}>
            <LiquidButton variant="glass" onClick={scrollToTop}>Back to Top ↑</LiquidButton>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Portfolio. Built with ♡ using React & Three.js</p>
          <div className={styles.bottomLinks}>
            <span className={styles.techBadge}>React</span>
            <span className={styles.techBadge}>Three.js</span>
            <span className={styles.techBadge}>GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
