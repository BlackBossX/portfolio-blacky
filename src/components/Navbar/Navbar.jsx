import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      id="navbar"
    >
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
          <span className={styles.logoIcon}>◈</span>
          <span className={styles.logoText}>Portfolio</span>
        </a>

        <div className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.ctaBtn}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Let's Talk
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
