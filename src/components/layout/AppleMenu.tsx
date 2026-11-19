import { useEffect, useEffectEvent, useState } from 'react'
import { createPortal } from 'react-dom'
import { LucideChevronLeft } from '../icons/icons'
import { toHref } from '../../lib/url'

const rootItems = [
  { label: 'Acerca de', href: '/' },
  { label: 'Consejo', href: '/mesa-directiva' },
  { label: 'Iniciativas' },
  { label: 'MexIHC', href: '/mexihc' },
  { label: 'Revista', href: '/revista-aihc' },
] as const

const initiativeLinks = [
  { label: 'Nuestras iniciativas', href: '/nuestras-iniciativas' },
  { label: 'Congreso MexIHC', href: '/mexihc' },
  { label: 'Revista AIHC', href: '/revista-aihc' },
] as const

export function AppleMenu({
  open,
  path,
  onClose,
}: {
  open: boolean
  path: string
  onClose: () => void
}) {
  const [page, setPage] = useState<'1' | '2'>('1')
  const onEscape = useEffectEvent(() => {
    onClose()
  })

  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const body = document.body
    const scrollY = window.scrollY
    const previous = {
      htmlOverflow: html.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    }
    html.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onEscape()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      html.style.overflow = previous.htmlOverflow
      body.style.position = previous.position
      body.style.top = previous.top
      body.style.left = previous.left
      body.style.right = previous.right
      body.style.width = previous.width
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      className="apple-menu t-panel-slide"
      data-open={open ? 'true' : 'false'}
      data-page={page}
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      inert={!open}
    >
      {open &&
        page === '2' &&
        createPortal(
          <button type="button" className="apple-icon apple-back" aria-label="Volver" onClick={() => setPage('1')}>
            <LucideChevronLeft />
          </button>,
          document.querySelector('[role="banner"]') ?? document.body,
        )}
      <div className="apple-menu-pages t-page-slide" data-page={page}>
        <section className="t-page apple-menu-list" data-page-id="1">
          {rootItems.map((item) =>
            'href' in item ? (
              <a
                key={item.href}
                className="apple-link"
                href={toHref(item.href)}
                aria-current={path === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : (
              <button key={item.label} type="button" className="apple-link" onClick={() => setPage('2')}>
                {item.label}
              </button>
            ),
          )}
        </section>
        <section className="t-page apple-menu-list" data-page-id="2">
          {initiativeLinks.map((item) => (
            <a key={item.href} className="apple-link" href={toHref(item.href)} aria-current={path === item.href ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
        </section>
      </div>
    </div>
  )
}
