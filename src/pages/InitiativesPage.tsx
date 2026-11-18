import { Heading } from '@astryxdesign/core/Heading'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { LearnMore } from '../components/motion/LearnMore'
import { Reveal } from '../components/motion/Reveal'

export function InitiativesPage() {
  return (
    <>
      <Section paddingBlock={8} paddingInline={4}>
        <Stack className="measure hero-copy" direction="vertical" gap={4}>
          <Reveal>
            <Heading className="t-stagger-line t-stagger-line--1" level={1} type="display-2">
              Nuestras iniciativas
            </Heading>
            <Text className="t-stagger-line t-stagger-line--2" color="secondary" as="p">
              La Asociación impulsa dos iniciativas que articulan el desarrollo académico de la
              interacción humano-computadora en México: la revista Avances en Interacción
              Humano-Computadora y el Congreso Mexicano de Interacción Humano-Computadora.
            </Text>
          </Reveal>
        </Stack>
      </Section>
      <Section variant="muted" paddingBlock={8} paddingInline={4}>
        <Stack className="measure" direction="vertical" gap={4}>
          <Heading level={2}>El congreso abre la conversación.</Heading>
          <Text as="p">
            MexIHC es el espacio de discusión y encuentro. La revista conserva, ordena y difunde
            el conocimiento que ahí se produce. Juntas forman un ecosistema académico que fortalece
            la identidad de la IHC en México y la conecta con la comunidad internacional, en
            coordinación con el capítulo CHI México de ACM SIGCHI.
          </Text>
          <LearnMore href="/mexihc">Ir al congreso</LearnMore>
        </Stack>
      </Section>
      <Section paddingBlock={8} paddingInline={4}>
        <Stack className="measure" direction="vertical" gap={4}>
          <Heading level={2}>La revista le da permanencia.</Heading>
          <Text as="p">
            A través de la revista y de MexIHC, AMexIHC promueve estándares científicos, impulsa la
            innovación tecnológica centrada en las personas y sostiene un espacio de colaboración
            que posiciona a México en la interacción humano-computadora.
          </Text>
          <LearnMore href="/revista-aihc">Ir a la revista</LearnMore>
        </Stack>
      </Section>
    </>
  )
}
