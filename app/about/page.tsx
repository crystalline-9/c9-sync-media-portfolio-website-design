import type { Metadata } from 'next'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About — Verdant',
  description: 'A character profile: a multidisciplinary creative working across media, systems, writing, design, and community.',
}

const workOn = [
  'Video & visual storytelling',
  'Systems thinking & early-stage ventures',
  'Essays & philosophy',
  'Brand identity & design systems',
  'Community & social-impact work',
]

const themes = [
  { name: 'Systems', desc: 'Seeing the loops beneath the surface.' },
  { name: 'Storytelling', desc: 'Turning feeling into shareable form.' },
  { name: 'Community', desc: 'Building rooms people want to stay in.' },
  { name: 'Design', desc: 'Making the right thing feel inevitable.' },
  { name: 'Philosophy', desc: 'Asking what any of it is for.' },
]

const stats = [
  { label: 'Disciplines', value: '05' },
  { label: 'Years wandering', value: '08' },
  { label: 'Worlds mapped', value: '05' },
]

export default function AboutPage() {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-mana/80">
            Character Profile
          </span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-medium text-foreground sm:text-5xl">
            About the wanderer
          </h1>
        </header>

        {/* Profile card */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Avatar panel */}
          <div className="flex flex-col gap-4">
            <div className="glass relative aspect-square overflow-hidden rounded-2xl border border-lavender-glow/20 shadow-[0_0_40px_-12px_rgba(167,139,250,0.4)]">
              <Image
                src="/avatar.png"
                alt="Abstract avatar representing the creative"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <div className="glass grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-lavender-glow/15">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center px-2 py-4 text-center">
                  <span className="font-serif text-xl text-cyan-mana">{s.value}</span>
                  <span className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Intro + details */}
          <div className="flex flex-col gap-6">
            <div className="glass rounded-2xl border border-lavender-glow/12 p-6 sm:p-8">
              <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                I&apos;m a multidisciplinary creative who treats every project as
                a small world to be explored. My work moves between media,
                systems thinking, writing, design, and community — not because I
                can&apos;t pick a lane, but because the interesting things tend to
                live in the spaces between them.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                I care about clarity, atmosphere, and making people feel a little
                more capable than they did before. Most of what I make is an
                attempt to slow down, pay attention, and build something honest.
              </p>
            </div>

            <div className="glass rounded-2xl border border-lavender-glow/12 p-6 sm:p-8">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl text-foreground">
                <span className="size-2 rounded-full bg-moss-green" />
                What I work on
              </h2>
              <ul className="flex flex-wrap gap-2.5">
                {workOn.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-moss-green/30 bg-moss-green/5 px-3.5 py-1.5 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core themes */}
        <section className="mt-14">
          <h2 className="mb-5 flex items-center gap-2 font-serif text-2xl text-foreground">
            <span className="size-2 rounded-full bg-lavender-glow" />
            Core themes
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t) => (
              <div
                key={t.name}
                className="glass rounded-2xl border border-lavender-glow/12 p-5 transition-all duration-300 hover:border-lavender-glow/30 hover:shadow-[0_0_30px_-12px_rgba(167,139,250,0.5)]"
              >
                <h3 className="font-serif text-lg text-lavender-glow">{t.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  )
}
