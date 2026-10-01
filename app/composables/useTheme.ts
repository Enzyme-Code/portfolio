export function useTheme() {
  const toggle = () => {
    if (!import.meta.client) return

    const isDark = document.documentElement.classList.toggle('dark')

    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }

  return { toggle }
}
