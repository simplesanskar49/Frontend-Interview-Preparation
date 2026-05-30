# Frontend Interview Preparation

A runnable workspace for frontend interview prep — custom **hooks**, **contexts**,
reusable **components**, **machine-coding** problems, plus **LLD** and study **notes**.

Built with **Vite + React + TypeScript**. Every code entry has a live demo you can
open in the browser and its own `README.md` with notes and follow-ups.

## Run it

```bash
npm install
npm run dev      # open the printed localhost URL
```

The app shows a sidebar (driven by `src/registry.ts`) — click any item to render
its demo live.

## Structure

```
src/
  registry.ts            ← single source of truth for the sidebar
  hooks/<Name>/          ← <Name>.ts + Demo.tsx + README.md
  contexts/<Name>/       ← <Name>.tsx + Demo.tsx + README.md
  components/<Name>/      ← <Name>.tsx + <Name>.css + Demo.tsx + README.md
  machine-coding/<Name>/ ← <Name>.tsx + Demo.tsx + README.md (problem + approach)

lld/                     ← Low-Level Design (markdown + plain TS), no build needed
notes/                   ← study notes (javascript / react / css / system-design)
```

## How to add a new entry

1. Create a folder under the right category with a `Demo.tsx` that has a
   **default export** rendering your code.
2. Add one entry to the matching array in `src/registry.ts`:

   ```ts
   {
     slug: 'my-thing',
     name: 'My Thing',
     description: 'One-line summary.',
     Demo: lazy(() => import('./components/MyThing/Demo')),
   }
   ```

3. Add a `README.md` in the folder with the approach, edge cases, and follow-ups.

That's it — it appears in the sidebar automatically.

## What's included as starter examples

| Category       | Example         |
| -------------- | --------------- |
| Hooks          | `useDebounce`   |
| Contexts       | `ThemeContext`  |
| Components     | `Accordion`     |
| Machine Coding | `Star Rating`   |
| LLD            | `EventEmitter`, debounce vs throttle |
| Notes          | event loop, closures, reconciliation, flexbox, FE system design |
