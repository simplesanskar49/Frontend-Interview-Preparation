# Closures

A closure is a function bundled with references to its surrounding (lexical)
scope — it "remembers" variables from where it was defined, not where it's called.

## Why it matters

- Data privacy (module pattern, factory functions).
- Stateful callbacks (counters, memoization, once).
- The backbone of `debounce`/`throttle`, currying, and React hooks.

## Classic loop bug

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0) // 3, 3, 3
}
```

`var` is function-scoped → all callbacks close over the **same** `i`.
Fix: use `let` (block-scoped, fresh binding per iteration) → `0, 1, 2`.

## Interview talking points

- Each closure keeps its captured variable alive (can cause memory leaks if
  large objects are captured unnecessarily).
- React's "stale closure" problem: an effect/callback captures an old value —
  fix with deps array or functional state updates.
