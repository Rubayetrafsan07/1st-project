import { AboutContent, Project } from "@/types";

export const aboutContent: AboutContent = {
  bio: "I am a computer science student focused on building modern web applications with clean UI and strong fundamentals. I enjoy learning by building real projects and improving them step by step.",
  skills: [
    { name: "TypeScript", icon: "🟦", category: "language" },
    { name: "React", icon: "⚛️", category: "framework" },
    { name: "Next.js", icon: "▲", category: "framework" },
    { name: "Tailwind CSS", icon: "🎨", category: "framework" },
    { name: "Node.js", icon: "🟢", category: "framework" },
    { name: "Git & GitHub", icon: "🐙", category: "tool" },
  ],
  timeline: [
    {
      period: "2023 - Present",
      title: "B.Sc. in Computer Science",
      organization: "Warsaw University of Technology",
      description:
        "Learning software engineering, algorithms, databases, and web development through coursework and projects.",
    },
    {
      period: "2025",
      title: "Portfolio & Full-Stack Projects",
      organization: "Personal Work",
      description:
        "Built and deployed portfolio projects using Next.js, TypeScript, Docker, and CI/CD workflows.",
    },
  ],
  
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Responsive portfolio built with Next.js App Router and TypeScript.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", // ✅ Added fake image
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/portfolio",
    longDescription:
      "Longer explanation of the project goals, architecture, and what it does.",
    screenshots: [],
    challenges: "Main challenge you faced and how you solved it.",
    learnings: "What you learned technically and professionally.",
    featured: true,
  },
  {
    slug: "task-manager-app",
    title: "Task Manager App",
    description:
      "Simple task tracking app with clean UI and reusable components.",
    techStack: ["React", "TypeScript", "CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop", // ✅ Added fake image
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/task-manager",
    longDescription:
      "Longer explanation of the project goals, architecture, and what it does.",
    screenshots: [],
    challenges: "Main challenge you faced and how you solved it.",
    learnings: "What you learned technically and professionally.",
    featured: false,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Dashboard showing forecast data with search and status states.",
    techStack: ["Next.js", "API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop", // ✅ Added fake image
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/weather-dashboard",
    longDescription:
      "Longer explanation of the project goals, architecture, and what it does.",
    screenshots: [],
    challenges: "Main challenge you faced and how you solved it.",
    learnings: "What you learned technically and professionally.",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

