# Flexbox Cheat Sheet

One-dimensional layout (a row **or** a column).

## Container props

| Property          | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `display: flex`   | Makes children flex items                      |
| `flex-direction`  | `row` (default) / `column`                     |
| `justify-content` | Alignment along the **main** axis              |
| `align-items`     | Alignment along the **cross** axis             |
| `flex-wrap`       | `nowrap` (default) / `wrap`                     |
| `gap`             | Spacing between items (no margin hacks needed) |

## Item props

| Property      | What it does                                  |
| ------------- | --------------------------------------------- |
| `flex-grow`   | Share of leftover space                       |
| `flex-shrink` | How much it shrinks when space is tight       |
| `flex-basis`  | Starting size before grow/shrink              |
| `flex`        | Shorthand, e.g. `flex: 1` = `1 1 0`           |
| `align-self`  | Override `align-items` for one item           |

## Common recipes

- **Center anything:** `display:flex; justify-content:center; align-items:center`.
- **Equal columns:** each child `flex: 1`.
- **Push one item right:** `margin-left: auto` on it.

## Flex vs Grid

Flex = content-driven, one axis. Grid = layout-driven, two axes. Use Grid for
page/section layout, Flex for component-level rows of items.
