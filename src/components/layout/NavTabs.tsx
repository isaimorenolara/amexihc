import { useEffect, useLayoutEffect, useRef } from 'react'
import { nav } from '../../content/site'

export function NavTabs({
  path,
  onNavigate,
}: {
  path: string
  onNavigate: (path: string) => void
}) {
  const pillRef = useRef<HTMLSpanElement>(null)
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const hasPositioned = useRef(false)
  const index = nav.findIndex((item) => item.href === path)

  const moveTo = (tab: HTMLAnchorElement, animate: boolean) => {
    const pill = pillRef.current
    if (!pill) return
    if (!animate) {
      const prev = pill.style.transition
      pill.style.transition = 'none'
      pill.style.transform = `translateX(${tab.offsetLeft}px)`
      pill.style.width = `${tab.offsetWidth}px`
      void pill.offsetWidth
      pill.style.transition = prev
    } else {
      pill.style.transform = `translateX(${tab.offsetLeft}px)`
      pill.style.width = `${tab.offsetWidth}px`
    }
  }

  useLayoutEffect(() => {
    const tab = tabRefs.current[index]
    if (!tab) return
    moveTo(tab, hasPositioned.current)
    hasPositioned.current = true
  }, [index])

  useEffect(() => {
    const onResize = () => {
      const tab = tabRefs.current[index]
      if (tab) moveTo(tab, false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [index])

  return (
    <div className="t-tabs desktop-nav" role="tablist" aria-label="Secciones">
      <span className="t-tabs-pill" ref={pillRef} aria-hidden="true" />
      {nav.map((item, itemIndex) => (
        <a
          key={item.href}
          className="t-tab"
          role="tab"
          href={item.href}
          aria-selected={itemIndex === index}
          ref={(node) => {
            tabRefs.current[itemIndex] = node
          }}
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
            event.preventDefault()
            if (item.href === path) return
            window.history.pushState(null, '', item.href)
            window.scrollTo(0, 0)
            onNavigate(item.href)
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
