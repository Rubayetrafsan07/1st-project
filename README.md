# Portfolio Website

This is my personal portfolio website. It shows my projects, about page, resume-style details, and a contact form.

## What is inside

- Home page with a short intro and featured work
- About page with bio, skills, education, experience, languages, and hobbies
- Projects page with real project cards and GitHub links
- Contact page with a form
- Admin page to view saved contact messages

## What we used

- Next.js 14 with the App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Zod for form checks
- Lucide React for icons
- Docker for local production run

## How the code works

- `app/page.tsx` is the home page.
- `app/about/page.tsx` shows the about content.
- `app/projects/page.tsx` shows the project list.
- `app/contact/page.tsx` shows the contact form.
- `components/contact-form.tsx` handles form input, validation, and submit state.
- `app/api/contact/route.ts` checks the form data and saves the message.
- `app/admin/page.tsx` reads and shows saved messages.
- `lib/data.ts` holds the bio text, skills, timeline, and project data.
- `types/index.ts` keeps the TypeScript types in one place.

## Contact form flow

1. The user fills out name, email, and message.
2. The form checks the input with Zod.
3. If the input is valid, it sends the data to `/api/contact`.
4. The API saves the message in `data/messages.json`.
5. The admin page reads that file and shows the saved messages.

## Run the website locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

### 3. Open the site

Open this in your browser:

```text
http://localhost:3000
```

### 4. View saved contact messages

Open:

```text
http://localhost:3000/admin
```

## Build and run in production locally

If you want to test the production build on your computer:

```bash
npm run build
npm start
```

Then open:

```text
http://localhost:3000
```

## Run with Docker

This project has a `Dockerfile` and `docker-compose.yml` file.

### Option 1: Docker Compose

```bash
docker compose up --build
```

If Docker Compose asks for a `.env.local` file, create one in the project root. It can be empty for now if you do not use any environment variables.

### Option 2: Docker build and run

```bash
docker build -t portfolio-site .
docker run -p 3000:3000 portfolio-site
```

### Important Docker note

- The app saves contact messages in `data/messages.json`.
- The compose file maps `./data` to the container, so messages stay on your computer.
- If you delete the local `data` folder, the saved messages will be lost.

## Deploy on Vercel

Vercel works well with this project because it is a Next.js app.

### Simple deploy steps

1. Push the project to GitHub.
2. Go to Vercel and import the repository.
3. Vercel will detect Next.js automatically.
4. Use the default build command: `npm run build`.
5. Deploy the project.

### What to know about Vercel

- The site pages will work normally on Vercel.
- The contact form API will run, but the local file storage is not a good permanent save method on Vercel.
- On Vercel, files written at runtime may not stay forever.
- If you want message saving to be reliable on Vercel, use a database later.

## Project structure

```text
app/                Pages, API routes, and layout files
components/         Reusable UI parts
lib/                Data used by the pages
types/              TypeScript types
public/             Images and static files
Dockerfile          Docker image setup
docker-compose.yml  Docker run setup
README.md           Project guide
```

## Notes

- The app uses a custom dark theme with glass-style cards and gradient text.
- Images from Unsplash are allowed in `next.config.mjs`.
- The project is set to `output: "standalone"` so Docker can run it as a small production build.

If you want, I can also make this README even shorter and more student-friendly, or add a small section for each page with what it does.
