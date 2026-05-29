# Kinetix Project Overview

## Project Purpose

A React-based single-page marketing / service website for KINETI X. The app presents information sections, contact form UI, and navigation-related page links for a shoe rental service concept.

## Technology Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM 7
- ESLint
- Lucide React icons

## Root Project Structure

- `package.json` — dependencies, dev scripts, and tool versions
- `vite.config.js` — Vite configuration for React
- `eslint.config.js` — linting configuration
- `README.md` — template project info
- `public/` — static assets served by Vite
- `src/` — application source code

## Source Folder Layout

### `src/`

- `App.jsx` — main application component and top-level router container
- `main.jsx` — React entry point that mounts `<App />`
- `index.css` / `App.css` — global styling and Tailwind base styles

### `src/componente/`

- `Layout.jsx` — layout wrapper with `<Outlet />` and a shared footer
- `HeroButton.jsx` — hero button component used in the UI
- `ButtonMain.jsx` — primary button component
- `Secondbutton.jsx` — secondary button component
- `Sizebutton.jsx` — size selector button component

### `src/HomeSection/`

- `Section03.jsx` — hero/feature section for "เช่า ใน 4 ขั้นตอน" with step cards
- `Footer.jsx` — site footer with navigation links and social links

### `src/Page/`

- `AdminDashBoard.jsx` — admin dashboard placeholder page
- `Contact.jsx` — contact page placeholder or page content
- `ContactUs.jsx` — contact form page with stateful form handling
- `FAQ.jsx` — FAQ page placeholder
- `HowItWorks.jsx` — process explanation page
- `Pricing.jsx` — pricing page placeholder

### `src/MockData/`

- `Mockdata.js` — placeholder data file for sample content or app data

## Current App Behavior

- `App.jsx` renders a `BrowserRouter` and directly includes:
  - `Section_03`
  - `ContactUs`
  - `FAQ`
  - `HowItWorks`
- The app currently displays these sections in one page rather than using active route transitions.
- Commented-out code in `App.jsx` shows an intended or future route-based architecture using `createBrowserRouter`, `RouterProvider`, and a `Layout` component.

## Routing & Navigation

- `Footer.jsx` uses `Link` from `react-router-dom` for internal navigation.
- `ContactUs.jsx` also contains multiple `Link` items and an internal site navigation bar.
- The current active router uses `BrowserRouter`, but routes are not fully defined in the rendered UI.

## Styling

- Tailwind CSS is used throughout the components with utility classes.
- Custom color names like `bg-kinetix-black`, `text-kinetix-white`, and `text-kinetix-lime` indicate custom Tailwind configuration or extended CSS variables.
- The UI uses responsive grid layouts and modern hero/section styling.

## Notes

- The repo is primarily a frontend UI prototype with no backend or API integration visible in the current source.
- The app appears to be a landing page / user-facing marketing site for a Thai shoe rental service.
- Some page files are present but may not yet be wired into runtime routing.
