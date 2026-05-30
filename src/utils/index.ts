/** Converts camelCase / PascalCase to kebab-case, e.g. `sidebarBg` -> `sidebar-bg`. */
export const toKebab = (str: string): string =>
  str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
