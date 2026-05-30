# Personal Website

This is a React personal website built with Create React App and Tailwind CSS.

## System Architecture

The app uses a simple page-based React structure:

- `src/App.js` defines the main routes and shared app shell.
- `src/components/layout/` contains global layout components, including navigation, footer, and the shared `PageShell` container.
- `src/pages/` contains top-level pages such as Home, Projects, Vision, and Showcase.
- `src/components/sections/` contains reusable homepage sections.
- `src/components/ui/` contains smaller shared UI components such as project cards, lists, links, animations, and inline logos.
- `src/data/` stores content data for the homepage and project records.
- `src/config/theme.js` keeps shared Tailwind class tokens for layout, text, and link styles.
- `src/assets/` stores images, logos, photos, and project materials.

Routing is handled by `react-router-dom`. Styling is mostly Tailwind utility classes, with shared layout and typography classes centralized in `theme.js` to keep page width, spacing, color, and text styles consistent.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the production app into the `build` folder.

### `npm run deploy`

Builds and deploys the site with `gh-pages`.

### `npm run eject`

Ejects the Create React App configuration. This is irreversible and usually unnecessary.
