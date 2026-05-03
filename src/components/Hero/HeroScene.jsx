import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function GlassOrb({ position, scale, speed, color }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
  })

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 80 }) {
  const meshRef = useRef()

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      siz[i] = Math.random() * 0.03 + 0.01
    }
    return [pos, siz]
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    const posArray = meshRef.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += Math.sin(time * 0.3 + i * 0.5) * 0.001
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = time * 0.02
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#E8A838"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#E8A838" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#7B5EA7" />

      <GlassOrb position={[-3.5, 1.5, -2]} scale={0.6} speed={1.2} color="#E8A838" />
      <GlassOrb position={[3, -1, -3]} scale={0.8} speed={0.8} color="#7B5EA7" />
      <GlassOrb position={[1, 2.5, -1]} scale={0.4} speed={1.5} color="#E05A33" />
      <GlassOrb position={[-2, -2, -2]} scale={0.5} speed={1.0} color="#6B8F3C" />
      <GlassOrb position={[4, 1, -4]} scale={0.3} speed={1.8} color="#D4853A" />

      <Particles count={100} />
    </>
  )
}
