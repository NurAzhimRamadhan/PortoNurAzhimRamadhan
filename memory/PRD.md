# Portfolio v2.3 - Nur Azhim Ramadhan

## Original Problem Statement
Continuing refinement of the existing Vite + React 18 portfolio (portfolio-v2-main.zip).
User uploaded 5 new images and asked to preserve all existing journey milestones,
expand them with new per-event entries, fix any remaining re-render bug,
clean light-mode artifacts, and add a 2022 Musabaqah milestone before the
2024 IS Program entry.

## Architecture
- Frontend: Vite 6 + React 18 + Tailwind 3 + Framer Motion 11 + Embla Carousel + React Router 6
- Backend: FastAPI + Mongo (unchanged, status endpoint only)
- Routing: BrowserRouter with `/`, `/case-study/:slug`, and 404 fallback
- Data: single source of truth in `/app/frontend/src/data.js`
- Background motion: CSS-only keyframes (orb drift, grid shift, wave breathe + drift, node pulse) - GPU friendly, no JS-driven re-renders.

## User Personas
- Recruiters and hiring managers (Information Systems, Data, AI, Cybersecurity, Leadership)
- Internship and scholarship coordinators
- Collaborators across academic and competition programs

## Core Requirements (Static)
1. Preserve existing portfolio look and content; refine without breaking anything.
2. Premium recruiter ready aesthetic (Linear, Framer, Vercel, Stripe, Apple references).
3. Reliable theme toggle and clean light mode.
4. No auto refresh or unexplained re-render storms.
5. Profile photo (formal maroon blazer) as the single brand asset across all surfaces.

## What is Implemented (2026-06-21, Iteration 2)
- **Global profile photo** New formal maroon blazer portrait (`profile-maroon.png`) wired into Navbar, Hero portrait card, About profile card, Contact card, Footer, Mobile Nav sheet, and Case Study floating pill. Cream-colored studio backdrop with `mix-blend-multiply` to integrate the white-background source cleanly.
- **Hero refinement** Reduced whitespace (min-h 88-92vh, py-16-24, mt-6-9). Hero stats reordered: Cumulative GPA 3.98 is now the first stat. StatCounter extended to support decimals.
- **About refinement** Smaller vertical padding (py-20-32 vs old py-24-36). Cream studio backdrop on profile card, justified body text.
- **Journey expansion** Preserved every existing milestone and added more.
  - Inserted 2022 Musabaqah Competition Participation as first milestone (BEFORE 2024 IS Program).
  - Kept 2022 Modernization of Islam Short Movie award.
  - Added separate per-event journey entries (with images) for 2025 Revoist (white shirt), 2025 Fasilkom Cup (blue shirt), 2025 ISGATH (group), 2026 HIMSIKA PR Leadership (grey uniform poster), 2026 Moderator HSU, 2026 Moderator EduFair.
  - Kept 2026+ Technology and Innovation Projects with all flagship builds.
  - Journey.jsx now renders an optional 16:9 banner image per year card.
- **Experience images** HIMSIKA-PR, Revoist, Fasilkom Cup, and ISGATH cards now display their respective uploaded images.
- **FinConnect repositioning** Now positioned as "AI Powered FinTech Platform" with six features: Financial Management, Smart Analytics, AI Insights, Financial Recommendations, Decision Support, Business Intelligence. Updated description, problem, approach, solution, design process, lessons learned, future development, and technology stack.
- **Achievements cleanup** Removed the Academic Achievement / GPA card. GPA is now surfaced in Hero stat and About profile card only.
- **Background system** Grid lines tuned to 35% opacity, white in dark mode, near-black in light mode. Premium subtle motion via CSS keyframes (orb drift 28-38s, grid shift 26s, wave breathe 18s, wave drift 40s, node pulse 4-5.5s). `prefers-reduced-motion` honored.
- **Stability hardening**
  - `useScrolledPast(threshold)` hook (rAF + boolean) replaces per-pixel `useScrollY`.
  - No React.StrictMode (avoids dev double-mounts).
  - `ThemeContext` value memoized with `useMemo`, callbacks with `useCallback`.
  - `BackgroundFX` is `React.memo`.
  - New `ScrollToHash` component handles `/#projects` navigation from case study pages without imperative scroll inside CaseStudyPage.
  - Router future flags enabled (v7_startTransition, v7_relativeSplatPath).
  - Verified: 15s idle keeps scroll at 1500 (no auto reload, no remount).

## Testing
- iteration_1: 100% pass (initial refinement).
- iteration_2: 50/51 pass, 100% effective (1 false positive in scroll-race test harness; stability sentinel confirmed across 15s idle).

## Next Action Items / Backlog
- P1: Connect a real contact form (Resend or SendGrid). Currently mailto only.
- P1: Open Graph image generation per case study page.
- P2: Side-rail table of contents on each case study page.
- P2: Read-time indicator per case study.
- P3: Indonesian language toggle.

## Files of Interest
- `/app/frontend/src/App.jsx` - Router setup with future flags and ScrollToHash
- `/app/frontend/src/pages/HomePage.jsx` - Main scroll page
- `/app/frontend/src/pages/CaseStudyPage.jsx` - 10-section case study renderer
- `/app/frontend/src/pages/NotFoundPage.jsx` - 404 fallback
- `/app/frontend/src/data.js` - Source of truth (profile, journey, experiences, projects, achievements)
- `/app/frontend/src/components/Hero.jsx` - Cream studio backdrop + reduced whitespace
- `/app/frontend/src/components/About.jsx` - Same cream backdrop + reduced whitespace
- `/app/frontend/src/components/Journey.jsx` - Optional image banner per year
- `/app/frontend/src/components/Projects.jsx` - Featured carousel + case-study grid
- `/app/frontend/src/components/BackgroundFX.jsx` - 35% grid, memoized animated background
- `/app/frontend/src/components/Navbar.jsx` - Maroon photo logo + scroll-threshold state
- `/app/frontend/src/components/Footer.jsx` - Centered copyright, maroon profile brand
- `/app/frontend/src/components/ScrollToHash.jsx` - Hash-based scroll restoration
- `/app/frontend/src/components/StatCounter.jsx` - Decimal-aware stat counter
- `/app/frontend/src/lib/utils.js` - useScrolledPast stability hook
- `/app/frontend/src/context/ThemeContext.jsx` - Memoized theme context
- `/app/frontend/src/index.css` - Background keyframes + light-mode polish
