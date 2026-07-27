'use client'

import { useMemo } from 'react'

type Particle = {
  left: string
  top: string
  size: number
  delay: string
  duration: string
  color: string
}

export function ForestBackground() {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      'rgba(57,213,255,0.8)',
      'rgba(167,139,250,0.8)',
      'rgba(47,122,78,0.9)',
    ]
    return Array.from({ length: 22 }).map((_, i) => ({
      left: `${(i * 47) % 100}%`,
      top: `${(i * 31 + 7) % 100}%`,
      size: 1.5 + ((i * 7) % 4),
      delay: `${(i % 8) * 0.9}s`,
      duration: `${9 + (i % 6) * 2}s`,
      color: colors[i % colors.length],
    }))
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden bg-forest-black"
    >
      {/* Base gradient: green -> purple depth */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,rgba(18,38,28,0.9),transparent_55%),radial-gradient(120%_100%_at_85%_100%,rgba(74,31,122,0.35),transparent_50%),linear-gradient(180deg,#0b0f0d,#0f1a14_60%,#0b0f0d)]" />

      {/* Aurora glow blobs */}
      <div
        className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(47,122,78,0.35), transparent 70%)',
          animation: 'aurora 22s ease-in-out infinite',
        }}
      />
      <div
        className="absolute right-[-12%] top-[20%] h-[60vh] w-[60vh] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(107,61,240,0.28), transparent 70%)',
          animation: 'aurora 28s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[30%] h-[50vh] w-[50vh] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(57,213,255,0.16), transparent 70%)',
          animation: 'aurora 25s ease-in-out infinite',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animation: `float-slow ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_50%,transparent_55%,rgba(11,15,13,0.85))]" />
    </div>
  )
}
