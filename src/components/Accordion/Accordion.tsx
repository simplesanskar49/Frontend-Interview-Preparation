import { useState, type ReactNode } from 'react'
import './Accordion.css'

export type AccordionItem = {
  id: string
  title: string
  content: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  /** Allow more than one panel open at a time. */
  allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id)
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className="accordion__item">
            <button
              className="accordion__header"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span aria-hidden>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="accordion__panel">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
