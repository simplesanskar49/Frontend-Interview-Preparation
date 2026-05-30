type Listener = (...args: unknown[]) => void

/**
 * A minimal pub/sub EventEmitter — a very common LLD / machine-coding ask.
 */
export class EventEmitter {
  private listeners = new Map<string, Set<Listener>>()

  /** Subscribe. Returns an unsubscribe function. */
  on(event: string, fn: Listener): () => void {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set())
    this.listeners.get(event)!.add(fn)
    return () => this.off(event, fn)
  }

  /** Subscribe for a single invocation. */
  once(event: string, fn: Listener): () => void {
    const wrapper: Listener = (...args) => {
      this.off(event, wrapper)
      fn(...args)
    }
    return this.on(event, wrapper)
  }

  off(event: string, fn: Listener): void {
    this.listeners.get(event)?.delete(fn)
  }

  emit(event: string, ...args: unknown[]): void {
    // Copy to avoid mutation issues if a listener unsubscribes mid-emit.
    this.listeners.get(event)?.forEach((fn) => fn(...args))
  }
}
