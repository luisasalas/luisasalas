# Luis Salas – Portfolio

A responsive, single‑page portfolio built with React + TypeScript and Material‑UI. It showcases my experience across full‑stack development, cloud integrations, and test automation with sections for landing, resume, projects (coming soon), and contact.

## Tech Stack
- React 16 + TypeScript, React Router 5
- Material‑UI (v4) for layout, theming, and components
- Particles/typed text hero for a modern landing experience
- Deployed to AWS S3 + CloudFront (GitHub Actions workflow included)

## Local Development
```bash
yarn install          # installs deps (TypeScript + @types included)
yarn start            # http://localhost:3000
```

## Testing
```bash
yarn test
```
Uses React Testing Library with a simple sanity check; extend with component/regression tests as needed.

### End-to-End (Playwright)
```bash
yarn playwright:install   # one-time browser install
yarn test:e2e             # runs Playwright specs (starts dev server automatically)
yarn test:e2e:report      # opens HTML report
```
Playwright config: `playwright.config.ts` (webServer spins up `yarn start`, baseURL http://localhost:3000). CI workflow at `.github/workflows/e2e.yml` runs these on pull requests.

## Production Build
```bash
yarn build
```
Outputs an optimized bundle in `build/`, suitable for static hosting (S3/CloudFront or any CDN).

## Deploy (GitHub Actions → AWS)
- Workflow file: `.github/workflows/deploy.yml`
- Required secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `BUCKET_NAME`, `AWS_CLOUDFRONT_DISTRIBUTION_ID`
- On push to `master`, the site builds and syncs to S3, then invalidates CloudFront.

## Structure
- `src/components/` — Navbar, Header (hero), Footer, Contacts, Resume timeline, Portfolio placeholder
- `src/App.tsx` — routes for `/`, `/resume`, `/portfolio`, `/contacts`
- `src/types/` — local shims for third‑party libraries without published types

## Highlights for Employers
- Proven cloud deployment flow (S3 + CloudFront, AWS CLI, GitHub Actions)
- Strong UI polish with Material‑UI theming, particles background, and typed hero copy
- Experience spans full‑stack development, AWS integrations, and test automation (see Resume section in app)
- TypeScript‑first codebase with typed third‑party integrations and Jest/RTL scaffolding

## Future Enhancements
- Fill `Portfolio` with shipped projects, linking to live demos and code
- Add contact form backend (API + validation) and monitoring
- Expand test coverage (visual regression, accessibility checks)
