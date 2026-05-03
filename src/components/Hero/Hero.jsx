import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import HeroScene from './HeroScene'
import LiquidButton from '../UI/LiquidButton'
import ScrollIndicator from '../UI/ScrollIndicator'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.fromTo(`.${styles.badge}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.3)
        .fromTo(`.${styles.title}`, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 0.5)
        .fromTo(`.${styles.subtitle}`, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.8)
        .fromTo(`.${styles.actions}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1.0)
        .fromTo(`.${styles.scrollWrap}`, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1.3)

      // Parallax on scroll
      gsap.to(`.${styles.bgImage}`, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(contentRef.current, {
        y: -80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className={styles.hero} id="hero">
      {/* Background Video */}
      <div className={styles.bgImage}>
        <video
          src="./images/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.overlay} />
      </div>

      {/* 3D Particle Overlay */}
      <div className={styles.canvas3d}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <HeroScene />
        </Canvas>
      </div>

      {/* Content */}
      <div ref={contentRef} className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Open to opportunities ✨
        </div>

        <h1 className={styles.title}>
          Craft with<br />
          <span className={styles.highlight}>Creativity.</span>
        </h1>

        <p className={styles.subtitle}>
          Building immersive digital experiences with code & design.
          <br />
          Where technology meets artistry.
        </p>

        <div className={styles.actions}>
          <LiquidButton
            variant="primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects →
          </LiquidButton>
          <LiquidButton
            variant="glass"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </LiquidButton>
        </div>
      </div>

      <div className={styles.scrollWrap}>
        <ScrollIndicator />
      </div>
    </section>
  )
}
