import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlassCard from '../UI/GlassCard'
import LiquidButton from '../UI/LiquidButton'
import styles from './Projects.module.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'EcoTrack Dashboard',
    description: 'Real-time environmental monitoring dashboard with interactive data visualizations and predictive analytics.',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    color: '#6B8F3C',
    gradient: 'linear-gradient(135deg, #1a2f0a 0%, #2d4a12 100%)',
    icon: '🌿',
  },
  {
    title: 'SoundWave Studio',
    description: 'Browser-based music production tool with real-time audio processing, beat sequencer, and collaborative editing.',
    tags: ['Web Audio API', 'React', 'WebRTC', 'Canvas'],
    color: '#7B5EA7',
    gradient: 'linear-gradient(135deg, #1a1030 0%, #2d1e50 100%)',
    icon: '🎵',
  },
  {
    title: 'Nomad Exchange',
    description: 'Cryptocurrency portfolio tracker with live market data, AI-powered predictions, and automated trading signals.',
    tags: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    color: '#E8A838',
    gradient: 'linear-gradient(135deg, #2a1f0a 0%, #3d2e12 100%)',
    icon: '💰',
  },
  {
    title: 'PixelForge Engine',
    description: '2D game engine with visual scripting, physics simulation, and cross-platform export capabilities.',
    tags: ['TypeScript', 'WebGL', 'Rust/WASM', 'Canvas'],
    color: '#E05A33',
    gradient: 'linear-gradient(135deg, #2a0f0a 0%, #3d1812 100%)',
    icon: '🎮',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.projectCard}`,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
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

  return (
    <section ref={sectionRef} className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">◈ Projects</span>
          <h2 className="section-title">Featured work</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my passion for building polished, functional, and innovative applications.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <GlassCard
              key={project.title}
              className={styles.projectCard}
              glowColor={project.color}
            >
              <div className={styles.cardPreview} style={{ background: project.gradient }}>
                <span className={styles.projectIcon}>{project.icon}</span>
                <div className={styles.previewShimmer} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <LiquidButton variant="glass" className={styles.cardBtn}>
                    View Details →
                  </LiquidButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
