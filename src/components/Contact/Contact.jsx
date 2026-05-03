import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LiquidButton from '../UI/LiquidButton'
import styles from './Contact.module.css'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { name: 'GitHub', icon: '⌘', url: 'https://github.com' },
  { name: 'LinkedIn', icon: '◉', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: '✦', url: 'https://twitter.com' },
  { name: 'Email', icon: '✉', url: 'mailto:hello@portfolio.dev' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.formWrap}`,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        `.${styles.info}`,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic
    alert('Thanks for reaching out! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section ref={sectionRef} className={`section ${styles.contact}`} id="contact">
      {/* Decorative gradients */}
      <div className={styles.bgGradient1} />
      <div className={styles.bgGradient2} />

      <div className="container">
        <div className={styles.header}>
          <span className="section-label">◈ Contact</span>
          <h2 className="section-title">Let's create together</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's build something extraordinary.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Form */}
          <div className={styles.formWrap}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={`${styles.field} ${focused === 'name' || formData.name ? styles.active : ''}`}>
                <label className={styles.label} htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  required
                />
                <div className={styles.fieldGlow} />
              </div>

              <div className={`${styles.field} ${focused === 'email' || formData.email ? styles.active : ''}`}>
                <label className={styles.label} htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  required
                />
                <div className={styles.fieldGlow} />
              </div>

              <div className={`${styles.field} ${focused === 'message' || formData.message ? styles.active : ''}`}>
                <label className={styles.label} htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  className={`${styles.input} ${styles.textarea}`}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  required
                />
                <div className={styles.fieldGlow} />
              </div>

              <LiquidButton variant="primary" className={styles.submitBtn}>
                Send Message ✦
              </LiquidButton>
            </form>
          </div>

          {/* Info */}
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get in touch</h3>
              <p className={styles.infoText}>
                I'm always excited to discuss new projects, creative ideas,
                or opportunities to be part of your vision. Drop me a line!
              </p>

              <div className={styles.socials}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                  >
                    <span className={styles.socialIcon}>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.availBadge}>
              <span className={styles.availDot} />
              Currently available for freelance work
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
