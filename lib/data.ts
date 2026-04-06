import { AboutContent, Project } from "@/types";

export const aboutContent: AboutContent = {
  bio: "Computer Science student passionate about building software and exploring new technologies. I've worked with teams, trained users, and delivered real solutions. I learn best by building projects, and I'm always looking for ways to grow and take on new challenges.",
  skills: [
    { name: "C#", icon: "🔷", category: "language" },
    { name: "C++", icon: "⬜", category: "language" },
    { name: "C", icon: "⚫", category: "language" },
    { name: "Python", icon: "🐍", category: "language" },
    { name: "MATLAB", icon: "🔶", category: "language" },
    { name: "R-Studio", icon: "📊", category: "tool" },
    { name: "HTML", icon: "🌐", category: "tool" },
    { name: "CSS", icon: "🎨", category: "tool" },
    { name: "SQL", icon: "🗄️", category: "tool" },
    { name: "GitHub", icon: "🐙", category: "tool" },
    { name: "OOD", icon: "🧱", category: "tool" },
    { name: "WPF", icon: "🎯", category: "framework" },
    { name: "WinForms", icon: "📋", category: "framework" },
    { name: "Microsoft Office", icon: "📊", category: "tool" },
    { name: "Advanced Excel (Data Analysis)", icon: "📈", category: "tool" },
    { name: "Leadership & Team Coordination", icon: "👥", category: "tool" },
    { name: "Problem-Solving & Debugging", icon: "🧩", category: "tool" },
    { name: "Adaptability & Time Management", icon: "⏱️", category: "tool" },
    { name: "Customer Experience & Training", icon: "🎓", category: "tool" },
    { name: "Reporting and Documentation", icon: "📝", category: "tool" },
  ],
  timeline: [
    {
      period: "2023 - Present",
      title: "B.Sc. in Computer Science & Information Systems",
      organization: "Warsaw University of Technology",
      description:
        "Specialization in Mathematics & Information Systems.",
    },
    {
      period: "2021",
      title: "Virtual Reality Equipment Manager",
      organization: "Virtuocity Qatar",
      description:
        "Trained 150+ users on VR interactions and protocols. Managed billing and financial tracking with 100% payment accuracy. Implemented safety protocols reducing equipment misuse by 25% and enhanced maintenance scheduling, improving efficiency by 35%.",
    },
    {
      period: "2026",
      title: "DataCamp Data Analysis and Machine Learning",
      organization: "DataCamp",
      description:
        "Learned how to analyze data with Tableau, build simple data workflows in Python using Google Colab, and work with machine learning using training and test data. Also practiced data cleaning, data visualization, and model testing through hands-on exercises.",
    },
    {
      period: "2026",
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
    title: "My Portfolio",
    description:
      "Personal portfolio website built with Next.js App Router and TypeScript.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rubayetrafsan07/My_Portfolio",
    longDescription:
      "A personal portfolio website that presents my projects, background, and contact details in a clean and responsive layout. It is built with Next.js and TypeScript to keep the structure modern, reusable, and easy to maintain.",
    screenshots: [],
    challenges: "Creating a clean layout that highlights projects without making the page feel crowded.",
    learnings: "How to organize a portfolio site with reusable components and consistent styling.",
    featured: true,
  },
  {
    slug: "car-rental-app",
    title: "Car Rental App",
    description:
      "Web-based platform for online car booking and management using Django.",
    techStack: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rubayetrafsan07/Car_Rental_App",
    longDescription:
      "Developed a web-based platform for online car booking and management using Django. It helps users search and reserve cars easily while admins manage listings and track bookings. The project focuses on better usability, automation, and data accuracy in car rental operations.",
    screenshots: [],
    challenges: "Managing booking flow and keeping car availability data accurate across user actions.",
    learnings: "How to build a practical booking system with Django and improve admin-side management.",
    featured: false,
  },
  {
    slug: "rpg-game",
    title: "RPG Game",
    description:
      "Stage-based C# RPG game with dungeon exploration, items, and player progression.",
    techStack: ["C#", "Game Logic", "OOP", "Console App"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rubayetrafsan07/RPG_Game",
    longDescription:
      "Built a stage-based RPG game in C# with systems for dungeon building, player actions, events, items, potions, weapons, and presentation flow. The project shows how different game systems can work together to create a simple but structured adventure experience.",
    screenshots: [],
    challenges: "Coordinating game flow across player, dungeon, item, and event systems without breaking progression.",
    learnings: "How to organize a game project in C# using classes and reusable systems for gameplay logic.",
    featured: false,
  },
  {
    slug: "group-chat",
    title: "Group Chat",
    description:
      "C# group chat application with a WPF client and server-side messaging flow.",
    techStack: ["C#", "WPF", ".NET", "Client-Server"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rubayetrafsan07/Group_Chat",
    longDescription:
      "Built a desktop group chat project in C# using WPF for the user interface and a separate server project for handling communication. The app is structured around sending and receiving messages in a simple chat-style experience, which shows how a client and server can work together in a real application.",
    screenshots: [],
    challenges: "Keeping the chat flow organized between the WPF client and the server-side project.",
    learnings: "How to build a desktop chat application in C# and separate client and server responsibilities clearly.",
    featured: false,
  },
  {
    slug: "ml-voice-recognition",
    title: "ML Voice Recognition (Group Project)",
    description:
      "Team-built voice authentication project using Python, machine learning, and web integration.",
    techStack: ["Python", "Django", "PyTorch", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/victoriawrobel/MLVoiceRecognition",
    longDescription:
      "Built in a team, this project focused on voice-based user authentication using machine learning. My role included implementing security evaluation metrics (False Acceptance Rate and False Rejection Rate), applying Monte Carlo Dropout for prediction uncertainty, and adding class-weighting logic to better handle imbalanced training data. I also contributed a large set of voice recordings to support model training and evaluation.",
    screenshots: [],
    challenges: "Making model results more reliable while handling class imbalance and varying voice quality across recordings.",
    learnings: "How to combine practical ML evaluation, uncertainty estimation, and data balancing techniques in a real team project.",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

