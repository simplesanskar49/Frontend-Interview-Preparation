import { useState } from 'react'
import { colors } from '../../theme/colors'

type StarRatingProps = {
  total?: number
  value?: number
  onChange?: (value: number) => void
}

export function StarRating({ total = 5, value = 0, onChange }: StarRatingProps) {
  const [hover, setHover] = useState(0)
  const [selected, setSelected] = useState(value)

  // Hover preview wins over the committed selection.
  const active = hover || selected

  return (
    <div style={{ display: 'flex', gap: '0.25rem', fontSize: '2rem' }}>
      {Array.from({ length: total }, (_, i) => {
        const starValue = i + 1
        const isActive = starValue <= active
        return (
          <span
            key={starValue}
            role="button"
            aria-label={`Rate ${starValue} of ${total}`}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => {
              setSelected(starValue)
              onChange?.(starValue)
            }}
            style={{
              cursor: 'pointer',
              color: isActive ? colors.starActive : colors.starInactive,
            }}
          >
            ★
          </span>
        )
      })}
    </div>
  )
}
