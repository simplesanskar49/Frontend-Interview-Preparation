import { useState } from 'react'
import { useDebounce } from './useDebounce'

export default function Demo() {
  const [text, setText] = useState('')
  const debounced = useDebounce(text, 500)

  return (
    <div>
      <input
        placeholder="Type fast…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>
        Live value: <strong>{text || '—'}</strong>
      </p>
      <p>
        Debounced (500ms): <strong>{debounced || '—'}</strong>
      </p>
    </div>
  )
}
