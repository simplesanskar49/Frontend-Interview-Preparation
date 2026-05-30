# The Event Loop

How JS runs async code on a single thread.

## Pieces

- **Call stack** — where synchronous frames run.
- **Web APIs / host** — timers, fetch, DOM events run *outside* the engine.
- **Macrotask queue** — `setTimeout`, `setInterval`, I/O, UI events.
- **Microtask queue** — Promise callbacks, `queueMicrotask`, `MutationObserver`.

## The loop

1. Run all synchronous code (drain the call stack).
2. Drain **all** microtasks.
3. Run **one** macrotask.
4. Drain all microtasks again. Repeat.

> Microtasks always run to completion before the next macrotask.

## Classic output question

```js
console.log('A')
setTimeout(() => console.log('B'), 0)
Promise.resolve().then(() => console.log('C'))
console.log('D')
// A, D, C, B
```

`A`/`D` sync → `C` microtask → `B` macrotask.

## Gotchas

- A long microtask chain can starve rendering and timers.
- `await` schedules the continuation as a microtask.
