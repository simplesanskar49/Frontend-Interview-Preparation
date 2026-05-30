# Reconciliation & Keys

How React decides what DOM to update when state changes.

## The idea

On each render React builds a new virtual tree and **diffs** it against the
previous one, then applies the minimal set of real-DOM mutations.

## Heuristics

- Different element **type** → tear down the old subtree, build new.
- Same type → keep the node, update changed props.
- Lists are matched by **`key`**, not by position.

## Why keys matter

- Stable, unique keys let React match items across renders.
- **Index as key** breaks when the list reorders/inserts/deletes — state can
  attach to the wrong row (e.g. an input's value jumps to another item).
- Use a stable id from the data.

## Talking points

- `key` is not passed as a prop; it's a hint to the reconciler.
- Changing a component's `key` forces a full remount (handy to reset state).
- React 18 fiber: work is interruptible/prioritised, but the diffing model above
  still applies.
