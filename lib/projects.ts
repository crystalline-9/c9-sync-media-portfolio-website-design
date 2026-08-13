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
  skills?: string[];
  images?: string[];
  year?: string;
  liveUrl?: string;
  linkTitle?: string;
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

    process:
      "Research, storytelling, visual experimentation, and community engagement come together throughout the project.",

    outcome: "",

    skills: [
      "OBS Studio",
      "CapCut",
      "Storytelling",
      "Research",
      "Community Engagement",
    ],

    images: [
      "/projects/crystalline-9/01.png",
      "/projects/crystalline-9/02.png",
      "/projects/crystalline-9/03.png",
    ],

    year: "2026",

    liveUrl: "https://www.youtube.com/@crystalline_9",
    linkTitle: "YouTube Channel",
    repoUrl: "",
  },

  {
    slug: "raw-rewind",
    category: "media",
    section: "Projects",
    code: "MED-002",
    title: "Raw & Rewind",

    description:
      "A live watch-along and commentary project revisiting UFC events, professional wrestling, and the stories surrounding combat sports.",

    status: "paused",

    tags: ["Podcast", "Media", "UFC", "Wrestling"],

    longDescription:
      "Raw & Rewind is a live media project built around watching, revisiting, and discussing combat sports. The project follows UFC numbered events, professional wrestling, and memorable moments across both worlds, turning the experience of watching together into an ongoing conversation.",

    purpose:
      "To create an informal space for fans to experience combat sports together through commentary, discussion, humour, and shared reactions.",

    process:
      "Live watch-alongs combine event viewing, real-time commentary, discussion, and audience interaction. Streams can also be developed into shorter videos, clips, and other pieces of media after the broadcast.",

    outcome: "",

    skills: [
      "OBS Studio",
      "Live Streaming",
      "Commentary",
      "Combat Sports",
      "Community Engagement",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "",
    repoUrl: "",
  },

  {
    slug: "youtube",
    category: "media",
    section: "Platforms",
    code: "ENV-001",
    title: "YouTube",

    description:
      "A video publishing and discovery platform used to share long-form content, livestreams, edited videos, and recorded projects with a broad public audience.",

    status: "live",

    tags: ["Video", "Publishing", "Streaming", "Community"],

    longDescription:
      "YouTube is one of the primary platforms I use to publish and organize video work. It functions as both a public archive and a distribution channel, allowing livestreams, edited videos, watch-alongs, commentary, and other creative projects to reach audiences beyond a single social network.",

    purpose:
      "To make creative work accessible to a broad audience while providing a durable home for video projects that can be discovered, watched, shared, and revisited over time.",

    process:
      "Content can move from livestreams and recorded sessions into edited videos, clips, playlists, and other formats. YouTube acts as the central publishing layer while individual projects and series can develop their own audiences and identities within the platform.",

    outcome: "",

    skills: [
      "Video Production",
      "Live Streaming",
      "Content Strategy",
      "Audience Development",
      "Digital Publishing",
    ],

    images: [],

    year: "2026",

    liveUrl: "https://www.youtube.com/@crystalline_9",
    linkTitle: "YouTube Channel",
    repoUrl: "",
  },

  {
    slug: "twitch",
    category: "media",
    section: "Platforms",
    code: "ENV-002",
    title: "Twitch",

    description:
      "A live-streaming platform used to broadcast projects, commentary, watch-alongs, and conversations in real time with an interactive audience.",

    status: "live",

    tags: ["Live Streaming", "Community", "Commentary", "Media"],

    longDescription:
      "Twitch is the live and interactive side of my media work. I use it to bring audiences into projects as they happen, particularly through live commentary, watch-alongs, gaming, and conversations around culture and current events.",

    purpose:
      "To create a more immediate and participatory space where audiences can experience projects alongside me rather than simply watching the finished result.",

    process:
      "Streams are built around live broadcasting, real-time commentary, audience interaction, and spontaneous discussion. Longer streams can also become source material for edited videos, clips, and other content across the wider media ecosystem.",

    outcome: "",

    skills: [
      "OBS Studio",
      "Live Streaming",
      "Commentary",
      "Audience Interaction",
      "Community Engagement",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Twitch Channel",
    repoUrl: "",
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
