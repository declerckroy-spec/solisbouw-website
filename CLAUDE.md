# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for SolisBouw, a Dutch construction company specializing in renovations. The site is built with TypeScript, React 19, and TailwindCSS, using the Next.js App Router architecture.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: TailwindCSS with custom design tokens
- **React**: Version 19

## Architecture

### Directory Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Homepage with all main sections
├── globals.css             # Global styles and TailwindCSS directives
├── diensten/               # Services pages
│   ├── page.tsx            # Services overview
│   ├── complete-renovatie/
│   ├── badkamer-design/
│   ├── maatwerk-keukens/
│   └── uitbouw-projecten/
└── projecten/              # Portfolio/projects pages
    ├── page.tsx
    └── amsterdam-noord/

components/
├── Counter.tsx             # Animated counter with IntersectionObserver
└── ProjectLayout.tsx       # Reusable layout for project pages
```

### Key Architectural Patterns

1. **Single-Page Homepage**: The main landing page (app/page.tsx) contains all sections (hero, services, projects, testimonials, CTA, footer) in one large file for simplicity and performance.

2. **Path Aliases**: Uses `@/*` path alias configured in tsconfig.json, pointing to the root of the app directory. Import components with `@/components/ComponentName`.

3. **Metadata Management**: Each page exports a `metadata` object for SEO. The site is in Dutch language (`lang="nl"`).

4. **Client Components**: Interactive components use `'use client'` directive (e.g., Counter.tsx with IntersectionObserver and animations).

5. **Layout Reusability**: Service and project detail pages duplicate their header/footer, while ProjectLayout.tsx provides a cleaner reusable layout option.

## Design System

### Color Palette (Tailwind Config)

- `terracotta`: #D4622F (primary brand color)
- `navy`: #1E3A5F (dark blue, used for text and backgrounds)
- `gold`: #F5A623 (accent color)
- `warm-grey`: #F8F6F4 (light background)
- `text-grey`: #5A5A5A (body text)

### Custom CSS Classes

- `.texture-bg`: Diagonal stripe pattern overlay with terracotta tint
- `.diagonal-split`: Diagonal clip-path for hero sections

### Typography

- All headings use `font-black` (900 weight)
- Uppercase text with `uppercase` and often `tracking-wide`/`tracking-widest`
- Paragraphs have `font-semibold` by default (via globals.css)

### Component Patterns

- **Service Cards**: Large bordered cards with hover effects that change background color
- **Project Cards**: Image placeholder with overlay that appears on hover
- **Stats Section**: Uses Counter component for animated numbers with intersection observer
- **Navigation**: Fixed header with logo and nav links, CTA button in terracotta

## TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` points to root directory
- Target: ES2017
- Module resolution: bundler (Next.js)
- JSX: react-jsx (React 19)

## Common Patterns

### Creating New Service Pages

1. Create directory under `app/diensten/[service-name]/`
2. Add `page.tsx` with metadata export
3. Follow existing structure: hero section with diagonal split, content sections, CTA
4. Use terracotta, navy, gold color scheme
5. Include header with navigation (can use ProjectLayout or duplicate inline)

### Creating New Project Pages

1. Create directory under `app/projecten/[project-name]/`
2. Consider using `ProjectLayout` component for consistent header/footer
3. Export metadata with project-specific title and description

### Adding Animated Counters

Import and use the Counter component:
```tsx
import Counter from '@/components/Counter'

<Counter end={25} suffix="+" duration={2000} />
```

## Navigation Structure

The site uses a combination of Next.js `<Link>` components and hash-based anchor links:
- Home sections use `href="#sectionId"` for smooth scrolling
- Service/project pages use `<Link href="/path">` for Next.js routing
- Hash links on subpages use `href="/#sectionId"` to return home and scroll

## Build Notes

- TypeScript errors will block the build (ignoreBuildErrors: false)
- CSS is processed through PostCSS and Tailwind
- Smooth scroll behavior enabled globally via globals.css
