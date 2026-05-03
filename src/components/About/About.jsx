import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlassCard from '../UI/GlassCard'
import styles from './About.module.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '10+', label: 'Technologies' },
  { number: '99%', label: 'Passion Level' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.content}`,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        `.${styles.imageWrap}`,
        { x: -60, opacity: 0, rotateY: 15 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        `.${styles.statCard}`,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: `.${styles.stats}`,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Visual Side */}
          <div className={styles.imageWrap}>
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.avatarIcon}>👨‍💻</span>
                <div className={styles.orbitRing}>
                  <div className={styles.orbitDot} style={{ animationDelay: '0s' }} />
                  <div className={styles.orbitDot} style={{ animationDelay: '1.5s' }} />
                  <div className={styles.orbitDot} style={{ animationDelay: '3s' }} />
                </div>
              </div>
              <div className={styles.floatingBadge} style={{ top: '10%', right: '-10px' }}>
                <span>🎨</span> Designer
              </div>
              <div className={styles.floatingBadge} style={{ bottom: '15%', left: '-10px', animationDelay: '1s' }}>
                <span>⚡</span> Developer
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={styles.content}>
            <span className="section-label">✦ About Me</span>
            <h2 className="section-title">
              Turning ideas into<br />
              <span className="gradient-text">digital reality</span>
            </h2>
            <p className="section-subtitle">
              I'm a passionate creative developer who bridges the gap between
              stunning design and robust engineering. With a keen eye for aesthetics
              and a love for clean code, I craft web experiences that leave lasting
              impressions.
            </p>
            <p className={styles.description}>
              My journey spans from building pixel-perfect interfaces to architecting
              scalable applications. I believe in the power of thoughtful design,
              smooth animations, and intuitive user experiences. When I'm not coding,
              you'll find me exploring new technologies and pushing creative boundaries.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {stats.map((stat) => (
            <GlassCard key={stat.label} className={styles.statCard} glowColor="var(--sunset-gold)">
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
