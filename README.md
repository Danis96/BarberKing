
# Mehmet Goksen barber shop

Mehmet Goksen barber shop is a single-page React/Vite marketing and booking experience for a Sarajevo barbershop. The app includes a branded landing page, service and team showcases, a gallery, and a multi-step appointment booking flow.

## Overview

This project is built as a frontend-only application. Routing is handled client-side, the visual system is driven by Tailwind CSS, and page transitions/interactions use Motion and Radix-based UI primitives.

Current pages:

- `/` home page with hero, feature highlights, and service previews
- `/services` service listing and pricing presentation
- `/barbers` team showcase
- `/gallery` gallery and brand imagery experience
- `/booking` multi-step booking flow with mock appointment data

## Tech Stack

- React 18
- TypeScript
- Vite 6
- React Router 7
- Tailwind CSS 4
- Motion for animation
- Radix UI components
- Sonner for toast notifications
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, typically `http://localhost:5173`.

### Build for production

```bash
npm run build
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build

## Project Structure

```text
.
├── index.html
├── package.json
├── src/
│   ├── main.tsx
│   ├── app/
│   │   ├── App.tsx
│   │   ├── routes.tsx
│   │   ├── components/
│   │   ├── data/
│   │   └── pages/
│   └── styles/
├── vite.config.ts
└── README.md
```

Important directories:

- `src/app/pages` contains route-level page components
- `src/app/components` contains shared layout and UI building blocks
- `src/app/data` contains mock booking services, business metadata, specialist profiles, and timeslot data
- `src/styles` contains global styling, theme tokens, fonts, and Tailwind imports

## Application Notes

### Booking flow

The booking page is currently mock-driven:

- services, specialists, and timeslots are loaded from `src/app/data/booking-data.ts`
- “Quick Book” chooses a predefined next available slot from local mock logic
- booking confirmation currently shows a toast and logs the payload to the console
- there is no backend, persistence layer, or payment integration yet

### Navigation and layout

The app uses a shared layout with:

- fixed header navigation
- footer
- mobile navigation component
- nested route rendering via React Router

### Styling

The visual language is defined with:

- Tailwind utility classes
- shared theme and global styles in `src/styles`
- reusable UI primitives under `src/app/components/ui`

## Customization Guide

Common places to update branding and content:

- tab title and document shell: `index.html`
- navigation, logo text, and CTA links: `src/app/components/Header.tsx`
- shared page chrome: `src/app/components/Layout.tsx`
- homepage messaging and hero content: `src/app/pages/Home.tsx`
- booking services, specialist profiles, and schedule data: `src/app/data/booking-data.ts`

## Known Limitations

- no automated tests are configured in `package.json`
- no lint script is currently defined
- booking is frontend-only and does not submit to a server
- some imagery is still based on demo/mock photos rather than location-owned assets

## Design Source

The original design source referenced by this codebase is:

[Original Figma source](https://www.figma.com/design/quoHVyizFFBlF0w3LxImHu/Premium-Barber-Shop-Web-App)
  
