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
    <footer className="border-t border-text-muted/20 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-sm text-text-secondary">
          © {currentYear} Your Name. All rights reserved.
        </p>

        <nav aria-label="Social links">
          <ul className="flex items-center gap-4">
            {socialLinks.map((socialLink) => {     //one item from the socialLinks array each loop
              const IconComponent = socialLink.icon;

              return (
                <li key={socialLink.href}>
                  <Link
                    href={socialLink.href}
                    target="_blank"    //opens in new tab.
                    rel="noreferrer"  //security/privacy best practice for new tabs.
                    className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
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