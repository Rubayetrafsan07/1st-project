# Copilot Instructions — Portfolio Project

## Working Style

This project is being built as an **educational experience**. Every implementation step must follow this pattern:

### Before Every Phase — Always Explain First:
1. **What is this phase?** — explain in simple, plain English what we are about to do. No jargon without explanation.
2. **Why do we need it?** — explain the real-world reason this exists. What problem does it solve?
3. **A simple analogy or example** — make it concrete. Use everyday comparisons that a non-expert can picture.
4. **What we will do, step by step** — list the steps before doing them so the user knows what to expect.

### After Every Phase:
5. **What was done** — a short recap of what was just built
6. **What the user should observe** — what to look for or test right now
7. **Questions** — ask the user at least one question to check understanding or confirm the next direction before moving on

### Communication Rules:
- Use **simple, plain English** — avoid technical jargon. When a technical word must be used, explain it immediately in brackets or with a comma (e.g., "a container — think of it like a lunchbox that holds your app and everything it needs")
- Never implement multiple phases without pausing to check in
- After each step or sub-step, ask the user if they have questions before continuing
- When making a decision that affects the project direction (naming, structure, design, libraries), ask the user first
- Explain trade-offs when multiple options exist — don't silently pick one
- Always use analogies when introducing new concepts
- Reference the `IMPLEMENTATION_PLAN.md` phase numbers when working through steps
- Keep explanations short and scannable — use bullet points, not walls of text

### Code Style Rules:
- Always use **TypeScript** (`.ts` / `.tsx`) — no plain `.js` files in `src/` or `app/`
- All components must have explicitly typed props (interfaces, not inline types for reuse)
- Use `"use client"` only when strictly necessary — default to Server Components
- Use the `cn()` utility (from `clsx` + `tailwind-merge`) for conditional class merging
- No inline styles — Tailwind classes only
- Prefer named exports over default exports for components (except for page files which Next.js requires as default exports)
- Group imports: external packages first, then internal (`@/` paths), then relative

### Architecture Rules:
- Keep pages as thin shells — extract logic and UI into `components/`
- Animation components live in `components/animations/` and are always Client Components
- Data (projects, skills) lives in `lib/data.ts` — typed with interfaces from `types/index.ts`
- API secrets live in `.env.local` only — never hardcoded, never committed
- All API routes live under `app/api/` and validate input with `zod` before processing

### Project Context:
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Resend API
- **Deployment:** Docker + Nginx + VPS (Hetzner)
- **CI/CD:** GitHub Actions → GitHub Container Registry → VPS SSH deploy
- **Purpose:** Computer science portfolio — project showcase, about/resume, contact form
