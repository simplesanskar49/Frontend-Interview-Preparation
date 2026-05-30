import { Suspense, useState } from 'react'
import { registry, type Entry } from './registry'
import './App.css'

export default function App() {
  const [selected, setSelected] = useState<Entry | null>(
    registry[0]?.entries[0] ?? null,
  )

  const Demo = selected?.Demo

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="sidebar__title">FE Prep</h1>
        {registry.map((cat) => (
          <div key={cat.key} className="sidebar__group">
            <h2 className="sidebar__heading">{cat.label}</h2>
            <ul className="sidebar__list">
              {cat.entries.map((entry) => (
                <li key={entry.slug}>
                  <button
                    className={
                      'sidebar__item' +
                      (selected?.slug === entry.slug
                        ? ' sidebar__item--active'
                        : '')
                    }
                    onClick={() => setSelected(entry)}
                  >
                    {entry.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      <main className="content">
        {selected && Demo ? (
          <>
            <header className="content__header">
              <h2>{selected.name}</h2>
              <p className="content__desc">{selected.description}</p>
            </header>
            <section className="content__demo">
              <Suspense fallback={<p>Loading…</p>}>
                <Demo />
              </Suspense>
            </section>
          </>
        ) : (
          <p>Select an item from the sidebar.</p>
        )}
      </main>
    </div>
  )
}
