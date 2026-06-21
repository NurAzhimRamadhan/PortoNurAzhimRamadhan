# Portfolio v2.2 - Nur Azhim Ramadhan

## Original Problem Statement
Refinement (not rebuild) of existing Vite + React 18 portfolio (portfolio-v2-main.zip).
User asked to preserve all working sections, then apply corrections across
branding, typography, timeline, experiences, carousel, case studies,
background motion, light-mode polish, and a re-render stability fix.

## Architecture
- Frontend: Vite 6 + React 18 + Tailwind 3 + Framer Motion 11 + Embla Carousel + React Router 6
- Backend: FastAPI + Mongo (unchanged - status endpoint only)
- Routing: BrowserRouter with `/`, `/case-study/:slug`, and 404 fallback
- Data: single source of truth in `/app/frontend/src/data.js`
- Background motion: CSS-only animations (keyframes for orb drift, grid shift, wave breathe / drift, node pulse) - GPU friendly, no JS-driven re-renders.

## User Personas
- Recruiters and hiring managers (Information Systems, Data, AI, Cybersecurity, Leadership)
- Internship and scholarship coordinators
- Collaborators across academic and competition programs

## Core Requirements (Static)
1. Preserve existing portfolio look and content; refine without breaking anything.
2. Premium recruiter ready aesthetic (Linear, Framer, Vercel, Stripe, Apple references).
3. Reliable theme toggle and clean light mode.
4. No auto-refresh or unexplained re-render storms.
5. Profile photo as the single brand asset across all surfaces.

## What is Implemented (2026-06-21)
- **Branding** Replaced NA badge with the formal profile photo across Navbar, Footer, Mobile Nav, Hero (already), Contact (already). Removed `Crafted with React · Tailwind · Framer Motion` footer line. Copyright centered.
- **Typography** Applied `text-justify hyphens-auto` to long paragraphs in About, Experiences, Project descriptions, and CaseStudyPage sections. Removed em dashes from all user facing text.
- **Journey Timeline** Restructured to 2024 (IS Program), 2025 (Bootcamp), 2025 (Volunteer Activities), 2026 (HIMSIKA PR Coordinator), 2026 (Moderator HSU with image), 2026 (Moderator EduFair with image), 2026+ (Tech Projects). Removed 2022 storytelling and 2023 university entries.
- **Experiences** Added Sponsorship Strategy Revoist 5.0, Consumption Coordinator Fasilkom Cup, Public Relations Management ISGATH 2025. Replaced HIMSIKA Member with Coordinator of Public Relations Department. Removed generic Volunteer activity.
- **Achievements** Removed PKM Center engagement card (kept PKM-PM 1st Place competition award).
- **Carousel** New 55/45 image-to-content ratio, scale 0.95 / opacity 0.55 for adjacent cards, removed large side fade overlays and heavy vignette. Cleaner light mode with no dark grey masking blocks.
- **Case Study Pages** Dedicated routes at `/case-study/wana`, `/palmora`, `/finconnect`, `/isec`, `/bi-dashboard`. Each renders 10 sections: Overview, Problem, Research, Solution, Key Features, Technology Stack, Design Process, Impact, Lessons Learned, Future Development. Floating profile pill plus back-to-projects link.
- **Background Motion** Subtle CSS keyframe animations for orbs (28-38s drift), grid (26s shift), waves (18s breathe and 40s drift), constellation nodes (4-5.5s pulse). `prefers-reduced-motion` honored.
- **Light Mode Polish** Lowered image fade gradient intensity, brighter glass surface tokens, better contrast for hero portrait labels.
- **Stability Fix** New `useScrolledPast(threshold)` hook replaces per pixel `useScrollY` re-renders. Removed React.StrictMode in dev to avoid double-mount artifacts. `BackgroundFX` is `React.memo`. Result: no auto-refresh, no scroll-driven re-render storm.
- **React Router v6** Future flags enabled (v7_startTransition, v7_relativeSplatPath).

## Testing
- iteration_1: 100% frontend pass. All 13 acceptance items verified by testing agent.
- Backend not touched; backend skipped per instruction.

## Next Action Items / Backlog
- P1: Connect a real contact form (currently mailto only). Could add Resend or SendGrid.
- P1: Add Open Graph image generation for each case study page.
- P2: Add a download / share menu on case study pages.
- P2: Add per case study reading time and table of contents on the side.
- P3: Optional Indonesian language toggle.

## Files of Interest
- `/app/frontend/src/App.jsx` - Router setup
- `/app/frontend/src/pages/HomePage.jsx` - Main scroll page
- `/app/frontend/src/pages/CaseStudyPage.jsx` - Dedicated case study page (10 sections)
- `/app/frontend/src/pages/NotFoundPage.jsx` - 404 fallback
- `/app/frontend/src/data.js` - Single source of truth
- `/app/frontend/src/components/Projects.jsx` - Refined featured carousel + case study grid
- `/app/frontend/src/components/BackgroundFX.jsx` - Animated background (memoized)
- `/app/frontend/src/components/Navbar.jsx` - Profile-photo logo + scroll-threshold state
- `/app/frontend/src/components/Footer.jsx` - Centered copyright, profile-photo brand
- `/app/frontend/src/lib/utils.js` - `useScrolledPast` stability hook
- `/app/frontend/src/index.css` - Background keyframes + light-mode polish
