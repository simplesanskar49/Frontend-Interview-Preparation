# Accordion

Expand/collapse panels. Supports single-open (default) and multi-open modes.

## API

| Prop            | Type             | Default | Notes                          |
| --------------- | ---------------- | ------- | ------------------------------ |
| `items`         | `AccordionItem[]`| —       | `{ id, title, content }`       |
| `allowMultiple` | `boolean`        | `false` | Keep several panels open       |

## Key points for interviews

- State is an **array of open ids** so the same component handles both modes.
- Single mode: clicking an open item closes it (`return isOpen ? [] : [id]`).
- **Accessibility:** `aria-expanded` on the header button; consider
  `role="region"` + `aria-labelledby` on the panel for full a11y.
- Follow-up: controlled vs uncontrolled (accept `openIds` + `onChange`).
