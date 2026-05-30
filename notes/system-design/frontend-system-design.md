# Frontend System Design — Framework

A repeatable structure for FE system-design rounds (e.g. "design a news feed").

## 1. Requirements (5 min)

- **Functional:** core features, must-haves vs nice-to-haves.
- **Non-functional:** performance, offline, a11y, i18n, device/network constraints.
- Clarify scale: how many items, how often updated, real-time?

## 2. High-level architecture

- Client ↔ API (REST/GraphQL) ↔ services.
- Rendering strategy: CSR vs SSR vs SSG vs streaming — justify the choice.
- State: server cache (React Query/SWR) vs client/UI state.

## 3. Data model & API

- Entities and shapes. Pagination: offset vs **cursor** (prefer cursor for feeds).
- Define the key endpoints / GraphQL queries.

## 4. Deep dives (pick what the interviewer cares about)

- **Performance:** code splitting, lazy load, image optimization, virtualization
  for long lists, prefetching, caching (HTTP + in-memory).
- **Rendering long lists:** windowing (react-window) to keep the DOM small.
- **Real-time:** polling vs SSE vs WebSocket — trade-offs.
- **Optimistic updates** + rollback on failure.
- **Accessibility:** semantics, focus management, keyboard nav.

## 5. Trade-offs & wrap-up

State assumptions, call out bottlenecks, mention what you'd monitor
(Core Web Vitals: LCP, INP, CLS).

## Quick checklist

Requirements → Architecture → Data/API → Perf → A11y → Trade-offs.
