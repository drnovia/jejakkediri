# Contributing to Jejak Kediri

Thank you for helping preserve and share Kediri’s story with care.

## Before you start

- Read [`docs/folder-map.md`](docs/folder-map.md) for where files belong.
- Keep edits focused; match existing TypeScript, Tailwind, and component patterns under `app/`.
- Do not commit secrets, `.env` files, or the `.cursor/` folder.

## Workflow

1. Fork the repository and create a branch from `main` (use `feature/` or `fix/` prefixes).
2. Install dependencies: `npm install`.
3. Run checks locally:
   - `npm run dev` — smoke-test pages
   - `npm test` — build + rendered HTML test
   - `npm run lint` — ESLint
4. Open a pull request with a clear title, screenshots for UI changes, and links to any related issues.

## Content & imagery

- Historic photos must keep attribution, license, and alt text consistent with existing gallery entries.
- Prefer WebP in `public/photos/` with descriptive kebab-case filenames.

## Code of conduct

Be kind, precise, and honest. We welcome beginners who are willing to learn and document their changes.
