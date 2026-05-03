import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlassCard from '../UI/GlassCard'
import styles from './Skills.module.css'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#E8A838',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Three.js / R3F', level: 75 },
      { name: 'TypeScript', level: 85 },
      { name: 'CSS / Animations', level: 92 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#7B5EA7',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'REST / GraphQL', level: 82 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🚀',
    color: '#E05A33',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'CI/CD', level: 76 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    title: 'Design',
    icon: '✨',
    color: '#6B8F3C',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Motion Design', level: 78 },
      { name: 'Prototyping', level: 82 },
    ],
  },
]

function SkillOrb({ position, color, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.2}
          roughness={0.1}
          metalness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function SkillsScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.6} color="#E8A838" />
      <SkillOrb position={[-2, 1, 0]} color="#E8A838" scale={0.8} />
      <SkillOrb position={[2, -1, -1]} color="#7B5EA7" scale={0.6} />
      <SkillOrb position={[0, 0, -2]} color="#E05A33" scale={1} />
      <SkillOrb position={[-1, -1.5, 0]} color="#6B8F3C" scale={0.5} />
    </>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.card}`,
        { y: 60, opacity: 0, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
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
    <section ref={sectionRef} className={`section ${styles.skills}`} id="skills">
      {/* 3D Background */}
      <div className={styles.canvas3d}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }} dpr={[1, 1.5]}>
          <SkillsScene />
        </Canvas>
      </div>

      <div className="container">
        <div className={styles.header}>
          <span className="section-label">◈ Skills</span>
          <h2 className="section-title">My tech arsenal</h2>
          <p className="section-subtitle">
            A diverse toolkit refined through years of building real-world products and creative experiments.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <GlassCard key={cat.title} className={styles.card} glowColor={cat.color}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{
                          '--fill-width': `${skill.level}%`,
                          '--fill-color': cat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
