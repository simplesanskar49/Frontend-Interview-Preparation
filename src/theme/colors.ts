import { toKebab } from '../utils'

/**
 * Central color tokens — the single source of truth for color.
 *
 * - In TS / inline styles: import `colors` and use e.g. `colors.primary`.
 * - In CSS: use the matching custom property, e.g. `var(--color-primary)`.
 *   Those variables are written onto :root at startup by `applyColors()`
 *   (called in main.tsx), so there is nothing to keep in sync by hand.
 */
export const colors = {
  // base
  text: '#1a1a1a',
  background: '#f7f7f8',
  border: '#cccccc',
  borderLight: '#e3e3e8',

  // sidebar
  sidebarBg: '#1e1e2e',
  sidebarText: '#e7e7ef',
  sidebarItem: '#cfcfe0',
  sidebarItemHover: '#2c2c42',
  sidebarHeading: '#8a8aa3',

  // accents
  primary: '#4f46e5',
  white: '#ffffff',
  muted: '#666666',

  // accordion
  headerBg: '#fafafa',
  headerHover: '#f0f0f3',
  panelText: '#444444',

  // light / dark theme demo
  lightBg: '#ffffff',
  lightText: '#222222',
  darkBg: '#222222',
  darkText: '#ffffff',

  // star rating
  starActive: '#f5b50a',
  starInactive: '#cccccc',
} as const

/**
 * Writes every color token onto :root as `--color-<kebab-key>`
 * (e.g. `sidebarBg` -> `--color-sidebar-bg`) so CSS can consume them.
 * Call once at app startup.
 */
export function applyColors(root: HTMLElement = document.documentElement): void {
  for (const [key, value] of Object.entries(colors)) {
    root.style.setProperty(`--color-${toKebab(key)}`, value)
  }
}
