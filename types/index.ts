declare module "*.css";

export interface Skill {   ///  for about page 3.2
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool';
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
}

export interface AboutContent {
  bio: string;
  skills: Skill[];
  timeline: TimelineItem[];

}

export interface Project {   // for projects page 3.3
  slug: string;
  title: string;
  description: string;
   longDescription: string;   // part of 3.4 
  techStack: string[];
  image?: string;
  screenshots: string[];   // part of 3.4
  challenges: string;    // part of 3.4
  learnings: string;     // part of 3.4
  githubUrl?: string;
  featured: boolean;
}

export interface ContactFormData {  // for contact page 3.5
  name: string;
  email: string;
  message: string;
}




