# Star Rating

> **Problem:** Build a 5-star rating widget. Stars fill on hover and lock in on
> click. Make `total` configurable and notify the parent of changes.

## Approach

- Two pieces of state: `hover` (transient) and `selected` (committed).
- `const active = hover || selected` — hover preview overrides selection.
- Render `total` stars with `Array.from({ length: total })`.
- Fill a star when `starValue <= active`.

## Edge cases / follow-ups

- **Controlled vs uncontrolled:** accept `value` + `onChange` (done here).
- **Half stars:** track fractional values and split each star's fill.
- **Keyboard a11y:** arrow keys to change, `role="radiogroup"` semantics.
- **Reset:** clicking the currently selected star could clear it.
- Avoid index-as-key pitfalls — here the list is static so `starValue` is stable.

## Time budget

~15–20 min in a machine-coding round. Get hover + click working first, then
polish a11y and edge cases if time allows.
