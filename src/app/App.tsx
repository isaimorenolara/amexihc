import { useEffect, useState } from 'react'
import { Theme, type ThemeMode } from '@astryxdesign/core/theme'
import { Heading } from '@astryxdesign/core/Heading'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { SiteFrame } from '../components/layout/SiteFrame'
import { LearnMore } from '../components/motion/LearnMore'
import { BoardPage } from '../pages/BoardPage'
import { HomePage } from '../pages/HomePage'
import { InitiativesPage } from '../pages/InitiativesPage'
import { JournalPage } from '../pages/JournalPage'
import { MexihcPage } from '../pages/MexihcPage'
import { appleTheme } from '../theme/apple'
import { fromLocation, siteOrigin, toHref } from '../lib/url'

function readThemeMode(): ThemeMode {
  try {
    const value = localStorage.getItem('theme')
    if (value === 'light' || value === 'dark') return value
  } catch {
    /* private mode */
  }
  return 'system'
}

const pages = [
  {
    path: '/',
    title: 'AMexIHC · Asociación Mexicana de Interacción Humano-Computadora',
    description:
      'Asociación Mexicana de Interacción Humano-Computadora. Promueve la investigación, la formación y el desarrollo de tecnologías centradas en las personas. Congreso MexIHC y revista AIHC.',
    page: HomePage,
  },
  {
    path: '/mesa-directiva',
    title: 'Consejo directivo · AMexIHC',
    description:
      'Consejo directivo de AMexIHC: presidencia, secretaría, tesorería, comisaría y vocalía. Mesas de 2011, 2013–2021 y la actual.',
    page: BoardPage,
  },
  {
    path: '/nuestras-iniciativas',
    title: 'Iniciativas · AMexIHC',
    description:
      'Iniciativas de AMexIHC: el congreso MexIHC, la revista AIHC y la vinculación con la comunidad de interacción humano-computadora.',
    page: InitiativesPage,
  },
  {
    path: '/mexihc',
    title: 'MexIHC · AMexIHC',
    description:
      'Conferencia Internacional Mexicana de Interacción Humano-Computadora, el foro bienal de la comunidad.',
    page: MexihcPage,
  },
  {
    path: '/revista-aihc',
    title: 'Revista AIHC · AMexIHC',
    description:
      'Avances en Interacción Humano-Computadora, revista científica de acceso abierto. ISSN 2594-2352, publicada desde 2016.',
    page: JournalPage,
  },
] as const

function normalize(pathname: string) {
  return fromLocation(pathname)
}

export function App() {
  const [mode, setMode] = useState<ThemeMode>(readThemeMode)
  const [path, setPath] = useState(() => normalize(window.location.pathname))
  const match = pages.find((item) => item.path === path)

  useEffect(() => {
    try {
      if (mode === 'system') localStorage.removeItem('theme')
      else localStorage.setItem('theme', mode)
    } catch {
      /* private mode */
    }
  }, [mode])

  useEffect(() => {
    const sync = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  useEffect(() => {
    const title = match?.title ?? 'AMexIHC'
    const description =
      match?.description ??
      'Asociación Mexicana de Interacción Humano-Computadora.'
    const url = `${siteOrigin}${path === '/' ? '/' : path}`
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [match, path])

  const Page = match?.page

  return (
    <Theme theme={appleTheme} mode={mode}>
    <SiteFrame path={path} onNavigate={setPath} onTheme={setMode}>
      <div id="contenido">
          {Page ? (
            <Page />
          ) : (
            <Section paddingBlock={8} paddingInline={4}>
              <Stack className="measure" direction="vertical" gap={3}>
                <Heading level={1}>Esta página no existe.</Heading>
                <Text color="secondary">La dirección no corresponde a una sección de AMexIHC.</Text>
                <LearnMore href={toHref('/')}>Volver al inicio</LearnMore>
              </Stack>
            </Section>
          )}
        </div>
      </SiteFrame>
    </Theme>
  )
}
