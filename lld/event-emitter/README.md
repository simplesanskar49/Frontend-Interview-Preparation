# EventEmitter (Pub/Sub)

A classic LLD problem. Implement `on`, `off`, `once`, and `emit`.

## Design choices

- `Map<string, Set<Listener>>` — `Set` gives O(1) add/remove and dedups.
- `on` returns an **unsubscribe** function (modern ergonomics).
- `once` wraps the handler so it removes itself before firing.
- `emit` iterates a snapshot conceptually — guard against listeners that
  mutate the set during emit (a `Set.forEach` tolerates deletes of the current
  item, but copy to an array if you allow arbitrary mutation).

## Follow-ups

- Generic event-name → payload typing (`EventEmitter<EventMap>`).
- `removeAllListeners(event?)`.
- Error isolation: wrap each listener in try/catch so one throw doesn't stop the rest.
- Wildcard / namespaced events.
