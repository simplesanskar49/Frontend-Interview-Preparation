import { useState } from 'react'
import { StarRating } from './StarRating'

export default function Demo() {
  const [rating, setRating] = useState(0)

  return (
    <div>
      <StarRating total={5} value={rating} onChange={setRating} />
      <p>
        You rated: <strong>{rating || '—'}</strong>
      </p>
    </div>
  )
}
