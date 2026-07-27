export type Accent = 'green' | 'violet' | 'cyan'

export type World = {
  slug: string
  index: string
  name: string
  tagline: string
  description: string
  accent: Accent
  thesis: string
  context: string
  process: string
  outcome: string
  notes: string
  tags: string[]
}

export const worlds: World[] = [
  {
    slug: 'media',
    index: 'I',
    name: 'Media',
    tagline: 'Video · Storytelling',
    description:
      'Films, edits, and visual narratives that turn moments into memory and feeling into form.',
    accent: 'violet',
    thesis:
      'Story is the oldest technology we have. Media is how I keep practicing it.',
    context:
      'A body of video work, short documentaries, and visual essays exploring how people make meaning. The intent is never spectacle for its own sake — it is to slow time down enough that an audience can feel a single, honest thing.',
    process:
      'Each piece begins with a question rather than a script. I gather footage like field notes, then edit by feel — letting rhythm, silence, and color carry the weight that words cannot. Sound design is treated as a character, not a layer.',
    outcome:
      'Work that has screened in community gatherings and circulated online, valued less for polish than for the quiet recognition it sparks in people who watch it.',
    notes:
      'The best edits happen when I stop trying to impress and start trying to remember. Restraint is the whole craft.',
    tags: ['Documentary', 'Editing', 'Sound', 'Visual essay'],
  },
  {
    slug: 'systems-startups',
    index: 'II',
    name: 'Systems & Startups',
    tagline: 'Systems thinking · Ventures',
    description:
      'Ideas modeled as living systems — startups, frameworks, and bets on how the world could work.',
    accent: 'cyan',
    thesis:
      'A startup is an argument about the future, written in product instead of prose.',
    context:
      'A collection of ventures and conceptual frameworks built around a single discipline: seeing problems as systems with feedback loops, incentives, and emergent behavior rather than as isolated features.',
    process:
      'I map the system before I touch the solution — stocks, flows, and the leverage points hiding inside them. Prototypes come fast and cheap, designed to be wrong quickly so the real shape of the problem can reveal itself.',
    outcome:
      'Several early-stage concepts taken from napkin to working prototype, and a set of mental models I return to whenever something feels harder than it should be.',
    notes:
      'Most things break at the seams between systems, not inside them. I spend most of my time at the seams.',
    tags: ['Systems thinking', 'Product', 'Strategy', 'Prototyping'],
  },
  {
    slug: 'writing-thought',
    index: 'III',
    name: 'Writing & Thought',
    tagline: 'Writing · Philosophy',
    description:
      'Essays and fragments on meaning, attention, and how to live deliberately.',
    accent: 'violet',
    thesis:
      'Writing is thinking made visible — and slow enough to argue with.',
    context:
      'An ongoing practice of essays, notes, and philosophical fragments. The throughline is a curiosity about how attention shapes a life, and how we might design our days around what actually matters.',
    process:
      'I write to find out what I think, not to report it. Drafts start as messy voice notes and walking thoughts, then get pruned ruthlessly until only the load-bearing sentences remain.',
    outcome:
      'A growing logbook of public writing that a small, generous audience reads and replies to — the kind of correspondence that makes the internet feel small and warm again.',
    notes:
      'Clarity is a form of kindness. If a reader has to work, it should be on the idea, never the prose.',
    tags: ['Essays', 'Philosophy', 'Attention', 'Notes'],
  },
  {
    slug: 'design-branding',
    index: 'IV',
    name: 'Design & Branding',
    tagline: 'Design · Identity',
    description:
      'Visual systems, brand worlds, and interfaces with a calm sense of place.',
    accent: 'green',
    thesis:
      'A brand is not a logo. It is the feeling someone is left holding.',
    context:
      'Identity and interface work for small teams and personal projects — building visual systems that feel coherent, human, and unmistakably theirs rather than borrowed from a trend.',
    process:
      'I start with adjectives, not artwork. Once the feeling is named, everything — type, color, motion, spacing — becomes a decision in service of it. Systems over one-off screens, always.',
    outcome:
      'Brand worlds and design systems that teams can actually use without me in the room, because the rules are legible and the why is documented.',
    notes:
      'Good design disappears into use. The compliment I chase is "it just feels right," even when no one can say why.',
    tags: ['Brand identity', 'Design systems', 'UI', 'Type'],
  },
  {
    slug: 'archive-experiments',
    index: 'V',
    name: 'Archive / Experiments',
    tagline: 'Community · Social impact',
    description:
      'Half-finished worlds, community projects, and experiments still finding their shape.',
    accent: 'cyan',
    thesis:
      'Not everything needs to ship. Some things just need to be tried.',
    context:
      'A living archive of experiments, community initiatives, and social-impact projects — the work that lives between disciplines and refuses to sit neatly inside a portfolio category.',
    process:
      'Lower stakes, higher curiosity. These projects exist to test a hunch, gather people, or repair something small in the world. The metric is whether anyone felt more capable afterward.',
    outcome:
      'Community gatherings organized, tools shared freely, and a pile of generative dead-ends that quietly fed everything else in this forest.',
    notes:
      'The archive is where future work is composting. I visit it more than I expected to.',
    tags: ['Community', 'Social impact', 'Experiments', 'Open work'],
  },
]

export function getWorld(slug: string) {
  return worlds.find((w) => w.slug === slug)
}

export const accentClasses: Record<
  Accent,
  { text: string; border: string; glow: string; dot: string; ring: string }
> = {
  green: {
    text: 'text-moss-green',
    border: 'border-moss-green/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(47,122,78,0.6)]',
    dot: 'bg-moss-green',
    ring: 'shadow-[0_0_30px_-10px_rgba(47,122,78,0.5)]',
  },
  violet: {
    text: 'text-lavender-glow',
    border: 'border-lavender-glow/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(167,139,250,0.6)]',
    dot: 'bg-lavender-glow',
    ring: 'shadow-[0_0_30px_-10px_rgba(167,139,250,0.5)]',
  },
  cyan: {
    text: 'text-cyan-mana',
    border: 'border-cyan-mana/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(57,213,255,0.55)]',
    dot: 'bg-cyan-mana',
    ring: 'shadow-[0_0_30px_-10px_rgba(57,213,255,0.5)]',
  },
}
