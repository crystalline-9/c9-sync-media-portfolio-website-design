import type { Metadata } from 'next'
import { Mail, MapPin, Compass } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact — Verdant',
  description: 'Reach out to collaborate on media, systems, writing, design, or community work.',
}

const details = [
  { icon: Mail, label: 'Email', value: 'hello@verdant.studio' },
  { icon: MapPin, label: 'Based', value: 'Wherever the signal is calm' },
  { icon: Compass, label: 'Open to', value: 'Collaboration & commissions' },
]

export default function ContactPage() {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-mana/80">
            Send a Signal
          </span>
          <h1 className="mt-3 text-balance font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Let&apos;s build a world
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Have a project, a question, or just want to wander an idea together?
            Leave a note and I&apos;ll find you.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <ContactForm />

          <aside className="flex flex-col gap-3">
            {details.map((d) => (
              <div
                key={d.label}
                className="glass flex items-center gap-4 rounded-2xl border border-lavender-glow/12 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-moss-green/30 bg-moss-green/5">
                  <d.icon className="size-4 text-moss-green" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="text-sm text-foreground">{d.value}</span>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  )
}
