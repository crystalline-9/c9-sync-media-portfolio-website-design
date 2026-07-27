import Link from 'next/link'
import Image from 'next/image'
import { worlds, accentClasses } from '@/lib/worlds'
import { cn } from '@/lib/utils'

export function WorldNodes() {
  return (
    <section id="worlds" className="relative px-6 pb-28 pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-mana/80">
            World Map
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Five worlds to explore
          </h2>
          <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Each node opens into a region of the practice. Wander in any order.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {worlds.map((world, i) => {
            const accent = accentClasses[world.accent]
            const isWide = i === 0 || i === 3
            return (
              <Link
                key={world.slug}
                href={`/work/${world.slug}`}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-2xl border glass p-px transition-all duration-500',
                  accent.border,
                  accent.glow,
                  'hover:-translate-y-1',
                  isWide && 'sm:col-span-2 lg:col-span-2',
                )}
              >
                <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={`/worlds/${world.slug}.png`}
                    alt={`Atmospheric illustration for the ${world.name} world`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-pine via-midnight-pine/30 to-transparent" />
                  <span
                    className={cn(
                      'absolute left-4 top-4 font-serif text-2xl font-semibold opacity-70',
                      accent.text,
                    )}
                  >
                    {world.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span
                    className={cn(
                      'text-[11px] font-medium uppercase tracking-[0.2em]',
                      accent.text,
                    )}
                  >
                    {world.tagline}
                  </span>
                  <h3 className="mt-1.5 font-serif text-xl font-medium text-foreground">
                    {world.name}
                  </h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {world.description}
                  </p>
                  <span
                    className={cn(
                      'mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-transform duration-300 group-hover:gap-2.5',
                      accent.text,
                    )}
                  >
                    Enter
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
