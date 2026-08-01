export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  status: string;
  published: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "raw-rewind",
    category: "media",
    title: "Raw & Rewind",
    description:
      "A long-form podcast exploring technology, culture, and the human stories behind innovation.",
    status: "Live",
    published: "2026",
    tags: ["Podcast", "Media", "Interview"],
  },
];
