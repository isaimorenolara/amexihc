import { useCallback, useState, type ReactNode } from 'react'
import { AppShell } from '@astryxdesign/core/AppShell'
import { Grid } from '@astryxdesign/core/Grid'
import { Link } from '@astryxdesign/core/Link'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { TopNav, TopNavHeading } from '@astryxdesign/core/TopNav'
import { LucideFacebook, LucideMenu, LucideX, SimpleIconsX } from '../icons/icons'
import { AppleMenu } from './AppleMenu'
import { NavTabs } from './NavTabs'

export function SiteFrame({
  path,
  onNavigate,
  children,
}: {
  path: string
  onNavigate: (path: string) => void
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
              logo={
                <img
                  className="brand-logo"
                  src="/brand/logo.svg"
                  alt=""
                  width={120}
                  height={28}
                  draggable={false}
                />
              }
              logoLabel="AMexIHC"
              headingHref="/"
            />
          }
          centerContent={<NavTabs path={path} onNavigate={onNavigate} />}
          endContent={
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
              <Link href="/">Acerca de</Link>
              <Link href="/mesa-directiva">Consejo directivo</Link>
              <Link href="/nuestras-iniciativas">Iniciativas</Link>
            </Stack>
            <Stack direction="vertical" gap={2}>
              <Text weight="semibold">Iniciativas</Text>
              <Link href="/mexihc">Congreso MexIHC</Link>
              <Link href="/revista-aihc">Revista AIHC</Link>
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
