import { Button } from '@astryxdesign/core/Button'
import { Heading } from '@astryxdesign/core/Heading'
import { Icon } from '@astryxdesign/core/Icon'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { currentBoard } from '../content/site'
import { LucideBookOpen, LucideCalendar, LucideGlobe, LucideUsers } from '../components/icons/icons'
import { MemberList } from '../components/layout/MemberList'
import { LearnMore } from '../components/motion/LearnMore'
import { Reveal } from '../components/motion/Reveal'
import { toHref } from '../lib/url'

export function HomePage() {
  return (
    <>
      <Section paddingBlock={10} paddingInline={4}>
        <div className="hero-copy">
          <Reveal>
            <Heading className="t-stagger-line t-stagger-line--1" level={1} type="display-1">
              La comunidad de IHC en México.
            </Heading>
            <Text className="t-stagger-line t-stagger-line--2" color="secondary" size="lg" as="p">
              La Asociación Mexicana de Interacción Humano-Computadora promueve la investigación,
              la formación y el desarrollo de tecnologías centradas en las personas.
            </Text>
            <Stack
              className="t-stagger-line t-stagger-line--3 hero-actions"
              direction="horizontal"
              gap={5}
              wrap="wrap"
              hAlign="center"
            >
              <Button label="Congreso MexIHC" variant="primary" href={toHref('/mexihc')} />
              <LearnMore href={toHref('/nuestras-iniciativas')}>Ver iniciativas</LearnMore>
            </Stack>
          </Reveal>
        </div>
      </Section>

      <Section variant="muted" paddingBlock={10} paddingInline={4}>
        <Stack className="measure band" direction="vertical">
          <Icon icon={LucideCalendar} size="md" color="secondary" label="Congreso" />
          <Heading level={2} type="display-2">
            MexIHC
          </Heading>
          <Text color="secondary" as="p">
            La Conferencia Internacional Mexicana de Interacción Humano-Computadora es el foro
            bienal donde la comunidad presenta artículos arbitrados, trabajos en progreso, talleres
            y conferencias magistrales.
          </Text>
          <LearnMore href={toHref('/mexihc')}>Conocer el congreso</LearnMore>
        </Stack>
      </Section>

      <Section paddingBlock={10} paddingInline={4}>
        <Stack className="measure band" direction="vertical">
          <Icon icon={LucideBookOpen} size="md" color="secondary" label="Revista" />
          <Heading level={2} type="display-2">
            Avances en Interacción Humano-Computadora
          </Heading>
          <Text color="secondary" as="p">
            Revista científica de acceso abierto, publicada cada año desde 2016. ISSN electrónico
            2594-2352.
          </Text>
          <LearnMore href={toHref('/revista-aihc')}>Leer sobre la revista</LearnMore>
        </Stack>
      </Section>

      <Section variant="muted" paddingBlock={10} paddingInline={4}>
        <Stack className="measure band" direction="vertical">
          <Icon icon={LucideGlobe} size="md" color="secondary" label="Vinculación internacional" />
          <Heading level={2} type="display-2">
            CHI-Mexico, capítulo de ACM SIGCHI.
          </Heading>
          <Text color="secondary" as="p">
            AMexIHC se vincula con la Association for Computing Machinery a través del capítulo
            CHI-Mexico de ACM SIGCHI, y conecta así a la comunidad nacional con la red
            internacional de interacción humano-computadora.
          </Text>
        </Stack>
      </Section>

      <Section paddingBlock={10} paddingInline={4}>
        <Stack className="measure band" direction="vertical">
          <Icon icon={LucideUsers} size="md" color="secondary" label="Consejo" />
          <Heading level={2} type="display-2">
            Consejo directivo
          </Heading>
          <Text color="secondary" as="p">
            El consejo en funciones reúne a investigadores de la Universidad de Colima, el
            Instituto Tecnológico de Sonora y Dalhousie University.
          </Text>
          <MemberList members={currentBoard.members} />
          <LearnMore href={toHref('/mesa-directiva')}>Ver las mesas anteriores</LearnMore>
        </Stack>
      </Section>
    </>
  )
}
