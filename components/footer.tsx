import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Rubayetrafsan07",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/rubayetrafsan07",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="hover-float-y text-sm text-text-secondary">
          © {currentYear} My Portfolio. All rights reserved.
        </p>

        <nav aria-label="Social links">
          <ul className="flex items-center gap-4">
            {socialLinks.map((socialLink) => {
              const IconComponent = socialLink.icon;

              return (
                <li key={socialLink.href}>
                  <Link
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-float-y inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-text-secondary transition-colors hover:border-white/20 hover:text-text-primary"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{socialLink.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}