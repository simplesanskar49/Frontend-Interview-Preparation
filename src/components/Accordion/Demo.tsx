import { Accordion, type AccordionItem } from './Accordion'

const items: AccordionItem[] = [
  { id: '1', title: 'What is React?', content: 'A library for building UIs from components.' },
  { id: '2', title: 'What is JSX?', content: 'A syntax extension that compiles to React.createElement calls.' },
  { id: '3', title: 'What are hooks?', content: 'Functions that let you use state and lifecycle in function components.' },
]

export default function Demo() {
  return (
    <div>
      <h3>Single open (default)</h3>
      <Accordion items={items} />

      <h3 style={{ marginTop: '1.5rem' }}>Allow multiple</h3>
      <Accordion items={items} allowMultiple />
    </div>
  )
}
