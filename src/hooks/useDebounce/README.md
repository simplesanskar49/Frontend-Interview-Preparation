# useDebounce

Delays updating a value until the user stops changing it for `delay` ms.

## Usage

```tsx
const debouncedSearch = useDebounce(search, 400)
useEffect(() => { fetchResults(debouncedSearch) }, [debouncedSearch])
```

## Key points for interviews

- The cleanup function (`clearTimeout`) is what makes it work — it cancels the
  previous pending timer every time `value` changes.
- Effect deps are `[value, delay]`.
- Compare with **throttle** (fires at most once per interval) vs **debounce**
  (fires only after quiet period).

## Follow-ups you might get

- Add a `useDebouncedCallback` variant that debounces a function, not a value.
- Make it cancel on unmount (already handled by the cleanup).
