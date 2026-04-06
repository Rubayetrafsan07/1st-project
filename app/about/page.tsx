import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { aboutContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Goose | About",
  description: "Learn more about me, my skills, education, and experience.",
};

const languages = [
  { name: "English", level: "C1: Fluent" },
  { name: "Hindi", level: "B2" },
  { name: "Bangla", level: "C2: Native" },
  { name: "Arabic", level: "A2" },
  { name: "Polish", level: "A1" },
  { name: "Spanish", level: "A1" },
];

const hobbies = [
  "Traveling",
  "Watching Movies",
  "Playing Football",
  "Horse Riding",
  "Coordinating student club events and community meetups",
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <FadeIn>
        <div className="mb-14 text-center">
          <span className="hover-float-y inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            Personal Profile
          </span>

          <h1 className="hover-float-y mt-5 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            About Me
          </h1>

          <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

          <p className="hover-float-y mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            A quick look at my journey, technical strengths, and the kind of work I enjoy creating.
          </p>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <ScrollReveal effect="fade-up" className="hover-float-y rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-md transition-colors hover:border-cyan-300/25">
            <h3 className="mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-2xl font-semibold text-transparent">Bio</h3>
            <p className="max-w-2xl text-lg leading-7 text-text-secondary text-justify">
              {aboutContent.bio}
            </p>
          </ScrollReveal>
          
          <ScrollReveal effect="fade" delay={0.2} className="hover-float-y rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-md transition-colors hover:border-cyan-300/25">
            <h3 className="mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-2xl font-semibold text-transparent">Skills</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {aboutContent.skills.map((skill) => (
                <ScrollReveal
                  key={skill.name}
                  effect="scale"
                  className="flex flex-col items-center rounded-2xl border border-white/10 bg-background/40 p-3 text-center transition-colors hover:border-cyan-300/30 hover:bg-background/60"
                >
                  <span className="text-lg mb-1">{skill.icon}</span>
                  <span className="text-xs font-medium text-center text-text-secondary">{skill.name}</span>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal effect="fade" delay={0.4} className="hover-float-y rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-md transition-colors hover:border-cyan-300/25">
            <h3 className="mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-2xl font-semibold text-transparent">Education</h3>
            <div className="space-y-6">
              {aboutContent.timeline.filter(item => item.title.includes("B.Sc.") || item.title.includes("Warsaw")).map((item, index) => (
                <ScrollReveal
                  key={index}
                  effect="slide-left"
                  delay={index * 0.1}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-cyan-100">{item.title}</h4>
                    <p className="text-sm font-medium text-sky-200/90">{item.organization}</p>
                    <p className="mt-3 text-muted-foreground leading-7">{item.description}</p>
                    <span className="block text-sm text-text-secondary">{item.period}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal effect="fade" delay={0.6} className="hover-float-y rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-md transition-colors hover:border-cyan-300/25">
            <h3 className="mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-2xl font-semibold text-transparent">Experience</h3>
            <div className="space-y-6">
              {aboutContent.timeline.filter(item => item.title.includes("Portfolio") || item.title.includes("Personal") || item.title.includes("Virtual Reality") || item.title.includes("DataCamp")).map((item, index) => (
                <ScrollReveal
                  key={index}
                  effect="slide-left"
                  delay={index * 0.1}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-cyan-100">{item.title}</h4>
                    <p className="text-sm font-medium text-sky-200/90">{item.organization}</p>
                    <p className="mt-3 text-muted-foreground leading-7">{item.description}</p>
                    <span className="block text-sm text-text-secondary">{item.period}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        
        <div className="space-y-8 lg:col-span-1">
          <ScrollReveal effect="slide-right" delay={0.8} className="hover-float-y rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-md transition-colors hover:border-cyan-300/25">
            <h3 className="mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-2xl font-semibold text-transparent">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-background/30 px-3 py-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal effect="slide-right" delay={1} className="hover-float-y rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-md transition-colors hover:border-cyan-300/25">
            <h3 className="mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-2xl font-semibold text-transparent">Hobbies</h3>
            <ul className="space-y-3">
              {hobbies.map((hobby) => (
                <li key={hobby} className="flex items-center space-x-3">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{hobby}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}