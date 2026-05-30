import { useEffect, useState } from 'react'

/**
 * Returns a debounced copy of `value` that only updates after `delay`ms
 * of no changes. Useful for search inputs, resize handlers, etc.
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id) // cancel on the next change / unmount
  }, [value, delay])

  return debounced
}
