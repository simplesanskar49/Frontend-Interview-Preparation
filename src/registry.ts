import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

/**
 * A single runnable entry shown in the sidebar.
 * `Demo` is lazy-loaded so the app only bundles what you open.
 */
export type Entry = {
  slug: string
  name: string
  description: string
  Demo: LazyExoticComponent<ComponentType>
}

export type Category = {
  key: string
  label: string
  entries: Entry[]
}

/**
 * ⭐ The single source of truth for the sidebar.
 * To add a new problem/component/hook:
 *   1. Create a folder with a `Demo.tsx` that has a default export.
 *   2. Add one entry below. That's it — it shows up automatically.
 */
export const registry: Category[] = [
  {
    key: 'hooks',
    label: 'Hooks',
    entries: [
      {
        slug: 'use-debounce',
        name: 'useDebounce',
        description: 'Debounce a rapidly-changing value.',
        Demo: lazy(() => import('./hooks/useDebounce/Demo')),
      },
    ],
  },
  {
    key: 'contexts',
    label: 'Contexts',
    entries: [
      {
        slug: 'theme-context',
        name: 'ThemeContext',
        description: 'Light/dark theme via Context + a custom hook.',
        Demo: lazy(() => import('./contexts/ThemeContext/Demo')),
      },
    ],
  },
  {
    key: 'components',
    label: 'Components',
    entries: [
      {
        slug: 'accordion',
        name: 'Accordion',
        description: 'Expand/collapse panels, single or multi-open.',
        Demo: lazy(() => import('./components/Accordion/Demo')),
      },
    ],
  },
  {
    key: 'machine-coding',
    label: 'Machine Coding',
    entries: [
      {
        slug: 'star-rating',
        name: 'Star Rating',
        description: 'Hoverable, clickable star-rating widget.',
        Demo: lazy(() => import('./machine-coding/StarRating/Demo')),
      },
    ],
  },
]
