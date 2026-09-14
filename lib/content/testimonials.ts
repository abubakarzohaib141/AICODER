export type Testimonial = {
  slug: string;
  name: string;
  role: string;
  context: string;
  quote: string;
  photo: string;
};

export const testimonials: Testimonial[] = [
  {
    slug: "fadel",
    name: "Fadel Swidan",
    role: "CEO & Founder, Scope AI",
    context: "AI Coders client, on the technology behind Scope AI CV",
    quote:
      "The work behind this platform reflects real technical depth and a thoughtful understanding of real-world user needs.",
    photo: "/testimonials/fadel.jpg",
  },
  {
    slug: "wongani",
    name: "Wongani Chilongo",
    role: "Founder, Trybae",
    context: "AI Coders client, on building the RAG AI Lenny",
    quote:
      "The team brought strong technical expertise in retrieval-augmented generation, vector embeddings, and prompt engineering, while staying closely aligned with our product goals.",
    photo: "/testimonials/wongani.jpg",
  },
  {
    slug: "dan",
    name: "Dan Raasch",
    role: "AI Automation Agency",
    context: "AI Coders client",
    quote:
      "The web development and coding work consistently exceeded expectations. A valuable team to have in your corner.",
    photo: "/testimonials/dan.png",
  },
  {
    slug: "alexandros",
    name: "Alexandros Georgariou",
    role: "Software Developer & Startup Founder",
    context: "Worked directly with AI Coders on agency automations",
    quote:
      "Top quality work, delivered fast. A couple of small bugs and change requests were handled on the spot.",
    photo: "/testimonials/alexandros.jpg",
  },
  {
    slug: "ayan",
    name: "Ayan Shaikh",
    role: "CEO, TheNobleAI",
    context: "Spoke with AI Coders about an AI and automation project",
    quote:
      "Genuinely impressive technical knowledge and clear passion for the space, with practical AI know-how and clear communication throughout.",
    photo: "/testimonials/ayan.jpg",
  },
];
