import Link from "next/link";
import { Metadata } from "next"; // Next.js metadata type
import { FadeIn } from "@/components/animations/fade-in";
import { ScrollReveal } from "@/components/animations/scroll-reveal"; 


export const metadata: Metadata = {
  title: "Goose | Home",
  description: "Computer science student passionate about building amazing web applications.",
};


export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="text-primary">Goose</span>
          </h1>
        </FadeIn>
        
        
        <ScrollReveal delay={0.2} className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Computer science student passionate about building amazing web applications.
        </ScrollReveal>
        
        {}
        <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center inset-x-0 mx-auto max-w-sm sm:max-w-none">
          <Link href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto">
            View My Projects
          </Link>
          <Link href="/contact" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors w-full sm:w-auto">
            Contact
          </Link>
        </ScrollReveal>

      </div>
    </div>
  );
}