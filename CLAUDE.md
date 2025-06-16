# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is Rory Graman's personal website built with React and TypeScript. The project uses:

- **React 18** with TypeScript for the UI framework
- **React Router v6** for client-side routing
- **Styled Components v6** for CSS-in-JS styling with a retro/vintage theme
- **Create React App** for build tooling and development server
- **Lucide React** for icons

## Development Commands

- `yarn install` - Install all dependencies
- `yarn dev` - Start development server with hot reload (alias for `yarn start`)
- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests

## Key Architecture Notes

- Uses React with functional components and hooks
- Client-side routing with React Router in `/src/App.tsx`
- Components organized in `/src/components/`
- Pages in `/src/pages/`
- Styled components and theme in `/src/styles/`
- Main entry point is `/src/index.tsx`
- Public assets served from `/public/`

## Styling Approach

The site uses a distinctive retro/vintage design system implemented with styled-components:

### Theme Colors
- **Amber palette**: Warm background colors (`#fef3c7`, `#fffbeb`)
- **Stone palette**: Text and borders (`#44403c`, `#78716c`, `#57534e`)
- **Emerald accents**: Hover states (`#d1fae5`, `#065f46`)

### Design Elements
- **Retro shadows**: `8px 8px 0px #44403c` for main elements
- **Interactive shadows**: `4px 4px 0px #107050` on hover, `2px 2px 0px #107050` on active
- **Monospace fonts**: Courier New family for retro feel
- **Thick borders**: 2px solid borders throughout
- **No border radius**: Sharp, angular design aesthetic

### Component Patterns
- All styling done via styled-components with TypeScript
- Responsive design using CSS media queries within styled-components
- Hover effects with color and shadow transitions
- Theme object exported from `GlobalStyles.ts` for consistency

## Adding New Pages
1. Create component in `/src/pages/`
2. Add route to `/src/App.tsx`
3. Follow existing styling patterns using styled-components and the theme