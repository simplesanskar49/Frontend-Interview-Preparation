import type { CSSProperties } from 'react'
import { colors } from '../../theme/colors'
import { ThemeProvider, useTheme } from './ThemeContext'

function ThemedCard() {
  const { theme, toggle } = useTheme()

  const styles: CSSProperties = {
    padding: '1.5rem',
    borderRadius: '0.5rem',
    border: `1px solid ${colors.border}`,
    background: theme === 'light' ? colors.lightBg : colors.darkBg,
    color: theme === 'light' ? colors.lightText : colors.darkText,
    transition: 'all 0.2s',
  }

  return (
    <div style={styles}>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <button onClick={toggle}>Toggle theme</button>
    </div>
  )
}

export default function Demo() {
  return (
    <ThemeProvider>
      <ThemedCard />
    </ThemeProvider>
  )
}
