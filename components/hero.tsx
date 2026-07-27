import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
      <div className="animate-fade-up flex flex-col items-center" style={{ animationDelay: '0.05s' }}>
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-lavender-glow/20 glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-cyan-mana shadow-[0_0_8px_rgba(57,213,255,0.9)]" />
          A creative operating system
        </span>

        <h1 className="max-w-4xl text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          A digital forest of{' '}
          <span className="text-glow-violet text-lavender-glow">systems</span>,{' '}
          <span className="text-glow-cyan text-cyan-mana">stories</span>, and{' '}
          <span className="text-moss-green">ideas</span>
        </h1>

        <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          A multidisciplinary practice across media, systems thinking, writing,
          design, and community — where each body of work exists as its own
          explorable world.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#worlds"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-mana/40 bg-cyan-mana/10 px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:bg-cyan-mana/20 hover:shadow-[0_0_30px_-6px_rgba(57,213,255,0.6)]"
          >
            Start Exploring
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the character profile →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60">
        <ArrowDown className="size-5 animate-bounce" />
      </div>
    </section>
  )
}
