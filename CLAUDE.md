# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Setup and development
npm install
npm run dev                    # Start dev server (sources env/local.sh)

# Building
npm run build                  # Standard build
npm run build:dev             # Build with dev environment
npm run build:netlify         # Build with netlify environment
npm run build:ons             # Build with ONS environment

# Testing
npm run test                  # Run unit tests with Vitest
npm run e2e                   # Run all Playwright e2e tests
npm run e2e:minimal           # Run minimal e2e tests
npm run e2e:ci                # Run e2e tests with server startup

# Code quality
npm run tsc                   # TypeScript type checking
npm run check                 # Svelte type checking
npm run check:watch           # Svelte type checking in watch mode
npm run lint                  # Run ESLint and Prettier checks
npm run format                # Format code with Prettier
```

## Architecture Overview

This is a **SvelteKit** application that provides an interactive Census data mapping tool. Key architectural principles:

### State Management Pattern

- **URL-driven state**: All important application state flows from URL parameters
- **Unidirectional data flow**: URL → Stores → Components
- **Three state owners**: URL (app state), Map (transitory), Svelte components (local UI)

### Core Stores (using Square's `asyncDerived`)

- `$params` - Parsed URL parameters, provides current variableGroup/variable/classification/category
- `$viewport` - Current map viewport state
- `$viz` - All visualization data for current selection
- `$content` - Census content tree from merged content.json files

### URL Structure

```
/[mode]/[variableGroup]/[variable]/[classification]/[category]?geotype=geocode

Examples:
/choropleth/population/sex/sex/female?msoa=E02006827
/dotdensity/education/qualifications/no-qualifications/total
```

### Data Architecture

Three flat file APIs hosted on S3:

1. **Data API**: Values for a category across all areas in a tile (CSV)
2. **Breaks API**: Choropleth color breaks for a category/geotype (JSON)
3. **Geo API**: Geographic metadata and boundaries (GeoJSON)

### Geography Types

- **LAD** (Local Authority Districts) - large areas
- **MSOA** (Middle Super Output Areas) - medium areas
- **OA** (Output Areas) - small areas

### Map Modes

- **choropleth** - Traditional colored map (default)
- **dotdensity** - Novel dotted visualization
- **change** - Change over time between 2011/2021 census

## File Structure

### Key Directories

- `src/components/` - Svelte components organized by functionality
- `src/stores/` - Reactive stores for state management
- `src/routes/` - SvelteKit file-based routing
- `src/data/` - Content loading, API clients, static content
- `src/helpers/` - Utility functions with comprehensive tests
- `env/` - Environment-specific configuration files

### Important Files

- `src/stores/params.ts` - Core URL parameter parsing and state derivation
- `src/data/content.ts` - Content.json loading and merging logic
- `src/components/Map.svelte` - Main Mapbox GL map component
- `src/data/api.ts` - Data API client functions

## Content System

### content.json Files

- Define available Census content and metadata
- Generated from ONS metadata by Python scripts in `scripts/content/`
- Multiple files merged client-side (enables preview/publishing workflow)
- Located in `src/data/staticContentJsons/`

### Content Tree Structure

```
VariableGroups (topics)
└── Variables (census questions)
    └── Classifications (results tables)
        └── Categories (census answers)
```

## Environment Configuration

Environment variables are loaded from `env/*.sh` files:

- `env/local.sh` - Local development
- `env/dev.sh` - Development environment
- `env/netlify.sh` - Netlify deployment
- `env/ons.sh` - ONS production environment

Key variables:

- `VITE_ENV_NAME` - Environment identifier
- `VITE_APP_BASE_PATH` - Application base path
- `SKADAPTER` - SvelteKit adapter selection

## Testing Strategy

- **Unit tests**: Vitest for helper functions (extensive test coverage)
- **E2E tests**: Playwright for user workflows
- **Type checking**: Both TypeScript and Svelte-specific checking available

## Development Notes

- Uses SvelteKit with file-based routing
- Mapbox GL for mapping functionality
- Tailwind CSS for styling
- TypeScript throughout
- State flows unidirectionally from URL to visualization
- All important state must be shareable via URL for proper web behavior
