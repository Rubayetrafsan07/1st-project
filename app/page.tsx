import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Code2, LayoutGrid, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";
import { ScrollReveal } from "@/components/animations/scroll-reveal";


export const metadata: Metadata = {
  title: "Goose | Home",
  description: "Computer science student passionate about building amazing web applications.",
};


export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-6xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="space-y-8">
          <FadeIn>
            <span className="hover-float-y inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-primary" />
              Modern portfolio design
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Goose</span>.
              <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200 bg-clip-text text-2xl font-medium text-transparent sm:text-3xl lg:text-4xl">
                I build clean, modern web and software projects.
              </span>
            </h1>
          </FadeIn>

          <ScrollReveal delay={0.15} className="max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            I&apos;m a computer science student focused on practical projects, strong UI, and code that is easy to understand and maintain. This portfolio highlights the work I have built so far.
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="flex flex-col gap-4 sm:flex-row">
            <Link href="/projects" className="hover-float-y inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-primary-dark">
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="hover-float-y inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-text-primary backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10">
              Contact Me
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.35} className="hover-float-y grid gap-4 sm:grid-cols-3">
            {[
              { label: "Projects", value: "4+", icon: LayoutGrid },
              { label: "Main Stack", value: "Next.js", icon: Code2 },
              { label: "Focus", value: "UI + Logic", icon: Sparkles },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-text-primary">{item.value}</p>
                </div>
              );
            })}
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="hover-float-y relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-primary/20 via-cyan-400/10 to-indigo-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.4)] backdrop-blur-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between text-sm text-text-secondary">
                <span>Featured work</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Project showcase</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/40 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-text-secondary">Current focus</p>
                <h2 className="mt-3 text-2xl font-semibold text-text-primary">Crafting thoughtful digital experiences with clean design</h2>
                <p className="mt-3 leading-7 text-text-secondary">
                  Clear spacing, layered backgrounds, soft borders, and responsive layouts help the page feel more modern and easier to scan.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Build style", value: "Clean and practical" },
                  { label: "Design approach", value: "Modern and minimal" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-background/30 p-4">
                    <p className="text-sm text-text-secondary">{stat.label}</p>
                    <p className="mt-2 text-base font-semibold text-text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}