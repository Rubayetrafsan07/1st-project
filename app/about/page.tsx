import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { aboutContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Goose | About",
  description: "Learn more about me, my skills, education, and experience.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="About Me" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-16">
          <ScrollReveal effect="fade-up" className="p-6 bg-card rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Bio</h3>
            <p className="text-lg text-muted-foreground max-w-2xl text-justify">
              {aboutContent.bio}
            </p>
          </ScrollReveal>
          
          <ScrollReveal effect="fade" delay={0.2} className="p-6 bg-card rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {aboutContent.skills.map((skill) => (
                <ScrollReveal
                  key={skill.name}
                  effect="scale"
                  className="flex flex-col items-center p-2"
                >
                  <span className="text-lg mb-1">{skill.icon}</span>
                  <span className="text-xs font-medium text-center">{skill.name}</span>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal effect="fade" delay={0.4} className="p-6 bg-card rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {aboutContent.timeline.filter(item => item.title.includes("B.Sc.") || item.title.includes("Warsaw")).map((item, index) => (
                <ScrollReveal
                  key={index}
                  effect="slide-left"
                  delay={index * 0.1}
                  className="flex items-start space-x-4"
                >
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal effect="fade" delay={0.6} className="p-6 bg-card rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {aboutContent.timeline.filter(item => item.title.includes("Portfolio") || item.title.includes("Personal")).map((item, index) => (
                <ScrollReveal
                  key={index}
                  effect="slide-left"
                  delay={index * 0.1}
                  className="flex items-start space-x-4"
                >
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        {/* Right Column: Languages & Hobbies */}
        <div className="lg:col-span-1 space-y-8">
          <ScrollReveal effect="slide-right" delay={0.8} className="p-6 bg-card rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Languages</h3>
            <div className="space-y-4">
              {[
                { name: "English", level: "Fluent" },
                { name: "Bangla", level: "Native" },
                { name: "Hindi", level: "Intermediate" },
                { name: "Urdu", level: "Basic" }
              ].map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal effect="slide-right" delay={1} className="p-6 bg-card rounded-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Hobbies</h3>
            <ul className="space-y-3">
              {["Traveling", "Watching Movies", "Playing Football", "Horse Riding", "Reading Books"].map((hobby) => (
                <li key={hobby} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{hobby}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}