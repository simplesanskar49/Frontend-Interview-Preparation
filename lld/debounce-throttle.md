# Debounce vs Throttle

Two rate-limiting techniques. Common LLD ask: "implement `debounce`/`throttle`."

## Debounce

Run the function only after `wait` ms of **no** calls. Resets the timer on each call.

```ts
function debounce<T extends (...a: any[]) => void>(fn: T, wait = 300) {
  let timer: ReturnType<typeof setTimeout> | undefined
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), wait)
  }
}
```

Use for: search-as-you-type, resize/scroll settle, autosave.

## Throttle

Run the function **at most once** per `wait` ms, no matter how often it's called.

```ts
function throttle<T extends (...a: any[]) => void>(fn: T, wait = 300) {
  let last = 0
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - last >= wait) {
      last = now
      fn(...args)
    }
  }
}
```

Use for: scroll position tracking, drag handlers, rate-limited analytics.

## Mental model

- **Debounce** = "wait until they stop."
- **Throttle** = "fire on a fixed cadence."

## Follow-ups

- Leading vs trailing edge invocation.
- `cancel()` / `flush()` methods.
- Throttle via `setTimeout` instead of timestamp (to guarantee a trailing call).
