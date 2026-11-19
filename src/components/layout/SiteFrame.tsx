import { useCallback, useState, type ReactNode } from 'react'
import { useTheme, type ThemeMode } from '@astryxdesign/core/theme'
import { AppShell } from '@astryxdesign/core/AppShell'
import { Grid } from '@astryxdesign/core/Grid'
import { Link } from '@astryxdesign/core/Link'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { TopNav, TopNavHeading } from '@astryxdesign/core/TopNav'
import { LucideFacebook, LucideMenu, LucideMoon, LucideSun, LucideX, SimpleIconsX } from '../icons/icons'
import { AppleMenu } from './AppleMenu'
import { NavTabs } from './NavTabs'
import { toHref } from '../../lib/url'

function ThemeToggle({ onTheme }: { onTheme: (mode: ThemeMode) => void }) {
  const { mode } = useTheme()
  const [ready, setReady] = useState(false)
  const on = mode === 'dark'

  return (
    <span className="theme-switch">
      <span className="t-icon-swap" data-state={on ? 'b' : 'a'} aria-hidden="true">
        <span className="t-icon" data-icon="a">
          <LucideSun />
        </span>
        <span className="t-icon" data-icon="b">
          <LucideMoon />
        </span>
      </span>
      <button
        type="button"
        className={ready ? 't-toggle is-init' : 't-toggle'}
        role="switch"
        aria-checked={on}
        aria-label={on ? 'Usar tema claro' : 'Usar tema oscuro'}
        data-on={on ? 'true' : 'false'}
        onClick={() => {
          setReady(true)
          onTheme(on ? 'light' : 'dark')
        }}
      >
        <span className="t-toggle-thumb" />
      </button>
    </span>
  )
}

export function SiteFrame({
  path,
  onNavigate,
  onTheme,
  children,
}: {
  path: string
  onNavigate: (path: string) => void
  onTheme: (mode: ThemeMode) => void
  children: ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuSession, setMenuSession] = useState(0)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <AppShell
      variant="surface"
      height="auto"
      contentPadding={0}
      mobileNav={false}
      topNav={
        <TopNav
          label="AMexIHC"
          heading={
            <TopNavHeading
              logo={<span className="brand-logo" aria-hidden="true" />}
              logoLabel="AMexIHC"
              headingHref={toHref('/')}
            />
          }
          centerContent={<NavTabs path={path} onNavigate={onNavigate} />}
          endContent={
            <span className="nav-end">
            <ThemeToggle onTheme={onTheme} />
            <button
              type="button"
              className="menu-button"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              onClick={() => {
                if (menuOpen) {
                  closeMenu()
                  return
                }
                setMenuSession((value) => value + 1)
                setMenuOpen(true)
              }}
            >
              <span className="t-icon-swap" data-state={menuOpen ? 'b' : 'a'}>
                <span className="t-icon" data-icon="a" aria-hidden="true">
                  <LucideMenu />
                </span>
                <span className="t-icon" data-icon="b" aria-hidden="true">
                  <LucideX />
                </span>
              </span>
            </button>
            </span>
          }
        />
      }
    >
      <AppleMenu key={menuSession} open={menuOpen} path={path} onClose={closeMenu} />
      {children}
      <Section paddingBlock={8} paddingInline={4}>
        <Stack className="measure" direction="vertical" gap={6}>
          <Grid columns={{ minWidth: 200, repeat: 'fit' }} gap={5}>
            <Stack direction="vertical" gap={2}>
              <Text weight="semibold">AMexIHC</Text>
              <Link href={toHref('/')}>Acerca de</Link>
              <Link href={toHref('/mesa-directiva')}>Consejo directivo</Link>
              <Link href={toHref('/nuestras-iniciativas')}>Iniciativas</Link>
            </Stack>
            <Stack direction="vertical" gap={2}>
              <Text weight="semibold">Iniciativas</Text>
              <Link href={toHref('/mexihc')}>Congreso MexIHC</Link>
              <Link href={toHref('/revista-aihc')}>Revista AIHC</Link>
              <Link href="http://www.mexihc.org" isExternalLink>
                mexihc.org
              </Link>
            </Stack>
          </Grid>
          <div className="socials">
            <a className="social" href="https://www.facebook.com/AMexIHC" aria-label="Facebook" target="_blank" rel="noreferrer">
              <LucideFacebook />
            </a>
            <a className="social" href="https://x.com/mexihc" aria-label="X" target="_blank" rel="noreferrer">
              <SimpleIconsX />
            </a>
          </div>
          <Text color="secondary" size="sm">
            Asociación Mexicana de Interacción Humano-Computadora A.C. Constituida el 17 de
            diciembre de 2011 en Soledad de Graciano Sánchez, San Luis Potosí.
          </Text>
        </Stack>
      </Section>
    </AppShell>
  )
}
