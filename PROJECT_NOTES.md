# PROJECT NOTES

## Repo & Deploy

- GitHub repo: `vazquezharo/Dadcelly`
- Production site: `https://dadcelly.vercel.app`
- Vercel project: `dadcelly` under `vazquezharos-projects`
- Production branch: `main`

## Folder Structure

- `app/`: Next.js App Router pages and global styles
- `app/page.tsx`: homepage UI
- `app/layout.tsx`: metadata/layout wrapper
- `app/globals.css`: shared CSS, Tailwind import, small custom classes
- `config/site.ts`: editable site content and links
- `public/images/`: local photos used by the site
- `package.json`: Next/Tailwind/lucide dependencies and scripts

## Editable Content

Most content lives in `config/site.ts`: hero text, dates, RSVP embed, Dropbox link, hotel cards, contact info, footer text, and image references.

## Images & Gallery Files

- Site images live in `public/images/`.
- Reference them from config or components as `/images/file-name.jpg`.
- Keep large originals out of the app when possible; resize/compress before committing.
- Guest uploads currently go to the Dropbox file request configured in `config/site.ts`.

## Update Workflow

1. Branch from `main` using `codex/<short-change-name>`.
2. Make content/design changes in the repo, not a disconnected local folder.
3. Open a pull request into `main`.
4. Let Vercel create a Preview Deployment from the PR.
5. Review the preview, merge to `main`, then confirm production deploy.

## Adding Routes or Pages

- Add new routes under `app/`.
- Example: `app/travel/page.tsx` creates `/travel`.
- Shared editable copy should still live in `config/site.ts` unless the page needs its own config file.
- Avoid custom backend/API routes unless the site truly needs server behavior.

## Deployment Gotchas

- The deployed repo uses root-level `app/` and `config/`, not `src/app` or `src/config`.
- Imports currently use relative paths such as `../config/site`; avoid `@/config/site` unless `tsconfig` and Vercel agree on the alias.
- Vercel deploys from `main`; local-only changes will not deploy.
- The app is static: no database, no login, no custom backend.
- If image paths change, verify both `config/site.ts` and files under `public/images/`.

## Future Portfolio Conversion

When converting this repo into a portfolio piece:

- Move memorial-specific content into an archive branch or content preset.
- Replace `config/site.ts` with portfolio copy, project data, social links, and contact CTA.
- Reuse the existing static Next.js/Tailwind structure if useful.
- Replace private family photos with portfolio-safe public assets.
- Update metadata, domain, README, and Vercel project naming before launch.
