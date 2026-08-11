export type Project = {
  slug: string;
  category: string;
  section: string;
  code: string;
  title: string;
  description: string;
  status: "live" | "paused" | "wip";
  tags: string[];

  // Project detail content
  longDescription?: string;
  purpose?: string;
  process?: string;
  outcome?: string;
  stack?: string[];
  year?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "crystalline-9",
    category: "media",
    section: "Projects",
    code: "MED-001",
    title: "crystalline_9",
    description:
      "An ongoing multimedia storytelling project exploring culture, identity, and the connections between people, ideas, and experiences through digital media.",
    status: "live",
    tags: ["Platform", "Creative", "Technology"],

    longDescription:
      "crystalline_9 is a creative technology platform exploring the intersection of media, storytelling, and digital systems.",

    purpose:
      "To create a space where creative work, technology, and experimentation can exist within the same ecosystem.",
  },

  {
    slug: "raw-rewind",
    category: "media",
    section: "Projects",
    code: "MED-002",
    title: "Raw & Rewind",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "paused",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "youtube",
    category: "media",
    section: "Platforms",
    code: "ENV-001",
    title: "YouTube",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "live",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "twitch",
    category: "media",
    section: "Platforms",
    code: "ENV-002",
    title: "Twitch",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "live",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "kick",
    category: "media",
    section: "Platforms",
    code: "ENV-003",
    title: "Kick",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "live",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "patreon",
    category: "media",
    section: "Platforms",
    code: "DNR-001",
    title: "Patreon",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "github",
    category: "systems-startups",
    section: "Projects",
    code: "PLT-002",
    title: "GitHub",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "linkedin",
    category: "systems-startups",
    section: "Projects",
    code: "PLT-003",
    title: "LinkedIn",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "nasa",
    category: "systems-startups",
    section: "Projects",
    code: "EXP-003",
    title: "NASA Space Apps Challenge",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "vr1",
    category: "systems-startups",
    section: "Projects",
    code: "EXP-003",
    title: "VR Game Design 1",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "vr2",
    category: "systems-startups",
    section: "Projects",
    code: "EXP-003",
    title: "VR Game Design 2",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "substack",
    category: "writing-thought",
    section: "Projects",
    code: "PLT-003",
    title: "Substack Blog",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "threads",
    category: "writing-thought",
    section: "Projects",
    code: "PLT-003",
    title: "Threads",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "reading-list",
    category: "writing-thought",
    section: "Projects",
    code: "PLT-003",
    title: "Reading List/Tracking & Notes App",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "fourthwall",
    category: "design-branding",
    section: "Projects",
    code: "PLT-003",
    title: "FourthWall",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "etsy",
    category: "design-branding",
    section: "Projects",
    code: "PLT-003",
    title: "Etsy",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "instagram",
    category: "design-branding",
    section: "Projects",
    code: "PLT-003",
    title: "Instagram",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "tiktok",
    category: "design-branding",
    section: "Projects",
    code: "PLT-003",
    title: "TikTok",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "novahaus",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Nova Haus Developments",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "ayer-massage",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Ayer Massage Therapy",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "m2n-remodelling",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "M2N Remodelling",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "pro-barrow",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Pro Barrow",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "othive",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "OTHive",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "f1",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Formula 1: Systems at Speed or Formula 1",
    description:
      "A visual exploration of engineering, competition, and the human systems behind motorsport.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "mma",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "MMA: Discipline & Performance or MMA / Fight Night",
    description:
      "A field study of combat sports, community, and the psychology of competition.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },

  {
    slug: "nhl",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "NHL: Culture of the Game or NHL",
    description:
      "A field study of combat sports, community, and the psychology of competition.",
    status: "wip",
    tags: ["Podcast", "Media", "Interview"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
