# Dad Landing Page

A static Next.js landing page for a celebration-of-life weekend. It uses Tailwind CSS, has no database, no login, and no custom backend.

## Edit Content

All event text, dates, links, cards, contact details, and image URLs live in:

```txt
src/config/site.ts
```

Replace the RSVP and Google Photos links there when the real RSVPify page or shared album is ready.

## Run Locally

```bash
npm install
npm run dev
```

## Deploy

Push this folder to a Git repository and import it into Vercel. Vercel will detect Next.js automatically and run `npm run build`.
