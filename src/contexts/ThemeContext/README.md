# ThemeContext

Classic Context API pattern: a provider holds state, a custom hook exposes it.

## Pattern

1. `createContext<Value | null>(null)` — `null` default detects misuse.
2. `ThemeProvider` owns the state and passes `{ theme, toggle }` down.
3. `useTheme()` wraps `useContext` and throws if used outside the provider —
   consumers never see the raw context object.

## Key points for interviews

- Why a custom hook instead of exporting the context? Encapsulation + a clear
  error message + a single import.
- **Perf gotcha:** every consumer re-renders when the context value changes.
  For large trees, split state/dispatch into two contexts or memoize the value.
- `value={{ theme, toggle }}` creates a new object each render — fine here, but
  wrap in `useMemo` if the provider re-renders often.
