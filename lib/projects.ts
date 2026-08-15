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
      "A live-streaming platform used for real-time broadcasts, commentary, watch-alongs, and community interaction.",

    status: "live",

    tags: ["Live Streaming", "Community", "Commentary", "Media"],

    longDescription:
      "Kick is another live-streaming environment within my media ecosystem, providing a space for longer-form broadcasts, commentary, watch-alongs, and direct interaction with an audience.",

    purpose:
      "To expand the live side of my media work across platforms and create additional spaces for audiences to participate in projects as they happen.",

    process:
      "Content is developed through live broadcasts, commentary, audience interaction, and spontaneous discussion, with streams also providing material that can later be shaped into clips and edited media.",

    outcome: "",

    skills: [
      "Live Streaming",
      "Commentary",
      "Audience Interaction",
      "Community Engagement",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Kick Channel",
    repoUrl: "",
  },

  {
    slug: "patreon",
    category: "media",
    section: "Platforms",
    code: "DNR-001",
    title: "Patreon",

    description:
      "A membership platform for supporting independent creative work and building a closer community around ongoing projects.",

    status: "wip",

    tags: ["Membership", "Community", "Creator Support", "Media"],

    longDescription:
      "Patreon is intended to serve as a deeper layer of my media ecosystem, giving people who want to support the work a way to participate more directly in its development and receive additional content, behind-the-scenes material, and community experiences.",

    purpose:
      "To create a sustainable way for audiences to support independent creative work while building a closer relationship between the creator and the people who choose to follow it.",

    process:
      "The platform will bring together exclusive content, behind-the-scenes material, project updates, and community-oriented experiences that complement the public-facing work across other media platforms.",

    outcome: "",

    skills: [
      "Community Building",
      "Content Strategy",
      "Audience Engagement",
      "Creative Development",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Patreon",
    repoUrl: "",
  },

  {
    slug: "github",
    category: "systems-startups",
    section: "Projects",
    code: "PLT-002",
    title: "GitHub",

    description:
      "A development platform used to organize, version, document, and publish the code behind my digital projects.",

    status: "wip",

    tags: ["Development", "Version Control", "Open Source", "Technology"],

    longDescription:
      "GitHub is part of the technical infrastructure behind my digital work. I use it to store and manage code, track changes, develop projects, and maintain the underlying systems that turn creative ideas into working digital experiences.",

    purpose:
      "To create a structured development environment where projects can be built, documented, maintained, and developed over time.",

    process:
      "Projects are developed through version control, iterative coding, experimentation, debugging, and deployment. GitHub provides the repository and collaboration layer connecting development work with the wider digital ecosystem.",

    outcome: "",

    skills: [
      "Git",
      "GitHub",
      "Version Control",
      "Web Development",
      "Systems Thinking",
    ],

    images: [],

    year: "2026",

    liveUrl: "https://github.com/crystalline-9",
    linkTitle: "GitHub Profile",
    repoUrl: "",
  },

  {
    slug: "linkedin",
    category: "systems-startups",
    section: "Projects",
    code: "PLT-003",
    title: "LinkedIn",

    description:
      "A professional networking platform used to document my work, connect with people and organizations, and develop opportunities around creative and technical projects.",

    status: "wip",

    tags: ["Professional Network", "Brand", "Community", "Opportunities"],

    longDescription:
      "LinkedIn is part of the professional infrastructure surrounding my creative and technical work. I use it to communicate what I'm building, document projects and experience, connect with collaborators and organizations, and make the wider ecosystem of my work easier to discover.",

    purpose:
      "To create a professional bridge between my projects, the people I work with, and organizations or communities that may benefit from what I build.",

    process:
      "Projects, experience, ideas, and ongoing work are shaped into a professional presence that can be shared with potential collaborators, clients, employers, and communities.",

    outcome: "",

    skills: [
      "Professional Communication",
      "Networking",
      "Personal Branding",
      "Community Building",
      "Project Development",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "LinkedIn Profile",
    repoUrl: "",
  },

  {
    slug: "nasa",
    category: "systems-startups",
    section: "Projects",
    code: "EXP-003",
    title: "NASA Space Apps Challenge",

    description:
      "A collaborative hackathon experience at Lakehead University exploring real-world problems through NASA data, creative technology, and interdisciplinary problem-solving.",

    /*
    description:
    "A collaborative space and technology project developed with Team Wave To Earth during the NASA Space Apps Challenge. The project brought together research, creative problem-solving, and technical experimentation to address a real-world challenge through an interdisciplinary team.",
    */

    status: "wip",

    tags: ["Hackathon", "NASA", "Technology", "Innovation"],

    longDescription:
      "In 2024, I participated in the NASA International Space Apps Challenge at Lakehead University's Orillia campus. Working alongside a team of collaborators, we developed a project in response to a NASA challenge, combining research, technology, creativity, and rapid prototyping within an intensive hackathon environment.",

    purpose:
      "To explore how open scientific data and interdisciplinary collaboration can be transformed into practical, engaging, and innovative ideas.",

    process:
      "The project was developed collaboratively over the course of the hackathon, moving from challenge research and ideation through rapid prototyping, testing, refinement, and presentation.",

    outcome:
      "Our entry was recognized at the local Lakehead competition, marking a successful first step in the broader NASA Space Apps Challenge.",

    skills: [
      "Research",
      "Problem Solving",
      "Rapid Prototyping",
      "Creative Technology",
      "Collaboration",
    ],

    images: [],

    year: "2024",

    liveUrl: "",
    linkTitle: "NASA Space Apps Challenge",
    repoUrl: "",
  },

  {
    slug: "vr1",
    category: "systems-startups",
    section: "Projects",
    code: "EXP-004",
    title: "VR Game Design 1",

    description:
      "An experimental virtual-world project exploring game design, interactive environments, and social experiences through Meta Horizon Worlds.",

    status: "wip",

    tags: ["VR", "Game Design", "3D", "Interactive", "Meta Horizon"],

    longDescription:
      "VR Game Design 1 is a hands-on practice project focused on learning how to design and build an interactive virtual world in Meta Horizon Worlds. The project explores spatial design, interactive objects, player movement, environmental storytelling, and the fundamentals of creating experiences for virtual reality.",

    purpose:
      "To develop practical experience with virtual-world and game design by building a small interactive environment from the ground up.",

    process:
      "The project will move through experimentation, environment design, interaction development, testing, and iteration while exploring the tools and design principles used to create experiences in virtual reality.",

    outcome: "",

    skills: [
      "VR Design",
      "Game Design",
      "3D Environment Design",
      "Interactive Systems",
      "Prototyping",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Horizon World",
    repoUrl: "",
  },

  {
    slug: "vr2",
    category: "systems-startups",
    section: "Projects",
    code: "EXP-005",
    title: "Roblox World Design",

    description:
      "A practice project exploring interactive world-building and game design through Roblox.",

    status: "wip",

    tags: ["Roblox", "Game Design", "3D", "World Building", "Scripting"],

    longDescription:
      "Roblox World Design is a hands-on practice project focused on learning how to build an interactive world within the Roblox platform. The project explores environment design, player interaction, game mechanics, scripting, and the process of turning an idea into a playable digital experience.",

    purpose:
      "To develop practical experience with game and world design while learning the tools, workflows, and scripting concepts used to create interactive Roblox experiences.",

    process:
      "The project will involve experimenting with Roblox Studio, building environments, developing interactive elements, scripting gameplay systems, testing the experience, and iterating based on what works.",

    outcome: "",

    skills: [
      "Roblox Studio",
      "Game Design",
      "3D Environment Design",
      "Lua Scripting",
      "Prototyping",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Roblox World",
    repoUrl: "",
  },

  {
    slug: "substack",
    category: "writing-thought",
    section: "Projects",
    code: "PLT-004",
    title: "Substack",

    description:
      "A publishing platform for essays, reflections, and longer-form writing exploring ideas, culture, philosophy, and the connections between them.",

    status: "wip",

    tags: ["Writing", "Essays", "Philosophy", "Culture"],

    longDescription:
      "Substack is intended to be the written layer of my creative ecosystem: a space for developing ideas at greater length than social media allows. It provides a home for essays, reflections, research, and ongoing explorations of culture, philosophy, identity, technology, and the relationships between them.",

    purpose:
      "To create a space where ideas can be explored slowly and thoughtfully, allowing writing to become part of the larger ecosystem of creative and intellectual work.",

    process:
      "Ideas develop through observation, research, reading, writing, and revision. Longer-form pieces can also grow out of questions and conversations encountered through my other creative and media projects.",

    outcome: "",

    skills: [
      "Writing",
      "Research",
      "Critical Thinking",
      "Storytelling",
      "Philosophy",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Substack",
    repoUrl: "",
  },

  {
    slug: "threads",
    category: "writing-thought",
    section: "Projects",
    code: "PLT-005",
    title: "Threads",

    description:
      "A social platform for sharing short-form thoughts, conversations, observations, and ideas as they develop.",

    status: "wip",

    tags: ["Writing", "Social Media", "Discussion", "Ideas"],

    longDescription:
      "Threads is part of my writing and thought ecosystem, providing a space for shorter-form ideas, observations, conversations, and works in progress. Unlike longer essays published elsewhere, it allows ideas to be developed publicly and conversationally in smaller pieces.",

    purpose:
      "To create a more immediate space for sharing ideas, participating in conversations, and developing thoughts that may eventually grow into longer-form creative or written work.",

    process:
      "Ideas, observations, questions, and conversations are shared in short-form posts and developed through discussion and interaction with other people.",

    outcome: "",

    skills: [
      "Writing",
      "Social Media",
      "Communication",
      "Community Engagement",
      "Critical Thinking",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Threads",
    repoUrl: "",
  },

  {
    slug: "reading-list",
    category: "writing-thought",
    section: "Projects",
    code: "PLT-006",
    title: "Reading List / Tracking & Notes App",

    description:
      "A personal reading and knowledge-tracking system for organizing books, recording notes, and developing ideas through reading.",

    status: "wip",

    tags: ["Reading", "Knowledge Management", "Research", "Notes"],

    longDescription:
      "Reading List / Tracking & Notes App is a personal knowledge-management project designed to bring reading, note-taking, and intellectual exploration into one organized system. It is intended to track what I am reading, what I have finished, what I want to read, and the ideas, passages, and observations that emerge along the way.",

    purpose:
      "To create a structured way of maintaining a personal intellectual archive while making it easier to return to ideas, connect different works, and build upon previous reading and research.",

    process:
      "The system will combine reading tracking, categorization, notes, annotations, and personal reflections. Over time, the project can evolve into a larger knowledge base that connects books, subjects, authors, and recurring ideas.",

    outcome: "",

    skills: [
      "Knowledge Management",
      "Research",
      "Information Architecture",
      "Note-Taking",
      "Database Design",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Reading App",
    repoUrl: "",
  },

  {
    slug: "fourthwall",
    category: "design-branding",
    section: "Projects",
    code: "PLT-007",
    title: "Fourthwall",

    description:
      "A creator-commerce platform used to explore merchandise, digital products, storefront design, and the relationship between a creator's brand and their audience.",

    status: "wip",

    tags: ["Branding", "E-Commerce", "Merchandise", "Creator Economy"],

    longDescription:
      "Fourthwall is a creator-commerce project exploring how a digital brand can extend beyond content into products, merchandise, and direct audience relationships. The project provides a practical environment for experimenting with storefront design, product presentation, branding, and the broader ecosystem surrounding an independent creator.",

    purpose:
      "To explore how creative identity can translate into a cohesive storefront and product experience while developing a sustainable relationship between content, community, and commerce.",

    process:
      "The project involves developing the visual identity of the storefront, exploring product and merchandise concepts, organizing the customer experience, and experimenting with how products can complement the wider media and creative ecosystem.",

    outcome: "",

    skills: [
      "Brand Strategy",
      "Visual Design",
      "E-Commerce",
      "Product Development",
      "Content Strategy",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Fourthwall",
    repoUrl: "",
  },

  {
    slug: "etsy",
    category: "design-branding",
    section: "Projects",
    code: "PLT-008",
    title: "Etsy",

    description:
      "A marketplace project exploring product development, storefront presentation, digital and physical goods, and how independent creative work can be presented to an online audience.",

    status: "wip",

    tags: ["Product Design", "E-Commerce", "Branding", "Marketplace"],

    longDescription:
      "Etsy is a practical exploration of independent digital commerce and product-based creative work. The project focuses on developing products, presenting them through a cohesive storefront, and understanding how visual identity, product design, and marketplace dynamics come together to support an independent creative brand.",

    purpose:
      "To explore how creative ideas can be developed into tangible or digital products and presented through an established marketplace while maintaining a distinct visual identity.",

    process:
      "The project involves researching product ideas, developing visual concepts, experimenting with storefront presentation, creating product listings, and learning how branding and customer experience influence an online marketplace presence.",

    outcome: "",

    skills: [
      "Product Design",
      "Visual Design",
      "Brand Strategy",
      "E-Commerce",
      "Content Creation",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Etsy",
    repoUrl: "",
  },

  {
    slug: "instagram",
    category: "design-branding",
    section: "Projects",
    code: "PLT-009",
    title: "Instagram",

    description:
      "A visual media platform used to develop brand identity, share creative work, build an audience, and experiment with short-form storytelling and visual communication.",

    status: "wip",

    tags: ["Visual Media", "Branding", "Content", "Social Media"],

    longDescription:
      "Instagram serves as a visual layer of the creative ecosystem, providing a space to experiment with photography, short-form video, graphic design, storytelling, and audience development. The project explores how a consistent visual identity can connect individual pieces of content into a recognizable creative presence.",

    purpose:
      "To develop a cohesive visual presence while learning how content, branding, storytelling, and community engagement work together on a highly visual social platform.",

    process:
      "Content is developed through visual experimentation, photography, video, graphic design, writing, and iterative testing. Posts and short-form content can also act as entry points into longer-form projects, media, and other parts of the creative ecosystem.",

    outcome: "",

    skills: [
      "Visual Storytelling",
      "Graphic Design",
      "Brand Identity",
      "Content Creation",
      "Community Engagement",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Instagram",
    repoUrl: "",
  },

  {
    slug: "tiktok",
    category: "design-branding",
    section: "Projects",
    code: "PLT-010",
    title: "TikTok",

    description:
      "A short-form video platform used to experiment with fast-paced storytelling, creative content, audience discovery, and the development of a recognizable digital presence.",

    status: "wip",

    tags: ["Short-Form Video", "Content", "Storytelling", "Social Media"],

    longDescription:
      "TikTok provides a space for experimenting with short-form video and highly accessible forms of digital storytelling. The project explores how ideas, personality, visual identity, and editing can be condensed into engaging pieces of content while reaching audiences beyond existing communities.",

    purpose:
      "To experiment with short-form storytelling and understand how creative content, visual identity, trends, and audience behaviour can work together to build discoverability and engagement.",

    process:
      "Content develops through filming, editing, visual experimentation, trend research, storytelling, and iterative testing. Short-form pieces can also be adapted from longer media projects and used to direct audiences toward other parts of the creative ecosystem.",

    outcome: "",

    skills: [
      "Short-Form Video",
      "Video Editing",
      "Storytelling",
      "Content Strategy",
      "Audience Development",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "TikTok",
    repoUrl: "",
  },

  {
    slug: "novahaus",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Nova Haus Developments",

    description:
      "A developing brand and digital identity for a property development and construction venture focused on residential spaces, design, and long-term growth.",

    status: "wip",

    tags: ["Branding", "Real Estate", "Development", "Design"],

    longDescription:
      "Nova Haus Developments is a developing brand concept focused on residential development, construction, and the creation of thoughtfully designed spaces. The project explores how a property venture can establish a distinctive identity while bringing together architecture, design, business, and digital communication.",

    purpose:
      "To develop a clear and recognizable brand identity for a growing property development venture, creating a foundation that can support future projects, properties, and business expansion.",

    process:
      "The project combines brand development, visual experimentation, market positioning, and digital design. Concepts are developed around the relationship between residential architecture, contemporary design, and the practical needs of a growing development business.",

    outcome: "",

    skills: [
      "Brand Strategy",
      "Visual Identity",
      "Graphic Design",
      "Web Design",
      "Creative Direction",
      "Research",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Nova Haus Developments",
    repoUrl: "",
  },

  {
    slug: "ayer-massage",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Ayer Massage Therapy",

    description:
      "A small-business web design project focused on creating a professional digital presence and a straightforward online experience for a massage therapy practice.",

    status: "wip",

    tags: ["Web Design", "Small Business", "Booking", "Branding"],

    longDescription:
      "Ayer Massage Therapy is a small-business web design project focused on developing a clear, approachable digital presence for a massage therapy practice. The project explores how service information, visual presentation, and online booking can be brought together into a simple experience for prospective and returning clients.",

    purpose:
      "To create a professional online home for the practice while making it easier for clients to understand the services offered and access the booking process.",

    process:
      "The project combines website design, content organization, visual presentation, and integration with an online appointment-booking system. The design is developed around clarity, accessibility, and making the path from discovering a service to booking an appointment as straightforward as possible.",

    outcome: "",

    skills: [
      "Web Design",
      "UI Design",
      "Content Strategy",
      "Booking Integration",
      "Small Business Branding",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Ayer Massage Therapy",
    repoUrl: "",
  },

  {
    slug: "m2n-remodelling",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "M2N Remodelling",

    description:
      "A small-business branding and digital design project focused on presenting residential renovation services through a clear and professional visual identity.",

    status: "wip",

    tags: ["Branding", "Web Design", "Construction", "Small Business"],

    longDescription:
      "M2N Remodelling is a small-business creative project focused on developing a stronger visual and digital presence for a residential renovation company. The project explores how construction and remodelling services can be communicated through clear branding, visual presentation, and accessible digital content.",

    purpose:
      "To create a professional and recognizable presence for the business while making its renovation services, capabilities, and work easier for potential clients to understand.",

    process:
      "The project involves visual and brand development, content organization, and digital design. The work focuses on translating practical renovation services into a cohesive visual presentation that can support client communication and future marketing.",

    outcome: "",

    skills: [
      "Brand Strategy",
      "Web Design",
      "Visual Design",
      "Content Strategy",
      "Small Business Marketing",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "M2N Remodelling",
    repoUrl: "",
  },

  {
    slug: "pro-barrow",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Pro Barrow",

    description:
      "A product marketing and brand development project for an electric wheelbarrow company, exploring how an innovative construction tool can be positioned and communicated to its target market.",

    status: "wip",

    tags: ["Product Marketing", "Brand Strategy", "Content", "Construction"],

    longDescription:
      "Pro Barrow is a product marketing and brand development project centred around an electric wheelbarrow designed to make material transport easier and more efficient. The project explores how a practical construction product can be translated into a compelling brand and communicated through digital content, product storytelling, and audience-focused marketing.",

    purpose:
      "To develop a clearer market presence for the product while exploring how branding, content, and product storytelling can communicate its practical value to contractors, builders, landscapers, and other potential users.",

    process:
      "The project combines product research, brand strategy, content development, audience research, and visual experimentation. Marketing concepts are developed around the product's functionality, use cases, and the problems it can solve for people working with heavy materials.",

    outcome: "",

    skills: [
      "Brand Strategy",
      "Product Marketing",
      "Content Strategy",
      "Audience Research",
      "Creative Direction",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Pro Barrow",
    repoUrl: "",
  },

  {
    slug: "othive",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "OTHive",

    description:
      "An experimental project exploring community, digital spaces, and the ways technology can bring people, ideas, and creative work together.",

    status: "wip",

    tags: ["Community", "Technology", "Research", "Digital Media"],

    longDescription:
      "OTHive is an experimental project exploring the relationship between people, technology, and shared digital spaces. The project provides a space for exploring ideas around community, collaboration, information, and creative experimentation while developing a clearer understanding of how digital systems can support connection.",

    purpose:
      "To experiment with ways of creating meaningful digital spaces where people, ideas, and creative work can intersect.",

    process:
      "The project develops through research, conceptual experimentation, digital design, and exploration of different approaches to community and online interaction.",

    outcome: "",

    skills: [
      "Research",
      "Community Building",
      "Digital Strategy",
      "Creative Technology",
      "Concept Development",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "OTHive",
    repoUrl: "",
  },

  {
    slug: "f1",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "Formula 1: Systems at Speed",

    description:
      "A visual exploration of Formula 1 as an interconnected system of engineering, competition, strategy, technology, and human performance.",

    status: "wip",

    tags: ["Formula 1", "Engineering", "Systems", "Motorsport"],

    longDescription:
      "Formula 1: Systems at Speed explores Formula 1 beyond the race itself, examining the complex systems that make modern motorsport possible. The project looks at the relationship between vehicle engineering, aerodynamics, data, strategy, teamwork, regulation, and human performance.",

    purpose:
      "To explore Formula 1 as a living example of complex systems working together under extreme constraints, while making the engineering and human elements of the sport accessible through visual storytelling.",

    process:
      "The project develops through research, visual analysis, motorsport observation, and exploration of engineering and systems concepts. Race events, technical developments, team strategies, and human decisions provide material for examining how individual components interact within a much larger system.",

    outcome: "",

    skills: [
      "Systems Thinking",
      "Research",
      "Visual Storytelling",
      "Data Analysis",
      "Engineering Communication",
      "Motorsport Analysis",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "Formula 1: Systems at Speed",
    repoUrl: "",
  },

  {
    slug: "mma",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "MMA: Discipline & Performance",

    description:
      "An ongoing exploration of mixed martial arts, combat sports, discipline, and human performance through training, observation, and engagement with the sport.",

    status: "wip",

    tags: ["MMA", "Combat Sports", "Performance", "Training"],

    longDescription:
      "MMA: Discipline & Performance explores mixed martial arts as both a sport and a framework for understanding discipline, physical performance, strategy, resilience, and personal development. The project grows out of my engagement with combat sports through following MMA and UFC events, exploring disciplines such as Brazilian jiu-jitsu and kickboxing, and developing a deeper understanding of the training and culture surrounding fighting.",

    purpose:
      "To explore what combat sports can reveal about discipline, performance, strategy, competition, and the relationship between physical training and personal development.",

    process:
      "The project develops through watching and analyzing fights, following fighters and events, engaging with combat-sports communities, and exploring training through disciplines such as Brazilian jiu-jitsu and kickboxing. Observation, discussion, and personal experimentation inform the ongoing project.",

    outcome: "",

    skills: [
      "Combat Sports Analysis",
      "Research",
      "Performance Analysis",
      "Discipline",
      "Community Engagement",
      "Visual Storytelling",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "MMA: Discipline & Performance",
    repoUrl: "",
  },

  {
    slug: "nhl",
    category: "archive-experiments",
    section: "Projects",
    code: "PLT-003",
    title: "NHL: Culture of the Game",

    description:
      "An ongoing exploration of hockey, fandom, community, competition, and the culture surrounding one of Canada's most deeply embedded sports.",

    status: "wip",

    tags: ["NHL", "Hockey", "Sports Culture", "Community"],

    longDescription:
      "NHL: Culture of the Game explores hockey not only as a professional sport, but as a cultural and social phenomenon. The project grows out of my engagement with NHL games and follows the relationships between competition, fandom, identity, community, media, and the institutions that surround the sport.",

    purpose:
      "To explore how hockey functions as more than a game, examining the communities, traditions, identities, and cultural relationships that develop around competition and professional sport.",

    process:
      "The project develops through watching and following NHL games, observing fan and team cultures, exploring the history and traditions surrounding hockey, and engaging with conversations about competition, community, media, and Canadian sporting identity.",

    outcome: "",

    skills: [
      "Sports Analysis",
      "Research",
      "Cultural Analysis",
      "Community Engagement",
      "Media Analysis",
      "Storytelling",
    ],

    images: [],

    year: "2026",

    liveUrl: "",
    linkTitle: "NHL: Culture of the Game",
    repoUrl: "",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
