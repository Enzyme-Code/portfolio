export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  const refresh = () => {
    if (!import.meta.client) return

    observer?.disconnect()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer!.observe(el))
  }

  return { refresh }
}
