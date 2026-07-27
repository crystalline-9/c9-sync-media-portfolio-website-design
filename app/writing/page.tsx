import type { Metadata } from 'next'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Writing — Verdant',
  description: 'A logbook of essays and fragments on meaning, attention, and how to live deliberately.',
}

const entries = [
  {
    title: 'The seams between systems',
    date: 'Apr 2026',
    excerpt:
      'Most things don\u2019t break inside a system. They break at the seams where one system hands off to another — and that\u2019s where I\u2019ve learned to look first.',
    read: '6 min',
  },
  {
    title: 'On editing as remembering',
    date: 'Mar 2026',
    excerpt:
      'The best cuts I\u2019ve ever made happened when I stopped trying to impress an audience and started trying to remember a feeling. Restraint is the whole craft.',
    read: '4 min',
  },
  {
    title: 'A forest is not a list',
    date: 'Feb 2026',
    excerpt:
      'Why I stopped organizing my work into tidy categories and started treating it like terrain — something you wander, not something you sort.',
    read: '5 min',
  },
  {
    title: 'Clarity is a kindness',
    date: 'Jan 2026',
    excerpt:
      'If a reader has to work, it should be on the idea, never the prose. A note to myself about the ethics of being understood.',
    read: '3 min',
  },
  {
    title: 'Prototypes that want to be wrong',
    date: 'Dec 2025',
    excerpt:
      'The fastest way to learn the real shape of a problem is to build something cheap enough to be wrong quickly. On designing for disproof.',
    read: '7 min',
  },
  {
    title: 'The archive is composting',
    date: 'Nov 2025',
    excerpt:
      'Not everything needs to ship. Some of my best work quietly grew out of half-finished experiments I almost deleted.',
    read: '4 min',
  },
]

export default function WritingPage() {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-3xl px-6">
        <header className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-mana/80">
            The Logbook
          </span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Writing &amp; thought
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            A memory archive of essays and fragments. Entries are added as the
            thinking finishes forming.
          </p>
        </header>

        <ul className="mt-12 flex flex-col gap-3">
          {entries.map((entry) => (
            <li key={entry.title}>
              <a
                href="#"
                className="group block rounded-2xl border border-lavender-glow/12 glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-mana/30 hover:shadow-[0_0_34px_-12px_rgba(57,213,255,0.5)] sm:p-6"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time className="uppercase tracking-wider">{entry.date}</time>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <span>{entry.read} read</span>
                </div>
                <h2 className="mt-2 font-serif text-2xl font-medium text-foreground transition-colors group-hover:text-cyan-mana">
                  {entry.title}
                </h2>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {entry.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-mana opacity-0 transition-all duration-300 group-hover:gap-2.5 group-hover:opacity-100">
                  Read entry <span aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  )
}
