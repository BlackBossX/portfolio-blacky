import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Experience.module.css'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    period: '2024 — Present',
    title: 'Senior Creative Developer',
    company: 'Freelance / Open Source',
    description: 'Leading frontend architecture for immersive web experiences. Building 3D interfaces, interactive data visualizations, and design systems used across multiple products.',
    tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
    color: '#E8A838',
  },
  {
    period: '2023 — 2024',
    title: 'Full-Stack Developer',
    company: 'Tech Startup',
    description: 'Developed scalable web applications from concept to deployment. Implemented real-time features, payment integrations, and responsive designs serving thousands of users.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#7B5EA7',
  },
  {
    period: '2022 — 2023',
    title: 'Frontend Engineer',
    company: 'Digital Agency',
    description: 'Crafted pixel-perfect interfaces and motion-rich experiences for premium brand clients. Collaborated with designers to push the boundaries of web design.',
    tags: ['React', 'TypeScript', 'Figma', 'Motion'],
    color: '#E05A33',
  },
  {
    period: '2021 — 2022',
    title: 'Junior Developer',
    company: 'Software Company',
    description: 'Started my journey building responsive websites and learning modern development practices. Rapidly grew from basic HTML/CSS to complex React applications.',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Git'],
    color: '#6B8F3C',
  },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = document.querySelectorAll(`.${styles.item}`)
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { 
            x: i % 2 === 0 ? -60 : 60, 
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Animate the timeline line
      gsap.fromTo(
        `.${styles.line}`,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">◈ Experience</span>
          <h2 className="section-title">My journey</h2>
          <p className="section-subtitle">
            A timeline of growth, learning, and building increasingly ambitious projects.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {experiences.map((exp, i) => (
            <div key={exp.period} className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.dot} style={{ '--dot-color': exp.color }} />
              <div className={styles.card}>
                <span className={styles.period} style={{ color: exp.color }}>{exp.period}</span>
                <h3 className={styles.role}>{exp.title}</h3>
                <span className={styles.company}>{exp.company}</span>
                <p className={styles.desc}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
